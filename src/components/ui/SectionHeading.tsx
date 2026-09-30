import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  title: string;
  description: string;
  titleClassName?: string;
  className?: string;
}

export function SectionHeading({
  title,
  description,
  titleClassName = "text-[32px] md:text-heading-m",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-[800px] flex-col items-center text-center",
        className,
      )}
    >
      <h2
        className={cn(
          "whitespace-pre-line font-heading font-semibold leading-[1.2] text-ink",
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p className="mt-4 text-body-m text-neutral-400 md:text-body-l">
        {description}
      </p>
    </div>
  );
}
