import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import shopInterior from "@/assets/shop-interior.jpg";
import heroFries from "@/assets/hero-fries.jpg";
import friesSauces from "@/assets/fries-sauces.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading title="ABOUT SPUD HOUSE" subtitle="The story behind Colombo's favorite potato spot" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={shopInterior} alt="Spud House interior" className="rounded-2xl w-full aspect-video object-cover" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="font-display text-3xl text-primary tracking-wider">WHERE IT ALL BEGAN</h3>
            <p className="text-foreground/70 leading-relaxed">
              Spud House started with a simple idea: take the humble potato and make it extraordinary. In a city full of rice and curry, we wanted to bring something different to Colombo's food scene.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Every evening at 5 PM, we fire up our fryers and get to work creating crispy, loaded, and unforgettable potato dishes. From our signature loaded fries to our hearty spud bowls, every item is crafted with fresh ingredients and bold flavors.
            </p>
          </motion.div>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 md:order-1"
          >
            <h3 className="font-display text-3xl text-primary tracking-wider">OUR MISSION</h3>
            <p className="text-foreground/70 leading-relaxed">
              We believe great food doesn't need to be complicated. A perfectly crispy fry, the right amount of cheese, a killer sauce — that's all it takes to make someone's night.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Spud House is more than a food spot. It's a vibe. A place where friends gather, late-night cravings are satisfied, and every bite is worth talking about.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:order-2"
          >
            <img src={heroFries} alt="Loaded fries" className="rounded-2xl w-full aspect-video object-cover" loading="lazy" />
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { emoji: "🥔", title: "FRESH DAILY", desc: "Every potato is hand-picked and prepared fresh. No frozen shortcuts." },
            { emoji: "❤️", title: "MADE WITH LOVE", desc: "Our sauces and toppings are crafted in-house with premium ingredients." },
            { emoji: "🇱🇰", title: "PROUDLY LOCAL", desc: "A Colombo original, supporting local suppliers and community." },
          ].map((v) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/30 transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{v.emoji}</span>
              <h3 className="font-display text-2xl text-primary tracking-wider mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Fun photo row */}
        <div className="mt-20 grid grid-cols-3 gap-3">
          {[heroFries, friesSauces, shopInterior].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-video overflow-hidden rounded-xl"
            >
              <img src={img} alt="Spud House" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
