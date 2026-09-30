import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found – ByteSpace",
};

export default function NotFound() {
  return (
    <>
      <main className="relative isolate overflow-hidden bg-primary-800">
        <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
        <Header />

        <div className="relative mx-auto flex min-h-[640px] max-w-[1440px] flex-col items-center px-5 pb-24 pt-[220px] text-center lg:min-h-[957px] lg:pb-[125px] lg:pt-[487px]">
          <p
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[110px] -translate-x-1/2 bg-gradient-to-b from-secondary-400 from-45% to-transparent to-80% bg-clip-text font-heading text-[40vw] font-semibold leading-none text-transparent lg:top-[147px] lg:text-[480px]"
          >
            404
          </p>

          <h1 className="relative max-w-[900px] font-heading text-[36px] font-semibold leading-[1.2] text-white sm:text-[52px] lg:text-heading-l">
            The page you are looking for doesn&rsquo;t exist
          </h1>
          <p className="relative mt-6 text-body-m text-white lg:mt-16 lg:text-body-l">
            Try to use a correct url or go back to homepage to start again
          </p>
          <ButtonLink href="/" className="relative mt-8">
            Back to Home
          </ButtonLink>
        </div>
      </main>
      <Footer />
    </>
  );
}
