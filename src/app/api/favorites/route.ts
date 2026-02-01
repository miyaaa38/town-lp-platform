import { NextResponse } from "next/server";
import {
  addFavorite,
  listFavorites,
  type Favorite,
} from "../../../lib/data/favoritesMemory";

const allowedTownSlugs = ["onomichi", "kurashiki", "yamaguchi"] as const;

const isTownSlug = (value: string): value is Favorite["townSlug"] =>
  (allowedTownSlugs as readonly string[]).includes(value);

export async function GET() {
  return NextResponse.json({ favorites: listFavorites() });
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<Favorite>;
  const userId = body.userId ?? "demo-user";
  const townSlug = body.townSlug;

  if (!townSlug || !isTownSlug(townSlug)) {
    return NextResponse.json(
      { error: "Invalid townSlug" },
      { status: 400 },
    );
  }

  return NextResponse.json({
    favorite: addFavorite({ userId, townSlug }),
  });
}
