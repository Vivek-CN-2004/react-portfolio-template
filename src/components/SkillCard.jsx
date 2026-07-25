import Reveal from "./Reveal";

export default function SkillCard({ group, delay = 0 }) {
  const Icon = group.icon;
  return (
    <Reveal delay={delay}>
      <div className="group h-full rounded-2xl bg-card/60 border border-slate-700 p-6 hover:border-secondary/60 hover:shadow-glow-cyan hover:-translate-y-1 transition-all duration-300">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/40 group-hover:to-secondary/40 transition-colors">
          <Icon className="text-secondary" size={20} />
        </div>
        <h3 className="text-white font-semibold mb-3">{group.title}</h3>
        <div className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span
              key={item}
              className="text-xs px-3 py-1 rounded-full bg-slate-700/70 text-slate-300 border border-slate-600"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
