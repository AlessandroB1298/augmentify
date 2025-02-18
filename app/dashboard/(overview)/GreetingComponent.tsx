"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import LottieAnimation with SSR disabled
const LottieAnimation = dynamic(
  () => import("@/app/ui/components/animations/lottieAnimation"),
  { ssr: false }
);

export default function ClientComponent() {
  return (
    <div
      className={
        "flex justify-start lg:ml-[200px] items-center min-h-screen sm:justify-left font-bold"
      }
    >
      <div className="flex flex-col">
        <h2
          className={"text-white text-4xl "}
        >
          Work In Progress
        </h2>
        <Link href="/dashboard" className="text-md mt-3 text-rose-500">Redirect</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <LottieAnimation />
      </Suspense>
    </div>
  );
}
