import { motion } from "framer-motion";
import { Flame, ChefHat } from "lucide-react";

interface FoodCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  spicy?: boolean;
  cheesy?: boolean;
  index?: number;
}

const FoodCard = ({ image, name, description, price, spicy, cheesy, index = 0 }: FoodCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl overflow-hidden bg-card border border-border/30 hover:border-primary/20 transition-all duration-500"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 flex gap-1.5">
          {spicy && (
            <span className="bg-destructive/80 backdrop-blur-sm rounded-full p-1.5">
              <Flame size={12} className="text-foreground" />
            </span>
          )}
          {cheesy && (
            <span className="bg-primary/80 backdrop-blur-sm rounded-full p-1.5">
              <ChefHat size={12} className="text-primary-foreground" />
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg text-foreground tracking-wide leading-tight">{name}</h3>
          <span className="font-display text-lg text-primary whitespace-nowrap">{price}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default FoodCard;
