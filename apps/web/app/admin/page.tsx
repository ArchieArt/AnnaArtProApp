export default function AdminDashboard() {
  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">
        Manage artists, courses, events, and portfolio projects.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <a href="/admin/artists">
          <div className="p-6 bg-white border rounded shadow hover:bg-gray-50 cursor-pointer">
            <h2 className="text-xl font-semibold">Manage Artists</h2>
            <p className="text-gray-600 mt-2">Add, edit, or remove artists.</p>
          </div>
        </a>

        <a href="/admin/courses">
          <div className="p-6 bg-white border rounded shadow hover:bg-gray-50 cursor-pointer">
            <h2 className="text-xl font-semibold">Manage Courses</h2>
            <p className="text-gray-600 mt-2">Create or update course listings.</p>
          </div>
        </a>

        <a href="/admin/events">
          <div className="p-6 bg-white border rounded shadow hover:bg-gray-50 cursor-pointer">
            <h2 className="text-xl font-semibold">Manage Events</h2>
            <p className="text-gray-600 mt-2">Schedule and update events.</p>
          </div>
        </a>

        <a href="/admin/portfolio">
          <div className="p-6 bg-white border rounded shadow hover:bg-gray-50 cursor-pointer">
            <h2 className="text-xl font-semibold">Manage Portfolio</h2>
            <p className="text-gray-600 mt-2">Add new projects and artwork.</p>
          </div>
        </a>
      </div>
    </main>
  );
}
