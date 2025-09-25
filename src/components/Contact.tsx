import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xrbybako", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset(); // ✅ Clears form
      setTimeout(() => setStatus(""), 4000); // ✅ Hide success after 4s
    } else {
      setStatus("ERROR");
      setTimeout(() => setStatus(""), 4000); // Hide error after 4s
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+91 81100 07717",
        "+91 81100 07716",
        "+91 78711 30120",
        "Available 24/7",
      ],
      color: "text-primary",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["booking@termynal7.com", "Quick Response"],
      color: "text-accent",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Travel Office",
        "1&1A, UR Nagar Extn, Anna Nagar W Ext St, Chennai, Tamil Nadu 600101",
      ],
      color: "text-primary",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: ["24/7 Support", "Always Available"],
      color: "text-accent",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact our travel experts today and let us help you create the
            perfect travel experience. We're here to make your travel dreams
            come true.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        name="fullName"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Travel Date
                      </label>
                      <Input type="date" name="travelDate" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Destination/Service Interest
                    </label>
                    <Input
                      name="destination"
                      placeholder="Where would you like to go?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your travel plans, preferences, or any specific requirements..."
                      rows={4}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>

                {/* ✅ Status messages */}
                {status === "SUCCESS" && (
                  <p className="mt-4 text-green-600 text-sm">
                    ✅ Message sent successfully!
                  </p>
                )}
                {status === "ERROR" && (
                  <p className="mt-4 text-red-600 text-sm">
                    ❌ Oops! Something went wrong. Try again.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center ${info.color}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-muted-foreground text-sm"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* CTA Card */}
            <Card className="border-0 bg-gradient-ocean text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Ready to Book?</h3>
                <p className="text-primary-foreground/80 mb-6 text-sm">
                  Call us now for instant booking and exclusive deals!
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 w-full"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +91 81100 07717
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
