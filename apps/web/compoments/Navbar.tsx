export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Anna Art Pro</h1>
      <div className="flex gap-4 text-sm">
        <a href="#" className="hover:text-blue-600">Artists</a>
        <a href="#" className="hover:text-blue-600">Events</a>
        <a href="#" className="hover:text-blue-600">Courses</a>
      </div>
    </nav>
  );
}
