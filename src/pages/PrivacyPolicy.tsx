import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Privacy <span className="text-gradient-gold">Policy</span>
          </h1>
          
          <div className="prose prose-slate max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Information We Collect</h2>
              <p>
                At Project Wheels, we respect your privacy. We collect only the information necessary to provide our services, including:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Contact information (name, phone number, email)</li>
                <li>Vehicle information for service purposes</li>
                <li>Service history and preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">How We Use Your Information</h2>
              <p>
                We use your information to:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Provide automotive services and support</li>
                <li>Send service reminders and updates</li>
                <li>Improve our services and customer experience</li>
                <li>Communicate special offers (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information with:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Contact Us</h2>
              <p>
                If you have questions about our Privacy Policy, please contact us at:
              </p>
              <p className="font-semibold">
                Phone: <a href="tel:9654299993" className="text-primary hover:underline">9654299993</a><br />
                Email: <a href="mailto:info@projectwheels.com" className="text-primary hover:underline">info@projectwheels.com</a>
              </p>
            </section>

            <section className="text-sm text-muted-foreground/80 pt-8 border-t border-border">
              <p>Last Updated: February 18, 2026</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
