import Image from "next/image";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { LevelIcon } from "@/components/ui/Icons";
import { Rating } from "@/components/ui/Rating";
import { COURSE_STUDENT_AVATARS, type Course } from "@/data/courses";
import { cn } from "@/lib/cn";

interface CourseCardProps {
  course: Course;
  tone?: "home" | "auth";
  className?: string;
}

export function CourseCard({
  course,
  tone = "home",
  className,
}: CourseCardProps) {
  const {
    title,
    author,
    rating,
    lessons,
    duration,
    comments,
    level,
    price,
    image,
  } = course;

  return (
    <article
      className={cn(
        "rounded-3xl border border-neutral-200 bg-white p-4",
        className,
      )}
    >
      <div className="relative aspect-[341/195] overflow-hidden rounded-xl bg-neutral-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 341px, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
        <ul className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 text-body-xs text-neutral-700">
          {[`${lessons} Lessons`, duration, `${comments} Comments`].map(
            (label) => (
              <li
                key={label}
                className="whitespace-nowrap rounded-full bg-white/50 px-3 py-1 leading-[1.2] backdrop-blur-md"
              >
                {label}
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate font-heading text-heading-xs text-black">
            {title}
          </h3>
          <p className="text-body-xs leading-[1.4] text-black">
            by <span className="text-primary-800">{author}</span>
          </p>
        </div>
        <Rating
          value={rating}
          valueClassName="text-body-m text-neutral-600"
          starClassName={
            tone === "auth" ? "text-secondary-400" : "text-neutral-300"
          }
        />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-neutral-50 px-3 text-body-xs text-neutral-700">
          <LevelIcon className="text-neutral-700" />
          {level}
        </span>
        <AvatarStack
          avatars={COURSE_STUDENT_AVATARS}
          size={32}
          overlap={8}
          badge="26+"
          badgeTone={tone === "auth" ? "black" : "lime"}
        />
      </div>

      <p className="mt-4 pb-2 leading-none">
        <span className="font-heading text-heading-xs text-primary-800">
          ${price}
        </span>
        <span className="text-body-xs text-neutral-600">/lifetime</span>
      </p>
    </article>
  );
}
