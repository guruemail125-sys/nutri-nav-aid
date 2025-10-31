export interface Meal {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  type: "Breakfast" | "Lunch" | "Dinner" | "Snack";
  tags: string[];
  dietTypes: string[];
  prepTime: number;
  description: string;
  instructions: string[];
}

export const meals: Meal[] = [
  // Breakfast
  {
    name: "Greek Yogurt Parfait with Berries",
    calories: 220,
    protein: 18,
    carbs: 28,
    fats: 4,
    type: "Breakfast",
    tags: ["Quick", "Protein Rich", "Low Fat"],
    dietTypes: ["Balanced", "Low Carb", "High Protein"],
    prepTime: 5,
    description: "Creamy Greek yogurt layered with fresh berries and a drizzle of honey",
    instructions: [
      "Take a clean glass or bowl",
      "Add 1 cup of Greek yogurt to the bottom",
      "Layer with 1/4 cup mixed fresh berries (blueberries, strawberries, raspberries)",
      "Add a thin layer of granola (optional)",
      "Repeat layers if desired",
      "Drizzle 1 teaspoon honey on top",
      "Garnish with mint leaves and serve immediately"
    ]
  },
  {
    name: "Oatmeal with Berries and Almonds",
    calories: 280,
    protein: 12,
    carbs: 42,
    fats: 8,
    type: "Breakfast",
    tags: ["Fiber Rich", "Heart Healthy", "Filling"],
    dietTypes: ["Balanced", "Heart Healthy"],
    prepTime: 10,
    description: "Warm oatmeal topped with fresh berries, sliced almonds, and cinnamon",
    instructions: [
      "Bring 1 cup of water or milk to a boil in a saucepan",
      "Add 1/2 cup rolled oats and reduce heat to medium-low",
      "Stir occasionally and cook for 5-7 minutes until thick",
      "Remove from heat and let stand for 2 minutes",
      "Transfer to a bowl",
      "Top with 1/4 cup fresh berries",
      "Sprinkle 2 tablespoons sliced almonds",
      "Add a pinch of cinnamon and optional honey to taste"
    ]
  },
  {
    name: "Scrambled Eggs with Avocado Toast",
    calories: 380,
    protein: 24,
    carbs: 28,
    fats: 18,
    type: "Breakfast",
    tags: ["High Protein", "Filling", "Nutritious"],
    dietTypes: ["Balanced", "High Protein", "Low Carb"],
    prepTime: 15,
    description: "Fluffy scrambled eggs served with whole grain toast and mashed avocado",
    instructions: [
      "Toast 2 slices of whole grain bread until golden",
      "Crack 3 eggs into a bowl and whisk with salt and pepper",
      "Heat 1 teaspoon butter in a non-stick pan over medium-low heat",
      "Pour eggs into pan and let sit for 20 seconds",
      "Gently push eggs from edges to center with spatula",
      "Continue until eggs are just set but still moist (2-3 minutes)",
      "Mash half an avocado with lime juice, salt, and pepper",
      "Spread avocado on toast",
      "Serve scrambled eggs alongside or on top of toast"
    ]
  },
  {
    name: "Protein Smoothie Bowl",
    calories: 320,
    protein: 28,
    carbs: 35,
    fats: 8,
    type: "Breakfast",
    tags: ["Quick", "High Protein", "Refreshing"],
    dietTypes: ["High Protein", "Balanced"],
    prepTime: 8,
    description: "Thick smoothie bowl with protein powder, banana, berries, and granola",
    instructions: [
      "Add 1 frozen banana, 1/2 cup frozen berries, and 1 scoop protein powder to blender",
      "Pour in 1/2 cup almond milk (add more if needed for consistency)",
      "Blend on high until smooth and thick",
      "Pour into a bowl",
      "Top with fresh berries, sliced banana, 2 tablespoons granola",
      "Add chia seeds and coconut flakes if desired",
      "Serve immediately with a spoon"
    ]
  },
  {
    name: "Vegetable Omelet",
    calories: 260,
    protein: 22,
    carbs: 8,
    fats: 16,
    type: "Breakfast",
    tags: ["Low Carb", "High Protein", "Keto Friendly"],
    dietTypes: ["Low Carb", "High Protein", "Keto"],
    prepTime: 12,
    description: "Three-egg omelet filled with spinach, tomatoes, and mushrooms",
    instructions: [
      "Dice 1/4 cup mushrooms, tomatoes, and chop handful of spinach",
      "Whisk 3 eggs with 1 tablespoon water, salt, and pepper",
      "Heat 1 tablespoon oil in non-stick pan over medium heat",
      "Sauté vegetables for 2-3 minutes until softened, then remove",
      "Pour eggs into the same pan",
      "Let eggs set on bottom (about 2 minutes)",
      "Add vegetables to one half of omelet",
      "Fold the other half over vegetables",
      "Cook for another minute, then slide onto plate"
    ]
  },

  // Lunch
  {
    name: "Grilled Salmon with Quinoa",
    calories: 450,
    protein: 35,
    carbs: 38,
    fats: 16,
    type: "Lunch",
    tags: ["High Protein", "Heart Healthy", "Omega-3"],
    dietTypes: ["Balanced", "High Protein", "Heart Healthy"],
    prepTime: 25,
    description: "Perfectly grilled salmon fillet served over fluffy quinoa with roasted vegetables",
    instructions: [
      "Rinse 1/2 cup quinoa and cook in 1 cup water (bring to boil, then simmer 15 minutes)",
      "Season 6 oz salmon fillet with salt, pepper, lemon juice, and herbs",
      "Heat grill or grill pan to medium-high heat",
      "Brush salmon with olive oil",
      "Grill salmon 4-5 minutes per side until flaky",
      "While salmon cooks, toss mixed vegetables with olive oil and roast at 400°F for 15 minutes",
      "Fluff quinoa with a fork",
      "Plate quinoa, top with roasted vegetables and grilled salmon",
      "Garnish with lemon wedge and fresh herbs"
    ]
  },
  {
    name: "Chicken Caesar Salad",
    calories: 380,
    protein: 38,
    carbs: 18,
    fats: 16,
    type: "Lunch",
    tags: ["High Protein", "Low Carb", "Filling"],
    dietTypes: ["Low Carb", "High Protein"],
    prepTime: 15,
    description: "Grilled chicken breast on romaine lettuce with Caesar dressing and parmesan",
    instructions: [
      "Season 6 oz chicken breast with salt, pepper, and garlic powder",
      "Grill or pan-sear chicken 6-7 minutes per side until fully cooked",
      "Let chicken rest for 5 minutes, then slice",
      "Wash and chop 2 cups romaine lettuce",
      "Make dressing: mix 2 tbsp Caesar dressing with 1 tsp lemon juice",
      "Toss lettuce with half the dressing",
      "Plate lettuce and top with sliced chicken",
      "Drizzle remaining dressing",
      "Sprinkle 2 tablespoons grated parmesan",
      "Add croutons if desired and serve"
    ]
  },
  {
    name: "Turkey and Avocado Wrap",
    calories: 420,
    protein: 32,
    carbs: 35,
    fats: 18,
    type: "Lunch",
    tags: ["Quick", "Protein Rich", "Portable"],
    dietTypes: ["Balanced", "High Protein"],
    prepTime: 10,
    description: "Whole wheat wrap filled with turkey, avocado, lettuce, and tomato",
    instructions: [
      "Lay out one whole wheat tortilla wrap",
      "Spread 2 tablespoons hummus or mayo on wrap",
      "Layer 4 oz sliced turkey breast",
      "Add 1/4 sliced avocado",
      "Top with lettuce leaves, sliced tomato, and red onion",
      "Season with salt, pepper, and optional hot sauce",
      "Fold in sides of wrap",
      "Roll tightly from bottom to top",
      "Cut in half diagonally and serve"
    ]
  },
  {
    name: "Tuna Salad Bowl",
    calories: 340,
    protein: 36,
    carbs: 22,
    fats: 12,
    type: "Lunch",
    tags: ["High Protein", "Low Fat", "Quick"],
    dietTypes: ["High Protein", "Low Carb", "Balanced"],
    prepTime: 12,
    description: "Fresh tuna mixed with vegetables over mixed greens with lemon dressing",
    instructions: [
      "Drain one 5 oz can of tuna in water",
      "Mix tuna with 1 tablespoon Greek yogurt or mayo",
      "Add diced celery, red onion, and cucumber",
      "Season with salt, pepper, and lemon juice",
      "Prepare a bed of 2 cups mixed greens",
      "Add cherry tomatoes, shredded carrots, and bell peppers",
      "Top with tuna mixture",
      "Make dressing: mix 1 tbsp olive oil with 1 tbsp lemon juice",
      "Drizzle dressing over salad and serve"
    ]
  },
  {
    name: "Vegetarian Buddha Bowl",
    calories: 380,
    protein: 16,
    carbs: 52,
    fats: 12,
    type: "Lunch",
    tags: ["Vegetarian", "Fiber Rich", "Colorful"],
    dietTypes: ["Balanced", "Vegetarian"],
    prepTime: 20,
    description: "Chickpeas, quinoa, roasted vegetables, and tahini dressing",
    instructions: [
      "Cook 1/3 cup quinoa in vegetable broth",
      "Drain and rinse 1/2 cup canned chickpeas",
      "Roast chickpeas with olive oil and spices at 400°F for 20 minutes",
      "Chop and roast sweet potato, bell peppers, and broccoli",
      "Prepare tahini dressing: mix 2 tbsp tahini with lemon juice and water",
      "Arrange quinoa in bowl",
      "Add sections of roasted vegetables and chickpeas",
      "Top with fresh greens and shredded purple cabbage",
      "Drizzle tahini dressing and sprinkle sesame seeds"
    ]
  },
  {
    name: "Beef and Broccoli Stir-Fry",
    calories: 420,
    protein: 36,
    carbs: 28,
    fats: 18,
    type: "Lunch",
    tags: ["High Protein", "Low Carb", "Asian"],
    dietTypes: ["High Protein", "Low Carb"],
    prepTime: 20,
    description: "Tender beef strips with broccoli in savory sauce over brown rice",
    instructions: [
      "Cook 1/3 cup brown rice according to package directions",
      "Slice 6 oz beef sirloin into thin strips",
      "Marinate beef in soy sauce, garlic, and ginger for 10 minutes",
      "Heat wok or large pan with 1 tablespoon oil over high heat",
      "Stir-fry beef for 2-3 minutes until browned, then remove",
      "Add broccoli florets and 2 tablespoons water, cook 3 minutes",
      "Return beef to pan",
      "Add sauce: 2 tbsp soy sauce, 1 tbsp oyster sauce, 1 tsp sesame oil",
      "Stir-fry for 2 minutes until sauce thickens",
      "Serve over brown rice"
    ]
  },

  // Dinner
  {
    name: "Chicken Breast with Roasted Vegetables",
    calories: 380,
    protein: 42,
    carbs: 24,
    fats: 12,
    type: "Dinner",
    tags: ["Low Carb", "High Protein", "Lean"],
    dietTypes: ["Low Carb", "High Protein", "Balanced"],
    prepTime: 30,
    description: "Herb-seasoned chicken breast with colorful roasted vegetables",
    instructions: [
      "Preheat oven to 425°F",
      "Season 6 oz chicken breast with herbs, salt, and pepper",
      "Chop zucchini, bell peppers, carrots, and red onion",
      "Toss vegetables with olive oil, salt, and pepper",
      "Spread vegetables on baking sheet",
      "Heat oven-safe pan, sear chicken 3 minutes per side",
      "Place chicken and vegetables in oven",
      "Roast for 15-20 minutes until chicken reaches 165°F",
      "Let chicken rest 5 minutes before slicing",
      "Serve chicken with roasted vegetables"
    ]
  },
  {
    name: "Baked Cod with Sweet Potato",
    calories: 420,
    protein: 38,
    carbs: 42,
    fats: 10,
    type: "Dinner",
    tags: ["Heart Healthy", "Lean", "Omega-3"],
    dietTypes: ["Balanced", "Heart Healthy", "High Protein"],
    prepTime: 35,
    description: "Flaky baked cod with roasted sweet potato and green beans",
    instructions: [
      "Preheat oven to 400°F",
      "Cube one medium sweet potato and toss with olive oil",
      "Roast sweet potato for 20 minutes",
      "Season 6 oz cod fillet with lemon, herbs, salt, and pepper",
      "Place cod on parchment-lined baking sheet",
      "Add trimmed green beans around cod",
      "Drizzle everything with olive oil",
      "Bake for 12-15 minutes until cod flakes easily",
      "Squeeze fresh lemon over cod",
      "Serve with roasted sweet potato and green beans"
    ]
  },
  {
    name: "Lean Beef Steak with Asparagus",
    calories: 460,
    protein: 44,
    carbs: 12,
    fats: 24,
    type: "Dinner",
    tags: ["High Protein", "Low Carb", "Keto Friendly"],
    dietTypes: ["Low Carb", "High Protein", "Keto"],
    prepTime: 25,
    description: "Grilled sirloin steak with garlic butter asparagus",
    instructions: [
      "Remove 6 oz sirloin steak from refrigerator 30 minutes before cooking",
      "Pat steak dry and season generously with salt and pepper",
      "Heat grill or cast iron pan to high heat",
      "Grill steak 4-5 minutes per side for medium-rare",
      "Let steak rest for 5 minutes",
      "Meanwhile, trim asparagus and sauté in butter with garlic",
      "Cook asparagus 5-7 minutes until tender-crisp",
      "Slice steak against the grain",
      "Serve steak with asparagus",
      "Optional: top with herb butter"
    ]
  },
  {
    name: "Shrimp Pasta Primavera",
    calories: 480,
    protein: 34,
    carbs: 58,
    fats: 12,
    type: "Dinner",
    tags: ["Seafood", "Balanced", "Italian"],
    dietTypes: ["Balanced", "High Protein"],
    prepTime: 25,
    description: "Whole wheat pasta with shrimp and fresh seasonal vegetables",
    instructions: [
      "Boil water and cook 2 oz whole wheat pasta according to package",
      "Reserve 1/2 cup pasta water before draining",
      "Heat olive oil in large pan over medium-high heat",
      "Sauté 6 oz shrimp with garlic until pink (3-4 minutes)",
      "Remove shrimp and set aside",
      "In same pan, sauté zucchini, bell peppers, and cherry tomatoes",
      "Add cooked pasta and reserved pasta water",
      "Return shrimp to pan",
      "Toss with fresh basil, parmesan, and lemon juice",
      "Season and serve immediately"
    ]
  },
  {
    name: "Turkey Meatballs with Zucchini Noodles",
    calories: 340,
    protein: 38,
    carbs: 18,
    fats: 14,
    type: "Dinner",
    tags: ["Low Carb", "High Protein", "Gluten Free"],
    dietTypes: ["Low Carb", "High Protein", "Keto"],
    prepTime: 30,
    description: "Lean turkey meatballs served over spiralized zucchini with marinara",
    instructions: [
      "Mix 8 oz ground turkey with breadcrumbs, egg, garlic, and Italian seasoning",
      "Form into 2-inch meatballs",
      "Bake at 400°F for 20 minutes until cooked through",
      "Spiralize 2 medium zucchinis into noodles",
      "Heat marinara sauce in a pan",
      "Add cooked meatballs to sauce",
      "In separate pan, quickly sauté zucchini noodles (2-3 minutes)",
      "Season zucchini noodles with salt and pepper",
      "Serve meatballs and sauce over zucchini noodles",
      "Garnish with fresh basil and parmesan"
    ]
  },
  {
    name: "Grilled Chicken Fajitas",
    calories: 420,
    protein: 40,
    carbs: 36,
    fats: 14,
    type: "Dinner",
    tags: ["High Protein", "Mexican", "Flavorful"],
    dietTypes: ["Balanced", "High Protein"],
    prepTime: 25,
    description: "Grilled chicken with peppers and onions in whole wheat tortillas",
    instructions: [
      "Slice 6 oz chicken breast into strips",
      "Marinate chicken in lime juice, cumin, chili powder, and garlic (15 minutes)",
      "Slice bell peppers and onions",
      "Heat grill pan or skillet over high heat",
      "Cook chicken strips 5-6 minutes until done",
      "Remove chicken and cook peppers and onions until charred",
      "Warm whole wheat tortillas",
      "Fill tortillas with chicken and vegetables",
      "Top with salsa, Greek yogurt, cilantro, and lime",
      "Fold and serve immediately"
    ]
  },
  {
    name: "Tofu Stir-Fry with Brown Rice",
    calories: 380,
    protein: 22,
    carbs: 48,
    fats: 12,
    type: "Dinner",
    tags: ["Vegetarian", "Plant-Based", "Asian"],
    dietTypes: ["Balanced", "Vegetarian"],
    prepTime: 20,
    description: "Crispy tofu with mixed vegetables in teriyaki sauce over brown rice",
    instructions: [
      "Press and cube 8 oz firm tofu",
      "Cook 1/3 cup brown rice",
      "Toss tofu cubes with cornstarch",
      "Pan-fry tofu in oil until golden and crispy",
      "Remove tofu and set aside",
      "Stir-fry broccoli, carrots, snap peas, and mushrooms",
      "Add teriyaki sauce and tofu back to pan",
      "Toss everything together for 2 minutes",
      "Serve over brown rice",
      "Garnish with sesame seeds and green onions"
    ]
  },

  // Snacks
  {
    name: "Apple Slices with Almond Butter",
    calories: 180,
    protein: 6,
    carbs: 22,
    fats: 8,
    type: "Snack",
    tags: ["Quick", "Natural", "Energizing"],
    dietTypes: ["Balanced", "Heart Healthy"],
    prepTime: 3,
    description: "Fresh apple slices paired with creamy almond butter",
    instructions: [
      "Wash one medium apple",
      "Core and slice apple into 8 wedges",
      "Arrange apple slices on a plate",
      "Serve with 2 tablespoons almond butter for dipping",
      "Optional: sprinkle cinnamon on apple slices"
    ]
  },
  {
    name: "Protein Energy Balls",
    calories: 160,
    protein: 8,
    carbs: 18,
    fats: 6,
    type: "Snack",
    tags: ["Quick", "Protein Rich", "No Bake"],
    dietTypes: ["Balanced", "High Protein"],
    prepTime: 15,
    description: "Oats, protein powder, honey, and nut butter formed into bite-sized balls",
    instructions: [
      "Mix 1 cup rolled oats, 1/4 cup protein powder, and pinch of salt",
      "Add 1/3 cup nut butter and 1/4 cup honey",
      "Stir in optional add-ins: chocolate chips, dried fruit, coconut",
      "Mix until well combined",
      "Refrigerate mixture for 15 minutes",
      "Roll into 1-inch balls (makes about 12)",
      "Store in refrigerator for up to 1 week",
      "Serve 2-3 balls per snack"
    ]
  },
  {
    name: "Hummus with Vegetable Sticks",
    calories: 140,
    protein: 6,
    carbs: 18,
    fats: 5,
    type: "Snack",
    tags: ["Low Calorie", "Fiber Rich", "Vegetarian"],
    dietTypes: ["Balanced", "Vegetarian", "Low Carb"],
    prepTime: 5,
    description: "Creamy hummus with crunchy carrots, celery, and bell peppers",
    instructions: [
      "Wash and cut carrots, celery, and bell peppers into sticks",
      "Arrange vegetable sticks on a plate",
      "Serve with 1/4 cup hummus in a small bowl for dipping",
      "Optional: sprinkle paprika or olive oil on hummus",
      "Enjoy immediately for maximum crunch"
    ]
  },
  {
    name: "Hard-Boiled Eggs",
    calories: 140,
    protein: 12,
    carbs: 2,
    fats: 10,
    type: "Snack",
    tags: ["High Protein", "Low Carb", "Quick"],
    dietTypes: ["Low Carb", "High Protein", "Keto"],
    prepTime: 12,
    description: "Two perfectly cooked hard-boiled eggs with a pinch of salt",
    instructions: [
      "Place 2 eggs in a pot and cover with cold water (1 inch above eggs)",
      "Bring water to a rolling boil over high heat",
      "Once boiling, remove from heat and cover pot",
      "Let eggs sit for 10-12 minutes",
      "Transfer eggs to ice water bath",
      "Let cool for 5 minutes",
      "Peel eggs under running water",
      "Season with salt, pepper, or everything bagel seasoning"
    ]
  },
  {
    name: "Mixed Nuts and Dried Fruit",
    calories: 200,
    protein: 8,
    carbs: 20,
    fats: 12,
    type: "Snack",
    tags: ["Quick", "Energizing", "Portable"],
    dietTypes: ["Balanced", "Heart Healthy"],
    prepTime: 2,
    description: "A healthy mix of almonds, walnuts, and dried cranberries",
    instructions: [
      "Measure 1/4 cup mixed raw or roasted nuts (almonds, walnuts, cashews)",
      "Add 2 tablespoons dried fruit (cranberries, raisins, or apricots)",
      "Mix together in a small container",
      "Portion into snack-sized bags for convenience",
      "Store in airtight container for up to 2 weeks"
    ]
  },
  {
    name: "Cottage Cheese with Berries",
    calories: 160,
    protein: 16,
    carbs: 16,
    fats: 4,
    type: "Snack",
    tags: ["High Protein", "Low Fat", "Quick"],
    dietTypes: ["Balanced", "High Protein", "Low Carb"],
    prepTime: 3,
    description: "Low-fat cottage cheese topped with fresh mixed berries",
    instructions: [
      "Scoop 3/4 cup low-fat cottage cheese into a bowl",
      "Top with 1/2 cup fresh mixed berries",
      "Optional: drizzle with honey or sprinkle cinnamon",
      "Optional: add a few chopped nuts for crunch",
      "Serve immediately"
    ]
  },
];