import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import gallery1 from "@/assets/1.png";
import gallery2 from "@/assets/2.png";
import gallery3 from "@/assets/3.png";
import gallery4 from "@/assets/6.png";
import gallery5 from "@/assets/4.png";
import gallery6 from "@/assets/5.png";

const images = [
  { src: gallery1, alt: "Premium alloy wheel", label: "Aftermarket Alloy" },
  { src: gallery2, alt: "Performance tyre tread", label: "Performance Tyre" },
  { src: gallery3, alt: "3D wheel alignment", label: "3D Alignment" },
  { src: gallery4, alt: "Gold luxury alloy wheel", label: "Luxury Alloy" },
  { src: gallery5, alt: "Sport bike wheel", label: "Bike Radial" },
  { src: gallery6, alt: "Tyre shop display", label: "Our Workshop" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 bg-secondary/50 scroll-mt-24" aria-labelledby="gallery-heading">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="gallery-heading" className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Our <span className="text-gradient-gold">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" aria-hidden="true" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.button
              key={img.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onClick={() => setSelected(i)}
              className="group relative aspect-square overflow-hidden rounded-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label={`View ${img.label} in fullscreen`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                width="400"
                height="400"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-display text-foreground text-lg tracking-wider">
                  {img.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
