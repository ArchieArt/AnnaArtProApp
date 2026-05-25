export default function Stats() {
  const stats = [
    { label: "Courses Completed", value: 0 },
    { label: "Events Attended", value: 0 },
    { label: "Portfolio Items", value: 0 }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 my-10">
      {stats.map((item, i) => (
        <div
          key={i}
          className="bg-white shadow p-6 rounded-lg text-center border"
        >
          <p className="text-3xl font-bold text-blue-600">{item.value}</p>
          <p className="text-gray-600 mt-2">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
