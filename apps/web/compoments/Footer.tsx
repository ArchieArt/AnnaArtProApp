export default function Footer() {
  return (
    <footer className="px-6 py-10 bg-gray-900 text-gray-300 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Anna Arts Council — Artist Career Engine
      </p>
      <p className="text-xs mt-2 text-gray-500">
        Built with love for the creative community of Anna, Texas.
      </p>
    </footer>
  );
}
