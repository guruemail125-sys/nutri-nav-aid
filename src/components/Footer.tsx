import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg font-bold text-gradient">HealthCare Pro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for personalized health management and wellness planning.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/health-metrics" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Health Metrics
              </Link>
              <Link to="/meal-planner" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Meal Planner
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <Link to="/disease-search" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Disease Database
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@healthcarepro.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Health St, Wellness City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 HealthCare Pro. All rights reserved. | Built with care for your health.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
