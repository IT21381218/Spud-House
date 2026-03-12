import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "../assets/hero-fries.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.9]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <img src={heroImg} alt="Loaded fries" className="w-full h-full object-cover" />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-background"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 section-padding max-w-6xl mx-auto w-full pt-32"
        style={{ y: textY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gradient-gold leading-[0.95] tracking-wider mb-6">
            COLOMBO'S LOADED POTATO SPOT
          </h1>

          <p className="text-sm md:text-base text-foreground/50 mb-10 max-w-md leading-relaxed">
            Crispy fries. Loaded baked potatoes. Bold sauces. Every evening from 5 PM.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 gradient-gold text-primary-foreground px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform duration-300 glow-gold"
            >
              Menu <ArrowRight size={14} />
            </Link>
            <Link
              to="/visit"
              className="inline-flex items-center gap-2 border border-border text-foreground/70 px-7 py-3.5 rounded-full text-xs uppercase tracking-widest hover:border-primary/40 hover:text-primary transition-all duration-300"
            >
              Visit <MapPin size={14} />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
