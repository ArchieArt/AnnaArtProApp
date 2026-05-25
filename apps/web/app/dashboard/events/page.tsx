export default function EventsPage() {
  const events = [
    { title: "Community Paint Night", date: "June 12, 2026", status: "Upcoming" },
    { title: "Local Artist Showcase", date: "May 3, 2026", status: "Completed" },
    { title: "Watercolor Workshop", date: "April 20, 2026", status: "Completed" }
  ];

  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">Events</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event, i) => (
          <div key={i} className="bg-white shadow p-6 rounded-lg border">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600 mt-2">Date: {event.date}</p>
            <p className="text-gray-500 mt-1">Status: {event.status}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
