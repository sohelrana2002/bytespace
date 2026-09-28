import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

export type ShapeName =
  | "squiggle-a"
  | "squiggle-b"
  | "ring"
  | "cylinder"
  | "pyramid"
  | "cone";
export type ShapeColor = "lime" | "white";

interface ShapeProps {
  name: ShapeName;
  color: ShapeColor;
  size: number;
  mirrored?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function Shape({
  name,
  color,
  size,
  mirrored = false,
  className,
  style,
}: ShapeProps) {
  return (
    <Image
      src={`/images/shapes/${name}-${color}.webp`}
      alt=""
      aria-hidden="true"
      width={640}
      height={640}
      sizes={`${size}px`}
      className={cn(
        "pointer-events-none absolute max-w-none select-none",
        mirrored && "-scale-x-100",
        className,
      )}
      style={{ width: size, height: size, ...style }}
    />
  );
}
