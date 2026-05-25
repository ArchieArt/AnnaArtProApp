export default async function ProjectPage({ params }: any) {
  const res = await fetch("http://localhost:3000/api/portfolio", {
    cache: "no-store"
  });
  const projects = await res.json();

  const project = projects.find((p: any) => p.id == params.projectId);

  if (!project) {
    return <div className="p-6">Project not found.</div>;
  }

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-6">{project.category}</p>

      <img
        src={project.image}
        alt={project.title}
        className="w-full max-w-lg rounded shadow mb-6"
      />

      <h2 className="text-2xl font-semibold mb-2">Description</h2>
      <p className="text-gray-700 mb-6">{project.description}</p>

      <h2 className="text-2xl font-semibold mb-2">Created By</h2>
      <p className="text-gray-700">{project.artist}</p>
    </main>
  );
}
