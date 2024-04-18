export interface FootballPitch {
  id: string;
  name: string;
  image: string;
  pitches: number;
  address: string;
  score: number;
  ratings: number;
}

const api = {
  list: async (): Promise<FootballPitch[]> => {
    const [, ...data] = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSo-UYs_Vp6Jpn9bZIvYvsynSZUT19vnGU6HCTosKL_QdP-ZVezM6UnmJaxqx9RuDNAppkMsPmDOixU/pub?output=csv",
      {next: {revalidate: 2000}},
    )
      .then((res) => res.text())
      .then((text) => text.split("\n"));

    const footballPitches: FootballPitch[] = data.map((row) => {
      const [id, name, pitches, address, score, ratings, image] = row.split(",");

      return {
        id,
        name,
        pitches: Number(pitches),
        address,
        score: Number(score),
        ratings: Number(ratings),
        image,
      };
    });

    return footballPitches;
  },
  fetch: async (id: FootballPitch["id"]): Promise<FootballPitch> => {
    const footballPitches = await api.list();

    const footbalPitch = footballPitches.find((pitch) => pitch.id === id);

    if (!footbalPitch) {
      throw new Error(`Pitch with id ${id} not found`);
    }

    return footbalPitch;
  },
  search: async (query: string): Promise<FootballPitch[]> => {
    const results = await api
      .list()
      .then((pitches) =>
        pitches.filter((pitch) => pitch.name.toLowerCase().includes(query.toLowerCase())),
      );

    return results;
  },
  favorites: async (query: string[]): Promise<FootballPitch[]> => {
    const results = await api
      .list()
      .then((pitches) => pitches.filter((pitch) => query.includes(pitch.id)));

    return results;
  },
};

export default api;
