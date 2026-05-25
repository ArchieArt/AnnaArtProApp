export default async function ArtistProfile({ params }: any) {
  const res = await fetch(`http://localhost:3000/api/artists`);
  const artists = await res.json();

  const artist = artists.find((a: any) => a.id == params.artistId);

  if (!artist) {
    return <div className="p-6">Artist not found.</div>;
  }

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">{artist.name}</h1>
      <p className="text-gray-600 mb-6">{artist.bio}</p>

      <img
        src={artist.image}
        alt={artist.name}
        className="w-full max-w-lg rounded shadow mb-6"
      />

      <h2 className="text-2xl font-semibold mb-2">Category</h2>
      <p className="text-gray-700 mb-6">{artist.category}</p>

      <h2 className="text-2xl font-semibold mb-2">Featured Work</h2>
      <p className="text-gray-700">Coming soon…</p>
    </main>
  );
}

