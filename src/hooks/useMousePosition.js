import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [pos, setPos] = useState({ x: -400, y: -400 });

  useEffect(() => {
    const handle = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return pos;
}
