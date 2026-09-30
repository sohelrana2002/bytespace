import Image from "next/image";
import { TESTIMONIALS } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-glow-testimonials py-16 lg:pb-[60px] lg:pt-[75px]"
    >
      <div className="container-x">
        <div className="grid items-end gap-6 lg:grid-cols-12 lg:gap-x-10">
          <h2 className="font-heading text-[32px] font-semibold leading-[1.2] text-black sm:text-[40px] lg:col-span-6 lg:text-heading-m">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-body-m text-[#4f4f4f] sm:text-body-l lg:col-span-6">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="mt-10 grid items-start gap-8 md:grid-cols-3 lg:mt-[73px] lg:gap-10">
          {TESTIMONIALS.map(({ name, role, quote, avatar }) => (
            <li key={name} className="rounded-3xl bg-white p-6">
              <figure>
                <Image
                  src={avatar}
                  alt="Testimonials avatar"
                  width={160}
                  height={160}
                  className="size-20 rounded-full object-cover"
                />
                <figcaption className="mt-5">
                  <p className="font-heading text-heading-xs text-black">
                    {name}
                  </p>
                  <p className="mt-0.5 text-body-m text-primary-800">{role}</p>
                </figcaption>
                <blockquote className="mt-6 text-body-l text-[#4f4f4f]">
                  &quot;{quote}&quot;
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
