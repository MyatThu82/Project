import React, { createContext,useState } from 'react'

 export const movieContext = createContext();

export default function ContextProvider({children}) {
  const API_URL = "http://www.omdbapi.com/?apikey=b89dabf6";

    const [title, setTitle] = useState("");
    const [movie, setMovie] = useState([]);
    const [view,setView] = useState([]);

    //Search Movies with Title
     const searchMovie = async (title) => {
    try{
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovie(data.Search);
    }catch(err){
      console.log(err)
    }
  };

   //Get data for MovieCard View
    const movieCardView = (movie) => {
    setView(movie);
  }
  return (
    <movieContext.Provider value={{title,setTitle,movie,setMovie,view,setView,movieCardView,searchMovie}}>
      {children}
    </movieContext.Provider>
  )
}
