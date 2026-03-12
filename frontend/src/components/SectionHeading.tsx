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
      <h2 className="font-display text-4xl md:text-5xl text-gradient-gold tracking-widest">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-3 text-sm max-w-md mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
