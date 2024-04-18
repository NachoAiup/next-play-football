import Link from "next/link";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
      <Link href="/">
        <p className="mb-4 text-sm font-bold leading-[3rem] outline-offset-4 hover:underline">
          ← Home
        </p>
      </Link>
      {children}
    </div>
  );
}
