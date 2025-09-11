import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Phone, ChevronDown, Waves, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-elegant">
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-ocean opacity-5 animate-pulse"></div>

      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="group flex items-center space-x-3">
            {/* <div className="relative">
              <div className="absolute inset-0 bg-gradient-ocean rounded-full opacity-20 blur-lg group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-gradient-ocean p-3 rounded-full shadow-glow">
                <Waves className=" text-primary-foreground" />
              </div>
            </div> */}
            <div className="flex flex-col w-52 h-auto">
              <img src="logo2.png" alt="Termynal7 Logo" />
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-ocean opacity-0 group-hover:opacity-10 rounded-lg transition-all duration-300 scale-0 group-hover:scale-100"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-ocean group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
            ))}

            {/* Enhanced Packages Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="relative px-4 py-2 flex items-center text-foreground hover:text-primary transition-all duration-300 font-medium group">
                <span className="relative z-10">Packages</span>
                <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-ocean opacity-0 group-hover:opacity-10 rounded-lg transition-all duration-300 scale-0 group-hover:scale-100"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-ocean group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card/95 backdrop-blur-lg border-border/50 shadow-elegant mt-2 min-w-[220px] rounded-xl">
                <div className="p-2 space-y-1">
                  <DropdownMenuItem asChild>
                    <Link
                      to="/domestic-packages"
                      className="group flex items-center w-full cursor-pointer px-3 py-3 rounded-lg hover:bg-gradient-ocean/10 transition-all duration-300"
                    >
                      <span className="text-2xl mr-3">🇮🇳</span>
                      <div>
                        <div className="font-medium">Domestic Packages</div>
                        <div className="text-xs text-muted-foreground">
                          Explore India
                        </div>
                      </div>
                      <Sparkles className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/international-packages"
                      className="group flex items-center w-full cursor-pointer px-3 py-3 rounded-lg hover:bg-gradient-ocean/10 transition-all duration-300"
                    >
                      <span className="text-2xl mr-3">🌍</span>
                      <div>
                        <div className="font-medium">
                          International Packages
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Worldwide Adventures
                        </div>
                      </div>
                      <Sparkles className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Enhanced Contact Button */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+918110007717" className="block">
              <div className="flex items-center px-4 py-3 text-sm text-muted-foreground bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span className="font-medium">+91 81100 07717</span>
              </div>
            </a>

            <Button
              asChild
              variant="hero"
              size="sm"
              className="relative overflow-hidden group shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <a
                href="https://wa.me/918110007717?text=Hi%2C%20I%20would%20like%20to%20book%20now"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Book Now
              </a>
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden relative p-2 rounded-lg bg-muted/50 backdrop-blur-sm hover:bg-gradient-ocean/10 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 border-t border-border/50">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group flex items-center px-4 py-3 text-foreground hover:text-primary hover:bg-gradient-ocean/10 rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen
                      ? "fade-in-up 0.3s ease-out forwards"
                      : "none",
                  }}
                >
                  <span className="font-medium">{item.name}</span>
                  <ChevronDown className="w-4 h-4 ml-auto rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              ))}

              <div className="h-px bg-border/50 my-2"></div>

              <Link
                to="/domestic-packages"
                className="group flex items-center px-4 py-3 text-foreground hover:text-primary hover:bg-gradient-ocean/10 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xl mr-3">🇮🇳</span>
                <span className="font-medium">Domestic Packages</span>
                <ChevronDown className="w-4 h-4 ml-auto rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/international-packages"
                className="group flex items-center px-4 py-3 text-foreground hover:text-primary hover:bg-gradient-ocean/10 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xl mr-3">🌍</span>
                <span className="font-medium">International Packages</span>
                <ChevronDown className="w-4 h-4 ml-auto rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <div className="h-px bg-border/50 my-2"></div>

              <a href="tel:+918110007717" className="block">
                <div className="flex items-center px-4 py-3 text-sm text-muted-foreground bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  <span className="font-medium">+91 81100 07717</span>
                </div>
              </a>

              <Button
                asChild
                variant="hero"
                size="sm"
                className="relative overflow-hidden group shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                <a
                  href="https://wa.me/918110007717?text=Hi%2C%20I%20would%20like%20to%20book%20now"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Book Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
