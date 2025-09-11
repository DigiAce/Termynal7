import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Award,
  Users,
  Globe,
  Heart,
  MapPin,
  Clock,
  Shield,
  Star,
  Plane,
  Camera,
  Mountain,
  Waves,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Professional travel consultants with years of experience",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Tailored travel experiences crafted just for you",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive connections worldwide for the best deals",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Heart,
      title: "24/7 Support",
      description: "Round-the-clock assistance for peace of mind",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Your safety and security are our top priorities on every journey",
      stats: "100% Secure",
    },
    {
      icon: Star,
      title: "Excellence",
      description:
        "Committed to delivering exceptional experiences that exceed expectations",
      stats: "4.9/5 Rating",
    },
    {
      icon: Clock,
      title: "Reliability",
      description:
        "Punctual, dependable service you can trust for your precious time",
      stats: "99% On-time",
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description:
        "Deep knowledge of destinations with insider access and authentic experiences",
      stats: "50+ Destinations",
    },
  ];

  const achievements = [
    { number: "10,000+", label: "Happy Travelers", icon: Users },
    { number: "50+", label: "Destinations", icon: Globe },
    { number: "8+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Support Available", icon: Heart },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
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
              About{" "}
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

      {/* Mission Section */}
      <section className="py-20 md:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Our Mission
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Travel{" "}
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Redefined
              </span>
            </h2>

            <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                At Termynal7, we believe every journey should be seamless,
                memorable, and worry-free. Guided by our motto “Travel
                Redefined,” we craft personalized travel experiences worldwide.
              </p>
              <p>
                From exotic beach escapes to cultural tours and adventure
                getaways, we transform your travel dreams into cherished
                memories.
              </p>
            </div>

            <Button className="mt-6 bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Learn More About Us
            </Button>
          </div>

          {/* Right Features */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group border-0 shadow-elegant hover:shadow-glow hover:scale-105 transition-all duration-300 bg-card/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-24 bg-gradient-ocean">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Star className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Our Values</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We Stand For
            </h2>
            <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
              Our core values shape everything we do, ensuring each journey is
              extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="group border-0 shadow-elegant hover:shadow-glow hover:-translate-y-2 transition-all duration-500 bg-card/60 backdrop-blur-sm"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {value.stats}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-black/80 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Achievements
            </h2>
            <p className="text-base md:text-lg text-black/80 max-w-2xl mx-auto">
              Numbers that showcase our dedication to providing unforgettable
              travel experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-colors">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-1 text-black">
                    {achievement.number}
                  </div>
                  <p className="text-gray-300 text-base font-medium">
                    {achievement.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
