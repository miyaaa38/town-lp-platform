import { NextResponse } from "next/server";
import {
  removeFavorite,
  type Favorite,
} from "../../../../lib/data/favoritesMemory";

const allowedTownSlugs = ["onomichi", "kurashiki", "yamaguchi"] as const;

const isTownSlug = (value: string): value is Favorite["townSlug"] =>
  (allowedTownSlugs as readonly string[]).includes(value);

type Params = {
  townSlug: string;
};

export async function DELETE(
  request: Request,
  { params }: { params: Params },
) {
  const { townSlug } = params;
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId") ?? "demo-user";

  if (!isTownSlug(townSlug)) {
    return NextResponse.json(
      { error: "Invalid townSlug" },
      { status: 400 },
    );
  }

  const removed = removeFavorite({ userId, townSlug });

  return NextResponse.json({
    removed,
  });
}
