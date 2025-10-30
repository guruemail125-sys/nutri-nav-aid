import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, AlertCircle, CheckCircle, Info } from "lucide-react";
import { toast } from "sonner";

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const mockResults = [
    {
      disease: "Common Cold",
      probability: "High",
      severity: "Low",
      description: "A viral infection of your nose and throat",
      remedies: ["Rest", "Stay hydrated", "Use over-the-counter cold medications", "Gargle with salt water"],
      color: "success",
    },
    {
      disease: "Seasonal Allergies",
      probability: "Medium",
      severity: "Low",
      description: "Allergic reaction to pollen or environmental factors",
      remedies: ["Antihistamines", "Avoid allergens", "Use air purifier", "Nasal sprays"],
      color: "primary",
    },
    {
      disease: "Viral Fever",
      probability: "Medium",
      severity: "Medium",
      description: "Fever caused by viral infection",
      remedies: ["Rest and fluids", "Fever-reducing medication", "Cool compress", "Monitor temperature"],
      color: "accent",
    },
  ];

  const handleCheck = () => {
    if (!symptoms.trim()) {
      toast.error("Please enter your symptoms");
      return;
    }
    setResults(mockResults);
    toast.success("Analysis complete!");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-2">Symptom Checker</h1>
        <p className="text-muted-foreground">Analyze your symptoms and get potential health insights</p>
      </div>

      <div className="space-y-6">
        <Card className="p-6 animate-slide-up">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="h-5 w-5 text-accent" />
            <span className="text-sm text-muted-foreground">
              Note: This tool provides information only. Always consult a healthcare professional for diagnosis.
            </span>
          </div>

          <div className="flex gap-4">
            <Input
              placeholder="Enter your symptoms (e.g., fever, headache, cough)"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleCheck} size="lg" className="gap-2">
              <Search className="h-5 w-5" />
              Check Symptoms
            </Button>
          </div>
        </Card>

        {results.length > 0 && (
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-2xl font-semibold">Possible Conditions</h2>
            {results.map((result, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{result.disease}</h3>
                    <p className="text-muted-foreground mb-4">{result.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">
                      Probability: {result.probability}
                    </Badge>
                    <Badge className={`bg-${result.color}/10 text-${result.color}`}>
                      Severity: {result.severity}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Recommended Remedies:
                  </div>
                  <div className="grid md:grid-cols-2 gap-2">
                    {result.remedies.map((remedy: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        <span>{remedy}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 p-4 bg-muted/50 rounded-lg flex items-start gap-2">
                  <Info className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    If symptoms persist or worsen, please consult with a healthcare professional immediately.
                  </p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;
