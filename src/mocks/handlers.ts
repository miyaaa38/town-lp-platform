import { http, HttpResponse } from "msw";

type Favorite = {
  userId: string;
  townSlug: "onomichi" | "kurashiki" | "yamaguchi";
  createdAt: string;
};

const favorites: Favorite[] = [];
const allowedTownSlugs = ["onomichi", "kurashiki", "yamaguchi"] as const;

const isTownSlug = (value: string): value is Favorite["townSlug"] =>
  (allowedTownSlugs as readonly string[]).includes(value);

export const handlers = [
  http.get("/api/auth", () => {
    return HttpResponse.json({ user: null });
  }),
  http.get("/api/favorites", () => {
    return HttpResponse.json({ favorites });
  }),
  http.post("/api/favorites", async ({ request }) => {
    const body = (await request.json()) as Partial<Favorite>;
    const userId = body.userId ?? "demo-user";
    const townSlug = body.townSlug;

    if (!townSlug || !isTownSlug(townSlug)) {
      return HttpResponse.json({ error: "Invalid townSlug" }, { status: 400 });
    }

    const existing = favorites.find(
      (favorite) =>
        favorite.userId === userId && favorite.townSlug === townSlug,
    );

    if (existing) {
      return HttpResponse.json({ favorite: existing });
    }

    const favorite: Favorite = {
      userId,
      townSlug,
      createdAt: new Date().toISOString(),
    };

    favorites.push(favorite);

    return HttpResponse.json({ favorite });
  }),
  http.delete("/api/favorites/:townSlug", ({ request, params }) => {
    const townSlug = params.townSlug;
    const url = new URL(request.url);
    const userId = url.searchParams.get("userId") ?? "demo-user";

    if (typeof townSlug !== "string" || !isTownSlug(townSlug)) {
      return HttpResponse.json({ error: "Invalid townSlug" }, { status: 400 });
    }

    const index = favorites.findIndex(
      (favorite) =>
        favorite.userId === userId && favorite.townSlug === townSlug,
    );

    const removed = index === -1 ? null : favorites.splice(index, 1)[0];

    return HttpResponse.json({ removed });
  }),
];
