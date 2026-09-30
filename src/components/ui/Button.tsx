import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "lime" | "blue" | "outline";

const BASE =
  "inline-flex h-[46px] items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-label-m transition-colors disabled:cursor-not-allowed disabled:opacity-60";

const VARIANTS: Record<Variant, string> = {
  lime: "bg-secondary-400 text-neutral-950 hover:bg-secondary-500",
  blue: "bg-primary-800 text-white hover:bg-primary-900",
  outline:
    "border border-neutral-200 bg-white text-neutral-950 hover:bg-neutral-50",
};

interface SharedProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type ButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  variant = "lime",
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(BASE, VARIANTS[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

interface ButtonLinkProps extends SharedProps {
  href: string;
}

export function ButtonLink({
  href,
  variant = "lime",
  className,
  children,
}: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(BASE, VARIANTS[variant], className)}>
      {children}
    </Link>
  );
}
