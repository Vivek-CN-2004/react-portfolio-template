import { useEffect, useRef, useState } from "react";

export default function useOnScreen(options = { threshold: 0.15, triggerOnce: true }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        if (options.triggerOnce) observer.disconnect();
      } else if (!options.triggerOnce) {
        setVisible(false);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, visible];
}
