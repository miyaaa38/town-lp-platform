export type Favorite = {
  userId: string;
  townSlug: "onomichi" | "kurashiki" | "yamaguchi";
  createdAt: string;
};

const favorites: Favorite[] = [];

export function listFavorites() {
  return favorites;
}

export function addFavorite(input: {
  userId: string;
  townSlug: Favorite["townSlug"];
}) {
  const existing = favorites.find(
    (favorite) =>
      favorite.userId === input.userId && favorite.townSlug === input.townSlug,
  );

  if (existing) {
    return existing;
  }

  const favorite: Favorite = {
    userId: input.userId,
    townSlug: input.townSlug,
    createdAt: new Date().toISOString(),
  };

  favorites.push(favorite);
  return favorite;
}

export function removeFavorite(input: {
  userId: string;
  townSlug: Favorite["townSlug"];
}) {
  const index = favorites.findIndex(
    (favorite) =>
      favorite.userId === input.userId && favorite.townSlug === input.townSlug,
  );

  if (index === -1) {
    return null;
  }

  const [removed] = favorites.splice(index, 1);
  return removed;
}
