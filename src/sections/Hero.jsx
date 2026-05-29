export default function Hero() {
  return (
    <div className="text-center max-w-5xl px-6">

      <p className="text-blue-400 tracking-widest mb-4">
        FULL STACK DEVELOPER
      </p>

      <h1 className="text-6xl md:text-8xl font-bold leading-tight">
        Build. Ship. Scale.
      </h1>

      <p className="text-zinc-400 mt-6 text-lg max-w-xl mx-auto">
        I create production-ready MERN applications with modern UI systems.
      </p>

      <div className="mt-10 flex gap-4 justify-center">
        <button className="px-6 py-3 bg-blue-500 rounded-xl">
          View Work
        </button>
        <button className="px-6 py-3 border border-white/20 rounded-xl">
          Contact
        </button>
      </div>

    </div>
  );
}