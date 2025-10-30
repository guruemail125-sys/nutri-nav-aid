import { Card } from "@/components/ui/card";
import { Heart, Target, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-12 text-center animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">About HealthCare Pro</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Empowering individuals to take control of their health through intelligent technology and personalized insights
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="p-8 feature-card">
          <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            To provide accessible, intelligent health management tools that empower individuals to make informed decisions about their wellness. We believe everyone deserves personalized health insights and guidance.
          </p>
        </Card>

        <Card className="p-8 feature-card">
          <div className="p-3 rounded-lg bg-secondary/10 w-fit mb-4">
            <Target className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            To revolutionize preventive healthcare by combining advanced analytics with user-friendly interfaces, making health management simple, effective, and accessible to everyone, everywhere.
          </p>
        </Card>
      </div>

      <div className="mb-12 animate-slide-up">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center feature-card">
            <div className="p-3 rounded-lg bg-success/10 w-fit mx-auto mb-4">
              <Users className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-xl font-semibold mb-2">User-Centric Design</h3>
            <p className="text-muted-foreground text-sm">
              Intuitive interfaces designed with real users in mind for seamless health tracking
            </p>
          </Card>

          <Card className="p-6 text-center feature-card">
            <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Evidence-Based</h3>
            <p className="text-muted-foreground text-sm">
              All recommendations based on latest medical research and clinical guidelines
            </p>
          </Card>

          <Card className="p-6 text-center feature-card">
            <div className="p-3 rounded-lg bg-accent/10 w-fit mx-auto mb-4">
              <Heart className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
            <p className="text-muted-foreground text-sm">
              Tailored insights and recommendations based on your unique health profile
            </p>
          </Card>
        </div>
      </div>

      <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Commitment</h2>
        <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
          HealthCare Pro is committed to maintaining the highest standards of data privacy and security. We continuously update our platform with the latest medical knowledge and technology to provide you with accurate, reliable health information and tools. Your health journey is unique, and we're here to support you every step of the way.
        </p>
      </Card>
    </div>
  );
};

export default About;
