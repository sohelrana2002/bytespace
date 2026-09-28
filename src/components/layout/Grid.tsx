import { cn } from "@/lib/utils";

type GridProps = {
  children: React.ReactNode;
  className?: string;
};

export function Grid({ children, className }: GridProps) {
  return (
    <div className={cn("grid grid-cols-12 gap-gutter", className)}>
      {children}
    </div>
  );
}
