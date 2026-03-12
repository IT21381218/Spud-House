import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  index: number;
}

const ParallaxImage = ({ src, index }: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="aspect-square overflow-hidden rounded-xl group cursor-pointer"
    >
      <motion.img
        src={src}
        alt="Food"
        className="w-full h-[115%] object-cover group-hover:scale-105 transition-transform duration-700"
        style={{ y }}
        loading="lazy"
      />
    </motion.div>
  );
};

export default ParallaxImage;
