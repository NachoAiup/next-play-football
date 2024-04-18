import api from "@/api";

import {FootballPitchCard} from "../components/FootballPitchCard";

export async function generateMetadata({params: {id}}: {params: {id: string}}) {
  const footbalPitch = await api.fetch(id);

  return {
    title: `${footbalPitch.name} - Football pitches`,
  };
}

export default async function RestaurantPage({params: {id}}: {params: {id: string}}) {
  const footballPitch = await api.fetch(id);

  return <FootballPitchCard footballPitch={footballPitch} />;
}

export async function generateStaticParams() {
  const footbalPitches = await api.list();

  return footbalPitches.map((pitch) => ({
    id: pitch.id,
  }));
}
