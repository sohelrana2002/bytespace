import type { ReactNode } from "react";
import { Logo } from "@/components/ui/Logo";
import { AuthPreview } from "./AuthPreview";

interface AuthShellProps {
  heading: string;
  description: string;
  children: ReactNode;
}

export function AuthShell({ heading, description, children }: AuthShellProps) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-primary-800">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />

      <div className="container-x pb-12 pt-[35px]">
        <Logo variant="mark" />

        <div className="mt-8 grid gap-10 lg:mt-[52px] lg:grid-cols-12 lg:gap-x-10">
          <div className="relative lg:col-span-6">
            <h1 className="font-heading text-heading-xs text-white">
              {heading}
            </h1>
            <p className="mt-4 max-w-[450px] text-body-l text-white">
              {description}
            </p>

            <div className="mt-10 hidden lg:absolute lg:left-0 lg:top-[185px] lg:mt-0 lg:block">
              <AuthPreview />
            </div>
          </div>

          <div className="lg:col-span-6">{children}</div>
        </div>
      </div>
    </main>
  );
}
