import { motion } from "framer-motion";
import { CircleDot, Car, Bike, Settings, Wrench, Gauge } from "lucide-react";

const services = [
  {
    icon: CircleDot,
    title: "OEM & Aftermarket Alloys",
    description: "Premium alloy wheels from top manufacturers. OEM replacements and custom aftermarket options for every vehicle.",
  },
  {
    icon: Car,
    title: "Passenger & Luxury Tyres",
    description: "Radial tyres for sedans, SUVs, and luxury vehicles. Top brands for comfort, grip, and durability.",
  },
  {
    icon: Gauge,
    title: "Super Car / Bike Tyres",
    description: "High-performance tyres for supercars and sport bikes. Built for speed, precision, and maximum control.",
  },
  {
    icon: Settings,
    title: "3D Wheel Alignment",
    description: "State-of-the-art 3D alignment technology ensures perfect geometry for a smoother, safer ride.",
  },
  {
    icon: Wrench,
    title: "Wheel Balancing",
    description: "Precision balancing eliminates vibrations and ensures even tyre wear for longer life.",
  },
  {
    icon: Bike,
    title: "Bike Radials",
    description: "Premium radial tyres for motorcycles. Performance rubber for touring, sport, and cruiser bikes.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 bg-secondary/50 scroll-mt-24" aria-labelledby="services-heading">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="services-heading" className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" aria-hidden="true" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-sm p-8 hover:border-primary/40 transition-colors duration-300"
            >
              <service.icon className="w-10 h-10 text-white mb-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
