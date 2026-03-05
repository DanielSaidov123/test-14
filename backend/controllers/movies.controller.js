import { readFromFile } from "../utils/index.js";

export const GetMovies = async (req, res) => {
  try {
    const movies = await readFromFile("data/movies.json"); 
    const seats = await readFromFile("data/seats.json");
    const data = movies.map(movie => ({...movie, seats: seats[movie.imdbID]}))
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({error:error.message})
  }
};
