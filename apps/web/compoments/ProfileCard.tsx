export default function ProfileCard() {
  return (
    <div className="bg-white shadow p-6 rounded-lg max-w-xl">
      <h2 className="text-2xl font-bold mb-4">Your Artist Profile</h2>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 bg-gray-300 rounded-full" />
        <div>
          <p className="text-lg font-semibold">Artist Name</p>
          <p className="text-gray-600 text-sm">Painter • Illustrator • Creative</p>
        </div>
      </div>

      <p className="text-gray-700 mb-4">
        This is your public artist bio. Soon you’ll be able to edit your story,
        upload your portfolio, and customize your profile.
      </p>

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Edit Profile
      </button>
    </div>
  );
}
