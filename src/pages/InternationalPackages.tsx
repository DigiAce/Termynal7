import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users } from "lucide-react";

const InternationalPackages = () => {
  const internationalPackages = [
    {
      title: "Thailand Special",
      duration: "4 Nights / 5 Days",
      highlights: "Bangkok & Pattaya / Phuket & Krabi",
      price: "₹32,999",
      location: "Thailand",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
    },
    {
      title: "Singapore Getaway",
      duration: "3 Nights / 4 Days",
      highlights: "City tour, Sentosa, Universal Studios",
      price: "₹42,999",
      location: "Singapore",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=250&fit=crop"
    },
    {
      title: "Malaysia Explorer",
      duration: "4 Nights / 5 Days",
      highlights: "Kuala Lumpur & Genting Highlands",
      price: "₹28,999",
      location: "Malaysia",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=250&fit=crop"
    },
    {
      title: "Bali Escape",
      duration: "5 Nights / 6 Days",
      highlights: "Beaches, temples & Ubud tour",
      price: "₹38,999",
      location: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=250&fit=crop"
    },
    {
      title: "Dubai Experience",
      duration: "4 Nights / 5 Days",
      highlights: "Desert Safari, Burj Khalifa, Dhow Cruise",
      price: "₹45,999",
      location: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop"
    },
    {
      title: "Maldives Luxury Stay",
      duration: "4 Nights / 5 Days",
      highlights: "Water villa, snorkeling & island hopping",
      price: "₹89,999",
      location: "Maldives",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=250&fit=crop"
    },
    {
      title: "Vietnam & Cambodia",
      duration: "6 Nights / 7 Days",
      highlights: "Hanoi, Halong Bay, Siem Reap temples",
      price: "₹52,999",
      location: "Vietnam & Cambodia",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=400&h=250&fit=crop"
    },
    {
      title: "Europe Highlights",
      duration: "10 Nights / 11 Days",
      highlights: "Paris, Switzerland, Italy, Germany",
      price: "₹1,25,999",
      location: "Europe",
      image: "https://images.unsplash.com/photo-1471623432079-b009d30b6729?w=400&h=250&fit=crop"
    },
    {
      title: "Sri Lanka Essence",
      duration: "4 Nights / 5 Days",
      highlights: "Colombo, Kandy, Bentota",
      price: "₹24,999",
      location: "Sri Lanka",
      image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=400&h=250&fit=crop"
    }
  ];

  const PackageCard = ({ pkg }: { pkg: any }) => (
    <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 group overflow-hidden">
      <div className="relative">
        <img 
          src={pkg.image} 
          alt={pkg.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
            🌍 International
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <span className="text-xl font-bold text-primary-foreground bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
            {pkg.price}
          </span>
        </div>
      </div>
      <CardHeader>
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
            🌍 International Packages
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Experience the world with our carefully curated international travel packages
          </p>
        </div>
      </section>

      {/* International Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {internationalPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default InternationalPackages;