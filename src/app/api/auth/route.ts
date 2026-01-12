import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ user: null });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    user: {
      id: "demo-user",
      name: body.name ?? "ゲスト",
      email: body.email ?? "guest@example.com",
    },
  });
}
