import { cn } from "@/lib/utils";

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

export const HeadingL = ({ children, className }: TextProps) => (
  <h1 className={cn("font-poppins text-heading-l", className)}>{children}</h1>
);

export const HeadingM = ({ children, className }: TextProps) => (
  <h2 className={cn("font-poppins text-heading-m", className)}>{children}</h2>
);

export const HeadingS = ({ children, className }: TextProps) => (
  <h3 className={cn("font-poppins text-heading-s", className)}>{children}</h3>
);

export const HeadingXS = ({ children, className }: TextProps) => (
  <h4 className={cn("font-poppins text-heading-xs", className)}>{children}</h4>
);

export const BodyL = ({ children, className }: TextProps) => (
  <p className={cn("font-satoshi text-body-l", className)}>{children}</p>
);

export const BodyM = ({ children, className }: TextProps) => (
  <p className={cn("font-satoshi text-body-m", className)}>{children}</p>
);

export const BodyS = ({ children, className }: TextProps) => (
  <p className={cn("font-satoshi text-body-s", className)}>{children}</p>
);

export const LabelM = ({ children, className }: TextProps) => (
  <span className={cn("font-satoshi text-label-m", className)}>{children}</span>
);

export const LabelS = ({ children, className }: TextProps) => (
  <span className={cn("font-satoshi text-label-s", className)}>{children}</span>
);
