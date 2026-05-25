"use client";

import { useEffect, useState } from "react";

export default function DeleteArtistPage({ params }: any) {
  const [artist, setArtist] = useState<any>(null);

  useEffect(() => {
    async function loadArtist() {
      const res = await fetch("http://localhost:3000/api/artists");
      const data = await res.json();
      const found = data.find((a: any) => a.id == params.artistId);
      setArtist(found);
    }

    loadArtist();
  }, [params.artistId]);

  async function handleDelete() {
    await fetch(`http://localhost:3000/api/artists/${params.artistId}`, {
      method: "DELETE"
    });

    window.location.href = "/admin/artists";
  }

  if (!artist) return <div className="p-6">Loading...</div>;

  return (
    <main className="px-6 py-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-red-600">Delete Artist</h1>

      <p className="text-gray-700 mb-6">
        Are you sure you want to delete <strong>{artist.name}</strong>?  
        This action cannot be undone.
      </p>

      <div className="flex gap-4">
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Yes, Delete
        </button>

        <a href="/admin/artists">
          <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
            Cancel
          </button>
        </a>
      </div>
    </main>
  );
}
