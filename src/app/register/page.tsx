import type { Metadata } from "next";
import Link from "next/link";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthShell } from "@/components/auth/AuthShell";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Create an Account – ByteSpace",
};

export default function RegisterPage() {
  return (
    <AuthShell
      heading="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <AuthCard
        eyebrow="Create an Account"
        title={
          <>
            Welcome to
            <br />
            ByteSpace
          </>
        }
        footer={
          <>
            Already have an account?{" "}
            <Link href="/login" className="text-primary-800 hover:underline">
              Login
            </Link>
          </>
        }
      >
        <RegisterForm />
      </AuthCard>
    </AuthShell>
  );
}
