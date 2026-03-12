import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-14"
    >
      <h2 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gradient-gold tracking-widest leading-[0.9]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-4 md:mt-6 text-base md:text-lg max-w-lg mx-auto leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
