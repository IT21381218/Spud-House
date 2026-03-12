import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-2xl text-gradient-gold tracking-widest mb-3">SPUD HOUSE</h3>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-xs">
              Colombo's favorite loaded potato spot. Crispy fries, cheesy baked potatoes, and bold flavors — every evening from 5 PM.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-display text-sm text-primary tracking-widest">FIND US</h4>
            <div className="flex items-start gap-3 text-xs text-muted-foreground">
              <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
              <span>VVM4+Q5J, Colombo, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Phone size={14} className="text-primary shrink-0" />
              <a href="tel:+94763057199" className="hover:text-primary transition-colors">076 305 7199</a>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Clock size={14} className="text-primary shrink-0" />
              <span>Opens daily at 5:00 PM</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-display text-sm text-primary tracking-widest">CONNECT</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">Dine-in • Takeaway</p>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-6 text-center text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Spud House
        </div>
      </div>
    </footer>
  );
};

export default Footer;
