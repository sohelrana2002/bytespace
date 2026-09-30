import { FacebookIcon, GoogleIcon } from "@/components/ui/Icons";
import Image from "next/image";

const PROVIDERS = [
  { label: "Continue with Facebook", iconUrl: "/images/icons/Facebook.png" },
  { label: "Continue with Google", iconUrl: "/images/icons/Google.png" },
];

export function SocialButtons() {
  return (
    <div className="mt-16 lg:mt-[70px]">
      <div
        className="flex items-center gap-5 text-body-m text-neutral-300"
        role="separator"
        aria-label="or"
      >
        <span className="h-[1.5px] flex-1 bg-neutral-100" />
        or
        <span className="h-[1.5px] flex-1 bg-neutral-100" />
      </div>

      <div className="mt-10 flex justify-center gap-4">
        {PROVIDERS.map(({ label, iconUrl }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            className="flex size-[72px] items-center justify-center rounded-[25px] border-[1.5px] border-neutral-200 bg-white text-black transition-colors hover:bg-neutral-50"
          >
            <Image src={iconUrl} width={40} height={40} alt={label} />
          </button>
        ))}
      </div>
    </div>
  );
}
