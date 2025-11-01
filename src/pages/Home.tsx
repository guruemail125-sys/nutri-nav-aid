import { Button } from "@/components/ui/button";
import { Heart, Activity, Utensils, Search, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-health.jpg";

const Home = () => {
  const features = [
    {
      icon: Utensils,
      title: "Smart Diet Planning",
      description: "Get customized meal plans based on your health metrics and dietary needs",
      link: "/diet-planner",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Shield,
      title: "Diet Analyzer",
      description: "Search comprehensive information about diseases, symptoms, and remedies",
      link: "/disease-search",
      gradient: "from-accent to-secondary",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Heart className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Your Health, Our Priority</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Manage Your Health <span className="text-gradient">Intelligently</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Personalized diet management, health tracking, and disease prediction powered by advanced analytics. Take control of your wellness journey today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="gap-2 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                  <TrendingUp className="h-5 w-5" />
                  Get Started
                </Button>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="gap-2">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img
                src={heroImage}
                alt="Healthcare Management"
                className="relative rounded-3xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to monitor, manage, and improve your health in one comprehensive platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="feature-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2 animate-fade-in">
              <div className="text-4xl font-bold text-gradient">10,000+</div>
              <div className="text-muted-foreground">Users Helped</div>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="text-4xl font-bold text-gradient">500+</div>
              <div className="text-muted-foreground">Diseases Covered</div>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="text-4xl font-bold text-gradient">95%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="feature-card text-center space-y-6 max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10">
          <h2 className="text-3xl font-bold">Ready to Transform Your Health?</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of users who have taken control of their wellness journey with HealthCare Pro
          </p>
          <Link to="/diet-planner">
            <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl">
              <Heart className="h-5 w-5" />
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
