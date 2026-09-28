import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
}

const LOGOS = {
  src: "/logos/bytespace-logo.svg",
  width: 171,
  height: 37,
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className={cn("inline-flex", className)}
    >
      <Image
        src={LOGOS.src}
        alt="ByteSpace"
        width={LOGOS.width}
        height={LOGOS.height}
        unoptimized
        priority
      />
    </Link>
  );
}
