import { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { useFavoritesStore } from "../stores/favoritesStore";

export type Favorite = {
  userId: string;
  townSlug: "onomichi" | "kurashiki" | "yamaguchi";
  createdAt: string;
};

type FavoritesResponse = {
  favorites: Favorite[];
};

export function useFavorites() {
  const setFavorites = useFavoritesStore((state) => state.setFavorites);
  const { data, error, isLoading } = useSWR<FavoritesResponse>(
    "/api/favorites",
    fetcher,
  );

  useEffect(() => {
    setFavorites(data?.favorites ?? []);
  }, [data?.favorites, setFavorites]);

  return {
    favorites: data?.favorites ?? [],
    isLoading,
    error,
  };
}
