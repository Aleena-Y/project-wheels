import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "#home", ariaLabel: "Navigate to home section" },
  { label: "Services", href: "#services", ariaLabel: "View our services" },
  { label: "Gallery", href: "#gallery", ariaLabel: "Browse our gallery" },
  { label: "Reviews", href: "#reviews", ariaLabel: "Read customer reviews" },
  { label: "Contact", href: "#contact", ariaLabel: "Contact us" },
];

const Navigation = () => {
  const [rotation, setRotation] = useState(0);
  const lastScrollY = useRef(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentScroll = window.scrollY;
      const delta = currentScroll - lastScrollY.current;

      lastScrollY.current = currentScroll;

      if (frame.current !== null) {
        return;
      }

      frame.current = window.requestAnimationFrame(() => {
        setRotation((prev) => prev + delta * 0.35);
        frame.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current !== null) {
        window.cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-40" role="banner">
      <div className="border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-4">
          <nav 
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.3em]"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-sm px-1"
                aria-label={item.ariaLabel}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a 
            href="#home" 
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-sm"
            aria-label="Project Wheels - Go to top"
          >
            <img
              src="/project-wheels-logo.png"
              alt="Project Wheels logo featuring a premium alloy wheel design"
              className="h-10 w-10 origin-center object-contain transition-transform duration-150 md:h-12 md:w-12"
              style={{ transform: `rotate(${rotation}deg)` }}
              width="48"
              height="48"
            />
            <span className="hidden text-lg font-display tracking-wider text-foreground sm:inline">
              PROJECT <span className="text-gradient-gold">WHEELS</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
