"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/#courses");
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="flex w-full max-w-[580px] items-start gap-4"
    >
      <label htmlFor="hero-search" className="sr-only">
        Search courses, topics or creators
      </label>
      <div className="flex h-[52px] min-w-0 flex-1 items-center gap-2.5 rounded-full bg-white px-[26px]">
        <Search
          size={20}
          className="shrink-0 text-neutral-400"
          aria-hidden="true"
        />
        <input
          id="hero-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Course, topic, creator"
          className="w-full min-w-0 bg-transparent text-body-m text-neutral-950 outline-none placeholder:text-neutral-400"
        />
      </div>
      <Button type="submit" className="h-[46px] shrink-0 px-6">
        Search
      </Button>
    </form>
  );
}
