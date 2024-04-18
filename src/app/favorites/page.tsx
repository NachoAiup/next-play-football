"use client";

import type {FootballPitch} from "@/api";

import {useEffect, useState} from "react";

import api from "@/api";

import {FootballPitchCard} from "../components/FootballPitchCard";
import {retrieveFavoritesPitches} from "../components/FootballPitchCard/FavoriteButton";

export default function Page() {
  const [footballPitches, setFootballPitches] = useState<FootballPitch[] | null>(null);
  let favoritePitches: string[] | null = null;

  try {
    favoritePitches = retrieveFavoritesPitches();
  } catch (error) {}

  useEffect(() => {
    if (favoritePitches) {
      api.favorites(favoritePitches).then((res) => setFootballPitches(res));
    }
  }, [favoritePitches]);

  return (
    <section>
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
        {footballPitches?.length ? (
          footballPitches.map((pitch) => {
            return <FootballPitchCard key={pitch.id} footballPitch={pitch} />;
          })
        ) : (
          <p>No favorites yet.</p>
        )}
      </section>
    </section>
  );
}
