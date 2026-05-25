export default async function EventsPage() {
  const res = await fetch("http://localhost:3000/api/events", {
    cache: "no-store"
  });
  const events = await res.json();

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Community Events</h1>
      <p className="text-gray-600 mb-8">
        Stay updated on local art events happening in Anna, TX.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event: any) => (
          <div key={event.id} className="bg-white shadow p-6 rounded-lg border">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 object-cover rounded mb-4"
            />

            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600 mt-1">{event.date} • {event.time}</p>

            <p className="text-gray-700 mt-3">{event.description}</p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
