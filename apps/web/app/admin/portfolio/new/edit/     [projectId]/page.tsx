"use client";

import { useState, useEffect } from "react";

export default function EditPortfolioPage({ params }: any) {
  const [project, setProject] = useState<any>(null);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function loadProject() {
      const res = await fetch("http://localhost:3000/api/portfolio");
      const data = await res.json();
      const found = data.find((p: any) => p.id == params.projectId);

      if (found) {
        setProject(found);
        setTitle(found.title);
        setCategory(found.category);
        setImage(found.image);
        setDescription(found.description);
      }
    }

    loadProject();
  }, [params.projectId]);

  async function handleSubmit(e: any) {
    e.preventDefault();

    await fetch(`http://localhost:3000/api/portfolio/${params.projectId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        category,
        image,
        description
      })
    });

    window.location.href = "/admin/portfolio";
  }

  if (!project) return <div className="p-6">Loading...</div>;

  return (
    <main className="px-6 py-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Project</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block font-semibold mb-1">Project Title</label>
          <input
            className="w-full border px-3 py-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Category</label>
          <input
            className="w-full border px-3 py-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
