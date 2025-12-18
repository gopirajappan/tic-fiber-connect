import { Phone, Mail, MapPin, Globe, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const contactInfo = [
  {
    icon: Phone,
    title: "Main Office",
    value: "99522 89289",
    link: "tel:9952289289",
  },
  {
    icon: Phone,
    title: "Gopalapuram",
    value: "99761 94041",
    link: "tel:9976194041",
  },
  {
    icon: Mail,
    title: "Email",
    value: "arundigital.289@gmail.com",
    link: "mailto:arundigital.289@gmail.com",
  },
  {
    icon: Globe,
    title: "Website",
    value: "www.ticfiber.com",
    link: "https://www.ticfiber.com",
  },
];

const locations = [
  {
    name: "Srirengapuram",
    address: "Theni Main Road, Srirengapuram, Theni District",
    phone: "99522 89289",
    isMain: true,
  },
  {
    name: "Gopalapuram",
    address: "Gopalapuram, Theni District",
    phone: "99761 94041",
    isMain: false,
  },
  {
    name: "Nagalapuram",
    address: "Nagalapuram, Theni District",
    phone: "99522 89289",
    isMain: false,
  },
];

const Contact = () => {
  const whatsappUrl = `https://wa.me/919952289289?text=${encodeURIComponent("Hello! I'm interested in Arun Cable Net Works fiber internet services.")}`;

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Contact <span className="text-secondary">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Get in touch with us for new connections, support, or any queries
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.link}
                target={info.title === "Website" ? "_blank" : undefined}
                rel={info.title === "Website" ? "noopener noreferrer" : undefined}
                className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-primary transition-all text-center group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                  <info.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                <p className="text-primary font-semibold">{info.value}</p>
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-[#25D366]/10 rounded-2xl p-8 text-center max-w-2xl mx-auto mb-16">
            <MessageCircle className="w-16 h-16 text-[#25D366] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Chat on WhatsApp</h3>
            <p className="text-muted-foreground mb-6">
              Get instant support and quick responses via WhatsApp
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat Now
              </Button>
            </a>
          </div>

          {/* Locations */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Locations</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location) => (
              <div
                key={location.name}
                className={`bg-card rounded-xl p-6 shadow-lg border-2 ${
                  location.isMain ? "border-primary" : "border-border"
                }`}
              >
                {location.isMain && (
                  <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold mb-4">
                    Main Office
                  </span>
                )}
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{location.name}</h3>
                    <p className="text-muted-foreground text-sm">{location.address}</p>
                  </div>
                </div>
                <a
                  href={`tel:${location.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  {location.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-card rounded-xl p-8 shadow-lg text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Business Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              <p><strong className="text-foreground">Monday - Saturday:</strong> 9:00 AM - 8:00 PM</p>
              <p><strong className="text-foreground">Sunday:</strong> 10:00 AM - 6:00 PM</p>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              For urgent support, call or WhatsApp anytime!
            </p>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Find <span className="text-primary">Us</span>
            </h2>
          </div>
          <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground font-medium">
                Theni Main Road, Srirengapuram, Theni District
              </p>
              <a
                href="https://maps.google.com/?q=Srirengapuram,Theni"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <Button variant="outline">Open in Google Maps</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Ready to Get Connected?
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            Call us now and get high-speed fiber internet installed in your home!
          </p>
          <a href="tel:9952289289">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8">
              <Phone className="w-5 h-5 mr-2" />
              Call: 99522 89289
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;