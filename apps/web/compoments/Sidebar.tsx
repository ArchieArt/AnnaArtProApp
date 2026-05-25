export default function Sidebar() {
  const links = [
    { name: "Overview", href: "/dashboard" },
    { name: "My Profile", href: "/dashboard/profile" },
    { name: "Courses", href: "/dashboard/courses" },
    { name: "Events", href: "/dashboard/events" },
    { name: "Portfolio", href: "/dashboard/portfolio" }
  ];

  return (
    <aside className="w-64 bg-white shadow-md h-screen p-6 fixed left-0 top-0">
      <h2 className="text-xl font-bold mb-6">Artist Panel</h2>
      <nav className="flex flex-col gap-3">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="text-gray-700 hover:text-blue-600"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </aside>
  );
}
