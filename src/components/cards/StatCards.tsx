import { Star } from "lucide-react";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { HAPPY_STUDENT_AVATARS } from "@/data/courses";
import { cn } from "@/lib/cn";

interface CardProps {
  className?: string;
}

export function TopicCard({ className }: CardProps) {
  return (
    <div
      className={cn(
        "flex h-[70px] w-[208px] flex-col justify-center rounded-2xl bg-white px-4 shadow-sm",
        className,
      )}
    >
      <p className="text-label-m font-normal leading-tight text-neutral-950">
        UI/UX Design
      </p>
      <p className="mt-1 whitespace-nowrap text-body-xs leading-none text-neutral-400">
        200 Courses <span className="mx-1">•</span> 1000+ Students
      </p>
    </div>
  );
}

export function ProgressCard({ className }: CardProps) {
  return (
    <div
      className={cn(
        "flex h-[131px] w-[232px] flex-col rounded-2xl bg-white p-4 shadow-sm",
        className,
      )}
    >
      <p className="text-body-s leading-tight text-neutral-950">
        Learning Progress
      </p>
      <p className="mt-1 font-heading text-heading-m font-medium leading-[1.2] text-neutral-950">
        55%
      </p>
      <div
        className="mt-auto h-2 w-full overflow-hidden rounded-full bg-neutral-50"
        role="progressbar"
        aria-label="Learning progress"
        aria-valuenow={55}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="h-full w-[56%] rounded-full bg-secondary-400" />
      </div>
    </div>
  );
}

export function HappyStudentsCard({
  className,
  variant = "light",
}: CardProps & { variant?: "light" | "lime" }) {
  const isLime = variant === "lime";

  return (
    <div
      className={cn(
        "h-[121px] w-[258px] rounded-2xl pb-4 pl-4 pr-2 pt-4 shadow-sm",
        isLime ? "bg-secondary-400" : "bg-white",
        className,
      )}
    >
      <p className="text-body-m leading-tight text-neutral-950">
        Happy Students
      </p>
      <p className="mt-1 flex items-center gap-1 text-body-xs leading-none text-neutral-800">
        4.5 <span className="text-neutral-400">(240)</span>
        <Star
          size={14}
          strokeWidth={0}
          fill="currentColor"
          className={isLime ? "text-primary-800" : "text-secondary-400"}
        />
      </p>
      <AvatarStack
        className="mt-2.5"
        avatars={HAPPY_STUDENT_AVATARS}
        size={43}
        overlap={16}
        badge="2K+"
        badgeTone={isLime ? "black" : "lime"}
      />
    </div>
  );
}

export function RevenueCard({ className }: CardProps) {
  return (
    <div
      className={cn(
        "flex h-[117px] w-[232px] flex-col rounded-2xl bg-primary-800 p-4 text-white",
        className,
      )}
    >
      <p className="text-label-m font-normal leading-tight">Total Revenue</p>
      <p className="text-[10px] leading-tight text-white/80">July 1-28</p>
      <p className="mt-1 font-heading text-[24px] font-semibold leading-[1.2]">
        $120.29
      </p>
      <div className="mt-auto h-2 w-[200px] overflow-hidden rounded-full bg-white">
        <div className="h-full w-[56%] rounded-full bg-secondary-400" />
      </div>
    </div>
  );
}

export function YearToDateCard({ className }: CardProps) {
  return (
    <div
      className={cn(
        "flex h-[134px] w-[135px] flex-col rounded-2xl bg-primary-800 p-4 text-white",
        className,
      )}
    >
      <p className="text-label-m font-normal leading-tight">Year to Date</p>
      <p className="text-[10px] leading-tight text-white/80">2023</p>
      <p className="mt-2 font-heading text-[20px] font-semibold leading-[1.2]">
        $1,200.38
      </p>
      <span className="mt-auto inline-flex w-fit rounded-full bg-secondary-400 px-2.5 py-1 text-label-xs text-neutral-950">
        +12$
      </span>
    </div>
  );
}
