import { Mail, MessageCircle, User, Globe, GlobeIcon } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-black text-white relative overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        <h2 className="text-5xl font-black mb-6">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          Let’s build modern websites, SaaS products and creative digital experiences together.
        </p>

        {/* CONTACT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {/* EMAIL */}
          <a
            href="mailto:tejasjangra33@gmail.com"
            className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2"
          >
            <Mail className="mx-auto mb-5 text-cyan-400 group-hover:scale-110 transition" size={38} />

            <h3 className="text-xl font-bold mb-2">
              Email
            </h3>

            <p className="text-zinc-400 text-sm break-all">
              tejasjangra33@gmail.com
            </p>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/918708689972"
            target="_blank"
            rel="noreferrer"
            className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-400 transition-all duration-300 hover:-translate-y-2"
          >
            <MessageCircle className="mx-auto mb-5 text-green-400 group-hover:scale-110 transition" size={38} />

            <h3 className="text-xl font-bold mb-2">
              WhatsApp
            </h3>

            <p className="text-zinc-400 text-sm">
              Chat Instantly
            </p>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Tejas2640"
            target="_blank"
            rel="noreferrer"
            className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition-all duration-300 hover:-translate-y-2"
          >
            <GlobeIcon className="mx-auto mb-5 group-hover:scale-110 transition" size={38} />

            <h3 className="text-xl font-bold mb-2">
              GitHub
            </h3>

            <p className="text-zinc-400 text-sm">
              View Projects
            </p>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/tejas-jangra-8b51b140b"
            target="_blank"
            rel="noreferrer"
            className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-blue-400 transition-all duration-300 hover:-translate-y-2"
          >
            <GlobeIcon className="mx-auto mb-5 text-blue-400 group-hover:scale-110 transition" size={38} />

            <h3 className="text-xl font-bold mb-2">
              LinkedIn
            </h3>

            <p className="text-zinc-400 text-sm">
              Professional Profile
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}