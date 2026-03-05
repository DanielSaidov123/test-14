import React from 'react'
import { useMovis } from '../store/movis'
import { useEffect } from 'react'
import MovieCard from './MovieCard';


export default function SeatGrid() {
  const {movis,loading,error ,getAllMovies} = useMovis()
 useEffect(() => {
    getAllMovies()
  }, [getAllMovies]);

  if (loading) {
    return <h1>loading...</h1>
  }
  if (error) {
    return <h1>Error : {error}</h1>
  }
  return (
    <div className='grid'>
        {movis.map((mov,i)=>(
            <MovieCard move={mov} d={i}/>
        ))}
    </div>
  )
}
