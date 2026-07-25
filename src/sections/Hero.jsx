import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Sparkles, Download, Github, Linkedin, Mail } from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";
import { PROFILE } from "../data/profile";
import { SOCIALS } from "../data/socials";
import { scrollToId } from "../utils/scrollTo";

const FLOATERS = [
  { emoji: "{ }", top: "18%", left: "8%", delay: 0 },
  { emoji: "</>", top: "65%", left: "12%", delay: 1.2 },
  { emoji: "DB", top: "25%", left: "88%", delay: 0.6 },
  { emoji: "API", top: "70%", left: "85%", delay: 1.8 },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <ParticlesBackground />

      {FLOATERS.map((f) => (
        <motion.div
          key={f.emoji}
          className="absolute text-slate-600/40 font-mono text-sm hidden md:block"
          style={{ top: f.top, left: f.left }}
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: f.delay, ease: "easeInOut" }}
        >
          {f.emoji}
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-[1.2fr,0.8fr] gap-12 items-center relative">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-secondary font-medium mb-4 flex items-center gap-2">
            <Sparkles size={16} /> Hi, I&apos;m {PROFILE.name}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {PROFILE.headline}
            <br />
            <span className="text-gradient">{PROFILE.tagline}</span>
          </h1>

          <div className="h-8 mb-6 text-lg">
            <span className="text-slate-300">I build as a </span>
            <span className="font-semibold text-white">
              <TypeAnimation
                sequence={PROFILE.typingSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>

          <p className="text-slate-400 max-w-xl mb-8 leading-relaxed">
            {PROFILE.bio}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={PROFILE.resume}
              download
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-glow hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Download size={18} /> Download Resume
            </a>
            <button
              onClick={() => scrollToId("projects")}
              className="px-6 py-3 rounded-xl border border-slate-700 text-slate-200 font-medium hover:border-secondary hover:text-cyan-300 transition-all"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToId("contact")}
              className="px-6 py-3 rounded-xl text-slate-300 font-medium hover:text-white transition-all"
            >
              Contact Me &rarr;
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-lg border border-slate-700 flex items-center justify-center text-slate-300 hover:text-secondary hover:border-secondary transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-lg border border-slate-700 flex items-center justify-center text-slate-300 hover:text-secondary hover:border-secondary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={SOCIALS.email}
              aria-label="Email"
              className="w-10 h-10 rounded-lg border border-slate-700 flex items-center justify-center text-slate-300 hover:text-secondary hover:border-secondary transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hidden md:flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent opacity-30 blur-2xl animate-pulse-slow" />
            <div className="relative w-full h-full rounded-3xl bg-card border border-slate-700 flex items-center justify-center overflow-hidden">
              <span className="text-6xl font-bold text-gradient">{PROFILE.initials}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
