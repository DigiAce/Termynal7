import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  DollarSign, 
  Shield, 
  Clock
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Heart,
      title: "Expert Guidance",
      description: "Personal touch with expert guidance tailored to your unique travel preferences and needs."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Affordable packages with transparent pricing - no hidden fees, no surprise costs."
    },
    {
      icon: Shield,
      title: "Safety & Comfort",
      description: "Commitment to your comfort, convenience, and safety throughout your entire journey."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support whenever you need assistance, anywhere in the world."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-medium mb-4 block">Why Choose Termynal7</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Journey, Our Passion
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At Termynal7, "Travel Redefined" is not just a slogan—it's our promise. 
              We don't just take you to destinations, we create journeys filled with unforgettable memories.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button variant="hero" size="lg">
              Start Planning Today
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6 border-0 bg-gradient-ocean text-primary-foreground">
              <CardContent className="p-0">
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-primary-foreground/80">Happy Travelers</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 bg-card shadow-elegant">
              <CardContent className="p-0">
                <div className="text-4xl font-bold mb-2 text-accent">50+</div>
                <div className="text-muted-foreground">Destinations</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 bg-card shadow-elegant">
              <CardContent className="p-0">
                <div className="text-4xl font-bold mb-2 text-accent">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-0 bg-accent text-accent-foreground">
              <CardContent className="p-0">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-accent-foreground/80">Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;