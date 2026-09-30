import { ButtonLink } from "@/components/ui/Button";
import { Shape } from "@/components/ui/Shape";

function CtaShapes() {
  return (
    <div aria-hidden="true" className="hidden lg:block">
      <Shape
        name="squiggle-b"
        color="lime"
        size={387}
        className="left-[-122px] top-[-162px]"
      />
      <Shape
        name="squiggle-b"
        color="white"
        size={176}
        mirrored
        className="left-[179px] top-[5px]"
      />
      <Shape
        name="cone"
        color="white"
        size={189}
        className="left-[-50px] top-[225px]"
      />
      <Shape
        name="ring"
        color="lime"
        size={344}
        className="left-[16px] top-[298px]"
      />
      <Shape
        name="pyramid"
        color="lime"
        size={189}
        className="right-[173px] top-0"
      />
      <Shape
        name="cylinder"
        color="white"
        size={372}
        className="right-[-154px] top-[5px]"
      />
      <Shape
        name="squiggle-a"
        color="lime"
        size={332}
        className="right-[1px] top-[310px]"
      />
    </div>
  );
}

export function CreatorCta() {
  return (
    <section
      id="creators"
      className="relative isolate overflow-hidden bg-primary-800 py-16 lg:py-[83px]"
    >
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <CtaShapes />

      <div className="container-x relative z-10 flex flex-col items-center text-center">
        <h2 className="max-w-[640px] font-heading text-[32px] font-semibold leading-[1.2] text-white sm:text-[40px] lg:text-heading-m">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mt-6 max-w-[840px] text-body-m text-white sm:text-body-l lg:mt-10">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <ButtonLink href="/register" className="mt-8 lg:mt-10">
          Join as Creator
        </ButtonLink>
      </div>
    </section>
  );
}
