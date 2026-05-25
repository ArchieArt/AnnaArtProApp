export default function ArtistProfile({ params }: { params: { id: string } }) {
  // Temporary mock data
  const artist = {
    name: "Sample Artist",
    specialty: "Mixed Media",
    bio: "This is a placeholder bio. Soon this will load real artist data.",
    portfolio: [
      { title: "Abstract Dreams" },
      { title: "City Lights" }
    ]
  };

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">{artist.name}</h1>
      <p className="text-gray-600 mb-6">{artist.specialty}</p>

      <p className="max-w-2xl text-gray-700 mb-10">{artist.bio}</p>

      <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {artist.portfolio.map((item, i) => (
          <div key={i} className="bg-white shadow p-6 rounded-lg border">
            <div className="w-full h-40 bg-gray-200 rounded mb-4" />
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
