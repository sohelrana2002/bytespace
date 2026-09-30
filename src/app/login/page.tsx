import type { Metadata } from "next";
import Link from "next/link";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";
import { SocialButtons } from "@/components/auth/SocialButtons";

export const metadata: Metadata = {
  title: "Sign In – ByteSpace",
};

export default function LoginPage() {
  return (
    <AuthShell
      heading="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <AuthCard
        eyebrow="Sign In"
        title="Welcome Back"
        footer={
          <>
            New user?{" "}
            <Link href="/register" className="text-primary-800 hover:underline">
              Create an account
            </Link>
          </>
        }
      >
        <LoginForm />
        <SocialButtons />
      </AuthCard>
    </AuthShell>
  );
}
