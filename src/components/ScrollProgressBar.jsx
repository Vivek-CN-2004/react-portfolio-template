import useScrollProgress from "../hooks/useScrollProgress";

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 z-50 h-1 bg-gradient-to-r from-primary via-secondary to-accent"
      style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
    />
  );
}
