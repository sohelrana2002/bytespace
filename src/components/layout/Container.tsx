import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px]",
        "px-5 md:px-12 lg:px-[120px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
