import { portfolio } from "@/app/data/portfolio";

export function GET() {
  return Response.json(portfolio);
}

