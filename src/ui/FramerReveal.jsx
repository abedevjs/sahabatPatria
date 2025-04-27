import { animate, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function FramerReveal({ children }) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default FramerReveal;
