"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [artists, setArtists] = useState(0);
  const [courses, setCourses] = useState(0);
  const [events, setEvents] = useState(0);
  const [portfolio, setPortfolio] = useState(0);

  useEffect(() => {
    async function loadStats() {
      const [a, c, e, p] = await Promise.all([
        fetch("http://localhost:3000/api/artists").then((r) => r.json()),
        fetch("http://localhost:3000/api/courses").then((r) => r.json()),
        fetch("http://localhost:3000/api/events").then((r) => r.json()),
        fetch("http://localhost:3000/api/portfolio").then((r) => r.json())
      ]);

      setArtists(a.length);
      setCourses(c.length);
      setEvents(e.length);
      setPortfolio(p.length);
    }

    loadStats();
  }, []);

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white shadow p-6 rounded-lg border">
          <h2 className="text-xl font-semibold">Artists</h2>
          <p className="text-4xl font-bold mt-2">{artists}</p>
        </div>

        <div className="bg-white shadow p-6 rounded-lg border">
          <h2 className="text-xl font-semibold">Courses</h2>
          <p className="text-4xl font-bold mt-2">{courses}</p>
        </div>

        <div className="bg-white shadow p-6 rounded-lg border">
          <h2 className="text-xl font-semibold">Events</h2>
          <p className="text-4xl font-bold mt-2">{events}</p>
        </div>

        <div className="bg-white shadow p-6 rounded-lg border">
          <h2 className="text-xl font-semibold">Portfolio Projects</h2>
          <p className="text-4xl font-bold mt-2">{portfolio}</p>
        </div>

      </div>
    </main>
  );
}
