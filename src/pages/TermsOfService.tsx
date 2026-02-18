import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Terms of <span className="text-gradient-gold">Service</span>
          </h1>
          
          <div className="prose prose-slate max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Services Provided</h2>
              <p>
                Project Wheels provides professional automotive services including:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Sale and installation of OEM & aftermarket alloy wheels</li>
                <li>Premium radial tyres for cars and motorcycles</li>
                <li>3D wheel alignment services</li>
                <li>Precision wheel balancing</li>
                <li>Expert consultation and recommendations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Service Warranty</h2>
              <p>
                All products and services are covered by manufacturer warranties where applicable. Installation services are guaranteed for workmanship quality. Please retain your receipt for warranty claims.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Payment Terms</h2>
              <p>
                Payment is expected upon completion of services unless prior arrangements have been made. We accept cash, credit cards, and digital payment methods.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Appointment Policy</h2>
              <p>
                We recommend scheduling appointments for faster service. Walk-ins are welcome but may experience wait times. Cancellations should be made at least 24 hours in advance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Liability</h2>
              <p>
                While we take utmost care in providing quality services, we are not liable for:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Pre-existing vehicle damage not disclosed</li>
                <li>Normal wear and tear of installed products</li>
                <li>Damage resulting from improper vehicle use after service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">Contact Information</h2>
              <p>
                For questions regarding these terms:
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

export default TermsOfService;
