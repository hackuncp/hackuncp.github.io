"use client";

import type { CSSProperties } from "react";
import config, { type DeskItem } from "@/hackuncp.config";
import { DeskGlyph } from "./PixelIcons";
import { photoSrc } from "./DeskProvider";

/*
  One desktop icon: a physics body ([data-phys]) that is also a real button,
  so Tab + Enter opens it like a click. Starting spots come from the config
  as CSS variables; icons without a mobile spot hide on small screens.
*/
export default function DeskIcon({
  item,
  shape = "wide",
  onOpen,
}: {
  item: DeskItem;
  shape?: "wide" | "square";
  onOpen: (item: DeskItem, el: HTMLElement) => void;
}) {
  const style = {
    "--x": `${item.at.x}%`,
    "--y": `${item.at.y}%`,
    "--mx": item.mobile ? `${item.mobile.x}%` : undefined,
    "--my": item.mobile ? `${item.mobile.y}%` : undefined,
  } as CSSProperties;

  const label = item.type === "photo" ? config.photos[item.photo].file : item.label;

  return (
    <button
      type="button"
      data-phys
      data-icon={item.type === "app" ? item.kind : "photo"}
      data-ghost={item.type === "app" && item.kind === "trash" ? "" : undefined}
      className={`desk-icon ${item.mobile ? "" : "desk-only"} ${item.wide ? "desk-wide-only" : ""}`}
      style={style}
      onClick={(e) => onOpen(item, e.currentTarget)}
    >
      <span className="desk-art">
        {item.type === "photo" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoSrc(item.photo, "thumb")}
            alt=""
            draggable={false}
            className={`desk-thumb ${shape === "square" ? "aspect-square w-[68px] lg:w-[84px]" : "aspect-[3/2] w-[92px] lg:w-[116px]"}`}
          />
        ) : (
          <DeskGlyph kind={item.kind} />
        )}
      </span>
      <span className="desk-label">
        {item.type === "app" && item.winLabel ? (
          <>
            <span className="look-mac">{label}</span>
            <span className="look-win">{item.winLabel}</span>
          </>
        ) : (
          label
        )}
      </span>
    </button>
  );
}
