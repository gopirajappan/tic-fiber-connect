import { Award, Users, Zap, Shield, Target, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import poster3 from "@/assets/poster-3.jpeg";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide reliable, high-speed fiber internet to rural areas at affordable prices, bridging the digital divide.",
  },
  {
    icon: Heart,
    title: "Our Vision",
    description: "To become the most trusted internet service provider for villages and rural communities in Tamil Nadu.",
  },
  {
    icon: Shield,
    title: "Our Promise",
    description: "Fast installation, reliable connectivity, and dedicated customer support for all our subscribers.",
  },
];

const stats = [
  { number: "3+", label: "Villages Covered" },
  { number: "500+", label: "Happy Customers" },
  { number: "200", label: "Mbps Max Speed" },
  { number: "24/7", label: "Customer Support" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            About <span className="text-secondary">Arun Cable Net Works</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Authorized TIC Fiber Franchise (Chennai) - Bringing high-speed fiber internet to your doorstep
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4 inline mr-2" />
                Authorized Franchise
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Local
                <span className="text-primary block">Internet Partner</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Arun Cable Net Works</strong> is an authorized TIC Fiber Franchise operating in Chennai (TCCL). 
                  We specialize in providing Fiber to Home (FTTH) Internet using advanced GPON Technology.
                </p>
                <p>
                  Based in Theni District, we serve the communities of Srirengapuram, Nagalapuram, and Gopalapuram 
                  with reliable, high-speed internet and entertainment services.
                </p>
                <p>
                  Our commitment is to bring affordable, high-quality internet connectivity to rural areas, 
                  ensuring everyone has access to the digital world.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">GPON Technology</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">TIC Fiber Partner</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={poster3} 
                alt="Arun Cable Net Works" 
                className="rounded-2xl shadow-2xl max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-6 text-center shadow-md">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What <span className="text-primary">Drives Us</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-2xl p-8 shadow-lg border border-border text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-8">Powered By</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-card px-8 py-4 rounded-xl shadow-md">
              <span className="text-xl font-bold text-primary">TIC Fiber</span>
              <p className="text-sm text-muted-foreground">Chennai Franchise</p>
            </div>
            <div className="bg-card px-8 py-4 rounded-xl shadow-md">
              <span className="text-xl font-bold text-primary">TCCL</span>
              <p className="text-sm text-muted-foreground">GPON Technology</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;