import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Srivastava Sons foods",
    vehicle: "BMW X1",
    rating: 5,
    text: "Excellent service provided by Project Wheels, I saw their catalogue of Luxury cars, I highly recommend this shop for best service at the most efficient rates.",
  },
  {
    name: "Deepak Singh",
    vehicle: "Renault Kwid",
    text: "I had done wheel alignment years ago and the work was done excellently",
    rating: 5,
  },
  {
    name: "Nitu Kumar",
    vehicle: "Ford Ecosport",
    rating: 5,
    text: "Great Service and great experience, best tyre and alloys showroom in Noida, best price loved it!!",
  },
  {
    name: "Kul prasad dhakal",
    vehicle: "honda city",
    rating: 5,
    text: "Great experience, got continental UC6 tyres for my honda city at the most affordable price in Noida. Best tyre dealer in Noida. HIGHLY RECOMMENDED.",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 px-6 scroll-mt-24" aria-labelledby="reviews-heading">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="reviews-heading" className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Customer <span className="text-gradient-gold">Reviews</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" aria-hidden="true" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-sm p-8 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" aria-hidden="true" />
              <div className="flex gap-1 mb-4" role="img" aria-label={`${review.rating} star rating`}>
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-[hsl(var(--star-accent))] text-[hsl(var(--star-accent))]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-secondary-foreground text-sm leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div>
                <span className="font-display text-foreground text-base tracking-wide">
                  {review.name}
                </span>
                <span className="block text-muted-foreground text-xs mt-1">
                  {review.vehicle}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
