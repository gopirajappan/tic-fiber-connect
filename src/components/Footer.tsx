import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import acnLogo from "@/assets/acn-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img src={acnLogo} alt="Arun Cable Net Works" className="h-16 w-auto mb-4 bg-background rounded-lg p-2" />
            <p className="text-background/80 text-sm mb-4">
              Authorized TIC Fiber Franchise (Chennai) - Providing high-speed fiber internet for rural areas.
            </p>
            <p className="text-xs text-background/60">
              Powered by TCCL GPON Technology
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Our Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Fiber To Home (FTTH)</li>
              <li>Cable TV Connection</li>
              <li>OTT Apps & IPTV</li>
              <li>Village Special Packages</li>
            </ul>
          </div>

          {/* Coverage Areas */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Coverage Areas</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                Srirengapuram, Theni
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                Nagalapuram, Theni
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                Gopalapuram, Theni
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:9952289289" className="hover:text-secondary transition-colors">
                  99522 89289 (Main)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:9976194041" className="hover:text-secondary transition-colors">
                  99761 94041 (Gopalapuram)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:arundigital.289@gmail.com" className="hover:text-secondary transition-colors">
                  arundigital.289@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-accent" />
                <a href="https://www.ticfiber.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                  www.ticfiber.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Arun Cable Net Works. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/about" className="text-sm text-background/60 hover:text-secondary transition-colors">
                About
              </Link>
              <Link to="/services" className="text-sm text-background/60 hover:text-secondary transition-colors">
                Services
              </Link>
              <Link to="/plans" className="text-sm text-background/60 hover:text-secondary transition-colors">
                Plans
              </Link>
              <Link to="/contact" className="text-sm text-background/60 hover:text-secondary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
