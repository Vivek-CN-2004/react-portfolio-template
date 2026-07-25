import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <motion.div
              className="text-5xl font-bold text-gradient"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              VC
            </motion.div>
            <p className="mt-3 text-xs tracking-[0.3em] text-slate-400 uppercase">
              Loading portfolio
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
