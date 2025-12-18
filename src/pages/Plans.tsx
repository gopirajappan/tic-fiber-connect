import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import poster1 from "@/assets/poster-1.png";
import poster2 from "@/assets/poster-2.png";

const plans = [
  {
    speed: "20 Mbps",
    data: "Unlimited",
    price: 299,
    popular: false,
    features: ["Basic browsing", "Social media", "Video calls"],
  },
  {
    speed: "25 Mbps",
    data: "500 GB",
    price: 399,
    popular: false,
    features: ["HD streaming", "Online classes", "Work from home"],
  },
  {
    speed: "40 Mbps",
    data: "Unlimited",
    price: 449,
    popular: true,
    features: ["HD streaming", "Gaming", "Multiple devices"],
  },
  {
    speed: "50 Mbps",
    data: "750 GB",
    price: 449,
    popular: false,
    features: ["HD streaming", "Large downloads", "Smart home"],
  },
  {
    speed: "100 Mbps",
    data: "1000 GB",
    price: 699,
    popular: false,
    features: ["4K streaming", "Heavy gaming", "Full household"],
  },
  {
    speed: "100 Mbps",
    data: "Unlimited",
    price: 749,
    popular: true,
    features: ["4K streaming", "Work & play", "No limits"],
  },
  {
    speed: "200 Mbps",
    data: "Unlimited",
    price: 950,
    popular: false,
    features: ["Ultra-fast", "Business use", "Maximum speed"],
  },
];

const Plans = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Plans & <span className="text-secondary">Pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Affordable high-speed internet plans for every need. Choose the perfect plan for your home.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your <span className="text-primary">Plan</span>
            </h2>
            <p className="text-muted-foreground">All plans include free installation and router</p>
          </div>

          {/* Plans Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {plans.map((plan, index) => (
              <div
                key={`${plan.speed}-${plan.data}`}
                className={`relative bg-card rounded-2xl p-6 shadow-lg border-2 transition-transform hover:scale-105 ${
                  plan.popular ? "border-primary" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="w-4 h-4" /> Popular
                    </span>
                  </div>
                )}
                <div className="text-center pt-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Zap className="w-6 h-6 text-primary" />
                    <span className="text-2xl font-extrabold text-foreground">{plan.speed}</span>
                  </div>
                  <p className="text-muted-foreground font-medium mb-4">{plan.data}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold text-primary">₹{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6 text-left">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-brand-green flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="tel:9952289289">
                    <Button
                      className={`w-full font-semibold ${
                        plan.popular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      }`}
                    >
                      Get This Plan
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="bg-muted rounded-xl p-6 max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Note:</strong> GST 18% extra. All plans are valid for 30 days per month.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Installation is free. Router provided at no extra cost.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Plan <span className="text-primary">Comparison</span>
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-6 py-4 text-left font-bold">Speed</th>
                  <th className="px-6 py-4 text-left font-bold">Data Limit</th>
                  <th className="px-6 py-4 text-left font-bold">Price</th>
                  <th className="px-6 py-4 text-left font-bold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan, index) => (
                  <tr
                    key={`table-${plan.speed}-${plan.data}`}
                    className={`border-b border-border ${index % 2 === 0 ? "bg-card" : "bg-muted/50"}`}
                  >
                    <td className="px-6 py-4 font-semibold text-foreground">{plan.speed}</td>
                    <td className="px-6 py-4 text-muted-foreground">{plan.data}</td>
                    <td className="px-6 py-4 font-bold text-primary">₹{plan.price}</td>
                    <td className="px-6 py-4 text-muted-foreground">{plan.features[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Posters Gallery */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Plan <span className="text-primary">Posters</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <img src={poster1} alt="Internet Plans Poster 1" className="rounded-xl shadow-lg w-full" />
            <img src={poster2} alt="Internet Plans Poster 2" className="rounded-xl shadow-lg w-full" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            Call us and our team will help you select the perfect plan for your needs!
          </p>
          <a href="tel:9952289289">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8">
              Call: 99522 89289
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Plans;