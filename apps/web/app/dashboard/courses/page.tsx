export default function CoursesPage() {
  const courses = [
    { title: "Watercolor Basics", status: "Not Started" },
    { title: "Digital Illustration 101", status: "In Progress" },
    { title: "Art Business Fundamentals", status: "Completed" }
  ];

  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">My Courses</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course, i) => (
          <div key={i} className="bg-white shadow p-6 rounded-lg border">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600 mt-2">Status: {course.status}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Course
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
