import React from 'react'
import { useMovis } from '../store/movis'

export default function Navbar() {

    const {movis,setSerchMove,serchMove } = useMovis()
    
     const filterMovies = movis.filter((movis)=>movis.Title.includes(serchMove))
  return (
    <nav className='navbarMain'>
        <h1>Movie Night</h1>
        <p>Search a movie and pick your seats</p>
        <form >
            <input type="text" onChange={(e)=>setSerchMove(e.target.value)} value={serchMove}/>
        </form>
        <div>Showing {filterMovies.length} results</div>
    </nav>
  )
}
