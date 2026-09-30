import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

interface RatingProps {
  value: number;
  count?: number;
  className?: string;
  valueClassName?: string;
  starClassName?: string;
  starSize?: number;
}

export function Rating({
  value,
  count,
  className,
  valueClassName,
  starClassName,
  starSize = 20,
}: RatingProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-1", className)}
      aria-label={`Rated ${value} out of 5`}
    >
      <span className={valueClassName}>{value.toFixed(1)}</span>
      {count !== undefined ? (
        <span className="text-neutral-400">({count})</span>
      ) : null}
      <Star
        size={starSize}
        strokeWidth={0}
        fill="currentColor"
        className={cn("text-neutral-300", starClassName)}
      />
    </span>
  );
}
