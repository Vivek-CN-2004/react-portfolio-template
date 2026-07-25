import { Briefcase } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { EXPERIENCE } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative pl-10 border-l-2 border-slate-700 space-y-10">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1}>
              <div className="relative">
                <div className="absolute -left-[46px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary" />
                <div className="rounded-2xl bg-card/60 border border-slate-700 p-6 md:p-8">
                  <div className="flex items-center gap-2 text-secondary mb-1">
                    <Briefcase size={16} />
                    <span className="text-sm font-medium">{job.role}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{job.company}</h3>
                  <p className="text-sm text-slate-500 mb-4">{job.period}</p>
                  <ul className="space-y-2 text-slate-300 text-sm leading-relaxed list-disc list-inside">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-indigo-300 border border-primary/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
