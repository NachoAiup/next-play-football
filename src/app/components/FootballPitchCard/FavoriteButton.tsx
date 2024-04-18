"use client";

import type {FootballPitch} from "@/api";

import {useState} from "react";

export const retrieveFavoritesPitches = (): string[] | null => {
  const storedFavoritePitches = localStorage.getItem("favorites");

  return storedFavoritePitches ? (JSON.parse(storedFavoritePitches) as string[]) : null;
};

export function FavoriteButton({footballPitch}: {footballPitch: FootballPitch}) {
  const [isFavorite, setIsFavorite] = useState(
    window.localStorage.getItem("favorites")?.includes(footballPitch.id),
  );

  const handleFavoriteClick = () => {
    let favoritePitches = retrieveFavoritesPitches() || [];

    favoritePitches = favoritePitches.includes(footballPitch.id)
      ? favoritePitches.filter((pitch: string) => pitch !== footballPitch.id)
      : favoritePitches.concat(footballPitch.id);

    setIsFavorite(!isFavorite);

    window.localStorage.setItem("favorites", JSON.stringify(favoritePitches));
  };

  return (
    <button
      className={`text-xl text-red-500 ${isFavorite ? "opacity-100" : "opacity-20"}`}
      type="button"
      onClick={handleFavoriteClick}
    >
      ♥
    </button>
  );
}
