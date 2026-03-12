import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5">
      <a
        href="https://wa.me/94763057199?text=Hi%20Spud%20House!%20I'd%20like%20to%20place%20an%20order"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-foreground shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp order"
        style={{ boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)" }}
      >
        <MessageCircle size={20} />
      </a>
      <a
        href="tel:+94763057199"
        className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center text-primary-foreground shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Call now"
      >
        <Phone size={20} />
      </a>
    </div>
  );
};

export default FloatingButtons;
