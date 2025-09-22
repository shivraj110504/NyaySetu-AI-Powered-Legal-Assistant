import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Demo', href: '#demo' },
    { name: 'Features', href: '#features' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" : "bg-background/80 backdrop-blur-sm"
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Scale className="w-8 h-8 text-accent" />
            <span className="text-2xl font-bold font-display">NyaySetu</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-accent/10"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-accent text-accent-foreground hover:bg-accent-light">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-md border-t border-border/50",
          isOpen ? "max-h-96 py-4" : "max-h-0"
        )}>
          <div className="flex flex-col space-y-2 pt-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-accent/10"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-accent text-accent-foreground hover:bg-accent-light mt-4 mx-4">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};