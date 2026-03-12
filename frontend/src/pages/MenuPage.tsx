import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import FoodCard from "@/components/FoodCard";

import cheesyFries from "@/assets/cheesy-fries.jpg";
import loadedPotato from "@/assets/loaded-potato.jpg";
import spudBowl from "@/assets/spud-bowl.jpg";
import spicyFries from "@/assets/spicy-fries.jpg";
import friesSauces from "@/assets/fries-sauces.jpg";
import drinks from "@/assets/drinks.jpg";
import heroFries from "@/assets/hero-fries.jpg";

const categories = ["All", "Loaded Fries", "Baked Potatoes", "Spud Bowls", "Sauces & Extras", "Drinks"];

const menuItems = [
  { category: "Loaded Fries", image: cheesyFries, name: "NACHO CHEESE FRIES", description: "Crispy fries smothered in nacho cheese sauce with jalapeños", price: "Rs. 650", cheesy: true },
  { category: "Loaded Fries", image: spicyFries, name: "FIRE FRIES", description: "Fries with hot sauce, chili flakes & melted mozzarella", price: "Rs. 700", spicy: true },
  { category: "Loaded Fries", image: heroFries, name: "BBQ BACON FRIES", description: "Loaded with smoky BBQ sauce, crispy bacon & cheese", price: "Rs. 750", cheesy: true },
  { category: "Loaded Fries", image: friesSauces, name: "CLASSIC SALTED FRIES", description: "Perfectly salted crispy fries with your choice of dip", price: "Rs. 400" },
  { category: "Baked Potatoes", image: loadedPotato, name: "THE CLASSIC BAKED", description: "Fluffy baked potato with sour cream, bacon & chives", price: "Rs. 750", cheesy: true },
  { category: "Baked Potatoes", image: loadedPotato, name: "CHEESY MELT POTATO", description: "Double cheese baked potato with garlic butter", price: "Rs. 800", cheesy: true },
  { category: "Baked Potatoes", image: loadedPotato, name: "SPICY BEAN POTATO", description: "Loaded with spicy baked beans, cheese & spring onions", price: "Rs. 700", spicy: true },
  { category: "Spud Bowls", image: spudBowl, name: "SPICY CHICKEN BOWL", description: "Mashed potato with spicy pulled chicken & sriracha", price: "Rs. 850", spicy: true },
  { category: "Spud Bowls", image: spudBowl, name: "CREAMY MUSHROOM BOWL", description: "Garlic mashed potato topped with creamy mushroom sauce", price: "Rs. 800", cheesy: true },
  { category: "Sauces & Extras", image: friesSauces, name: "SAUCE TRIO", description: "Choose any 3 of our signature dipping sauces", price: "Rs. 250" },
  { category: "Sauces & Extras", image: friesSauces, name: "EXTRA CHEESE SAUCE", description: "A generous pour of our house-made cheese sauce", price: "Rs. 150", cheesy: true },
  { category: "Drinks", image: drinks, name: "CHOCO MILKSHAKE", description: "Thick chocolate milkshake with whipped cream", price: "Rs. 450" },
  { category: "Drinks", image: drinks, name: "ICED COFFEE", description: "Refreshing cold-brewed iced coffee", price: "Rs. 350" },
  { category: "Drinks", image: drinks, name: "FRESH LIME SODA", description: "Fizzy lime soda with a hint of mint", price: "Rs. 250" },
];

const MenuPage = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading title="OUR MENU" subtitle="From loaded fries to spud bowls — find your favorite" />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                active === cat
                  ? "gradient-gold text-primary-foreground glow-gold"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filtered.map((item) => (
            <FoodCard key={item.name} {...item} />
          ))}
        </motion.div>

        {/* WhatsApp order CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Ready to order?</p>
          <a
            href="https://wa.me/94763057199?text=Hi%20Spud%20House!%20I'd%20like%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-gold text-primary-foreground px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform duration-300 glow-gold"
          >
            Order via WhatsApp 🥔
          </a>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
