import { motion } from "framer-motion";
import useOnScreen from "../hooks/useOnScreen";
import { fadeInUp } from "../animations/variants";

export default function Reveal({ children, delay = 0, variants = fadeInUp, className = "" }) {
  const [ref, visible] = useOnScreen();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      custom={delay}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
