import { CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { PROFILE } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="About Me" title={PROFILE.aboutTitle} />
        <Reveal>
          <div className="rounded-2xl bg-card/60 border border-slate-700 backdrop-blur-md p-8 md:p-10 shadow-card">
            <p className="text-slate-300 leading-relaxed mb-6">
              {PROFILE.aboutBio}
            </p>
            <ul className="space-y-4">
              {PROFILE.aboutPoints.map((p) => (
                <li key={p} className="flex gap-3 text-slate-300">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={18} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
