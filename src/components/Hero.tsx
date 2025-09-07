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
            <Button variant="hero" size="lg" className="group">
              Explore Packages
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Plan My Trip
            </Button>
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
