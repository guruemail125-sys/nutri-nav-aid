import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, AlertTriangle, CheckCircle2, Pill } from "lucide-react";

const DiseaseSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const diseases = [
    {
      name: "Diabetes",
      category: "Metabolic",
      symptoms: ["Increased thirst", "Frequent urination", "Fatigue", "Blurred vision", "Slow healing wounds"],
      remedies: ["Blood sugar monitoring", "Insulin therapy", "Healthy diet", "Regular exercise", "Medication management"],
      prevention: ["Maintain healthy weight", "Exercise regularly", "Eat balanced diet", "Limit sugar intake"],
    },
    {
      name: "Hypertension",
      category: "Cardiovascular",
      symptoms: ["Headaches", "Shortness of breath", "Nosebleeds", "Chest pain", "Visual changes"],
      remedies: ["Blood pressure medication", "Low-sodium diet", "Regular exercise", "Stress management", "Weight loss"],
      prevention: ["Reduce salt intake", "Exercise regularly", "Limit alcohol", "Manage stress", "Maintain healthy weight"],
    },
    {
      name: "Asthma",
      category: "Respiratory",
      symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing", "Difficulty breathing"],
      remedies: ["Inhalers", "Avoid triggers", "Breathing exercises", "Medication", "Emergency action plan"],
      prevention: ["Identify triggers", "Keep clean environment", "Regular checkups", "Vaccination", "Monitor air quality"],
    },
  ];

  const filteredDiseases = diseases.filter((disease) =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    disease.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-2">Disease Database</h1>
        <p className="text-muted-foreground">Search comprehensive information about diseases and their management</p>
      </div>

      <div className="mb-8 animate-slide-up">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search diseases by name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 text-lg"
          />
        </div>
      </div>

      <div className="space-y-6">
        {filteredDiseases.map((disease, index) => (
          <Card key={index} className="p-6 animate-fade-in hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">{disease.name}</h2>
                <Badge className="bg-primary/10 text-primary">{disease.category}</Badge>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-semibold">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                  Symptoms
                </div>
                <ul className="space-y-2">
                  {disease.symptoms.map((symptom, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 font-semibold">
                  <Pill className="h-5 w-5 text-primary" />
                  Remedies
                </div>
                <ul className="space-y-2">
                  {disease.remedies.map((remedy, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>{remedy}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  Prevention
                </div>
                <ul className="space-y-2">
                  {disease.prevention.map((prevention, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-success mt-2 flex-shrink-0"></div>
                      <span>{prevention}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}

        {filteredDiseases.length === 0 && (
          <Card className="p-12 text-center">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No results found</h3>
            <p className="text-muted-foreground">Try searching with different keywords</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DiseaseSearch;
