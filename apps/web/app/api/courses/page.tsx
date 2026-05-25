export default async function CoursesPage() {
  const res = await fetch("http://localhost:3000/api/courses", {
    cache: "no-store"
  });
  const courses = await res.json();

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <p className="text-gray-600 mb-8">
        Explore art courses created by local artists and instructors.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course: any) => (
          <div key={course.id} className="bg-white shadow p-6 rounded-lg border">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded mb-4"
            />

            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600 mt-1">{course.level}</p>

            <p className="text-gray-700 mt-3">{course.description}</p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Course
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
