"use client";

import { useEffect, useRef, type RefObject } from "react";
import type MatterNS from "matter-js";

/*
  A tiny DOM <-> matter.js bridge.

  Inside the board element:
    [data-phys]      a movable body (its CSS left/top/rotate is the starting spot)
    [data-ghost]     on a [data-phys]: other items pass over it (a drop target)
    [data-obstacle]  a static body measured from its box (windows, text blocks)

  Everything is seen from above, like things lying on a desk: no gravity, air
  friction makes thrown items slide to a stop. Grab an item and it follows the
  pointer on a spring, so a flick throws it and grabbing a corner spins it.
  A click that didn't move still reaches the element as a normal click.
*/

export interface BoardOptions {
  /** Keeps items out from under fixed UI (the nav), in px from each edge. */
  inset?: { top?: number; right?: number; bottom?: number; left?: number };
  /** 0 = ice, 0.2 = carpet. */
  frictionAir?: number;
  restitution?: number;
  /** Photos on a table can spin; desktop icons stay upright. */
  spin?: boolean;
  /** Icons bump into each other; photos on a table slide over one another instead. */
  collide?: boolean;
  /** Drag spring stiffness: lower feels heavier and swings more. */
  stiffness?: number;
  /** Items drop onto the board one by one the first time it scrolls into view. */
  dropIn?: boolean;
}

export interface BoardControls {
  /** Gives one item a shove, in px per frame. */
  fling(el: Element, velocity: { x: number; y: number }): void;
}

interface Item {
  el: HTMLElement;
  body: MatterNS.Body;
  w: number;
  h: number;
}

const STEP = 1000 / 60;
// Collision categories: items hit everything; ghosts and walls only hit walls.
const ITEM = 0x1;
const GHOST = 0x2;
const WALL = 0x4;
const MAX_SPEED = 38;

export function usePhysicsBoard(ref: RefObject<HTMLElement | null>, options: BoardOptions = {}) {
  const controls = useRef<BoardControls | null>(null);
  const opts = useRef(options);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    let stop: (() => void) | null = null;
    let cancelled = false;

    // Rebuild from the CSS layout whenever a breakpoint flips, since phones
    // and mid-size screens show fewer icons in different spots.
    const queries = ["(min-width: 768px)", "(min-width: 1180px)"].map((q) => window.matchMedia(q));
    const boot = () => {
      stop?.();
      stop = null;
      import("matter-js").then(({ default: Matter }) => {
        if (cancelled) return;
        stop = start(Matter, root, opts.current, controls);
      });
    };
    boot();
    for (const mq of queries) mq.addEventListener("change", boot);
    return () => {
      cancelled = true;
      for (const mq of queries) mq.removeEventListener("change", boot);
      stop?.();
    };
  }, [ref]);

  return controls;
}

