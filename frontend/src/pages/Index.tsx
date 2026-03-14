import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, MapPin, Clock, ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import FoodCard from "@/components/FoodCard";
import ReviewCard from "@/components/ReviewCard";
import ParallaxImage from "@/components/ParallaxImage";

import loadedPotato from "@/assets/loaded-potato.jpg";
import friesSauces from "@/assets/fries-sauces.jpg";
import spudBowl from "@/assets/spud-bowl.jpg";
import cheesyFries from "@/assets/cheesy-fries.jpg";
import spicyFries from "@/assets/spicy-fries.jpg";
import shopInterior from "@/assets/shop-interior.jpg";
import heroImg from "@/assets/hero-fries.jpg";

const featuredDishes = [
  { image: cheesyFries, name: "NACHO CHEESE FRIES", description: "Crispy fries drowned in nacho cheese with jalapeños", price: "Rs. 650", cheesy: true },
  { image: loadedPotato, name: "THE CLASSIC BAKED", description: "Fluffy baked potato loaded with sour cream, bacon & chives", price: "Rs. 750", cheesy: true },
  { image: spudBowl, name: "SPICY CHICKEN BOWL", description: "Mashed potato bowl with spicy pulled chicken & sriracha", price: "Rs. 850", spicy: true },
  { image: spicyFries, name: "FIRE FRIES", description: "Fries with hot sauce, chili flakes & melted mozzarella", price: "Rs. 700", spicy: true },
];

const reviews = [
  { name: "Amara S.", text: "Best loaded fries in Colombo! The cheese sauce is unreal. Definitely coming back every week.", rating: 5, date: "2 weeks ago" },
  { name: "Dinesh K.", text: "Finally someone doing loaded potatoes right. The spicy chicken bowl is insane!", rating: 5, date: "1 month ago" },
  { name: "Priya M.", text: "Late night cravings solved forever. The vibes, the food, everything is perfect.", rating: 5, date: "3 weeks ago" },
];

const Index = () => {
  const storyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });
  const storyImageY = useTransform(storyProgress, [0, 1], ["0%", "-15%"]);

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <HeroSection />

      {/* FEATURED DISHES */}
      <section className="section-padding max-w-6xl mx-auto">
        <SectionHeading title="FAN FAVORITES" subtitle="The dishes that keep Colombo coming back" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredDishes.map((dish, i) => (
            <FoodCard key={dish.name} {...dish} index={i} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase hover:gap-4 transition-all duration-300"
          >
            Full Menu <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* BRAND STORY — parallax image */}
      <section ref={storyRef} className="section-padding overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <motion.img
              src={shopInterior}
              alt="Spud House atmosphere"
              className="absolute inset-0 w-full h-[120%] object-cover"
              style={{ y: storyImageY }}
              loading="lazy"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-5xl md:text-6xl text-gradient-gold tracking-wider mb-6">
              OUR STORY
            </h2>
            <p className="text-foreground/60 leading-relaxed mb-4 text-sm">
              Born from a simple love for loaded potatoes, Spud House is Colombo's go-to spot for crispy, cheesy, saucy perfection. We take the humble potato and turn it into something unforgettable.
            </p>
            <p className="text-foreground/60 leading-relaxed mb-8 text-sm">
              Every evening at 5 PM, we fire up the fryers and open our doors to fry lovers, late-night snackers, and anyone looking for the boldest flavors in town.
            </p>
            <div className="flex items-center gap-8 text-xs text-muted-foreground uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-primary" />
                Opens 5 PM
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                Colombo
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY SPUD HOUSE */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="WHY SPUD HOUSE?" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: "🔥", title: "LOADED TO THE MAX", desc: "Every dish piled high with toppings, sauces, and flavor." },
              { emoji: "🧀", title: "REAL CHEESE", desc: "Fresh cheese sauces made daily with premium ingredients." },
              { emoji: "🌙", title: "LATE NIGHT", desc: "When everywhere else closes, we're just getting started." },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl border border-border/50 hover:border-primary/20 transition-all duration-500"
              >
                <span className="text-3xl mb-4 block">{item.emoji}</span>
                <h3 className="font-display text-xl text-primary tracking-wider mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-padding max-w-5xl mx-auto">
        <SectionHeading title="WHAT THEY SAY" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase hover:gap-4 transition-all duration-300"
          >
            All Reviews <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* GALLERY — parallax grid */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="THE FOOD" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[heroImg, cheesyFries, friesSauces, spudBowl, loadedPotato, spicyFries].map((img, i) => (
              <ParallaxImage key={i} src={img} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase hover:gap-4 transition-all duration-300"
            >
              Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section-padding max-w-5xl mx-auto text-center">
        <SectionHeading title="FIND US" />
        <div className="rounded-2xl overflow-hidden border border-border/50">
          <iframe
            title="Spud House Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.8866451039758!2d79.85517377416583!3d6.884389185959227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b001ad7fa6f%3A0x98863a518c12837a!2sSpud%20House!5e0!3m2!1sen!2slk!4v1773508285635!5m2!1sen!2slk"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};

export default Index;
