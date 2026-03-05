import { useParams, useNavigate } from "react-router-dom";
import { useMovis } from "../store/movis";

export default function Details() {
  const { imdbID } = useParams();
  const navigate = useNavigate();
  const { movis } = useMovis(); 
  const movie = movis.find((m) => m.imdbID == imdbID);

  if (!movie) return <h1>Movie not found</h1>;

  const goToSeats = () => {
    navigate(`/seats/${imdbID}`);
  };

  return (
    <div className="Seats">
      <h1>{movie.Title}</h1>
      <img src={movie.Images[2]} alt={movie.Title} />
      <p>Year: {movie.Year}</p>
      <p>Runtime: {movie.Runtime}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Language: {movie.Language}</p>

      <button 
        className="btn-go-to-seats" 
        onClick={goToSeats}
      >
        Go to Seats
      </button>
    </div>
  );
}