import React, { useState } from "react";
import { useMovis } from "../store/movis";
import { useParams } from "react-router-dom";

export default function Seats() {
  const { imdbID } = useParams();
  const { movis } = useMovis();
  const movie = movis.find((m) => m.imdbID == imdbID);
  if (!movie) return <h1>Movie not found</h1>;

  const seats = movie.seats;
  const [selected, setSelected] = useState( []);
  const selectSeat = (id, taken) => {
    if (taken) return;
    setSelected(prev =>[...prev , id]);
  };

  return (
    <>
    <div className="seats-page1">
      <h1>Choose your seats</h1>
      <p>Movie details</p>
      <p>Movie ID : {imdbID}</p>
    </div>
      <div className="seats-page">
        
        <h1>{movie.Title}</h1>
        <div className="seats-grid">
          {seats.map((seat) => (
            <button
              key={seat.id}
              onClick={() => selectSeat(seat.id, seat.isTaken)}
             className={`seat ${seat.isTaken ? "taken" : ""} ${selected.includes(seat.id) ? "selected" : ""}`}
            >
              {seat.id + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
