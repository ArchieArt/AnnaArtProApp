export default function AdminLayout({ children }: any) {
  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-100 border-r p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-4">Admin</h2>

        <a href="/admin/dashboard" className="block hover:underline">
          Dashboard
        </a>

        <a href="/admin/artists" className="block hover:underline">
          Artists
        </a>

        <a href="/admin/courses" className="block hover:underline">
          Courses
        </a>

        <a href="/admin/events" className="block hover:underline">
          Events
        </a>

        <a href="/admin/portfolio" className="block hover:underline">
          Portfolio
        </a>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
