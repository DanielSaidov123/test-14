import { create } from "zustand";
import { fetchMovies } from "../api/movisApi.js";

export const useMovis = create((set, get) => ({
  movis: [],
  filteredMovies: [],
  loading: false,
  error: null,
  serchMove: "",

  setSerchMove: (term) => {
    const { movis } = get();

    const filtered = movis.filter((movie) =>
      movie.Title.toLowerCase().includes(term.toLowerCase())
    );

    set({
      serchMove: term,
      filteredMovies: filtered,
    });
  },

  getAllMovies: async () => {
    set({ loading: true, error: null });

    try {
      const data = await fetchMovies();

      set({
        movis: data,
        filteredMovies: data, 
      });

    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));