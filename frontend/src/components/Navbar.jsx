import React from 'react';
import { useMovis } from '../store/movis';

export default function Navbar() {
  const {   serchMove,  setSerchMove, filteredMovies } = useMovis();

  return (
    <nav className='navbarMain'>
      <h1>Movie Night</h1>
      <p>Search a movie and pick your seats</p>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search movies..."
          value={serchMove}
          onChange={(e) => setSerchMove(e.target.value)} 
        />
      </form>

      <div>Showing {filteredMovies.length} results</div>
    </nav>
  );
}