import Image from "next/image";
import {
  HappyStudentsCard,
  ProgressCard,
  TopicCard,
} from "@/components/cards/StatCards";

export function HeroVisual() {
  return (
    <div className="relative mt-12 h-[290px] w-full sm:h-[400px] lg:-mt-0.5 lg:h-[541px]">
      <div className="absolute left-1/2 top-0 -ml-[392px] h-[541px] w-[682px] origin-[392px_0] scale-[0.52] sm:scale-[0.74] lg:scale-100">
        <div
          aria-hidden="true"
          className="absolute rounded-full border-solid border-secondary-500"
          style={{
            left: -182,
            top: 70,
            width: 1149,
            height: 1149,
            borderWidth: 320,
          }}
        />

        <Image
          src="/images/hero-student.png"
          alt="Smiling student with headphones holding a laptop"
          width={516}
          height={483}
          priority
          className="absolute drop-shadow-[0_24px_36px_rgba(0,20,120,0.35)]"
          style={{ left: 103, top: 0, width: 578, height: 541 }}
        />

        <TopicCard className="absolute left-[76px] top-[127px]" />
        <ProgressCard className="absolute left-[514px] top-[139px]" />
        <HappyStudentsCard className="absolute left-0 top-[325px]" />
      </div>
    </div>
  );
}
