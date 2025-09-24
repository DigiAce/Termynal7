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
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Domestic Packages", href: "/domestic-packages" },
    { name: "International Packages", href: "/international-packages" },
  ];

  // Social media links
  const socialLinks = [
    // {
    //   Icon: Facebook,
    //   href: "https://www.facebook.com/yourpage",
    //   label: "Facebook",
    // },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/termynal7/",
      label: "Instagram",
    },
    // {
    //   Icon: Twitter,
    //   href: "https://www.twitter.com/yourprofile",
    //   label: "Twitter",
    // },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="flex flex-col">
            <div className="w-52 h-auto mb-4">
              <img src="logo2.png" alt="Termynal7 Logo" />
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed text-sm">
              Travel Redefined. We create journeys filled with unforgettable
              memories, ensuring every trip is seamless, memorable, and
              worry-free.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-primary-foreground hover:text-accent"
                  >
                    <social.Icon className="w-5 h-5" />
                  </Button>
                </a>
              ))}
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
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <div className="font-medium">+91 81100 07717</div>
                  <div className="font-medium">+91 81100 07716</div>
                  <div className="font-medium">+91 78711 30120</div>
                  <div className="text-sm text-primary-foreground/80">
                    24/7 Support Available
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <div className="font-medium">booking@termynal7.com</div>
                  <div className="text-sm text-primary-foreground/80">
                    Quick Response
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <div className="font-medium">
                    1/1A UR Nagar Anna Nagar West EXTN Chennai 50
                  </div>
                  <div className="text-sm text-primary-foreground/80">
                    Travel Office
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-primary-foreground/80 text-sm">
            © 2025 Termynal7. All rights reserved. Travel Redefined.{" "}
            <b>
              Powered By{" "}
              <a
                href="https://www.digiace.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                Digiace
              </a>
            </b>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-primary-foreground/80">
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
