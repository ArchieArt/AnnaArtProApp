export default async function PortfolioPage() {
  const res = await fetch("http://localhost:3000/api/portfolio", {
    cache: "no-store"
  });
  const portfolio = await res.json();

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Portfolio Gallery</h1>
      <p className="text-gray-600 mb-8">
        Explore completed artworks, murals, and creative projects from local artists.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.map((item: any) => (
          <div key={item.id} className="bg-white shadow p-6 rounded-lg border">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded mb-4"
            />

            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-600 mt-1">{item.category}</p>

            <p className="text-gray-700 mt-3">{item.description}</p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Project
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
