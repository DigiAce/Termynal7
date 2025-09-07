import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users } from "lucide-react";

const Packages = () => {
  const domesticPackages = [
    {
      title: "Goa Getaway",
      duration: "3 Nights / 4 Days",
      highlights: "Beaches, water sports & nightlife",
      price: "₹12,999",
      location: "Goa"
    },
    {
      title: "Kerala Backwaters",
      duration: "5 Nights / 6 Days", 
      highlights: "Houseboat, Munnar, Alleppey",
      price: "₹18,999",
      location: "Kerala"
    },
    {
      title: "Golden Triangle",
      duration: "5 Nights / 6 Days",
      highlights: "Delhi, Agra & Jaipur",
      price: "₹16,999",
      location: "North India"
    },
    {
      title: "Kashmir Paradise",
      duration: "4 Nights / 5 Days",
      highlights: "Srinagar, Gulmarg, Pahalgam",
      price: "₹22,999",
      location: "Kashmir"
    },
    {
      title: "Himachal Delight",
      duration: "6 Nights / 7 Days",
      highlights: "Shimla, Manali, Dharamshala",
      price: "₹19,999",
      location: "Himachal Pradesh"
    },
    {
      title: "Andaman Escape",
      duration: "5 Nights / 6 Days",
      highlights: "Port Blair, Havelock, Radhanagar Beach",
      price: "₹28,999",
      location: "Andaman"
    },
    {
      title: "Rajasthan Royal Tour",
      duration: "6 Nights / 7 Days",
      highlights: "Jaipur, Jodhpur, Udaipur, Jaisalmer",
      price: "₹24,999",
      location: "Rajasthan"
    },
    {
      title: "North East Explorer",
      duration: "7 Nights / 8 Days",
      highlights: "Shillong, Cherrapunji, Kaziranga, Guwahati",
      price: "₹26,999",
      location: "North East India"
    }
  ];

  const internationalPackages = [
    {
      title: "Thailand Special",
      duration: "4 Nights / 5 Days",
      highlights: "Bangkok & Pattaya / Phuket & Krabi",
      price: "₹32,999",
      location: "Thailand"
    },
    {
      title: "Singapore Getaway",
      duration: "3 Nights / 4 Days",
      highlights: "City tour, Sentosa, Universal Studios",
      price: "₹42,999",
      location: "Singapore"
    },
    {
      title: "Malaysia Explorer",
      duration: "4 Nights / 5 Days",
      highlights: "Kuala Lumpur & Genting Highlands",
      price: "₹28,999",
      location: "Malaysia"
    },
    {
      title: "Bali Escape",
      duration: "5 Nights / 6 Days",
      highlights: "Beaches, temples & Ubud tour",
      price: "₹38,999",
      location: "Bali, Indonesia"
    },
    {
      title: "Dubai Experience",
      duration: "4 Nights / 5 Days",
      highlights: "Desert Safari, Burj Khalifa, Dhow Cruise",
      price: "₹45,999",
      location: "Dubai, UAE"
    },
    {
      title: "Maldives Luxury Stay",
      duration: "4 Nights / 5 Days",
      highlights: "Water villa, snorkeling & island hopping",
      price: "₹89,999",
      location: "Maldives"
    },
    {
      title: "Vietnam & Cambodia",
      duration: "6 Nights / 7 Days",
      highlights: "Hanoi, Halong Bay, Siem Reap temples",
      price: "₹52,999",
      location: "Vietnam & Cambodia"
    },
    {
      title: "Europe Highlights",
      duration: "10 Nights / 11 Days",
      highlights: "Paris, Switzerland, Italy, Germany",
      price: "₹1,25,999",
      location: "Europe"
    },
    {
      title: "Sri Lanka Essence",
      duration: "4 Nights / 5 Days",
      highlights: "Colombo, Kandy, Bentota",
      price: "₹24,999",
      location: "Sri Lanka"
    }
  ];

  const PackageCard = ({ pkg, type }: { pkg: any, type: string }) => (
    <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 group">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="mb-2">
            {type === 'domestic' ? '🇮🇳 Domestic' : '🌍 International'}
          </Badge>
          <span className="text-2xl font-bold text-primary">{pkg.price}</span>
        </div>
        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
          {pkg.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{pkg.location}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">{pkg.duration}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {pkg.highlights}
          </p>
          <Button variant="hero" className="w-full mt-4">
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-ocean">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Travel Packages
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Discover amazing destinations with our carefully curated travel packages
          </p>
        </div>
      </section>

      {/* Domestic Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              🇮🇳 Domestic Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore the incredible beauty of India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {domesticPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} type="domestic" />
            ))}
          </div>
        </div>
      </section>

      {/* International Packages */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              🌍 International Packages
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience the world with our international destinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {internationalPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} type="international" />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Packages;