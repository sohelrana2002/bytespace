import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function TextField({
  label,
  error,
  id,
  className,
  ...rest
}: TextFieldProps) {
  const inputId = id ?? rest.name;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="text-body-s text-neutral-950">
        {label}
      </label>
      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={cn(
          "h-[52px] w-full rounded-2xl border bg-white px-5 text-body-m text-neutral-950 outline-none transition-colors placeholder:text-neutral-300 focus:border-primary-800",
          error ? "border-red-500" : "border-neutral-100",
          className,
        )}
        {...rest}
      />
      {error ? (
        <p id={errorId} role="alert" className="text-body-xs text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
