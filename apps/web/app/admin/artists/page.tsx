export default async function AdminArtistsPage() {
  const res = await fetch("http://localhost:3000/api/artists", {
    cache: "no-store"
  });
  const artists = await res.json();

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Manage Artists</h1>

      <a href="/admin/artists/new">
        <button className="mb-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          + Add New Artist
        </button>
      </a>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artists.map((artist: any) => (
          <div
            key={artist.id}
            className="bg-white shadow p-6 rounded-lg border"
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-40 object-cover rounded mb-4"
            />

            <h2 className="text-xl font-semibold">{artist.name}</h2>
            <p className="text-gray-600">{artist.category}</p>

            <div className="flex gap-3 mt-4">
              <a href={`/admin/artists/edit/${artist.id}`}>
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  Edit
                </button>
              </a>

              <a href={`/admin/artists/delete/${artist.id}`}>
                <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                  Delete
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
