import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface StageProps {
  width: number;
  height: number;
  className?: string;
  children: ReactNode;
}

export function Stage({ width, height, className, children }: StageProps) {
  const style = {
    "--stage-w": `${width}px`,
    "--stage-h": `${height}px`,
  } as CSSProperties;

  return (
    <div className={cn("stage", className)} style={style}>
      <div className="stage-inner">{children}</div>
    </div>
  );
}
