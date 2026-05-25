"use client";

import { useState, useEffect } from "react";

export default function EditEventPage({ params }: any) {
  const [event, setEvent] = useState<any>(null);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [host, setHost] = useState("");

  useEffect(() => {
    async function loadEvent() {
      const res = await fetch("http://localhost:3000/api/events");
      const data = await res.json();
      const found = data.find((e: any) => e.id == params.eventId);

      if (found) {
        setEvent(found);
        setTitle(found.title);
        setDate(found.date);
        setTime(found.time);
        setLocation(found.location);
        setImage(found.image);
        setDescription(found.description);
        setHost(found.host);
      }
    }

    loadEvent();
  }, [params.eventId]);

  async function handleSubmit(e: any) {
    e.preventDefault();

    await fetch(`http://localhost:3000/api/events/${params.eventId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        date,
        time,
        location,
        image,
        description,
        host
      })
    });

    window.location.href = "/admin/events";
  }

  if (!event) return <div className="p-6">Loading...</div>;

  return (
    <main className="px-6 py-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Event</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block font-semibold mb-1">Event Title</label>
          <input
            className="w-full border px-3 py-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Date</label>
            <input
              type="date"
              className="w-full border px-3 py-2 rounded"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Time</label>
            <input
              type="time"
              className="w-full border px-3 py-2 rounded"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            className="w-full border px-3 py-2 rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Image URL</label>
          <input
            className="w-full border px-3 py-2 rounded"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            className="w-full border px-3 py-2 rounded"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div>
          <label className="block font-semibold mb-1">Host</label>
          <input
            className="w-full border px-3 py-2 rounded"
            value={host}
            onChange={(e) => setHost(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </main>
  );
}
