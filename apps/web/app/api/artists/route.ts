import { artists } from "@/app/data/artists";

export function GET() {
  return Response.json(artists);
}

