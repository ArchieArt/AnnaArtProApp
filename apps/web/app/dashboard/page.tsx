import Stats from "../../components/Stats";

export default function Dashboard() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Artist Dashboard</h1>
      <p className="text-gray-600 mb-8">
        Welcome to your creative control center.
      </p>

      <Stats />
    </main>
  );
}

