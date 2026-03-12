import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ReviewCard from "@/components/ReviewCard";

const allReviews = [
  { name: "Amara S.", text: "Best loaded fries in Colombo! The cheese sauce is unreal. Definitely coming back every week.", rating: 5, date: "2 weeks ago" },
  { name: "Dinesh K.", text: "Finally someone doing loaded potatoes right. The spicy chicken bowl is insane!", rating: 5, date: "1 month ago" },
  { name: "Priya M.", text: "Late night cravings solved forever. The vibes, the food, everything is perfect.", rating: 5, date: "3 weeks ago" },
  { name: "Nadeesha R.", text: "The nacho cheese fries are addictive. My friends and I visit every weekend now.", rating: 5, date: "1 week ago" },
  { name: "Kasun P.", text: "Amazing food for the price. The baked potatoes are massive and so good.", rating: 5, date: "2 months ago" },
  { name: "Sachini W.", text: "Love the vibe here! Great food, friendly staff, and the WhatsApp ordering is super convenient.", rating: 5, date: "3 weeks ago" },
  { name: "Ravindu J.", text: "Brought my whole crew here. Everyone loved it. The fire fries are legendary!", rating: 5, date: "1 month ago" },
  { name: "Thilini F.", text: "Perfect late-night spot. The milkshakes are thick and creamy. 10/10 would recommend!", rating: 5, date: "2 weeks ago" },
  { name: "Chamod D.", text: "The BBQ bacon fries changed my life. Not even joking. Go try them NOW.", rating: 5, date: "5 days ago" },
  { name: "Malsha H.", text: "Such a unique concept for Colombo. Potato loaded everything! Heaven for fry lovers.", rating: 5, date: "1 month ago" },
  { name: "Isuru B.", text: "Great portion sizes and the food is always hot and fresh. Top quality!", rating: 5, date: "6 days ago" },
  { name: "Nethmi A.", text: "Finally a spot that understands what loaded means. Cheese on cheese on cheese!", rating: 5, date: "2 weeks ago" },
  { name: "Lakshan G.", text: "The spud bowls are filling and delicious. Best fast food experience in the area.", rating: 5, date: "3 weeks ago" },
  { name: "Kavisha T.", text: "5 stars isn't enough. This place deserves 10! The creamy mushroom bowl is chef's kiss.", rating: 5, date: "1 week ago" },
];

const ReviewsPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading title="CUSTOMER REVIEWS" subtitle="What Colombo thinks about Spud House" />

        {/* Rating overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center mb-16 max-w-md mx-auto"
        >
          <div className="font-display text-7xl text-gradient-gold">5.0</div>
          <div className="flex justify-center gap-1 mt-3 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="text-primary fill-primary" />
            ))}
          </div>
          <p className="text-muted-foreground text-sm">Based on 14 Google reviews</p>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allReviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://g.page/spudhouse/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-gold text-primary-foreground px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform duration-300 glow-gold"
          >
            Leave a Review ⭐
          </a>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;
