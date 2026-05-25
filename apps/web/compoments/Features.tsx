export default function Features() {
  const items = [
    {
      title: "Artist Directory",
      desc: "Showcase local artists and help the community discover their work."
    },
    {
      title: "Workshops & Events",
      desc: "Hands-on classes, paint nights, and community art experiences."
    },
    {
      title: "Online Courses",
      desc: "Learn new skills, techniques, and business strategies for artists."
    }
  ];

  return (
    <section className="px-6 py-16 bg-white">
      <h3 className="text-3xl font-bold text-center mb-10">What You Can Do</h3>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="p-6 border rounded-lg shadow-sm bg-gray-50">
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
