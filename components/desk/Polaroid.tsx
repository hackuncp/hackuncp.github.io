import type { CSSProperties } from "react";
import config, { type PhotoId } from "@/hackuncp.config";
import { photoSrc } from "./DeskProvider";

export type Frame = "white" | "black" | "flat";

/** A printed photo: white border, black border, or a bare print with a thin edge. */
export default function Polaroid({
  photo,
  frame = "white",
  aspect = "3/2",
  className = "",
  style,
}: {
  photo: PhotoId;
  frame?: Frame;
  aspect?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span className={`print print-${frame} ${className}`} style={style}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photoSrc(photo, "thumb")}
        alt={config.photos[photo].alt}
        draggable={false}
        loading="lazy"
        style={{ aspectRatio: aspect }}
      />
    </span>
  );
}
