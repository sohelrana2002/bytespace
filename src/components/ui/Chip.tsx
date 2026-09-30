import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function Chip({
  active = false,
  className,
  children,
  ...rest
}: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "rounded-full px-4 py-3 text-label-m font-normal text-neutral-900 transition-colors",
        active ? "bg-secondary-400" : "bg-neutral-50 hover:bg-neutral-100",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
