import { events } from "@/app/data/events";

export function GET() {
  return Response.json(events);
}
