import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

import heroFries from "@/assets/hero-fries.jpg";
import loadedPotato from "@/assets/loaded-potato.jpg";
import friesSauces from "@/assets/fries-sauces.jpg";
import spudBowl from "@/assets/spud-bowl.jpg";
import cheesyFries from "@/assets/cheesy-fries.jpg";
import spicyFries from "@/assets/spicy-fries.jpg";
import shopInterior from "@/assets/shop-interior.jpg";
import drinks from "@/assets/drinks.jpg";

const images = [
  { src: heroFries, label: "BBQ Bacon Loaded Fries" },
  { src: cheesyFries, label: "Nacho Cheese Fries" },
  { src: loadedPotato, label: "Classic Baked Potato" },
  { src: spudBowl, label: "Spicy Chicken Bowl" },
  { src: friesSauces, label: "Fries & Sauces" },
  { src: spicyFries, label: "Fire Fries" },
  { src: drinks, label: "Drinks & Shakes" },
  { src: shopInterior, label: "The Spud House Vibe" },
];

const GalleryPage = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading title="GALLERY" subtitle="A visual feast of loaded perfection" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => setSelected(i)}
              className="aspect-square overflow-hidden rounded-xl group cursor-pointer relative"
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-300 flex items-end">
                <span className="text-foreground font-display text-lg tracking-wider p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={images[selected].src}
              alt={images[selected].label}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl"
            />
            <div className="absolute bottom-8 text-center">
              <span className="font-display text-2xl text-gradient-gold tracking-wider">
                {images[selected].label}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
