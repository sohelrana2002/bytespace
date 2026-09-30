import { CourseCard } from "@/components/cards/CourseCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COURSES } from "@/data/courses";
import { CourseFilters } from "./CourseFilters";

export function CoursesSection() {
  return (
    <section id="courses" className="scroll-mt-4 bg-white pt-14 lg:pt-[72px]">
      <div className="container-x">
        <SectionHeading
          title={"Discover Your Passion,\nBuild Your Skills"}
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          titleClassName="text-[32px] sm:text-[40px] lg:text-heading-m"
          className="max-w-[917px]"
        />

        <CourseFilters />

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-[76px] lg:grid-cols-3 lg:gap-10">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
