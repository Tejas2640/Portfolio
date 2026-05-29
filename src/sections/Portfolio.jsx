import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const previewProjects = [
  {
    number: "01",
    title: "Employee Attendance System",
    tech: "MERN STACK",
  },
  {
    number: "02",
    title: "JHT Hydraulics",
    tech: "BUSINESS WEBSITE",
  },
];

export default function Portfolio() {
  const glowRef = useRef(null);

  useEffect(() => {
    const moveGlow = (e) => {
      if (!glowRef.current) return;

      requestAnimationFrame(() => {
        glowRef.current.style.transform =
          `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`;
      });
    };

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* CURSOR GLOW (OPTIMIZED) */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[320px] h-80 rounded-full bg-cyan-500/20 blur-[100px] pointer-events-none will-change-transform"
      />

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[60px_60px]" />
        </div>

        <div className="absolute -top-37.5 -left-30 w-125 h-125 bg-cyan-500/20 rounded-full blur-[140px] animate-pulse" />

        <div className="absolute -bottom-45 -right-25 w-125 h-125 bg-blue-500/20 rounded-full blur-[140px] animate-pulse" />

      </div>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">

        {/* TAG */}
        <p className="text-cyan-400 tracking-[6px] text-sm mb-6 animate-pulse">
          MERN STACK DEVELOPER
        </p>

        {/* NAME */}
        <h1 className="text-6xl md:text-8xl font-black leading-none">
          Tejas <span className="text-cyan-400">Jangra</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-zinc-400 mt-6 max-w-xl text-lg">
          Building modern SaaS and web apps with MERN stack and clean UI.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-10">
          <Link
            to="/projects"
            className="px-6 py-3 bg-cyan-400 text-black rounded-xl hover:scale-105 transition"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 border border-zinc-700 rounded-xl hover:border-cyan-400 transition"
          >
            Contact
          </Link>
        </div>

      </section>

      {/* PROJECTS */}
      <section className="grid md:grid-cols-3 gap-6 px-6 pb-20 relative z-10">

        {previewProjects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-400 transition-transform hover:-translate-y-2"
          >
            <h2 className="text-4xl text-zinc-700">{project.number}</h2>
            <h3 className="text-xl font-bold mt-4">{project.title}</h3>
            <p className="text-zinc-400 mt-2">{project.tech}</p>
          </div>
        ))}

      </section>

    </div>
  );
}