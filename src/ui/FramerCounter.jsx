import { animate, useInView, useIsomorphicLayoutEffect } from "framer-motion";
import { useEffect, useRef } from "react";

function FramerCounter({ from = "0", to = "0", rounded = true }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!inView) return;

    element.textContent = from;

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        element.textContent = rounded
          ? Number(value).toFixed(0)
          : Number(value).toFixed(1);
      },
    });

    return () => {
      controls.stop();
    };
  }, [from, ref, to, inView]);

  return <span ref={ref} className="fontMonoAbe "></span>;
}

export default FramerCounter;
