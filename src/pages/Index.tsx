import { Link } from "react-router-dom";
import { Wifi, Zap, IndianRupee, MapPin, Tv, Play, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import poster1 from "@/assets/poster-1.png";
import poster2 from "@/assets/poster-2.png";

const features = [
  {
    icon: Wifi,
    title: "Unlimited Internet",
    description: "No data limits, browse freely all month",
  },
  {
    icon: Zap,
    title: "GPON Technology",
    description: "Latest fiber optic technology for ultra-fast speeds",
  },
  {
    icon: IndianRupee,
    title: "Low Cost Plans",
    description: "Affordable packages starting from ₹299/month",
  },
];

const services = [
  { icon: Wifi, title: "Fiber Internet", description: "Up to 200 Mbps speeds" },
  { icon: Tv, title: "Cable TV", description: "HD channels & variety" },
  { icon: Play, title: "OTT & IPTV", description: "Tamil channels included" },
];

const locations = ["Srirengapuram", "Nagalapuram", "Gopalapuram"];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[length:20px_20px]" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold mb-6 animate-fade-in">
                🎉 Now Available in Your Village!
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
                High-Speed Fiber
                <span className="block text-secondary">To Your Home</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Experience lightning-fast internet in Srirengapuram, Nagalapuram & Gopalapuram. 
                Powered by GPON Technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Link to="/plans">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg px-8">
                    View Plans
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:9952289289">
                  <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold text-lg px-8">
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-center animate-float">
              <img src={poster1} alt="Internet Plans" className="rounded-2xl shadow-2xl max-w-md w-full" />
            </div>
          </div>
        </div>
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">Arun Cable Net Works?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We bring reliable, high-speed fiber internet to rural areas at affordable prices
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-card rounded-xl p-6 flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button size="lg" className="font-semibold">
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Service <span className="text-primary">Locations</span>
            </h2>
            <p className="text-muted-foreground">Now available in these areas - Theni District</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((location) => (
              <div key={location} className="flex items-center gap-2 bg-secondary/20 px-6 py-3 rounded-full">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="font-semibold text-foreground">{location}</span>
                <Check className="w-5 h-5 text-brand-green" />
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6">
            Expanding to more areas soon! 🚀
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Ready to Get Connected?
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            Get high-speed fiber internet installed in your home today. Plans starting from just ₹299/month!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/plans">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8">
                View All Plans
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary font-bold text-lg px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Plans</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <img src={poster1} alt="Internet Plans" className="rounded-xl shadow-lg w-full" />
            <img src={poster2} alt="Internet Plans 2" className="rounded-xl shadow-lg w-full" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;