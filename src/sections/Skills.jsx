export default function Skills() {
  const skills = ["React","Node","MongoDB","Express","Tailwind","JWT"];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

      {skills.map((s, i) => (
        <div
          key={i}
          className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
        >
          <h3 className="text-lg font-semibold">{s}</h3>
        </div>
      ))}

    </div>
  );
}