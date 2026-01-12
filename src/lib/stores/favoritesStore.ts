import { create } from "zustand";
import type { Favorite } from "../hooks/useFavorites";

type FavoritesState = {
  favorites: Favorite[];
  setFavorites: (favorites: Favorite[]) => void;
  clearFavorites: () => void;
};

export const useFavoritesStore = create<FavoritesState>((set) => ({
  favorites: [],
  setFavorites: (favorites) => set({ favorites }),
  clearFavorites: () => set({ favorites: [] }),
}));
