import type { ReactNode } from "react";

interface AuthCardProps {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  footer: ReactNode;
}

export function AuthCard({ eyebrow, title, children, footer }: AuthCardProps) {
  return (
    <section
      aria-labelledby="auth-title"
      className="flex min-h-[784px] flex-col rounded-[32px] bg-white px-6 py-10 sm:px-12 lg:px-16 lg:pb-10 lg:pt-16"
    >
      <p className="text-body-m text-primary-800">{eyebrow}</p>
      <h2
        id="auth-title"
        className="mt-0.5 font-heading text-[36px] font-semibold leading-[1.2] text-neutral-950 lg:text-heading-m"
      >
        {title}
      </h2>

      <div className="mt-10">{children}</div>

      <p className="mt-auto pt-10 text-center text-body-m text-neutral-400">
        {footer}
      </p>
    </section>
  );
}
