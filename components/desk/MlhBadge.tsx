import config from "@/hackuncp.config";

/** MLH's member-event trust badge, pinned top-right as MLH asks. Hidden until `mlh.member` is true. */
export default function MlhBadge() {
  if (!config.mlh.member) return null;
  return (
    <a href={config.mlh.href} target="_blank" rel="noreferrer" className="mlh-badge">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={config.mlh.badge} alt={`Major League Hacking ${config.event.year} Hackathon Season`} />
    </a>
  );
}
