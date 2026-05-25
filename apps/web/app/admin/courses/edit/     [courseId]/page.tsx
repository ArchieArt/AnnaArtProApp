"use client";

import { useState, useEffect } from "react";

export default function EditCoursePage({ params }: any) {
  const [course, setCourse] = useState<any>(null);

  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");

  useEffect(() => {
    async function loadCourse() {
      const res = await fetch("http://localhost:3000/api/courses");
      const data = await res.json();
      const found = data.find((c: any) => c.id == params.courseId);

      if (found) {
        setCourse(found);
        setTitle(found.title);
        setLevel(found.level);
        setImage(found.image);
        setDescription(found.description);
        setInstructor(found.instructor);
      }
    }

    loadCourse();
  }, [params.courseId]);

  async function handleSubmit(e: any) {
    e.preventDefault();

    await fetch(`http://localhost:3000/api/courses/${params.courseId}`, {
      method: "PUT",
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

  if (!course) return <div className="p-6">Loading...</div>;

  return (
    <main className="px-6 py-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Course</h1>

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
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </main>
  );
}
