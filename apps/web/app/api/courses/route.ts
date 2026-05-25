import { courses } from "@/app/data/courses";

export function GET() {
  return Response.json(courses);
}
