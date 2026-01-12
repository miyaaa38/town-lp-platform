import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/auth", () => {
    return HttpResponse.json({ user: null });
  }),
  http.get("/api/favorites", () => {
    return HttpResponse.json({ favorites: [] });
  }),
];
