import { Code2, Layout, Server, Database, Wrench, Cloud } from "lucide-react";

/**
 * Skills Configuration
 * Group your skills by category and assign a Lucide icon.
 */
export const SKILL_GROUPS = [
  { title: "Languages", icon: Code2, items: ["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"] },
  { title: "Frontend", icon: Layout, items: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"] },
  { title: "Backend", icon: Server, items: ["Node.js", "Express", "FastAPI", "REST APIs", "GraphQL"] },
  { title: "Databases", icon: Database, items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
  { title: "Tools & DevOps", icon: Wrench, items: ["Git", "GitHub", "Docker", "Postman", "VS Code"] },
  { title: "Cloud & Services", icon: Cloud, items: ["AWS", "Vercel", "Netlify", "Firebase"] },
];
