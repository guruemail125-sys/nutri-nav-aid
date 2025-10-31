import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HealthMetrics from "./pages/HealthMetrics";
import DietPlanner from "./pages/DietPlanner";
import SymptomChecker from "./pages/SymptomChecker";
import DiseaseSearch from "./pages/DiseaseSearch";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/health-metrics" element={<HealthMetrics />} />
          <Route path="/diet-planner" element={<DietPlanner />} />
          <Route path="/meal-planner" element={<DietPlanner />} />
              <Route path="/symptom-checker" element={<SymptomChecker />} />
              <Route path="/disease-search" element={<DiseaseSearch />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
