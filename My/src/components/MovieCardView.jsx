import React, { useContext } from "react";
import { movieContext } from "../context/ContextProvider";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

export default function MovieCardView() {
  const { view } = useContext(movieContext);
  const navigate = useNavigate();
  return (
    <div className="backdrop-blur-2xl rounded-xl shadow-2xl mb-5 border border-white/10 p-3">
      <button
        className="text-white"
        onClick={() => {
          navigate("/");
        }}
      >
        <ArrowBackIosNewIcon />
      </button>
      <div className="flex justify-center items-center flex-col sm:flex-row">
        <img
          src={view.Poster}
          className="rounded-xl h-80 sm:h-90 md:h-100 lg:h-110 mx-10"
        />
        <div className=" md:block sm:flex items-start justify-start flex-col sm:h-90 md:h-100 lg:120 xl:120 border border-white/10 p-4 rounded-xl shadow-lg backdrop-blur-2xl sm:w-100 hidden">
          <h3 className="mb-4 text-white text-lg md:text-2xl font-semibold">
            {view.Title}
          </h3>
          <p className="mb-2 text-white">Type: {view.Type}</p>
          <p className="mb-2  text-white">Released Date: {view.Year}</p>
        </div>

        <div className="block sm:hidden rounded-lg p-4 border border-white/10 mt-2 shadow-lg w-80">
          <h3 className="mb-4 text-white text-lg md:text-2xl font-semibold">
            {view.Title}
          </h3>
          <p className="mb-2 text-white">Type: {view.Type}</p>
          <p className="mb-2  text-white">Released Date: {view.Year}</p>
        </div>
      </div>
    </div>
  );
}