import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 scroll-mt-24" aria-labelledby="contact-heading">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="contact-heading" className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto mt-2 mb-12 rounded-full" aria-hidden="true" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Phone,
              label: "Call Us",
              value: "9654299993",
              href: "tel:9654299993",
            },
            {
              icon: Clock,
              label: "Working Hours",
              value: "Mon–Sat, 9AM–8PM",
            },
            {
              icon: MapPin,
              label: "Visit Us",
              value: "Your Trusted Local Shop",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <span className="text-muted-foreground text-sm">{item.label}</span>
              {item.href ? (
                <a href={item.href} className="font-display text-xl text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-sm" aria-label={item.label}>
                  {item.value}
                </a>
              ) : (
                <span className="font-display text-xl text-foreground">{item.value}</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16"
        >
          <a
            href="tel:9654299993"
            className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground font-display text-lg tracking-wider px-10 py-4 rounded-sm hover:opacity-90 transition-opacity glow-amber focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Call to book an appointment at 9654299993"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            BOOK AN APPOINTMENT
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
