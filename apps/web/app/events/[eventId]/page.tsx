export default async function EventPage({ params }: any) {
  const res = await fetch("http://localhost:3000/api/events", {
    cache: "no-store"
  });
  const events = await res.json();

  const event = events.find((e: any) => e.id == params.eventId);

  if (!event) {
    return <div className="p-6">Event not found.</div>;
  }

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <p className="text-gray-600 mb-2">{event.date} • {event.time}</p>
      <p className="text-gray-600 mb-6">{event.location}</p>

      <img
        src={event.image}
        alt={event.title}
        className="w-full max-w-lg rounded shadow mb-6"
      />

      <h2 className="text-2xl font-semibold mb-2">About This Event</h2>
      <p className="text-gray-700 mb-6">{event.description}</p>

      <h2 className="text-2xl font-semibold mb-2">Hosted By</h2>
      <p className="text-gray-700">{event.host}</p>
    </main>
  );
}
