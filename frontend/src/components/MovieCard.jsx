import { useNavigate } from "react-router-dom";
import React from 'react'
export default function MovieCard({move }) {
const navigate = useNavigate();
  return (
    <div className='grid-1'>
      <div>
      <img src={move.Images[2]} alt="img" />
      </div>
      <div>
        <div>
          <p>Year</p>
          <p>{move.Year}</p>
        </div>
        <div>
          <p>Runtime</p>
          <p>{move.Runtime}</p>
        </div>
        <div>
          <p>Genre</p>
          <p>{move.Genre}</p>
        </div>
        <div>
          <p>Language</p>
          <p>{move.Language}</p>
        </div>
      </div>
      
      <button onClick={()=> navigate(`/Details/${move.imdbID}`)}>Select Seats</button>
    </div>
  )
}