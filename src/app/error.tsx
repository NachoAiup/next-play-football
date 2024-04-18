"use client";

import Link from "next/link";

export default function ErrorPage() {
  return (
    <div>
      <p>Something went wrong, try again!</p>
      <Link href="/">
        <p className="mb-4 text-sm font-bold leading-[3rem] outline-offset-4 hover:underline">
          ← Home
        </p>
      </Link>
    </div>
  );
}
