"use client";

import { useEffect, useState } from "react";

export default function DeletePortfolioPage({ params }: any) {
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    async function loadProject() {
      const res = await fetch("http://localhost:3000/api/portfolio");
      const data = await res.json();
      const found = data.find((p: any) => p.id == params.projectId);
      setProject(found);
    }

    loadProject();
  }, [params.projectId]);

  async function handleDelete() {
    await fetch(`http://localhost:3000/api/portfolio/${params.projectId}`, {
      method: "DELETE"
    });

    window.location.href = "/admin/portfolio";
  }

  if (!project) return <div className="p-6">Loading...</div>;

  return (
    <main className="px-6 py-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-red-600">Delete Project</h1>

      <p className="text-gray-700 mb-6">
        Are you sure you want to delete <strong>{project.title}</strong>?  
        This action cannot be undone.
      </p>

      <div className="flex gap-4">
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Yes, Delete
        </button>

        <a href="/admin/portfolio">
          <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
            Cancel
          </button>
        </a>
      </div>
    </main>
  );
}
