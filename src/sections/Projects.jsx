import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    title: "Employee Attendance System",
    desc: "MERN stack based employee attendance and management system with dashboard, authentication and reports.",
    tech: ["React", "Node.js", "MongoDB"],
    status: "Production Ready",
    github: "https://github.com/Tejas2640/EAMS",
  },
  {
    number: "02",
    title: "JHT Hydraulics Website",
    desc: "Modern hydraulic business website with futuristic UI, responsive design and admin functionality.",
    tech: ["React", "Tailwind", "Express"],
    status: "Live Project",
    github: "https://github.com/Tejas2640/client.git",
  },
];

export default function Projects() {
  return (
    <section className="bg-black text-white px-6 py-16 relative overflow-hidden min-h-screen">

      {/* BACKGROUND (LIGHTWEIGHT) */}
      <div className="absolute top-0 left-0 w-100 h-100 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-100 h-100 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">

          <p className="text-cyan-400 uppercase tracking-[5px] text-sm mb-3">
            MY WORK
          </p>

          <h1 className="text-5xl md:text-7xl font-black">
            Featured <span className="text-cyan-400">Projects</span>
          </h1>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
            Modern MERN stack applications and SaaS products.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 hover:border-cyan-400"
            >

              {/* HOVER GLOW (CSS ONLY) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cyan-400/5 transition duration-300 rounded-3xl" />

              <div className="relative z-10">

                <p className="text-5xl font-black text-zinc-700 group-hover:text-cyan-400/20 transition">
                  {project.number}
                </p>

                <h2 className="text-2xl font-bold mt-5">
                  {project.title}
                </h2>

                <p className="text-zinc-400 mt-4 leading-relaxed">
                  {project.desc}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* FOOTER */}
                <div className="mt-7 flex items-center justify-between">

                  <span className="text-sm text-green-400">
                    ● {project.status}
                  </span>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
                  >
                    View
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-16">

          <p className="text-zinc-500 mb-6">
            Want to see more work?
          </p>

          <Link
            to="/contact"
            className="inline-flex px-7 py-3 rounded-2xl border border-zinc-700 hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            Let’s Work Together
          </Link>

        </div>

      </div>
    </section>
  );
}