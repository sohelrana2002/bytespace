import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { FOOTER_LINK_COLUMNS, LEGAL_LINKS } from "@/data/navigation";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="container-x pt-[70px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-[40px]">
          <div className="max-w-[480px]">
            <Logo variant="dark" />
            <p className="mt-5 text-body-s text-neutral-950">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <NewsletterForm />
            <p className="mt-5 max-w-[440px] text-body-xs text-neutral-950">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-8 pt-1 sm:grid-cols-3"
          >
            {FOOTER_LINK_COLUMNS.map((column, columnIndex) => (
              <ul key={columnIndex} className="flex flex-col gap-[14px]">
                {column.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-s leading-[1.4] text-neutral-950 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-neutral-100 py-8 text-body-xs text-neutral-950 sm:flex-row sm:items-center sm:justify-between lg:mt-[100px]">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
