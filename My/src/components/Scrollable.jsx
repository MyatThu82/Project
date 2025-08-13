import React ,{useContext, useRef} from "react";
import SimilarMovieCard from "./SimilarMovieCard";
import { movieContext } from "../context/ContextProvider";

export default function Scrollable() {
  const {movie} = useContext(movieContext)
  const scrollRef = useRef(null);

  //Scroll the Movie Card based on the given direction
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="w-full px-6 py-4  border-2 border-white/10 backdrop-blur-lg   rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-white">You May Also Like:</h2>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10  backdrop-blur-md shadow p-2 rounded-full hover:bg-white/30 text-white/60"
        >
          ◀
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide max-w-full lg:max-w-[1800px] mx-auto px-4 space-x-6"
        >
          {movie.map((movie) => (
            <div
              key={movie.imdbID}
              className="snap-start shrink-0 w-[140px] sm:w-[160px] md:w-[160px] lg:w-[180px]  xl:w-[190px]"
            >
              <SimilarMovieCard movie={movie} />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10  backdrop-blur-md shadow p-2 rounded-full hover:bg-white/30  text-white/60"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
