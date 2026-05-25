export default async function CoursePage({ params }: any) {
  const res = await fetch("http://localhost:3000/api/courses", {
    cache: "no-store"
  });
  const courses = await res.json();

  const course = courses.find((c: any) => c.id == params.courseId);

  if (!course) {
    return <div className="p-6">Course not found.</div>;
  }

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-600 mb-6">{course.level}</p>

      <img
        src={course.image}
        alt={course.title}
        className="w-full max-w-lg rounded shadow mb-6"
      />

      <h2 className="text-2xl font-semibold mb-2">Description</h2>
      <p className="text-gray-700 mb-6">{course.description}</p>

      <h2 className="text-2xl font-semibold mb-2">Instructor</h2>
      <p className="text-gray-700">{course.instructor}</p>
    </main>
  );
}
