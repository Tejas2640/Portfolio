import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Footer() {
  const lightRef = useRef(null);

  useEffect(() => {
    let raf;

    const moveLight = (e) => {
      if (!lightRef.current) return;

      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const rect = lightRef.current.parentElement.getBoundingClientRect();

        lightRef.current.style.left = `${e.clientX - rect.left}px`;
        lightRef.current.style.top = `${e.clientY - rect.top}px`;
      });
    };

    window.addEventListener("mousemove", moveLight);

    return () => {
      window.removeEventListener("mousemove", moveLight);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/10">

      {/* CURSOR LIGHT (UNCHANGED LOOK) */}
      <div
        ref={lightRef}
        className="absolute w-45 h-45 bg-cyan-400/10 rounded-full blur-[70px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />

      {/* TOP LINE */}
      <div className="absolute top-0 left-[-50%] w-[400%] h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-lineMove" />

      {/* ORBS (UNCHANGED VISUAL) */}
      <div className="absolute -top-24 -left-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-[90px]" />
      <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-blue-500/10 rounded-full blur-[90px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* BRAND */}
          <div className="group relative p-6 rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl hover:border-cyan-400/40 transition">

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-cyan-400/10 to-blue-500/10 transition rounded-3xl" />

            <div className="relative z-10">

              <p className="text-cyan-400 text-[11px] tracking-[4px] uppercase">
                MERN Stack Developer
              </p>

              <h2 className="text-3xl font-black mt-3">
                Tejas<span className="text-cyan-400">.</span>
              </h2>

              <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
                Crafting high-performance SaaS products, modern web apps and scalable systems.
              </p>

              <a
                href="mailto:tejasjangra33@gmail.com"
                className="inline-flex mt-6 px-5 py-2.5 rounded-xl bg-cyan-400 text-black text-sm font-semibold hover:scale-105 transition"
              >
                Work With Me
              </a>

            </div>
          </div>

          {/* NAVIGATION */}
          <div className="p-6 rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl">

            <h3 className="text-lg font-semibold mb-5 text-white">
              Navigation
            </h3>

            <div className="flex flex-col gap-4 text-sm">

              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Projects", "/projects"],
                ["Contact", "/contact"],
              ].map(([name, path], i) => (
                <Link
                  key={i}
                  to={path}
                  className="flex justify-between items-center text-zinc-400 hover:text-cyan-400 transition group"
                >
                  <span>{name}</span>

                  {/* FIXED HERE ONLY */}
                  <span className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition">
                    →
                  </span>

                </Link>
              ))}

            </div>
          </div>

          {/* CONNECT */}
          <div className="p-6 rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl">

            <h3 className="text-lg font-semibold mb-5 text-white">
              Connect
            </h3>

            <div className="flex flex-col gap-4 text-sm">

              {[
                ["GitHub", "https://github.com/Tejas2640"],
                ["WhatsApp", "https://wa.me/918708689972"],
                ["Email", "mailto:tejasjangra33@gmail.com"],
              ].map(([name, link], i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between items-center text-zinc-400 hover:text-cyan-400 transition group"
                >
                  <span>{name}</span>
                  <span className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition">
                    ↗
                  </span>
                </a>
              ))}

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-5 pt-3 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-zinc-500 text-xs tracking-wide">
            © {new Date().getFullYear()} Tejas Jangra — All rights reserved
          </p>

          <div className="flex items-center gap-2">

            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <p className="text-zinc-500 text-xs">
              Available for freelance
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}