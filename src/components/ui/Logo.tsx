import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface LogoProps {
  variant?: "light" | "dark" | "mark";
  className?: string;
}

const LOGOS = {
  light: { src: "/logos/bytespace-logo-light.svg", width: 171, height: 35 },
  dark: { src: "/logos/bytespace-logo-dark.svg", width: 171, height: 35 },
  mark: { src: "/logos/bytespace-mark.svg", width: 30, height: 33 },
} as const;

export function Logo({ variant = "light", className }: LogoProps) {
  const { src, width, height } = LOGOS[variant];

  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className={cn("inline-flex", className)}
    >
      <Image
        src={src}
        alt="ByteSpace"
        width={width}
        height={height}
        unoptimized
        priority
      />
    </Link>
  );
}
