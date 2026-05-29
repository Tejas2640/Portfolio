import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-white font-bold tracking-wide text-xl">
          Portfolio
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-zinc-300">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition hover:text-cyan-400 ${
                location.pathname === link.path
                  ? "text-cyan-400"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

        </div>

      </div>

    </nav>
  );
}