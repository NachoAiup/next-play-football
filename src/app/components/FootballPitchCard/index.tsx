import type {FootballPitch} from "@/api";

import Link from "next/link";
import Image from "next/image";

interface FootballPitchProps {
  footballPitch: FootballPitch;
}

export function FootballPitchCard({footballPitch}: FootballPitchProps) {
  return (
    <article key={footballPitch.id}>
      <Image
        alt={footballPitch.name}
        className="mb-3 h-[300px] w-full object-cover"
        height={300}
        src={footballPitch.image}
        width={450}
      />
      <h2 className="mb-2 flex items-center justify-center gap-2 text-lg font-bold">
        <Link
          key={footballPitch.id}
          className="outline-transition block w-fit text-xl"
          href={`/${footballPitch.id}`}
          prefetch={false}
        >
          <span>{footballPitch.name}</span>
        </Link>
      </h2>
      <div className="flex w-full cursor-pointer justify-around border-y-[0.5px] border-transparent py-1 transition duration-300 ease-in hover:border-y-[0.5px] hover:border-slate-500">
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-6 items-center">
            <svg
              color="#fff"
              fill="#fff"
              height="30px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
              width="30px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g>
                  <path d="M0,79.175v353.65h512V79.175H0z M263.918,190.513c32.659,3.926,58.062,31.787,58.062,65.487    c0,33.7-25.403,61.561-58.062,65.487V190.513z M15.835,200.577h58.062v110.845H15.835V200.577z M248.082,321.487    c-32.659-3.926-58.062-31.787-58.062-65.487c0-33.7,25.403-61.561,58.062-65.487V321.487z M248.082,174.575    c-41.411,3.996-73.897,38.984-73.897,81.425s32.486,77.428,73.897,81.425v79.565H15.835v-89.732h73.897v-21.745    c23.9-3.808,42.227-24.558,42.227-49.513c0-24.955-18.326-45.705-42.227-49.513v-21.745H15.835V95.01h232.247V174.575z     M89.732,289.377v-66.754c15.112,3.585,26.392,17.184,26.392,33.377S104.844,285.792,89.732,289.377z M496.165,311.423h-58.062    V200.577h58.062V311.423z M496.165,184.742h-73.897v21.745c-23.9,3.808-42.227,24.558-42.227,49.513    c0,24.955,18.326,45.705,42.227,49.513v21.745h73.897v89.732H263.918v-79.565c41.411-3.996,73.897-38.984,73.897-81.425    s-32.486-77.428-73.897-81.425V95.01h232.247V184.742z M422.268,222.623v66.754c-15.112-3.585-26.392-17.184-26.392-33.377    S407.156,226.208,422.268,222.623z" />
                </g>
              </g>
            </svg>
          </div>
          <p className="opacity-90">{footballPitch.pitches}</p>
        </div>
        <div className="h-14 w-[0.5px] bg-slate-500" />
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-6 items-center">
            <svg
              color="#fff"
              fill="#fff"
              height="20px"
              id="Capa_1"
              version="1.1"
              viewBox="0 0 255.856 255.856"
              width="20px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M127.928,38.8c-30.75,0-55.768,25.017-55.768,55.767s25.018,55.767,55.768,55.767   s55.768-25.017,55.768-55.767S158.678,38.8,127.928,38.8z M127.928,135.333c-22.479,0-40.768-18.288-40.768-40.767   S105.449,53.8,127.928,53.8s40.768,18.288,40.768,40.767S150.408,135.333,127.928,135.333z" />
                <path d="M127.928,0C75.784,0,33.362,42.422,33.362,94.566c0,30.072,25.22,74.875,40.253,98.904   c9.891,15.809,20.52,30.855,29.928,42.365c15.101,18.474,20.506,20.02,24.386,20.02c3.938,0,9.041-1.547,24.095-20.031   c9.429-11.579,20.063-26.616,29.944-42.342c15.136-24.088,40.527-68.971,40.527-98.917C222.495,42.422,180.073,0,127.928,0z    M171.569,181.803c-19.396,31.483-37.203,52.757-43.73,58.188c-6.561-5.264-24.079-26.032-43.746-58.089   c-22.707-37.015-35.73-68.848-35.73-87.336C48.362,50.693,84.055,15,127.928,15c43.873,0,79.566,35.693,79.566,79.566   C207.495,112.948,194.4,144.744,171.569,181.803z" />
              </g>
            </svg>
          </div>
          <p className="opacity-90">{footballPitch.address}</p>
        </div>
        <div className="h-14 w-[0.5px] bg-slate-500" />
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-6 items-center">⭐{footballPitch.score}</div>
          <p className="font-normal opacity-75">({footballPitch.ratings})</p>
        </div>
      </div>
    </article>
  );
}
