export default function PortfolioPage() {
  const items = [
    { title: "Sunset Over Anna", type: "Painting" },
    { title: "Digital Portrait Study", type: "Digital Art" }
  ];

  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">My Portfolio</h1>

      <div className="mb-8">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Upload New Artwork
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div key={i} className="bg-white shadow p-6 rounded-lg border">
            <div className="w-full h-40 bg-gray-200 rounded mb-4" />
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-600 mt-1">{item.type}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
