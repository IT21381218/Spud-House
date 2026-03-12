import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  text: string;
  rating: number;
  date: string;
}

const ReviewCard = ({ name, text, rating, date }: ReviewCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-border/30 rounded-2xl p-6 hover:border-primary/15 transition-all duration-500"
    >
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={12}
            className={i < rating ? "text-primary fill-primary" : "text-muted-foreground"}
          />
        ))}
      </div>
      <p className="text-foreground/60 text-sm leading-relaxed mb-5">"{text}"</p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-foreground/80">{name}</span>
        <span className="text-xs text-muted-foreground">{date}</span>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
