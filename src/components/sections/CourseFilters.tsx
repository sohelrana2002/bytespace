"use client";

import { useState } from "react";
import { Chip } from "@/components/ui/Chip";
import { COURSE_FILTER_ROWS } from "@/data/categories";

export function CourseFilters() {
  const [active, setActive] = useState("Featured");

  return (
    <div
      className="mx-auto mt-8 flex flex-col items-center gap-5 lg:mt-[43px]"
      role="group"
      aria-label="Course categories"
    >
      {COURSE_FILTER_ROWS.map((row, rowIndex) => {
        const isLastRow = rowIndex === COURSE_FILTER_ROWS.length - 1;

        return (
          <div
            key={rowIndex}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-5"
          >
            {row.map((label) => (
              <Chip
                key={label}
                active={active === label}
                onClick={() => setActive(label)}
              >
                {label}
              </Chip>
            ))}
            {isLastRow ? (
              <button
                type="button"
                className="px-2 py-3 text-label-m font-normal text-primary-800 hover:underline"
              >
                + More
              </button>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
