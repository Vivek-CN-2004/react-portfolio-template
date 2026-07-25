import { Download, FileText } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { PROFILE } from "../data/profile";

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading eyebrow="Resume" title="My resume, at a glance" />
        <Reveal>
          <div className="rounded-2xl bg-card/60 border border-slate-700 p-10">
            <div className="mx-auto w-40 h-52 rounded-xl bg-background border border-slate-700 flex items-center justify-center mb-6">
              <FileText className="text-slate-600" size={32} />
            </div>
            <p className="text-slate-400 text-sm mb-6">
              Drop your resume file into{" "}
              <code className="bg-slate-800 px-1.5 py-0.5 rounded">public/resume.pdf</code> and these
              buttons will point straight to it.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={PROFILE.resume}
                download
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium flex items-center gap-2 hover:-translate-y-0.5 transition-transform"
              >
                <Download size={18} /> Download Resume
              </a>
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl border border-slate-700 text-slate-200 font-medium hover:border-secondary transition-colors"
              >
                View Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
