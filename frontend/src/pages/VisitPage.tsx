import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, UtensilsCrossed } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const VisitPage = () => {
  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading title="VISIT US" subtitle="Come taste the best potatoes in Colombo" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-primary tracking-wider mb-1">ADDRESS</h3>
                  <p className="text-foreground/70">VVM4+Q5J, Colombo, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center shrink-0">
                  <Phone size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-primary tracking-wider mb-1">PHONE</h3>
                  <a href="tel:+94763057199" className="text-foreground/70 hover:text-primary transition-colors">076 305 7199</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center shrink-0">
                  <Clock size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-primary tracking-wider mb-1">HOURS</h3>
                  <p className="text-foreground/70">Opens daily at 5:00 PM</p>
                  <p className="text-sm text-muted-foreground">Evening fast food spot</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center shrink-0">
                  <UtensilsCrossed size={22} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-primary tracking-wider mb-1">DINING</h3>
                  <p className="text-foreground/70">Dine-in & Takeaway available</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/place/VVM4%2BQ5J+Colombo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 gradient-gold text-primary-foreground px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform duration-300 glow-gold"
              >
                <Navigation size={18} /> Get Directions
              </a>
              <a
                href="tel:+94763057199"
                className="inline-flex items-center gap-2 border border-primary/40 text-primary px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-primary/10 transition-all duration-300"
              >
                <Phone size={18} /> Call Now
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border min-h-[400px]"
          >
            <iframe
              title="Spud House Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.8866451039758!2d79.85517377416583!3d6.884389185959227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b001ad7fa6f%3A0x98863a518c12837a!2sSpud%20House!5e0!3m2!1sen!2slk!4v1773508285635!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VisitPage;
