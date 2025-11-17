import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, AlertCircle, CheckCircle, Info, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import { diseases, Disease } from "@/data/diseases";

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState("");
  const [results, setResults] = useState<(Disease & { matchCount: number; probability: string })[]>([]);
  const [showAllDiseases, setShowAllDiseases] = useState(true);

  const matchSymptoms = (searchTerms: string) => {
    if (!searchTerms.trim()) {
      return [];
    }

    const terms = searchTerms.toLowerCase().split(/[\s,]+/).filter(term => term.length > 2);
    const matchedDiseases = diseases
      .map(disease => {
        const matchCount = disease.symptoms.filter(symptom =>
          terms.some(term => symptom.toLowerCase().includes(term))
        ).length;
        
        let probability = "Low";
        const matchPercentage = (matchCount / terms.length) * 100;
        if (matchPercentage >= 70) probability = "High";
        else if (matchPercentage >= 40) probability = "Medium";

        return { ...disease, matchCount, probability };
      })
      .filter(disease => disease.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount)
      .slice(0, 10);

    return matchedDiseases;
  };

  const handleCheck = () => {
    if (!symptoms.trim()) {
      toast.error("Please enter your symptoms");
      return;
    }
    const matched = matchSymptoms(symptoms);
    if (matched.length === 0) {
      toast.error("No matching diseases found. Try different symptoms.");
      return;
    }
    setResults(matched);
    setShowAllDiseases(false);
    toast.success(`Found ${matched.length} potential matches!`);
  };

  const handleClear = () => {
    setSymptoms("");
    setResults([]);
    setShowAllDiseases(true);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Low": return "bg-success/10 text-success border-success/20";
      case "Medium": return "bg-accent/10 text-accent border-accent/20";
      case "High": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-primary/10 text-primary border-primary/20";
    }
  };

  const getProbabilityColor = (probability: string) => {
    switch (probability) {
      case "High": return "bg-destructive/10 text-destructive";
      case "Medium": return "bg-accent/10 text-accent";
      case "Low": return "bg-muted text-muted-foreground";
      default: return "bg-primary/10 text-primary";
    }
  };

  const displayDiseases = showAllDiseases ? diseases : results;

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 animate-fade-in text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
          <TrendingUp className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">AI-Powered Symptom Analysis</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Intelligent Symptom Checker</h1>
        <p className="text-muted-foreground text-lg">Search from over {diseases.length} diseases to identify potential conditions</p>
      </div>

      <div className="space-y-8">
        <Card className="p-6 md:p-8 animate-slide-up bg-gradient-to-br from-card to-muted/20 border-primary/20">
          <div className="flex items-center gap-2 mb-6">
            <AlertCircle className="h-5 w-5 text-accent animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">
              This tool provides information only. Always consult a healthcare professional for diagnosis.
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Enter symptoms (e.g., fever, headache, cough, fatigue)"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCheck()}
              className="flex-1 h-12 text-lg"
            />
            <div className="flex gap-2">
              <Button onClick={handleCheck} size="lg" className="gap-2 flex-1 md:flex-none">
                <Search className="h-5 w-5" />
                Analyze
              </Button>
              {!showAllDiseases && (
                <Button onClick={handleClear} size="lg" variant="outline" className="flex-1 md:flex-none">
                  Clear
                </Button>
              )}
            </div>
          </div>

          {!showAllDiseases && results.length > 0 && (
            <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <CheckCircle className="h-4 w-4" />
                Found {results.length} potential matches based on your symptoms
              </div>
            </div>
          )}
        </Card>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">
              {showAllDiseases ? "All Known Diseases" : "Matched Conditions"}
            </h2>
            {!showAllDiseases && (
              <Badge variant="secondary" className="text-sm">
                {results.length} Results
              </Badge>
            )}
          </div>

          <div className="grid gap-4">
            {displayDiseases.map((disease, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-muted/10"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold">{disease.name}</h3>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20">
                        {disease.category}
                      </Badge>
                    </div>
                    {"matchCount" in disease && (disease as any).matchCount > 0 && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>{(disease as any).matchCount} symptom{(disease as any).matchCount > 1 ? "s" : ""} matched</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {"probability" in disease && (
                      <Badge className={getProbabilityColor((disease as any).probability)}>
                        Match: {(disease as any).probability}
                      </Badge>
                    )}
                    <Badge className={getSeverityColor(disease.severity)} variant="outline">
                      Severity: {disease.severity}
                    </Badge>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 font-semibold text-accent">
                      <AlertCircle className="h-5 w-5" />
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
                    <div className="flex items-center gap-2 font-semibold text-success">
                      <CheckCircle className="h-5 w-5" />
                      Recommended Foods
                    </div>
                    <ul className="space-y-2">
                      {disease.foodRecommendations.map((food, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-success mt-2 flex-shrink-0"></div>
                          <span>{food}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 font-semibold text-primary">
                      <Info className="h-5 w-5" />
                      Prevention
                    </div>
                    <ul className="space-y-2">
                      {disease.prevention.map((prevention, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span>{prevention}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-accent/5 rounded-lg flex items-start gap-3 border border-accent/20">
                  <Info className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    If you experience these symptoms persistently or they worsen, please seek immediate medical attention from a qualified healthcare professional.
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;
