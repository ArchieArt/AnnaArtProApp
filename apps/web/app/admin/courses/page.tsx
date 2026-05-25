export default async function AdminCoursesPage() {
  const res = await fetch("http://localhost:3000/api/courses", {
    cache: "no-store"
  });
  const courses = await res.json();

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Manage Courses</h1>

      <a href="/admin/courses/new">
        <button className="mb-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          + Add New Course
        </button>
      </a>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course: any) => (
          <div
            key={course.id}
            className="bg-white shadow p-6 rounded-lg border"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded mb-4"
            />

            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600">{course.level}</p>

            <div className="flex gap-3 mt-4">
              <a href={`/admin/courses/edit/${course.id}`}>
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  Edit
                </button>
              </a>

              <a href={`/admin/courses/delete/${course.id}`}>
                <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                  Delete
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
