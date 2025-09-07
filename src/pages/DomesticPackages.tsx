import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users } from "lucide-react";

const DomesticPackages = () => {
  const domesticPackages = [
    {
      title: "Goa Getaway",
      duration: "3 Nights / 4 Days",
      highlights: "Beaches, water sports & nightlife",
      price: "₹12,999",
      location: "Goa",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=250&fit=crop"
    },
    {
      title: "Kerala Backwaters",
      duration: "5 Nights / 6 Days", 
      highlights: "Houseboat, Munnar, Alleppey",
      price: "₹18,999",
      location: "Kerala",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=250&fit=crop"
    },
    {
      title: "Golden Triangle",
      duration: "5 Nights / 6 Days",
      highlights: "Delhi, Agra & Jaipur",
      price: "₹16,999",
      location: "North India",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=250&fit=crop"
    },
    {
      title: "Kashmir Paradise",
      duration: "4 Nights / 5 Days",
      highlights: "Srinagar, Gulmarg, Pahalgam",
      price: "₹22,999",
      location: "Kashmir",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
    },
    {
      title: "Himachal Delight",
      duration: "6 Nights / 7 Days",
      highlights: "Shimla, Manali, Dharamshala",
      price: "₹19,999",
      location: "Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3b8c7ad15?w=400&h=250&fit=crop"
    },
    {
      title: "Andaman Escape",
      duration: "5 Nights / 6 Days",
      highlights: "Port Blair, Havelock, Radhanagar Beach",
      price: "₹28,999",
      location: "Andaman",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop"
    },
    {
      title: "Rajasthan Royal Tour",
      duration: "6 Nights / 7 Days",
      highlights: "Jaipur, Jodhpur, Udaipur, Jaisalmer",
      price: "₹24,999",
      location: "Rajasthan",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=250&fit=crop"
    },
    {
      title: "North East Explorer",
      duration: "7 Nights / 8 Days",
      highlights: "Shillong, Cherrapunji, Kaziranga, Guwahati",
      price: "₹26,999",
      location: "North East India",
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=250&fit=crop"
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
            🇮🇳 Domestic
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
            🇮🇳 Domestic Packages
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Explore the incredible beauty of India with our carefully curated domestic travel packages
          </p>
        </div>
      </section>

      {/* Domestic Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {domesticPackages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DomesticPackages;