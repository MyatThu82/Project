import React, { useContext } from 'react'
import MovieCard from '../components/MovieCard'
import { movieContext } from '../context/ContextProvider'
import Scrollable from '../components/Scrollable';
import MovieCardView from '../components/MovieCardView';

export default function ViewPage() {
    const {movie} = useContext(movieContext);
 
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#BE93C5] to-[#7BC6CC] p-4'>
        <MovieCardView/>
        <Scrollable/>
    </div>
    
  );
}
