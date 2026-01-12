import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ favorites: [] });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    favorite: {
      userId: body.userId ?? "demo-user",
      townSlug: body.townSlug ?? "onomichi",
      createdAt: new Date().toISOString(),
    },
  });
}
