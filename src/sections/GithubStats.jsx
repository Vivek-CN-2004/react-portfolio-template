import { Star, GitFork } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import StatCard from "../components/StatCard";
import { GITHUB_STATS, TOP_LANGUAGES, GITHUB_USERNAME } from "../data/github";

export default function GithubStats() {
  return (
    <section id="github" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="GitHub" title="Open-source activity" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          {GITHUB_STATS.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>

        <Reveal>
          <div className="rounded-2xl bg-card/60 border border-slate-700 p-6 md:p-8">
            <h3 className="text-white font-semibold mb-5 flex items-center gap-2">
              <Star size={16} className="text-secondary" /> Top languages
            </h3>
            <div className="space-y-4">
              {TOP_LANGUAGES.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-sm text-slate-300 mb-1">
                    <span>{lang.name}</span>
                    <span>{lang.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      style={{ width: `${lang.pct}%`, transition: "width 1s ease" }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-6 text-sm text-slate-400">
              <GitFork size={16} className="text-accent" />
              Swap this block for a live embed, e.g.{" "}
              <code className="text-xs bg-slate-800 px-1.5 py-0.5 rounded">
                github-readme-stats.vercel.app/api?username={GITHUB_USERNAME}
              </code>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
