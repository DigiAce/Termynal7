import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroWater from "@/assets/hero-water.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroWater})` }}
      >
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block text-accent text-lg font-medium mb-4 animate-float">
              Experience the World
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Travel{" "}
              <span className="bg-gradient-sunset bg-clip-text text-transparent">
                Redefined
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            At Termynal7, we believe every journey should be seamless,
            memorable, and worry-free. Discover personalized travel experiences
            crafted just for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <Button variant="hero" size="lg" className="group">
              Explore Packages
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button> */}
            <a
              href="https://wa.me/918110007717?text=Hi%20I%20want%20to%20book%20now"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="hero"
                className="w-full mt-4 flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M20.52 3.48a11.89 11.89 0 0 0-16.84 0 11.89 11.89 0 0 0-2.2 13.64L1 23l5.97-1.57a11.9 11.9 0 0 0 13.55-2.2 11.89 11.89 0 0 0 0-16.84ZM12 20.33a8.32 8.32 0 0 1-4.25-1.17l-.3-.18-3.54.93.95-3.45-.19-.31a8.34 8.34 0 1 1 7.33 4.18Zm4.55-6.34c-.25-.12-1.48-.73-1.71-.81s-.4-.12-.57.12-.65.81-.8.97-.3.18-.55.06a6.77 6.77 0 0 1-2-1.23 7.53 7.53 0 0 1-1.39-1.71c-.14-.24 0-.38.1-.5.1-.1.25-.3.37-.45s.16-.25.25-.42.04-.31-.02-.43c-.06-.12-.57-1.38-.78-1.89-.2-.48-.41-.42-.57-.43h-.49c-.16 0-.43.06-.65.31s-.86.84-.86 2.06.88 2.4 1 2.57 1.73 2.64 4.19 3.71c.58.25 1.03.4 1.38.51.58.18 1.1.15 1.51.09.46-.07 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.2s-.22-.18-.47-.3Z" />
                </svg>
                Book on WhatsApp
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">10K+</div>
              <div className="text-sm">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">50+</div>
              <div className="text-sm">Destinations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
