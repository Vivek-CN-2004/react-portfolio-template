import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import { SKILL_GROUPS } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-background/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Skills" title="Tools I build with" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <SkillCard key={group.title} group={group} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
