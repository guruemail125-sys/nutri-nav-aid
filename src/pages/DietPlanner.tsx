import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Utensils, Apple, Clock, Flame, TrendingUp, Filter, ChefHat, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import mealPlanningImage from "@/assets/meal-planning.jpg";
import { meals, Meal } from "@/data/meals";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const DietPlanner = () => {
  const [preferences, setPreferences] = useState({
    calories: "",
    protein: "",
    dietType: "",
  });
  const [showFiltered, setShowFiltered] = useState(false);
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>([]);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [showRecipe, setShowRecipe] = useState(false);

  const handleGeneratePlan = () => {
    if (!preferences.calories && !preferences.protein && !preferences.dietType) {
      toast.error("Please set at least one preference");
      return;
    }

    const calorieTarget = parseInt(preferences.calories) || 0;
    const proteinTarget = parseInt(preferences.protein) || 0;
    const caloriePerMeal = calorieTarget / 3;
    const proteinPerMeal = proteinTarget / 3;

    const filtered = meals.filter(meal => {
      let matches = true;

      if (preferences.calories) {
        const calorieRange = caloriePerMeal * 0.4;
        matches = matches && Math.abs(meal.calories - caloriePerMeal) <= calorieRange;
      }

      if (preferences.protein) {
        const proteinRange = proteinPerMeal * 0.5;
        matches = matches && meal.protein >= (proteinPerMeal - proteinRange);
      }

      if (preferences.dietType) {
        matches = matches && meal.dietTypes.some(type => 
          type.toLowerCase().includes(preferences.dietType.toLowerCase())
        );
      }

      return matches;
    });

    if (filtered.length === 0) {
      toast.error("No meals match your preferences. Try adjusting your criteria.");
      return;
    }

    setFilteredMeals(filtered);
    setShowFiltered(true);
    toast.success(`Found ${filtered.length} meals matching your preferences!`);
  };

  const handleClearFilters = () => {
    setPreferences({ calories: "", protein: "", dietType: "" });
    setShowFiltered(false);
    setFilteredMeals([]);
  };

  const handleViewRecipe = (meal: Meal) => {
    setSelectedMeal(meal);
    setShowRecipe(true);
  };

  const displayMeals = showFiltered ? filteredMeals : meals;

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 animate-fade-in text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
          <Utensils className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">AI-Powered Nutrition Planning</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Smart Diet Planner</h1>
        <p className="text-muted-foreground text-lg">Discover {meals.length}+ healthy meals with step-by-step recipes</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6 animate-slide-up">
          <Card className="p-6 bg-gradient-to-br from-card to-muted/20 border-primary/20">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary" />
              Set Your Preferences
            </h2>
            <div className="space-y-5">
              <div>
                <Label className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Flame className="h-4 w-4 text-accent" />
                  Daily Calorie Goal
                </Label>
                <Input
                  type="number"
                  placeholder="e.g., 2000"
                  value={preferences.calories}
                  onChange={(e) => setPreferences({ ...preferences, calories: e.target.value })}
                  className="h-11"
                />
                <p className="text-xs text-muted-foreground mt-1">Recommended: 1800-2400 calories/day</p>
              </div>
              <div>
                <Label className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Apple className="h-4 w-4 text-primary" />
                  Daily Protein Goal (g)
                </Label>
                <Input
                  type="number"
                  placeholder="e.g., 150"
                  value={preferences.protein}
                  onChange={(e) => setPreferences({ ...preferences, protein: e.target.value })}
                  className="h-11"
                />
                <p className="text-xs text-muted-foreground mt-1">Recommended: 0.8-1.2g per kg body weight</p>
              </div>
              <div>
                <Label className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Utensils className="h-4 w-4 text-success" />
                  Diet Type
                </Label>
                <Input
                  placeholder="e.g., Balanced, Low Carb, Keto"
                  value={preferences.dietType}
                  onChange={(e) => setPreferences({ ...preferences, dietType: e.target.value })}
                  className="h-11"
                />
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Balanced", "Low Carb", "High Protein", "Keto"].map(type => (
                    <Badge
                      key={type}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary/10 text-xs"
                      onClick={() => setPreferences({ ...preferences, dietType: type })}
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <Button onClick={handleGeneratePlan} className="flex-1 gap-2" size="lg">
                  <TrendingUp className="h-4 w-4" />
                  Find Meals
                </Button>
                {showFiltered && (
                  <Button onClick={handleClearFilters} variant="outline" size="lg">
                    Clear
                  </Button>
                )}
              </div>
            </div>

            {showFiltered && (
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm font-medium text-primary">
                  Showing {filteredMeals.length} meals matching your preferences
                </p>
              </div>
            )}
          </Card>

          <div className="rounded-xl overflow-hidden border border-border shadow-lg sticky top-4">
            <img src={mealPlanningImage} alt="Diet Planning" className="w-full h-56 object-cover" />
            <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10">
              <p className="text-sm font-medium">💡 Nutrition Tip</p>
              <p className="text-xs text-muted-foreground mt-1">Balance your meals with protein, carbs, and healthy fats for optimal health</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          {/* Vegetarian Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between animate-slide-up">
              <h2 className="text-2xl font-bold text-success">
                🌱 Vegetarian Meals
              </h2>
              <Badge variant="secondary" className="text-sm bg-success/10 text-success border-success/20">
                {displayMeals.filter(meal => meal.dietTypes.includes("Vegetarian") || meal.tags.includes("Vegetarian")).length} Meals
              </Badge>
            </div>

            <div className="grid gap-4 animate-slide-up" style={{ animationDelay: "100ms" }}>
              {displayMeals.filter(meal => meal.dietTypes.includes("Vegetarian") || meal.tags.includes("Vegetarian")).map((meal, index) => (
                <Card 
                  key={`veg-${index}`} 
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-muted/10"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{meal.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {meal.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 whitespace-nowrap">
                      {meal.type}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 bg-muted/30 rounded-lg">
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
                        <TrendingUp className="h-4 w-4 text-success" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{meal.carbs}g</div>
                        <div className="text-xs text-muted-foreground">Carbs</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <Apple className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{meal.fats}g</div>
                        <div className="text-xs text-muted-foreground">Fats</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-muted">
                        <Clock className="h-4 w-4 text-foreground" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{meal.prepTime}min</div>
                        <div className="text-xs text-muted-foreground">Prep Time</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {meal.dietTypes.map((type, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      onClick={() => handleViewRecipe(meal)} 
                      size="sm" 
                      className="gap-2"
                    >
                      <ChefHat className="h-4 w-4" />
                      View Recipe
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {displayMeals.filter(meal => meal.dietTypes.includes("Vegetarian") || meal.tags.includes("Vegetarian")).length === 0 && (
              <Card className="p-8 text-center bg-gradient-to-br from-card to-muted/20">
                <p className="text-muted-foreground">No vegetarian meals found with current preferences</p>
              </Card>
            )}
          </div>

          {/* Non-Vegetarian Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between animate-slide-up">
              <h2 className="text-2xl font-bold text-destructive">
                🍖 Non-Vegetarian Meals
              </h2>
              <Badge variant="secondary" className="text-sm bg-destructive/10 text-destructive border-destructive/20">
                {displayMeals.filter(meal => !meal.dietTypes.includes("Vegetarian") && !meal.tags.includes("Vegetarian")).length} Meals
              </Badge>
            </div>

            <div className="grid gap-4 animate-slide-up" style={{ animationDelay: "100ms" }}>
              {displayMeals.filter(meal => !meal.dietTypes.includes("Vegetarian") && !meal.tags.includes("Vegetarian")).map((meal, index) => (
                <Card 
                  key={`non-veg-${index}`} 
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-muted/10"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{meal.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {meal.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 whitespace-nowrap">
                      {meal.type}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 bg-muted/30 rounded-lg">
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
                        <TrendingUp className="h-4 w-4 text-success" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{meal.carbs}g</div>
                        <div className="text-xs text-muted-foreground">Carbs</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-secondary/10">
                        <Apple className="h-4 w-4 text-secondary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{meal.fats}g</div>
                        <div className="text-xs text-muted-foreground">Fats</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-muted">
                        <Clock className="h-4 w-4 text-foreground" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{meal.prepTime}min</div>
                        <div className="text-xs text-muted-foreground">Prep Time</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {meal.dietTypes.map((type, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      onClick={() => handleViewRecipe(meal)} 
                      size="sm" 
                      className="gap-2"
                    >
                      <ChefHat className="h-4 w-4" />
                      View Recipe
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {displayMeals.filter(meal => !meal.dietTypes.includes("Vegetarian") && !meal.tags.includes("Vegetarian")).length === 0 && (
              <Card className="p-8 text-center bg-gradient-to-br from-card to-muted/20">
                <p className="text-muted-foreground">No non-vegetarian meals found with current preferences</p>
              </Card>
            )}
          </div>

          {displayMeals.length === 0 && (
            <Card className="p-12 text-center bg-gradient-to-br from-card to-muted/20">
              <Utensils className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">No meals found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your preferences to see more meal options</p>
              <Button onClick={handleClearFilters} variant="outline">
                Clear Filters
              </Button>
            </Card>
          )}
        </div>
      </div>

      {/* Recipe Dialog */}
      <Dialog open={showRecipe} onOpenChange={setShowRecipe}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <ChefHat className="h-6 w-6 text-primary" />
              {selectedMeal?.name}
            </DialogTitle>
            <DialogDescription className="text-base">
              {selectedMeal?.description}
            </DialogDescription>
          </DialogHeader>
          
          {selectedMeal && (
            <div className="space-y-6 mt-4">
              <div className="grid grid-cols-4 gap-4 p-4 bg-muted/30 rounded-lg">
                <div className="text-center">
                  <div className="font-semibold text-accent">{selectedMeal.calories}</div>
                  <div className="text-xs text-muted-foreground">Calories</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-primary">{selectedMeal.protein}g</div>
                  <div className="text-xs text-muted-foreground">Protein</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-success">{selectedMeal.carbs}g</div>
                  <div className="text-xs text-muted-foreground">Carbs</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-secondary">{selectedMeal.fats}g</div>
                  <div className="text-xs text-muted-foreground">Fats</div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Preparation Time</h3>
                </div>
                <p className="text-muted-foreground">{selectedMeal.prepTime} minutes</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <h3 className="text-lg font-semibold">Step-by-Step Instructions</h3>
                </div>
                <ol className="space-y-3">
                  {selectedMeal.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="text-sm flex-1">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="pt-4 border-t">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Type: {selectedMeal.type}</Badge>
                  {selectedMeal.dietTypes.map((type, i) => (
                    <Badge key={i} variant="secondary">{type}</Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DietPlanner;