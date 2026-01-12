"use client";

import { useFavorites } from "../../../lib/hooks/useFavorites";
import { useFavoritesStore } from "../../../lib/stores/favoritesStore";

export default function FavoritesPage() {
  const { favorites, isLoading, error } = useFavorites();
  const storedFavorites = useFavoritesStore((state) => state.favorites);
  const displayFavorites =
    storedFavorites.length > 0 ? storedFavorites : favorites;

  return (
    <main className="section">
      <div className="container">
        <h1>お気に入り一覧</h1>
        {isLoading && <p>読み込み中...</p>}
        {error && <p>お気に入りの取得に失敗しました。</p>}
        {!isLoading && !error && displayFavorites.length === 0 && (
          <p>お気に入りはまだ登録されていません。</p>
        )}
        {!isLoading && !error && displayFavorites.length > 0 && (
          <ul>
            {displayFavorites.map((favorite) => (
              <li key={`${favorite.userId}-${favorite.townSlug}`}>
                {favorite.townSlug}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
