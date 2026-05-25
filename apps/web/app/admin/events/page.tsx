export default async function AdminEventsPage() {
  const res = await fetch("http://localhost:3000/api/events", {
    cache: "no-store"
  });
  const events = await res.json();

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Manage Events</h1>

      <a href="/admin/events/new">
        <button className="mb-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          + Add New Event
        </button>
      </a>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event: any) => (
          <div
            key={event.id}
            className="bg-white shadow p-6 rounded-lg border"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 object-cover rounded mb-4"
            />

            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">{event.date} • {event.time}</p>
            <p className="text-gray-600">{event.location}</p>

            <div className="flex gap-3 mt-4">
              <a href={`/admin/events/edit/${event.id}`}>
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  Edit
                </button>
              </a>

              <a href={`/admin/events/delete/${event.id}`}>
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
