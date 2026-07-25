import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PROFILE } from "../data/profile";
import { NAV_LINKS } from "../data/nav";
import { scrollToId } from "../utils/scrollTo";

export default function Navbar({ activeId, scrolled }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    scrollToId(id);
    setOpen(false);
  };

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(15,23,42,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(51,65,85,0.6)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <button onClick={() => go("home")} className="text-lg font-bold text-white tracking-wide">
          {PROFILE.initials}<span className="text-secondary">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="px-3 py-2 text-sm rounded-lg transition-colors"
              style={{
                color: activeId === link.id ? "#22d3ee" : "#cbd5e1",
                backgroundColor: activeId === link.id ? "rgba(6,182,212,0.08)" : "transparent",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-slate-200"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 border-t border-slate-800 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="text-left px-2 py-2 text-sm rounded-lg text-slate-200 hover:bg-card"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
