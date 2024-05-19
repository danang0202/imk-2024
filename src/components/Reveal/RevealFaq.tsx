import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
}

const RevealFaq: React.FC<Props> = ({ children }) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
    }
  }, [isInview]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay:.2}}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealFaq;
