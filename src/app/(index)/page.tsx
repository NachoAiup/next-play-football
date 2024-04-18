import {Suspense} from "react";
import {redirect} from "next/navigation";

import api from "@/api";

import {FootballPitchCard} from "../components/FootballPitchCard";
import {FootballPitchSkeleton} from "../components/FootballPitchSkeleton";

export default async function HomePage({searchParams}: {searchParams: {q: string}}) {
  const footballPitches = await api.search(searchParams.q || "");

  async function searchAction(formData: FormData) {
    "use server";

    redirect(`/?q=${formData.get("query")}`);
  }

  return (
    <section>
      <form action={searchAction} className="mb-4 inline-flex gap-2">
        <input className="px-2" defaultValue={searchParams.q || ""} name="query" />
        <button className="bg-white/20 p-2" type="submit">
          Search
        </button>
      </form>
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
        {footballPitches.length ? (
          footballPitches.map((pitch) => {
            return (
              <Suspense key={pitch.id} fallback={<FootballPitchSkeleton />}>
                <FootballPitchCard key={pitch.id} footballPitch={pitch} />
              </Suspense>
            );
          })
        ) : (
          <p>No results found.</p>
        )}
      </section>
    </section>
  );
}
