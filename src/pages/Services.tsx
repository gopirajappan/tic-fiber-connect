import { Wifi, Tv, Play, Home, Zap, Check, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Wifi,
    title: "Fiber To Home (FTTH)",
    subtitle: "GPON Technology",
    description: "Experience lightning-fast internet with our fiber optic connection directly to your home.",
    features: [
      "Unlimited internet plans available",
      "Speeds from 20 Mbps to 200 Mbps",
      "Best for WFH, Online Classes, OTT, Gaming",
      "Low latency for video calls",
      "Stable connection all day",
    ],
    color: "primary",
  },
  {
    icon: Home,
    title: "Special Village Packages",
    subtitle: "Affordable Broadband",
    description: "Exclusive internet packages designed specifically for rural communities at the best prices.",
    features: [
      "Affordable plans starting ₹299/month",
      "Designed for village connectivity",
      "Fast installation & setup",
      "Local customer support",
      "No hidden charges",
    ],
    color: "secondary",
  },
  {
    icon: Tv,
    title: "Cable TV Connection",
    subtitle: "HD Entertainment",
    description: "Enjoy crystal clear HD cable TV with a wide variety of channels for the whole family.",
    features: [
      "HD quality channels",
      "Wide variety of content",
      "Tamil, Hindi, English channels",
      "News, Sports, Movies, Serials",
      "Affordable monthly packages",
    ],
    color: "accent",
  },
  {
    icon: Play,
    title: "OTT + IPTV",
    subtitle: "Tamil Channels Available",
    description: "Access popular OTT apps and IPTV with all your favorite Tamil entertainment content.",
    features: [
      "Popular OTT apps included",
      "Tamil HD channels",
      "Movies & web series",
      "Live TV streaming",
      "On-demand content",
    ],
    color: "primary",
  },
];

const locations = [
  { name: "Srirengapuram", status: "Active" },
  { name: "Nagalapuram", status: "Active" },
  { name: "Gopalapuram", status: "Active" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our <span className="text-secondary">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Complete internet and entertainment solutions for your home and business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 bg-${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className={`w-8 h-8 text-${service.color}-foreground`} />
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-primary font-semibold">{service.subtitle}</p>
                </div>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powered by <span className="text-primary">GPON Technology</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Gigabit Passive Optical Network - The latest fiber optic technology for ultra-fast, reliable internet
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 text-center shadow-md">
              <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-bold text-foreground mb-2">Ultra Fast</h4>
              <p className="text-sm text-muted-foreground">Up to 200 Mbps download speeds</p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-md">
              <Wifi className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-bold text-foreground mb-2">Stable Connection</h4>
              <p className="text-sm text-muted-foreground">Consistent speeds all day long</p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-md">
              <Home className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-bold text-foreground mb-2">Direct to Home</h4>
              <p className="text-sm text-muted-foreground">Fiber cable right to your doorstep</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Service <span className="text-primary">Locations</span>
            </h2>
            <p className="text-muted-foreground">Currently serving these areas in Theni District</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {locations.map((location) => (
              <div key={location.name} className="bg-card rounded-xl p-6 text-center shadow-lg border border-border">
                <MapPin className="w-10 h-10 text-accent mx-auto mb-4" />
                <h4 className="font-bold text-foreground text-lg mb-2">{location.name}</h4>
                <span className="inline-block bg-brand-green/20 text-brand-green px-3 py-1 rounded-full text-sm font-semibold">
                  {location.status}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            📍 Expanding to more areas soon! Contact us for service availability.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            Choose the perfect plan for your needs and get connected today!
          </p>
          <Link to="/plans">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8">
              View Plans & Pricing
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;