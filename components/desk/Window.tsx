"use client";

import { useRef, type ReactNode, type PointerEvent as ReactPointerEvent } from "react";

/*
  Retro window chrome: pinstriped title bar, window controls, soft paper body.
  Pass `onDragBy` to make the title bar draggable (the parent owns position).
  Minimize and maximize only appear when their handlers are passed (the
  desktop version, which has a taskbar to minimize to). On the desktop
  version's Windows look, CSS moves the controls to the right as ─ □ ✕.
*/
export default function Window({
  title,
  children,
  onClose,
  onMinimize,
  onMaximize,
  maximized = false,
  onDragBy,
  className = "",
  bodyClassName = "",
  titleId,
}: {
  title: string;
  children: ReactNode;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  maximized?: boolean;
  onDragBy?: (dx: number, dy: number) => void;
  className?: string;
  bodyClassName?: string;
  titleId?: string;
}) {
  const last = useRef<{ x: number; y: number; id: number } | null>(null);

  const down = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!onDragBy || e.button !== 0 || (e.target as Element).closest("button")) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    last.current = { x: e.clientX, y: e.clientY, id: e.pointerId };
  };
  const move = (e: ReactPointerEvent<HTMLDivElement>) => {
    const l = last.current;
    if (!l || l.id !== e.pointerId) return;
    onDragBy?.(e.clientX - l.x, e.clientY - l.y);
    last.current = { ...l, x: e.clientX, y: e.clientY };
  };
  const up = () => {
    last.current = null;
  };

  return (
    <div className={`win ${className}`}>
      <div
        className="win-bar"
        data-draggable={onDragBy ? "true" : undefined}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
        onDoubleClick={(e) => {
          if (onMaximize && !(e.target as Element).closest("button")) onMaximize();
        }}
      >
        <span className="win-controls">
          {onClose ? (
            <button type="button" className="win-close" onClick={onClose} aria-label={`Close ${title}`} />
          ) : (
            <span className="win-close" aria-hidden="true" />
          )}
          {onMinimize && <button type="button" className="win-min" onClick={onMinimize} aria-label={`Minimize ${title}`} />}
          {onMaximize && (
            <button
              type="button"
              className="win-max"
              onClick={onMaximize}
              aria-label={`${maximized ? "Restore" : "Maximize"} ${title}`}
              aria-pressed={maximized}
            />
          )}
        </span>
        <span className="win-title" id={titleId}>
          {title}
        </span>
      </div>
      <div className={`win-body ${bodyClassName}`}>{children}</div>
    </div>
  );
}
