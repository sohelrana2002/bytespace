"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { MAIN_NAV } from "@/data/navigation";
import { cn } from "@/lib/cn";
import Image from "next/image";

/** Transparent header that sits on top of the blue hero. */
export function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-x grid h-[104px] grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]">
        <Logo variant="light" />

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {MAIN_NAV.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={index === 0 ? "page" : undefined}
              className={cn(
                "text-body-m leading-none text-white/90 transition-colors hover:text-white",
                index === 0 && "font-medium text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-6 lg:flex">
          <Link
            href="/login"
            className="text-body-m leading-none text-white/90 hover:text-white"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="text-body-m leading-none text-white/90 hover:text-white"
          >
            Join Us
          </Link>
          <button type="button" aria-label="Open cart" className="text-white">
            <Image
              src="/images/icons/cart.png"
              alt="Cart Image"
              width={16}
              height={20}
            />
          </button>
        </div>

        <button
          ref={toggleBtnRef}
          type="button"
          className="justify-self-end text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="absolute inset-x-0 top-[104px] z-40 container-x lg:hidden"
        >
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <nav aria-label="Mobile" className="flex flex-col gap-4">
              {[
                ...MAIN_NAV,
                { label: "Sign In", href: "/login" },
                { label: "Join Us", href: "/register" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-label-l text-neutral-950"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
