import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MovieCard from "./MovieCard";
import { movieContext } from "../context/ContextProvider";

export default function SearchBar() {
  const {title,setTitle,searchMovie} = useContext(movieContext);
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-1/2 md:1/4 relative mb-5">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Search..."
          className="w-full rounded-full bg-gray-500 text-white p-3 pl-5 placeholder-gray-200 focus:outline-none opacity-30"
        />
        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
          onClick={() => searchMovie(title)}
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}
