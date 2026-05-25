export default async function PortfolioPage() {
  const res = await fetch("http://localhost:3000/api/portfolio", {
    cache: "no-store"
  });
  const projects = await res.json();

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Portfolio Gallery</h1>
      <p className="text-gray-600 mb-8">
        Explore completed artworks, murals, and creative projects from local artists.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: any) => (
          <div
            key={project.id}
            className="bg-white shadow p-6 rounded-lg border"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded mb-4"
            />

            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600 mt-1">{project.category}</p>

            <p className="text-gray-700 mt-3">{project.description}</p>

            <a href={`/portfolio/${project.id}`}>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                View Project
              </button>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
