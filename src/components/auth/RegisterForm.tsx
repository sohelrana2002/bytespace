"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { isValidEmail, MIN_PASSWORD_LENGTH } from "@/lib/validation";

interface Errors {
  name?: string;
  email?: string;
  password?: string;
}

export function RegisterForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  // console.log("🚀 ~ RegisterForm ~ errors: ", errors);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    // console.log("🚀 ~ handleSubmit ~ name: ", name);
    const email = String(data.get("email") ?? "").trim();
    // console.log("🚀 ~ handleSubmit ~ email: ", email);
    const password = String(data.get("password") ?? "");
    // console.log("🚀 ~ handleSubmit ~ password: ", password);

    const next: Errors = {};
    if (name.length < 2) next.name = "Enter your full name.";
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
        label="Full Name"
        name="name"
        autoComplete="name"
        placeholder="Jamie Davis"
        error={errors.name}
      />
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
        autoComplete="new-password"
        placeholder="********"
        error={errors.password}
      />

      <div className="flex items-center justify-end gap-4">
        {submitted ? (
          <p role="status" className="text-body-s text-primary-800">
            Account created (demo – no backend connected).
          </p>
        ) : null}
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
}