function start(
  Matter: typeof MatterNS,
  root: HTMLElement,
  o: BoardOptions,
  controls: RefObject<BoardControls | null>,
): () => void {
  const { Engine, Bodies, Body, Composite, Constraint, Events, Sleeping } = Matter;
  const frictionAir = o.frictionAir ?? 0.08;
  const restitution = o.restitution ?? 0.5;
  const stiffness = o.stiffness ?? 0.2;
  const inset = { top: 0, right: 0, bottom: 0, left: 0, ...o.inset };
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const engine = Engine.create({ enableSleeping: true, gravity: { x: 0, y: 0 } });
  const world = engine.world;

  let W = root.clientWidth;
  let H = root.clientHeight;

  // Screen boxes include CSS transforms; a window opening with a zoom would
  // otherwise skew every measurement, so divide its scale back out.
  const scaleOf = (box: DOMRect) => box.width / (root.offsetWidth || box.width) || 1;

  // --- Bodies from the DOM -------------------------------------------------
  const rootBox = root.getBoundingClientRect();
  const k0 = scaleOf(rootBox);
  const items: Item[] = [];
  const byEl = new Map<Element, Item>();
  let z = 10;

  for (const el of root.querySelectorAll<HTMLElement>("[data-phys]")) {
    if (el.offsetParent === null) continue; // hidden at this breakpoint
    const box = el.getBoundingClientRect();
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const x = (box.left - rootBox.left + box.width / 2) / k0;
    const y = (box.top - rootBox.top + box.height / 2) / k0;
    const angle = (parseFloat(getComputedStyle(el).rotate) || 0) * (Math.PI / 180);

    const body = Bodies.rectangle(x, y, w, h, {
      angle,
      frictionAir,
      restitution,
      friction: 0.3,
      density: 0.002,
      chamfer: { radius: Math.min(10, w / 6) },
      collisionFilter: {
        // Same negative group = never collide with each other, only with walls and obstacles.
        group: o.collide === false ? -1 : 0,
        category: "ghost" in el.dataset ? GHOST : ITEM,
        mask: "ghost" in el.dataset ? WALL : ITEM | GHOST | WALL,
      },
    });
    if (!o.spin) Body.setInertia(body, Infinity);

    // Hand the element over from CSS positioning to physics.
    el.style.left = "0px";
    el.style.top = "0px";
    el.style.translate = "none";
    el.style.rotate = "none";
    const item = { el, body, w, h };
    items.push(item);
    byEl.set(el, item);
  }
  Composite.add(world, items.map((i) => i.body));

  let fixed: MatterNS.Body[] = [];
  const buildStatics = () => {
    Composite.remove(world, fixed);
    const t = 600;
    const { top, right, bottom, left } = inset;
    fixed = [
      Bodies.rectangle(W / 2, top - t / 2, W + t * 2, t, { isStatic: true }),
      Bodies.rectangle(W / 2, H - bottom + t / 2, W + t * 2, t, { isStatic: true }),
      Bodies.rectangle(left - t / 2, H / 2, t, H + t * 2, { isStatic: true }),
      Bodies.rectangle(W - right + t / 2, H / 2, t, H + t * 2, { isStatic: true }),
    ];
    const rb = root.getBoundingClientRect();
    const k = scaleOf(rb);
    for (const el of root.querySelectorAll<HTMLElement>("[data-obstacle]")) {
      if (el.offsetParent === null) continue;
      const b = el.getBoundingClientRect();
      fixed.push(
        Bodies.rectangle((b.left - rb.left + b.width / 2) / k, (b.top - rb.top + b.height / 2) / k, b.width / k, b.height / k, {
          isStatic: true,
          chamfer: { radius: 12 },
        }),
      );
    }
    for (const b of fixed) {
      b.restitution = restitution;
      b.collisionFilter.category = WALL;
    }
    Composite.add(world, fixed);
  };
  buildStatics();

  const paint = () => {
    for (const { el, body, w, h } of items) {
      el.style.transform = `translate3d(${body.position.x - w / 2}px, ${body.position.y - h / 2}px, 0) rotate(${body.angle}rad)`;
    }
  };
  paint();

  Events.on(engine, "beforeUpdate", () => {
    for (const { body } of items) {
      const { x, y } = body.velocity;
      const speed = Math.hypot(x, y);
      if (speed > MAX_SPEED) Body.setVelocity(body, { x: (x / speed) * MAX_SPEED, y: (y / speed) * MAX_SPEED });
    }
  });

  // --- Loop (only while the board is on screen) -----------------------------
  let raf = 0;
  let visible = false;
  let last = 0;
  let acc = 0;
  const frame = (now: number) => {
    raf = requestAnimationFrame(frame);
    acc += Math.min(now - (last || now), 100);
    last = now;
    let steps = 0;
    while (acc >= STEP && steps < 4) {
      Engine.update(engine, STEP);
      acc -= STEP;
      steps++;
    }
    if (steps && items.some((i) => !i.body.isSleeping)) paint();
  };
  const run = () => {
    if (!raf) {
      last = 0;
      raf = requestAnimationFrame(frame);
    }
  };
  const pause = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };

  // --- Drop-in ---------------------------------------------------------------
  let dropped = !o.dropIn || reduceMotion;
  if (!dropped) root.dataset.drop = "waiting";
  const drop = () => {
    dropped = true;
    root.dataset.drop = "landing";
    items.forEach((item, i) => {
      item.el.style.setProperty("--drop-delay", `${i * 90}ms`);
      window.setTimeout(() => {
        // A little skid as each item lands.
        Sleeping.set(item.body, false);
        Body.setVelocity(item.body, { x: (Math.random() - 0.5) * 6, y: (Math.random() - 0.5) * 6 });
        if (o.spin) Body.setAngularVelocity(item.body, (Math.random() - 0.5) * 0.04);
      }, i * 90 + 280);
    });
  };

  const io = new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        run();
        if (!dropped) drop();
      } else pause();
    },
    { threshold: 0.2 },
  );
  io.observe(root);

  // --- Dragging --------------------------------------------------------------
  let drag: { item: Item; c: MatterNS.Constraint; id: number; x0: number; y0: number; moved: boolean } | null = null;
  let swallowClick = false;

  const local = (e: PointerEvent) => {
    const r = root.getBoundingClientRect();
    const k = scaleOf(r);
    return { x: (e.clientX - r.left) / k, y: (e.clientY - r.top) / k };
  };

  const onDown = (e: PointerEvent) => {
    swallowClick = false;
    if (e.button !== 0 || drag) return;
    const el = (e.target as Element).closest("[data-phys]");
    const item = el && byEl.get(el);
    if (!item) return;
    // Capture first: it throws if the pointer is already gone, and a spring
    // left behind would pin the item in place.
    try {
      item.el.setPointerCapture(e.pointerId);
    } catch {
      return;
    }
    const p = local(e);
    const c = Constraint.create({
      pointA: p,
      bodyB: item.body,
      pointB: { x: p.x - item.body.position.x, y: p.y - item.body.position.y },
      stiffness,
      damping: 0.1,
      length: 0,
    });
    Composite.add(world, c);
    Sleeping.set(item.body, false);
    item.el.style.zIndex = String(++z);
    root.dataset.dragging = "true";
    drag = { item, c, id: e.pointerId, x0: p.x, y0: p.y, moved: false };
    run();
  };

  const onMove = (e: PointerEvent) => {
    if (!drag || e.pointerId !== drag.id) return;
    const p = local(e);
    drag.c.pointA = p;
    if (!drag.moved && Math.hypot(p.x - drag.x0, p.y - drag.y0) > 6) {
      drag.moved = true;
      drag.item.el.dataset.dragged = "true";
    }
  };

  const onUp = (e: PointerEvent) => {
    if (!drag || e.pointerId !== drag.id) return;
    Composite.remove(world, drag.c);
    swallowClick = drag.moved;
    delete drag.item.el.dataset.dragged;
    delete root.dataset.dragging;
    root.dispatchEvent(new CustomEvent("board:release", { detail: { el: drag.item.el, moved: drag.moved } }));
    drag = null;
  };

  // A drag ends in a click on the same element; that click isn't an "open".
  const onClick = (e: MouseEvent) => {
    if (swallowClick) {
      e.preventDefault();
      e.stopPropagation();
      swallowClick = false;
    }
  };

  root.addEventListener("pointerdown", onDown);
  root.addEventListener("pointermove", onMove);
  root.addEventListener("pointerup", onUp);
  root.addEventListener("pointercancel", onUp);
  root.addEventListener("click", onClick, true);

  // --- Resize: scale positions with the board, then rebuild the walls --------
  // Obstacles are watched too: a window can grow once its web fonts load.
  const ro = new ResizeObserver(() => {
    const w = root.clientWidth;
    const h = root.clientHeight;
    if (!w || !h) return; // hidden (say, a minimized window): keep everything where it was
    if (w !== W || h !== H) {
      for (const { body } of items) Body.setPosition(body, { x: (body.position.x * w) / W, y: (body.position.y * h) / H });
      W = w;
      H = h;
    }
    buildStatics();
    for (const { body } of items) Sleeping.set(body, false);
    paint();
    if (visible) run();
  });
  ro.observe(root);
  for (const el of root.querySelectorAll("[data-obstacle]")) ro.observe(el);

  controls.current = {
    fling(el, velocity) {
      const item = byEl.get(el);
      if (!item) return;
      Sleeping.set(item.body, false);
      Body.setVelocity(item.body, velocity);
      if (o.spin) Body.setAngularVelocity(item.body, (Math.random() - 0.5) * 0.2);
      run();
    },
  };

  return () => {
    pause();
    io.disconnect();
    ro.disconnect();
    root.removeEventListener("pointerdown", onDown);
    root.removeEventListener("pointermove", onMove);
    root.removeEventListener("pointerup", onUp);
    root.removeEventListener("pointercancel", onUp);
    root.removeEventListener("click", onClick, true);
    delete root.dataset.drop;
    delete root.dataset.dragging;
    for (const { el } of items) {
      for (const prop of ["left", "top", "translate", "rotate", "transform", "z-index"]) el.style.removeProperty(prop);
    }
    Engine.clear(engine);
    controls.current = null;
  };
}
