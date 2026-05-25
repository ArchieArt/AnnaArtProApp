"use client";

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function AdminDashboard() {
  const [artists, setArtists] = useState(0);
  const [courses, setCourses] = useState(0);
  const [events, setEvents] = useState(0);
  const [portfolio, setPortfolio] = useState(0);

  const [weeklyData, setWeeklyData] = useState([2, 4, 3, 6, 5, 8, 7]);

  useEffect(() => {
    async function loadStats() {
      const [a, c, e, p] = await Promise.all([
        fetch("/api/artists").then((r) => r.json()),
        fetch("/api/courses").then((r) => r.json()),
        fetch("/api/events").then((r) => r.json()),
        fetch("/api/portfolio").then((r) => r.json())
      ]);

      setArtists(a.length);
      setCourses(c.length);
      setEvents(e.length);
      setPortfolio(p.length);
    }

    loadStats();
  }, []);

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Weekly Visitors",
        data: weeklyData,
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.3)",
        tension: 0.4
      }
    ]
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

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
          <h2 className="text-xl font-semibold">Portfolio</h2>
          <p className="text-4xl font-bold mt-2">{portfolio}</p>
        </div>

      </div>

      <div className="bg-white shadow p-6 rounded-lg border">
        <h2 className="text-xl font-semibold mb-4">Weekly Traffic</h2>
        <Line data={chartData} />
      </div>
    </div>
  );
}
