import { SectionHeading } from "@/components/ui/SectionHeading";
import { LEARNING_PATHS } from "@/data/categories";
import Image from "next/image";

export function CategoriesSection() {
  return (
    <section
      id="categories"
      className="scroll-mt-4 bg-white pb-16 pt-16 lg:pb-[120px] lg:pt-[70px]"
    >
      <div className="container-x">
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          titleClassName="text-[28px] sm:text-[32px] lg:text-heading-s"
        />

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-[70px] lg:grid-cols-6 lg:gap-10">
          {LEARNING_PATHS.map(({ label, url, width, height }) => (
            <li key={label}>
              <a
                href="#courses"
                className="flex h-[140px] flex-col items-center justify-center gap-4 rounded-3xl border border-neutral-200 bg-white px-2 text-center transition-colors hover:border-secondary-600 lg:h-[166px]"
              >
                <span className="flex size-[60px] items-center justify-center rounded-full bg-secondary-400 text-neutral-950">
                  <Image src={url} width={width} height={height} alt={label} />
                </span>
                <span className="text-label-l font-normal leading-tight text-neutral-950">
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
