"use client";

import { useState } from "react";

export default function NewCoursePage() {
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    await fetch("http://localhost:3000/api/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        level,
        image,
        description,
        instructor
      })
    });

    window.location.href = "/admin/courses";
  }

  return (
    <main className="px-6 py-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add New Course</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block font-semibold mb-1">Course Title</label>
          <input
            className="w-full border px-3 py-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Level</label>
          <input
            className="w-full border px-3 py-2 rounded"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
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
          <label className="block font-semibold mb-1">Instructor</label>
          <input
            className="w-full border px-3 py-2 rounded"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Course
        </button>
      </form>
    </main>
  );
}
