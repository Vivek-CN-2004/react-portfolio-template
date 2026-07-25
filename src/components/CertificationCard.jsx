import { Tilt } from "react-tilt";
import { Award } from "lucide-react";
import Reveal from "./Reveal";

const tiltOptions = { max: 10, scale: 1.03, speed: 400, glare: false };

export default function CertificationCard({ cert, delay = 0 }) {
  const isCompleted = cert.status === "Completed";
  return (
    <Reveal delay={delay}>
      <Tilt options={tiltOptions}>
        <div className="h-full rounded-2xl bg-card/60 border border-slate-700 p-6 hover:border-accent/50 hover:shadow-glow-cyan transition-all">
          <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
            <Award className="text-accent" size={20} />
          </div>
          <h3 className="text-white font-semibold mb-1">{cert.title}</h3>
          <p className="text-slate-400 text-sm mb-3">{cert.issuer}</p>
          <span
            className="text-xs px-3 py-1 rounded-full border"
            style={{
              color: isCompleted ? "#34d399" : "#94a3b8",
              borderColor: isCompleted ? "rgba(52,211,153,0.4)" : "#334155",
            }}
          >
            {cert.status}
          </span>
        </div>
      </Tilt>
    </Reveal>
  );
}
