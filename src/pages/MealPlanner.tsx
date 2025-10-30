import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Utensils, Apple, Clock, Flame } from "lucide-react";
import { toast } from "sonner";
import mealPlanningImage from "@/assets/meal-planning.jpg";

const MealPlanner = () => {
  const [preferences, setPreferences] = useState({
    calories: "",
    protein: "",
    dietType: "",
  });

  const sampleMeals = [
    {
      name: "Grilled Salmon with Quinoa",
      calories: 450,
      protein: 35,
      type: "Lunch",
      tags: ["High Protein", "Heart Healthy"],
    },
    {
      name: "Greek Yogurt Parfait",
      calories: 220,
      protein: 18,
      type: "Breakfast",
      tags: ["Quick", "Protein Rich"],
    },
    {
      name: "Chicken Breast with Vegetables",
      calories: 380,
      protein: 42,
      type: "Dinner",
      tags: ["Low Carb", "High Protein"],
    },
    {
      name: "Oatmeal with Berries",
      calories: 280,
      protein: 12,
      type: "Breakfast",
      tags: ["Fiber Rich", "Heart Healthy"],
    },
  ];

  const handleGeneratePlan = () => {
    toast.success("Meal plan generated based on your health metrics!");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-2">Smart Meal Planner</h1>
        <p className="text-muted-foreground">Personalized meal plans based on your health metrics</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6 animate-slide-up">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Utensils className="h-5 w-5 text-primary" />
              Your Preferences
            </h2>
            <div className="space-y-4">
              <div>
                <Label>Daily Calorie Goal</Label>
                <Input
                  type="number"
                  placeholder="e.g., 2000"
                  value={preferences.calories}
                  onChange={(e) => setPreferences({ ...preferences, calories: e.target.value })}
                />
              </div>
              <div>
                <Label>Protein Goal (g)</Label>
                <Input
                  type="number"
                  placeholder="e.g., 150"
                  value={preferences.protein}
                  onChange={(e) => setPreferences({ ...preferences, protein: e.target.value })}
                />
              </div>
              <div>
                <Label>Diet Type</Label>
                <Input
                  placeholder="e.g., Balanced, Low Carb"
                  value={preferences.dietType}
                  onChange={(e) => setPreferences({ ...preferences, dietType: e.target.value })}
                />
              </div>
              <Button onClick={handleGeneratePlan} className="w-full" size="lg">
                Generate Meal Plan
              </Button>
            </div>
          </Card>

          <div className="rounded-xl overflow-hidden border border-border">
            <img src={mealPlanningImage} alt="Meal Planning" className="w-full h-48 object-cover" />
          </div>
        </div>

        <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: "100ms" }}>
          <div className="grid gap-4">
            {sampleMeals.map((meal, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {meal.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                    {meal.type}
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Flame className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{meal.calories}</div>
                      <div className="text-xs text-muted-foreground">Calories</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Apple className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{meal.protein}g</div>
                      <div className="text-xs text-muted-foreground">Protein</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-success/10">
                      <Clock className="h-4 w-4 text-success" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">20min</div>
                      <div className="text-xs text-muted-foreground">Prep Time</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlanner;
