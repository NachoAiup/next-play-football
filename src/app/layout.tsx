import type {Metadata} from "next";

import {Space_Grotesk, Bebas_Neue} from "next/font/google";
import "./globals.css";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({subsets: ["latin"]});
const bebas = Bebas_Neue({subsets: ["latin"], weight: "400"});

export const metadata: Metadata = {
  title: "Football Pitches",
  description: "Top football pitches in Rosario",
  keywords: ["football", "pitch", "play", "sports"],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} max-w-screen container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4 lg:max-w-screen-lg`}
      >
        <header className="flex items-center justify-between gap-12 border-b border-slate-500 text-2xl font-bold leading-[3rem]">
          <Link className={`${bebas.className} flex items-center gap-2`} href="/">
            <h1>Football Pitches</h1>
            <svg
              height="20"
              viewBox="-2500 -2500 5000 5000"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>soccer ball</title>
              <g stroke="#000" strokeWidth="24">
                <circle fill="#fff" r="2376" />
                <path
                  d="m-1643-1716 155 158m-550 2364c231 231 538 195 826 202m-524-2040c-491 351-610 1064-592 1060m1216-1008c-51 373 84 783 364 1220m-107-2289c157-157 466-267 873-329m-528 4112c-50 132-37 315-8 510m62-3883c282 32 792 74 1196 303m-404 2644c310 173 649 247 1060 180m-340-2008c-242 334-534 645-872 936m1109-2119c-111-207-296-375-499-534m1146 1281c100 3 197 44 290 141m-438 495c158 297 181 718 204 1140"
                  fill="none"
                />
              </g>
              <path
                d="m-1624-1700c243-153 498-303 856-424 141 117 253 307 372 492-288 275-562 544-724 756-274-25-410-2-740-60 3-244 84-499 236-764zm2904-40c271 248 537 498 724 788-55 262-105 553-180 704-234-35-536-125-820-200-138-357-231-625-340-924 210-156 417-296 616-368zm-3273 3033a2376 2376 0 0 1-378-1392l59-7c54 342 124 674 311 928-36 179-2 323 51 458zm1197-1125c365 60 717 120 1060 180 106 333 120 667 156 1000-263 218-625 287-944 420-372-240-523-508-736-768 122-281 257-561 464-832zm3013 678a2376 2376 0 0 1-925 1147l-116-5c84-127 114-297 118-488 232-111 464-463 696-772 86 30 159 72 227 118zm-2287 1527a2376 2376 0 0 1-993-251c199 74 367 143 542 83 53 75 176 134 451 168z"
                fill="#000"
              />
            </svg>
          </Link>
          <Link
            className="gap-2 text-sm text-slate-300 hover:text-slate-100 hover:transition hover:duration-300"
            href="/favorites"
          >
            <p>Favorites ♥</p>
          </Link>
        </header>
        <main className="py-4">{children}</main>
        <footer className="text-center leading-[3rem] opacity-70">
          © {new Date().getFullYear()} Football Pitches
        </footer>
      </body>
    </html>
  );
}
