import Image from "next/image";
import { Check } from "lucide-react";
import { CourseCard } from "@/components/cards/CourseCard";
import {
  HappyStudentsCard,
  ProgressCard,
  RevenueCard,
  YearToDateCard,
} from "@/components/cards/StatCards";
import { Shape } from "@/components/ui/Shape";
import { Stage } from "@/components/ui/Stage";
import { COURSES } from "@/data/courses";

const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const CREATOR_BENEFITS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

function LearnerBlock() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-x-10">
      <div className="lg:col-span-6">
        <h2 className="max-w-[560px] font-heading text-[32px] font-semibold leading-[1.2] text-neutral-950 sm:text-[40px] lg:text-[44px]">
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className="mt-6 max-w-[480px] text-body-m text-neutral-700 sm:text-body-l lg:mt-10">
          Explore our curated selection of courses tailored to enhance your
          capabilities and accelerate your career journey. Whether you are
          looking to sharpen specific skills, gain industry expertise, or embark
          on a new career path entirely, we have the resources you need.
        </p>
        <dl className="mt-10 flex gap-10 lg:gap-14">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col-reverse">
              <dt className="text-body-m text-neutral-700">{label}</dt>
              <dd className="font-heading text-[28px] font-medium leading-[1.2] text-primary-800 lg:text-[36px]">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="lg:col-span-6">
        <Stage width={640} height={552}>
          <CourseCard
            course={COURSES[0]}
            className="absolute left-[18px] top-0 w-[303px]"
          />
          <Image
            src="/images/hero-student.png"
            alt="Student learning on a laptop"
            width={516}
            height={483}
            className="absolute drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)]"
            style={{ left: 18, top: 12, width: 577, height: 510 }}
          />
          <Shape
            name="squiggle-a"
            color="lime"
            size={216}
            className="left-[375px] top-[67px] z-10"
          />
          <ProgressCard className="absolute left-[315px] top-[213px] !h-[138px]" />
        </Stage>
      </div>
    </div>
  );
}

function CreatorBlock() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-x-10  overflow-hidden">
      <div className="order-2 lg:order-1 lg:col-span-6">
        <Stage width={541} height={596} className="lg:mx-0">
          <RevenueCard className="absolute left-[1px] top-[84px] !h-[119px]" />
          <YearToDateCard className="absolute left-[1px] top-[225px] !h-[135px] !w-[134px]" />
          <Image
            src="/images/creator-woman.png"
            alt="Course creator with headset holding a tablet"
            width={460}
            height={596}
            className="absolute drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)]"
            style={{ left: 20, bottom: -30, width: 460, height: 596 }}
          />
          <Shape
            name="squiggle-b"
            color="lime"
            size={216}
            className="left-[300px] top-[134px]"
          />
          <HappyStudentsCard className="absolute left-[280px] top-[413px] !h-[123px]" />
        </Stage>
      </div>

      <div className="order-1 lg:order-2 lg:col-span-6">
        <h2 className="max-w-[400px] font-heading text-[32px] font-semibold leading-[1.2] text-neutral-950 sm:text-[40px] lg:text-[44px]">
          Create &amp; Manage Courses Easily.
        </h2>
        <p className="mt-6 max-w-[560px] text-body-m text-neutral-950 sm:text-body-l lg:mt-10">
          <strong className="font-bold">ByteSpace</strong> supports individuals
          or entities in the creation, publication, and administration of
          educational courses.
        </p>
        <ul className="mt-8 flex flex-col gap-4 lg:mt-10">
          {CREATOR_BENEFITS.map((benefit) => (
            <li
              key={benefit}
              className="flex h-6 items-center gap-3 text-body-l leading-6 text-neutral-950"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-800 text-white">
                <Check size={14} strokeWidth={3} aria-hidden="true" />
              </span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function GrowthSection() {
  return (
    <section className="bg-glow-growth overflow-hidden py-16 lg:py-[120px]">
      <div className="container-x flex flex-col gap-16 lg:gap-[72px]">
        <LearnerBlock />
        <CreatorBlock />
      </div>
    </section>
  );
}
