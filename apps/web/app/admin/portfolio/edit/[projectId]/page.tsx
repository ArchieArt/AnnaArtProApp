"use client";

import { useEffect, useState } from "react";

export default function EditPortfolioProjectPage({ params }: any) {
  const { projectId } = params;

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    async function fetchProject() {
      const res = await fetch(`http://localhost:3000/api/portfolio/${projectId}`);
      const data = await res.json();

      setTitle(data.title);
      setCategory(data.category);
      setDescription(data.description);
      setImage(data.image);
    }

    fetchProject();
  }, [projectId]);

  async function handleSubmit(e: any) {
    e.preventDefault();

    await fetch(`http://localhost:3000/api/portfolio/${projectId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        category,
        description,
        image
      })
    });

    window.location.href = "/admin/portfolio";
  }

  async function handleImageUpload(e: any) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    setImage(data.url);
  }

  return (
    <main className="px-6 py-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Portfolio Project</h1>

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
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            className="w-full border px-3 py-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Project Image</label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border px-3 py-2 rounded"
          />

          {image && (
            <img
              src={image}
              alt="Preview"
              className="w-40 h-40 object-cover rounded mt-3 border"
            />
          )}
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
