import { Scale, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Demo", href: "#demo" },
        { name: "Pricing", href: "#pricing" },
        { name: "Security", href: "#security" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Team", href: "#team" },
        { name: "Careers", href: "#careers" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "API Reference", href: "#api" },
        { name: "Legal Guide", href: "#guide" },
        { name: "Support", href: "#support" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Data Protection", href: "#data" },
        { name: "Compliance", href: "#compliance" }
      ]
    }
  ];

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Scale className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold font-display">NyaySetu</span>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Democratizing legal access through AI-powered intelligence. Making justice accessible for every citizen.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-white/80">contact@nyaysetu.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-white/80">+91 9322***510</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-white/80">Pune, India</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-accent transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/20 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-white/80 mb-6">
              Get the latest updates on AI legal technology and platform developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-accent transition-colors"
              />
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent-light transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white/70">
            © {currentYear} NyaySetu. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-white/70">
            <span>Made in India</span>
            <div className="flex space-x-4">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
              <span className="text-sm">Serving 10k+ citizens with AI-powered legal assistance</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};