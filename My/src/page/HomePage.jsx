import React, { useContext } from 'react'
import SearchBar from '../components/searchBar'
import { movieContext } from '../context/ContextProvider'
import MovieCard from '../components/MovieCard';
import FilterIcon from '../components/FilterIcon';

export default function HomePage() {
    const {movie} = useContext(movieContext);
    
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-[#BE93C5] to-[#7BC6CC]'>
      <header className='p-4 flex justify-between items-center '>
     <h2 className='font-semibold text-3xl text-white mb-5'>Movie Explorer</h2>
     <FilterIcon/>
    </header>
      <SearchBar/>
       <div className="container mx-auto px-6 py-6 flex justify-center items-center">
        {movie ? (
          <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {movie.map((movie) => (
                <MovieCard movie={movie}/>
            ))}
          </div>
        ) : (
          <div className="text-white">No Movies Found</div>
        )}
      </div>
    </div>
  )
}
