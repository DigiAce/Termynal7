import { Card, CardContent } from "@/components/ui/card";
import { 
  Plane, 
  Hotel, 
  Map, 
  FileCheck, 
  Shield, 
  Smartphone,
  Users,
  Headphones
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Flight Bookings",
      description: "Domestic & international flights at competitive fares with flexible booking options."
    },
    {
      icon: Hotel,
      title: "Hotel Reservations", 
      description: "Wide range of stays from budget-friendly accommodations to luxury resorts."
    },
    {
      icon: Map,
      title: "Holiday Packages",
      description: "Tailor-made itineraries to destinations worldwide, crafted to your preferences."
    },
    {
      icon: FileCheck,
      title: "Visa Assistance",
      description: "Fast, reliable, and hassle-free processing for major destinations globally."
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Complimentary coverage with all bookings for added peace of mind."
    },
    {
      icon: Smartphone,
      title: "Free International SIM",
      description: "Stay connected effortlessly while abroad with our complimentary SIM cards."
    },
    {
      icon: Users,
      title: "Group Travel",
      description: "Specialized packages for corporate trips, family tours, and student groups."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Assistance before, during, and after your trip for a smooth travel experience."
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-medium mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for the Perfect Trip
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From planning to execution, we handle every detail of your journey 
            so you can focus on creating unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;