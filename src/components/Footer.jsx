import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { PROFILE } from "../data/profile";
import { SOCIALS } from "../data/socials";
import { scrollToId } from "../utils/scrollTo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-500 text-sm">
          Designed & Developed by <span className="text-slate-300">{PROFILE.name}</span> ·{" "}
          &copy; {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-3">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary transition-colors"
          >
            <Github size={15} />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary transition-colors"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={SOCIALS.email}
            aria-label="Email"
            className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary transition-colors"
          >
            <Mail size={15} />
          </a>
          <button
            onClick={() => scrollToId("home")}
            aria-label="Back to top"
            className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary transition-colors"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
