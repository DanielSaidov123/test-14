import { create } from "zustand";
import { fetchMovies } from "../api/movisApi.js";

export const useMovis = create((set) => ({
  movis: [],
  loading: false,
  error: null,
  serchMove : "",

  setSerchMove :(word)=>set({movis:movis.filter()} ),

  getAllMovies: async () => {
    set({ error: null, loading: true });
    try {
      const data = await fetchMovies();
      set({ movis: data, error: null });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));
