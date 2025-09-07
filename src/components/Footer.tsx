import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Packages", href: "#packages" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Flight Bookings",
    "Hotel Reservations",
    "Holiday Packages",
    "Visa Assistance",
    "Travel Insurance",
    "Group Travel",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex flex-col w-52 h-auto mb-4">
              <img src="logo2.png" alt="Termynal7 Logo" />
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Travel Redefined. We create journeys filled with unforgettable
              memories, ensuring every trip is seamless, memorable, and
              worry-free.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-accent"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-accent"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-accent"
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-primary-foreground/80 text-sm"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <div className="font-medium">+91 9940882200</div>
                  <div className="text-sm text-primary-foreground/80">
                    24/7 Support Available
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <div className="font-medium">mail@gtholidays.in</div>
                  <div className="text-sm text-primary-foreground/80">
                    Quick Response
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <div className="font-medium">South India</div>
                  <div className="text-sm text-primary-foreground/80">
                    Travel Office
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/80 text-sm">
            © 2024 Termynal7. All rights reserved. Travel Redefined.
          </div>
          <div className="flex space-x-6 text-sm text-primary-foreground/80 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Cancellation Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
