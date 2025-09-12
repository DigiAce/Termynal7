import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Calendar,
  Users,
  Plane,
  Camera,
  Mountain,
  Waves,
  Globe,
} from "lucide-react";

const InternationalPackages = () => {
  const internationalPackages = [
    {
      title: "Thailand Special",
      duration: "4 Nights / 5 Days",
      highlights: "Bangkok & Pattaya / Phuket & Krabi",
      price: "₹32,999",
      location: "Thailand",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    },
    {
      title: "Singapore Getaway",
      duration: "3 Nights / 4 Days",
      highlights: "City tour, Sentosa, Universal Studios",
      price: "₹42,999",
      location: "Singapore",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=250&fit=crop",
    },
    {
      title: "Malaysia Explorer",
      duration: "4 Nights / 5 Days",
      highlights: "Kuala Lumpur & Genting Highlands",
      price: "₹28,999",
      location: "Malaysia",
      image:
        "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=250&fit=crop",
    },
    {
      title: "Bali Escape",
      duration: "5 Nights / 6 Days",
      highlights: "Beaches, temples & Ubud tour",
      price: "₹38,999",
      location: "Bali, Indonesia",
      image:
        "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=250&fit=crop",
    },
    {
      title: "Dubai Experience",
      duration: "4 Nights / 5 Days",
      highlights: "Desert Safari, Burj Khalifa, Dhow Cruise",
      price: "₹45,999",
      location: "Dubai, UAE",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop",
    },
    {
      title: "Maldives Luxury Stay",
      duration: "4 Nights / 5 Days",
      highlights: "Water villa, snorkeling & island hopping",
      price: "₹89,999",
      location: "Maldives",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=250&fit=crop",
    },
    {
      title: "Vietnam & Cambodia",
      duration: "6 Nights / 7 Days",
      highlights: "Hanoi, Halong Bay, Siem Reap temples",
      price: "₹52,999",
      location: "Vietnam & Cambodia",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?w=400&h=250&fit=crop",
    },
    {
      title: "Europe Highlights",
      duration: "10 Nights / 11 Days",
      highlights: "Paris, Switzerland, Italy, Germany",
      price: "₹1,25,999",
      location: "Europe",
      image:
        "https://images.unsplash.com/photo-1471623432079-b009d30b6729?w=400&h=250&fit=crop",
    },
    {
      title: "Sri Lanka Essence",
      duration: "4 Nights / 5 Days",
      highlights: "Colombo, Kandy, Bentota",
      price: "₹24,999",
      location: "Sri Lanka",
      image:
        "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=400&h=250&fit=crop",
    },
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
          <Badge
            variant="secondary"
            className="bg-background/90 backdrop-blur-sm"
          >
            🌍 International
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <span className="text-xl font-bold text-primary-foreground bg-black/55 backdrop-blur-sm px-3 py-1 rounded-full">
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
          <p className="text-sm text-muted-foreground">{pkg.highlights}</p>
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
      </CardContent>
    </Card>
  );

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-ocean">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]"></div>
          <div className="absolute top-24 left-24 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-24 right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Plane className="absolute top-1/4 left-1/4 w-8 h-8 text-white/30 animate-bounce delay-300" />
          <Camera className="absolute top-1/3 right-1/3 w-6 h-6 text-white/30 animate-bounce delay-700" />
          <Mountain className="absolute bottom-1/3 left-1/5 w-10 h-10 text-white/30 animate-bounce delay-500" />
          <Waves className="absolute bottom-1/4 right-1/4 w-7 h-7 text-white/30 animate-bounce delay-1000" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Transparent Background Image */}

          {/* Overlay for Smooth Readability */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 rounded-2xl"></div> */}

          {/* Main Content */}
          <div className="relative z-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Globe className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Travel Redefined</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              International Packages{" "}
              <span className="block bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                <img
                  src="logo2.png"
                  alt="Termynal7 Logo"
                  className="h-28 w-auto inline-block"
                />
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Creating unforgettable journeys where every destination becomes a
              story and every story becomes a cherished memory.
            </p>

            {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300"
              >
                Discover Our Story
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-black hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300"
              >
                View Our Packages
              </Button>
            </div> */}
          </div>
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
