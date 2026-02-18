import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div>
            <span className="font-display text-xl tracking-wider text-foreground block mb-4">
              PROJECT <span className="text-gradient-gold">WHEELS</span>
            </span>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Premium tyres, alloys, and wheel alignment services. Your trusted automotive partner for quality and performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm tracking-wider text-foreground mb-4 uppercase">Quick Links</h3>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <a 
                href="#home" 
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                aria-label="Navigate to home section"
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                aria-label="Navigate to services section"
              >
                Services
              </a>
              <a 
                href="#gallery" 
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                aria-label="Navigate to gallery section"
              >
                Gallery
              </a>
              <a 
                href="#reviews" 
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                aria-label="Navigate to reviews section"
              >
                Reviews
              </a>
              <a 
                href="#contact" 
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                aria-label="Navigate to contact section"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-display text-sm tracking-wider text-foreground mb-4 uppercase">Connect With Us</h3>
            <div className="flex flex-col gap-3 mb-4">
              <a 
                href="tel:9654299993" 
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors"
                aria-label="Call us at 9654299993"
              >
                <Phone className="w-4 h-4" />
                <span>9654299993</span>
              </a>
              <a 
                href="mailto:info@projectwheels.com" 
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-4 h-4" />
                <span>info@projectwheels.com</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                <span>Delhi NCR, India</span>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com/projectwheels"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-4 h-4 text-foreground" />
              </a>
              <a
                href="https://instagram.com/projectwheels"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Visit our Instagram profile"
              >
                <Instagram className="w-4 h-4 text-foreground" />
              </a>
              <a
                href="https://twitter.com/projectwheels"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Visit our Twitter profile"
              >
                <Twitter className="w-4 h-4 text-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <span className="text-muted-foreground text-xs">
            © {currentYear} Project Wheels. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a 
              href="/privacy-policy" 
              className="text-muted-foreground text-xs hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-service" 
              className="text-muted-foreground text-xs hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
