export default async function ArtistsDirectory() {
  const res = await fetch("http://localhost:3000/api/artists", {
    cache: "no-store"
  });
  const artists = await res.json();

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Artist Directory</h1>
      <p className="text-gray-600 mb-8">
        Discover local artists from the Anna community.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {artists.map((artist: any) => (
          <div key={artist.id} className="bg-white shadow p-6 rounded-lg border">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-40 object-cover rounded mb-4"
            />

            <h2 className="text-xl font-semibold">{artist.name}</h2>
            <p className="text-gray-600 mt-1">{artist.category}</p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
