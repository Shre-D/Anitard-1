import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Animetype } from "../types";
import { useRef, useState, useEffect } from "react";
import ThumbnailAnime from "./ThumbnailAnime";

interface Props {
  topAnime: Animetype[];
  seasonalAnime: Animetype[];
}

function AnimeCarousel({ topAnime,seasonalAnime }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div>
    <div className="h-40 pb-96 space-y-0.5 md:space-y-2">
      <h2 className="p-2 w-56 cursor-pointer text-2xl font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        Top Anime
      </h2>
      <div className="group relative md:-ml-2">
        <NavigateNextIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved &&
            "hidden"}`}
          onClick={() => handleClick("left")}
        />
        <div
          className="flex gap-4 items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
          ref={rowRef}
        >
          {topAnime.map((anime) => (
            <ThumbnailAnime key={anime?.mal_id} anime={anime} />
          ))}
        </div>
        <NavigateNextIcon
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("right")}
        />
      </div>  
    </div>
    <h2 className="p-2 w-56 cursor-pointer text-2xl font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        Seasonal Anime
      </h2>
      <div className="group relative md:-ml-2">
        <NavigateNextIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved &&
            "hidden"}`}
          onClick={() => handleClick("left")}
        />
        <div
          className="flex gap-4 items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
          ref={rowRef}
        >
          {seasonalAnime.map((anime) => (
            <ThumbnailAnime key={anime?.mal_id} anime={anime} />
          ))}
        </div>
        <NavigateNextIcon
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("right")}
        />
    </div>
    </div>
  );
}

export default AnimeCarousel;