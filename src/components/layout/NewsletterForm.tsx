"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setStatus(valid ? "success" : "error");
    if (valid) setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-9">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setStatus("idle");
          }}
          placeholder="Enter your email"
          aria-invalid={status === "error"}
          className="h-[52px] w-full rounded-full border border-neutral-200 bg-white px-6 text-body-m text-neutral-950 outline-none placeholder:text-neutral-950/70 focus:border-primary-800 sm:max-w-[376px]"
        />

        <Button type="submit" className="h-[46px] sm:min-w-[104px]">
          Search
        </Button>
      </div>
      <p role="status" className="mt-2 min-h-5 text-body-xs">
        {status === "error" ? (
          <span className="text-red-600">
            Please enter a valid email address.
          </span>
        ) : null}
        {status === "success" ? (
          <span className="text-primary-800">Thanks! You are on the list.</span>
        ) : null}
      </p>
    </form>
  );
}
