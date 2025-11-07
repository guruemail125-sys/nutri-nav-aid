import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, AlertTriangle, CheckCircle2, Pill, BookOpen, TrendingUp } from "lucide-react";
import { diseases } from "@/data/diseases";

const DiseaseSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDiseases = diseases.filter((disease) =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    disease.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    disease.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Low": return "bg-success/10 text-success border-success/20";
      case "Medium": return "bg-accent/10 text-accent border-accent/20";
      case "High": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-primary/10 text-primary border-primary/20";
    }
  };

  const categories = Array.from(new Set(diseases.map(d => d.category)));

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 animate-fade-in text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
          <BookOpen className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Comprehensive Diet & Nutrition Analysis</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Diet Analyzer</h1>
        <p className="text-muted-foreground text-lg">Explore detailed information about {diseases.length}+ diseases</p>
      </div>

      <div className="mb-8 space-y-6">
        <Card className="p-6 animate-slide-up bg-gradient-to-br from-card to-muted/20 border-primary/20">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground" />
            <Input
              placeholder="Search by disease name, category, or symptom..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg border-primary/20"
            />
          </div>
          {searchTerm && (
            <div className="mt-4 text-sm text-muted-foreground">
              Found {filteredDiseases.length} disease{filteredDiseases.length !== 1 ? "s" : ""} matching "{searchTerm}"
            </div>
          )}
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 animate-slide-up">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant="outline"
              className="justify-center py-2 cursor-pointer hover:bg-primary/10 transition-colors"
              onClick={() => setSearchTerm(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {filteredDiseases.map((disease, index) => (
          <Card 
            key={index} 
            className="p-6 md:p-8 animate-fade-in hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-muted/10"
            style={{ animationDelay: `${index * 30}ms` }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">{disease.name}</h2>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20">
                    {disease.category}
                  </Badge>
                  <Badge className={getSeverityColor(disease.severity)} variant="outline">
                    Severity: {disease.severity}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-semibold text-lg text-accent">
                  <AlertTriangle className="h-6 w-6" />
                  Symptoms
                </div>
                <ul className="space-y-2">
                  {disease.symptoms.map((symptom, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="h-2 w-2 rounded-full bg-accent mt-1.5 flex-shrink-0"></div>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 font-semibold text-lg text-primary">
                  <Pill className="h-6 w-6" />
                  Recommended Foods
                </div>
                <ul className="space-y-2">
                  {disease.foodRecommendations.map((food, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                      <span>{food}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 font-semibold text-lg text-success">
                  <CheckCircle2 className="h-6 w-6" />
                  Prevention
                </div>
                <ul className="space-y-2">
                  {disease.prevention.map((prevention, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="h-2 w-2 rounded-full bg-success mt-1.5 flex-shrink-0"></div>
                      <span>{prevention}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <strong>Medical Disclaimer:</strong> This information is for educational purposes only. Always consult with a qualified healthcare professional for proper diagnosis and treatment.
              </p>
            </div>
          </Card>
        ))}

        {filteredDiseases.length === 0 && (
          <Card className="p-12 text-center animate-fade-in bg-gradient-to-br from-card to-muted/20">
            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">No diseases found</h3>
            <p className="text-muted-foreground mb-4">Try searching with different keywords or browse by category</p>
            <button 
              onClick={() => setSearchTerm("")}
              className="text-primary hover:underline font-medium"
            >
              Clear search and view all diseases
            </button>
          </Card>
        )}
      </div>

      {!searchTerm && (
        <Card className="mt-8 p-8 text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Stay Informed, Stay Healthy</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our database includes {diseases.length} well-documented diseases across {categories.length} major categories. 
            Use the search above to find specific conditions or click on categories to explore.
          </p>
        </Card>
      )}
    </div>
  );
};

export default DiseaseSearch;
