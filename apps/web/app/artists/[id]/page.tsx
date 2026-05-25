<div key={i} className="bg-white shadow p-6 rounded-lg border">
  <div className="w-full h-40 bg-gray-200 rounded mb-4" />
  <h2 className="text-xl font-semibold">{artist.name}</h2>
  <p className="text-gray-600 mt-1">{artist.specialty}</p>

  <a
    href={`/artists/${i + 1}`}
    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
  >
    View Profile
  </a>
</div>

