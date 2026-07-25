import { Tilt } from "react-tilt";
import { Github, ExternalLink, ChevronRight, Code2 } from "lucide-react";
import Reveal from "./Reveal";

const tiltOptions = { max: 8, scale: 1.02, speed: 400, glare: false };

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Tilt options={tiltOptions} className="h-full">
        <div className="h-full rounded-2xl bg-card/60 border border-slate-700 overflow-hidden hover:border-primary/60 transition-colors flex flex-col">
          <div className="h-36 bg-gradient-to-br from-primary/30 via-card to-secondary/20 flex items-center justify-center border-b border-slate-700">
            <Code2 className="text-slate-500" size={36} />
          </div>

          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-white font-semibold mb-2">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-indigo-300 border border-primary/30"
                >
                  {t}
                </span>
              ))}
            </div>

            <ul className="text-xs text-slate-400 mb-5 space-y-1 list-disc list-inside">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <div className="mt-auto flex items-center gap-3 pt-2 border-t border-slate-700/70">
              <a
                href={project.github}
                className="flex items-center gap-1 text-xs text-slate-300 hover:text-secondary transition-colors"
              >
                <Github size={14} /> Code
              </a>
              <a
                href={project.demo}
                className="flex items-center gap-1 text-xs text-slate-300 hover:text-secondary transition-colors"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
              <button className="ml-auto flex items-center gap-1 text-xs text-secondary hover:text-cyan-300">
                Read more <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </Tilt>
    </Reveal>
  );
}
