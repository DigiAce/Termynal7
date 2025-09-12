import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Vinoth Sairam",
    location: "Thailand",
    rating: 5,
    text: "Thailand Tour Package Review: Pattaya & Bangkok I recently booked a Thailand tour package covering Pattaya and Bangkok, and it was a fantastic experience. The itinerary was well-planned, offering a perfect mix of relaxation and adventure.Pattaya was the highlight, with its stunning beaches, exciting nightlife, and great accommodations. The hotels in Pattaya were excellent—spacious, comfortable, and easily accessible, making the stay truly enjoyable.Bangkok, with its vibrant city life, shopping, and cultural landmarks, was equally exciting. However, one challenge was that many hotels required multiple lift changes, which made moving around a bit inconvenient. Despite this, the city's attractions like the Grand Palace and bustling markets were well worth it.A special mention to LCM Holidays Team who were quite helpful throughout the trip, ensuring a smooth and hassle-free experience. Their support made the journey even more enjoyable.Overall, the trip was well-organized, and I’d highly recommend it to anyone looking to explore Thailand!",
    avatar: "/t1.png",
    trip: "Thailand Tour Package",
  },
  {
    id: 2,
    name: "Bramma Sakthi",
    location: "Thailand (Honeymoon)",
    rating: 5,
    text: "We booked LCM holidays for our honeymoon trip to Thailand and had a great experience. It was our first international trip and LCM holidays made us feel comfortable and safe throughout our journey. Thank you, team, for making our trip so memorable and amazing. It was well-organized. We look forward to connecting with you again for future travels.",
    avatar: "/t2.png",
    trip: "Thailand Honeymoon Package",
  },
  {
    id: 3,
    name: "Ameer Buhari",
    location: "Singapore",
    rating: 5,
    text: "as a family, we enjoyed a lot with LCM HOLIDAYS, Good in class. Looking forward to plan again.",
    avatar: "/t3.png",
    trip: "Best of Singapore Tour",
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    location: "USA",
    rating: 5,
    text: "Kashmir Paradise package was truly a paradise! The breathtaking landscapes of Gulmarg and Pahalgam left us speechless. Professional service and unforgettable memories!",
    avatar: "/placeholder.svg",
    trip: "Kashmir Paradise Tour",
  },
  {
    id: 5,
    name: "Priya Sharma",
    location: "Bangalore",
    rating: 5,
    text: "Dubai experience was luxurious and thrilling! The desert safari and Burj Khalifa visit were highlights. Termynal7 made our honeymoon absolutely perfect!",
    avatar: "/placeholder.svg",
    trip: "Dubai Experience Package",
  },
  {
    id: 6,
    name: "David Thompson",
    location: "UK",
    rating: 5,
    text: "The Europe Highlights tour was a dream come true! Paris, Switzerland, Italy - each destination was perfectly curated. Exceptional service and attention to detail!",
    avatar: "/placeholder.svg",
    trip: "Europe Highlights Tour",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Client Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why thousands of travelers choose Termynal7 for their dream
            journeys. Real stories from real adventures.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-elegant hover:scale-105 transition-all duration-300 group">
                    <CardContent className="p-6">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/50 transition-colors" />
                      </div>

                      {/* Review Text */}
                      <blockquote className="text-foreground/90 mb-6 leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Trip Package */}
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                          {testimonial.trip}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="mb-4">
                        <StarRating rating={testimonial.rating} />
                      </div>

                      {/* Customer Info */}
                      <div className="flex items-center gap-4">
                        <Avatar className="w-12 h-12 ring-2 ring-primary/20">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative static translate-y-0 bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" />
              <CarouselNext className="relative static translate-y-0 bg-card border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" />
            </div>
          </Carousel>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              10,000+
            </div>
            <div className="text-sm text-muted-foreground">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              4.9/5
            </div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              50+
            </div>
            <div className="text-sm text-muted-foreground">destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              24/7
            </div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
