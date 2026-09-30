import { Shape } from "@/components/ui/Shape";
import { HeroSearch } from "./HeroSearch";
import { HeroVisual } from "./HeroVisual";

function HeroShapes() {
  return (
    <div
      aria-hidden="true"
      className="hidden xl:block relative mx-auto h-0 max-w-[1440px]"
    >
      <Shape
        name="squiggle-b"
        color="lime"
        size={387}
        className="left-[-160px] top-[221px]"
      />
      <Shape
        name="squiggle-b"
        color="white"
        size={176}
        mirrored
        className="left-[184px] top-[477px]"
      />
      <Shape
        name="ring"
        color="white"
        size={344}
        className="left-[15px] top-[681px] z-20"
      />
      <Shape
        name="cylinder"
        color="lime"
        size={372}
        className="left-[1260px] top-[220px]"
      />
      <Shape
        name="pyramid"
        color="white"
        size={189}
        className="right-[147px] top-[464px]"
      />
      <Shape
        name="squiggle-a"
        color="white"
        size={332}
        className="right-[-16px] top-[672px]"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary-800 lg:h-[1024px]">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <HeroShapes />

      <div className="container-x relative z-10 flex flex-col items-center pt-[130px] text-center lg:pt-[169px]">
        <h1 className="max-w-[900px] font-heading text-[32px] font-semibold leading-[1.2] text-white max-[380px]:text-[28px] sm:text-[56px] lg:text-heading-l">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mt-6 max-w-[840px] text-body-m text-white sm:text-body-l lg:mt-8">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <div className="mt-10 flex w-full justify-center lg:mt-[60px]">
          <HeroSearch />
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
