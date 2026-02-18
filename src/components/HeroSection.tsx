import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-wheel.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen scroll-mt-24 flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={heroImage}
          alt="Premium alloy wheel showcase"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-2">
            <span className="text-foreground">PROJECT</span>
            <br />
            <span className="text-gradient-gold">WHEELS</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mt-6 tracking-wide"
        >
          Premium Tire Dealer & Repair Shop — OEM & aftermarket alloys, performance tyres, and precision 3D alignment in Delhi NCR
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="tel:9654299993"
            className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-display text-lg tracking-wider px-8 py-4 rounded-sm hover:opacity-90 transition-opacity glow-amber focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Call Project Wheels at 9654299993"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            CALL NOW — 9654299993
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          aria-label="Scroll down indicator"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
