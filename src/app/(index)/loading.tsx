import {FootballPitchSkeleton} from "../components/FootballPitchSkeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      <FootballPitchSkeleton />
      <FootballPitchSkeleton />
      <FootballPitchSkeleton />
      <FootballPitchSkeleton />
      <FootballPitchSkeleton />
      <FootballPitchSkeleton />
    </div>
  );
}
