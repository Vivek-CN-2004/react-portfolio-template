import CountUp from "react-countup";
import useOnScreen from "../hooks/useOnScreen";

export default function StatCard({ stat }) {
  const [ref, visible] = useOnScreen();

  return (
    <div ref={ref} className="rounded-2xl bg-card/60 border border-slate-700 p-6 text-center">
      <p className="text-3xl font-bold text-gradient">
        {visible ? <CountUp end={stat.value} duration={1.6} /> : 0}
      </p>
      <p className="text-slate-400 text-sm mt-2">{stat.label}</p>
    </div>
  );
}
