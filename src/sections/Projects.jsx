import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { ALL_TECH, PROJECTS } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesTech = filter === "All" || p.tech.includes(filter);
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
      return matchesTech && matchesQuery;
    });
  }, [filter, query]);

  return (
    <section id="projects" className="py-24 px-6 bg-background/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Projects" title="Things I've built" />

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
          <div className="flex flex-wrap gap-2">
            {ALL_TECH.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className="text-xs px-4 py-2 rounded-full border transition-colors"
                style={{
                  borderColor: filter === t ? "#22d3ee" : "#334155",
                  color: filter === t ? "#22d3ee" : "#94a3b8",
                  backgroundColor: filter === t ? "rgba(6,182,212,0.08)" : "transparent",
                }}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects"
              className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-card border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-secondary"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.06} />
          ))}
          {filtered.length === 0 && (
            <p className="text-slate-500 col-span-full text-center py-12">
              No projects match that search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
