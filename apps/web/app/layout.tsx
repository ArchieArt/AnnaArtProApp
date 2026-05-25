export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="p-4 bg-gray-100 border-b">
          <ul className="flex gap-6">
            <li><a href="/artists" className="hover:underline">Artists</a></li>
            <li><a href="/courses" className="hover:underline">Courses</a></li>
            <li><a href="/events" className="hover:underline">Events</a></li>
            <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}


