import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;