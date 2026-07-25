import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { scrollToId } from "../utils/scrollTo";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => scrollToId("home")}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-glow flex items-center justify-center hover:-translate-y-1 transition-transform"
    >
      <ArrowUp size={18} />
    </button>
  );
}
