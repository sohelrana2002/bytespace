import Image from "next/image";

const LOGOS = [1, 2, 3, 4, 5];

export function LogoStrip() {
  return (
    <section
      aria-label="Companies that trust ByteSpace"
      className="bg-neutral-50 py-14 lg:py-20"
    >
      <ul className="container-x grid grid-cols-2 place-items-center gap-x-6 gap-y-8 md:grid-cols-5">
        {LOGOS.map((n) => (
          <li key={n} className="flex h-[41px] items-center">
            <Image
              src={`/logos/logoipsum-${n}.svg`}
              alt="Logoipsum"
              width={170}
              height={41}
              unoptimized
              className="h-auto max-h-[41px] w-[130px] sm:w-[150px] lg:w-[170px]"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
