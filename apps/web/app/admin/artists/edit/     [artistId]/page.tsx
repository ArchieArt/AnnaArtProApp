"use client";

import { useState, useEffect } from "react";

export default function EditArtistPage({ params }: any) {
  const [artist, setArtist] = useState<any>(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    async function loadArtist() {
      const res = await fetch("http://localhost:3000/api/artists");
      const data = await res.json();
      const found = data.find((a: any) => a.id == params.artistId);

      if (found) {
        setArtist(found);
        setName(found.name);
        setCategory(found.category);
        setImage(found.image);
      }
    }

    loadArtist();
  }, [params.artistId]);

  async function handleSubmit(e: any) {
    e.preventDefault();

    await fetch(`http://localhost:3000/api/artists/${params.artistId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        category,
        image
      })
    });

    window.location.href = "/admin/artists";
  }

  if (!artist) return <div className="p-6">Loading...</div>;

  return (
    <main className="px-6 py-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Artist</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Artist Name</label>
          <input
            className="w-full border px-3 py-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
