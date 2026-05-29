import { useEffect, useRef } from "react";

export default function About() {
  const glowRef = useRef(null);

  useEffect(() => {
    const moveGlow = (e) => {
      if (!glowRef.current) return;

      const rect =
        glowRef.current.parentElement.getBoundingClientRect();

      glowRef.current.style.left = `${e.clientX - rect.left}px`;
      glowRef.current.style.top = `${e.clientY - rect.top}px`;
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden px-6 py-24">

      {/* CURSOR LIGHT */}
      <div
        ref={glowRef}
        className="absolute w-87.5 h-87.5 bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none transition-all duration-200 ease-out -translate-x-1/2 -translate-y-1/2"
      />

      {/* BACKGROUND ORBS */}
      <div className="absolute -top-25 -left-25 w-100 h-100 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />

      <div className="absolute -bottom-30 -right-30 w-100 h-100 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-20">

          <p className="text-cyan-400 uppercase tracking-[6px] text-sm mb-4">
            ABOUT ME
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Passionate{" "}
            <span className="text-cyan-400">
              Developer
            </span>
          </h1>

        </div>

        {/* MAIN CARD */}
        <div className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 md:p-16 hover:border-cyan-400 transition-all duration-500">

          {/* HOVER GLOW */}
          <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-all duration-500" />

          {/* CONTENT */}
          <div className="relative z-10 grid md:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>

              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                MERN Stack Developer
                creating futuristic digital experiences.
              </h2>

              <p className="text-zinc-400 text-lg leading-relaxed mt-8">
                I specialize in building scalable,
                high-performance and modern web applications
                using React, Node.js, MongoDB and Express.
              </p>

              <p className="text-zinc-500 leading-relaxed mt-6">
                I enjoy creating premium UI/UX experiences,
                SaaS products, admin dashboards and
                business websites with smooth animations
                and futuristic designs.
              </p>

              {/* BUTTON */}
              <div className="mt-10">

                <a
                  href="mailto:tejasjangra33@gmail.com"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-all duration-300"
                >
                  Let’s Connect
                </a>

              </div>

            </div>

            {/* RIGHT STATS */}
            <div className="grid grid-cols-2 gap-6">

              

              <div className="rounded-3xl border border-white/10 bg-black/40 p-8 hover:border-cyan-400 transition-all duration-300">
                <h3 className="text-5xl font-black text-cyan-400">
                  MERN
                </h3>

                <p className="text-zinc-400 mt-4">
                  Stack Expertise
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/40 p-8 hover:border-cyan-400 transition-all duration-300">
                <h3 className="text-5xl font-black text-cyan-400">
                  UI
                </h3>

                <p className="text-zinc-400 mt-4">
                  Modern Interfaces
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/40 p-8 hover:border-cyan-400 transition-all duration-300">
                <h3 className="text-5xl font-black text-cyan-400">
                  SaaS
                </h3>

                <p className="text-zinc-400 mt-4">
                  Product Building
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}