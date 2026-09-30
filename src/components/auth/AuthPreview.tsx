import { CourseCard } from "@/components/cards/CourseCard";
import { HappyStudentsCard } from "@/components/cards/StatCards";
import { Shape } from "@/components/ui/Shape";
import { Stage } from "@/components/ui/Stage";
import { COURSES } from "@/data/courses";

export function AuthPreview() {
  return (
    <Stage width={500} height={570} className="lg:mx-0">
      <CourseCard
        course={COURSES[1]}
        tone="auth"
        className="absolute left-0 top-[88px] w-[373px]"
      />
      <CourseCard
        course={COURSES[2]}
        tone="auth"
        className="absolute left-[115px] top-0 w-[355px]"
      />
      <Shape
        name="ring"
        color="lime"
        size={128}
        className="left-[40px] top-[25px]"
      />
      <Shape
        name="pyramid"
        color="lime"
        size={165}
        className="left-[-16px] top-[404px]"
      />
      <Shape
        name="squiggle-c"
        color="white"
        size={175}
        className="left-[352px] top-[307px] z-10"
      />
      <HappyStudentsCard
        variant="lime"
        className="absolute left-[226px] top-[420px]"
      />
    </Stage>
  );
}
