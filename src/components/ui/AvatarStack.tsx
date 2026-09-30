import Image from "next/image";
import { cn } from "@/lib/cn";

interface AvatarStackProps {
  avatars: string[];
  size?: number;
  overlap?: number;
  badge?: string;
  badgeTone?: "lime" | "black";
  className?: string;
}

export function AvatarStack({
  avatars,
  size = 32,
  overlap = 8,
  badge,
  badgeTone = "lime",
  className,
}: AvatarStackProps) {
  const bubbleStyle = { width: size, height: size };

  return (
    <div className={cn("flex items-center", className)}>
      {avatars.map((src, index) => (
        <Image
          key={src + index}
          src={src}
          alt=""
          width={size * 2}
          height={size * 2}
          className="shrink-0 rounded-full object-cover"
          style={{ ...bubbleStyle, marginLeft: index === 0 ? 0 : -overlap }}
        />
      ))}
      {badge ? (
        <span
          className={cn(
            "flex shrink-0 items-center justify-center rounded-full text-label-xs",
            size >= 40 && "text-label-s",
            badgeTone === "lime"
              ? "bg-secondary-400 text-neutral-950"
              : "bg-black text-white",
          )}
          style={{ ...bubbleStyle, marginLeft: avatars.length ? -overlap : 0 }}
        >
          {badge}
        </span>
      ) : null}
    </div>
  );
}
