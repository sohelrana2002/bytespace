"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { isValidEmail, MIN_PASSWORD_LENGTH } from "@/lib/validation";

interface Errors {
  email?: string;
  password?: string;
}

export function LoginForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");

    const next: Errors = {};
    if (!isValidEmail(email)) next.email = "Enter a valid email address.";
    if (password.length < MIN_PASSWORD_LENGTH) {
      next.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
    }

    setErrors(next);
    setSubmitted(Object.keys(next).length === 0);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <TextField
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="designer@example.com"
        error={errors.email}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        placeholder="********"
        error={errors.password}
      />

      <div className="flex items-center justify-end gap-4">
        {submitted ? (
          <p role="status" className="text-body-s text-primary-800">
            Signed in (demo – no backend connected).
          </p>
        ) : null}
        <Button type="submit">Sign In</Button>
      </div>
    </form>
  );
}
