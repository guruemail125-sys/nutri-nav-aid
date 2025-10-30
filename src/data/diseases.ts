export interface Disease {
  name: string;
  category: string;
  symptoms: string[];
  remedies: string[];
  prevention: string[];
  severity: "Low" | "Medium" | "High";
}

export const diseases: Disease[] = [
  // Respiratory Diseases
  {
    name: "Common Cold",
    category: "Respiratory",
    symptoms: ["Runny nose", "Sneezing", "Sore throat", "Cough", "Mild fever", "Fatigue"],
    remedies: ["Rest", "Stay hydrated", "Use over-the-counter cold medications", "Gargle with salt water", "Drink warm fluids"],
    prevention: ["Wash hands frequently", "Avoid close contact with sick people", "Don't touch face", "Keep immune system strong"],
    severity: "Low",
  },
  {
    name: "Influenza (Flu)",
    category: "Respiratory",
    symptoms: ["High fever", "Chills", "Muscle aches", "Headache", "Fatigue", "Dry cough", "Sore throat"],
    remedies: ["Antiviral medications", "Rest and sleep", "Stay hydrated", "Pain relievers", "Warm fluids"],
    prevention: ["Annual flu vaccine", "Wash hands regularly", "Avoid crowded places during flu season", "Maintain healthy lifestyle"],
    severity: "Medium",
  },
  {
    name: "Asthma",
    category: "Respiratory",
    symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing", "Difficulty breathing"],
    remedies: ["Inhalers", "Avoid triggers", "Breathing exercises", "Corticosteroid medication", "Emergency action plan"],
    prevention: ["Identify triggers", "Keep clean environment", "Regular checkups", "Vaccination", "Monitor air quality"],
    severity: "High",
  },
  {
    name: "Bronchitis",
    category: "Respiratory",
    symptoms: ["Persistent cough", "Mucus production", "Fatigue", "Shortness of breath", "Chest discomfort", "Mild fever"],
    remedies: ["Rest", "Drink fluids", "Use humidifier", "Cough medicine", "Avoid smoke and irritants"],
    prevention: ["Don't smoke", "Avoid lung irritants", "Wash hands frequently", "Get vaccinated"],
    severity: "Medium",
  },
  {
    name: "Pneumonia",
    category: "Respiratory",
    symptoms: ["High fever", "Cough with phlegm", "Chest pain", "Shortness of breath", "Fatigue", "Confusion in elderly"],
    remedies: ["Antibiotics", "Rest", "Fever reducers", "Drink fluids", "Hospitalization if severe"],
    prevention: ["Vaccination", "Good hygiene", "Don't smoke", "Healthy lifestyle"],
    severity: "High",
  },

  // Cardiovascular Diseases
  {
    name: "Hypertension",
    category: "Cardiovascular",
    symptoms: ["Headaches", "Shortness of breath", "Nosebleeds", "Chest pain", "Visual changes", "Irregular heartbeat"],
    remedies: ["Blood pressure medication", "Low-sodium diet", "Regular exercise", "Stress management", "Weight loss"],
    prevention: ["Reduce salt intake", "Exercise regularly", "Limit alcohol", "Manage stress", "Maintain healthy weight"],
    severity: "High",
  },
  {
    name: "Coronary Artery Disease",
    category: "Cardiovascular",
    symptoms: ["Chest pain", "Shortness of breath", "Heart palpitations", "Fatigue", "Weakness", "Dizziness"],
    remedies: ["Medications", "Lifestyle changes", "Angioplasty", "Bypass surgery", "Cardiac rehabilitation"],
    prevention: ["Healthy diet", "Regular exercise", "Don't smoke", "Manage cholesterol", "Control diabetes"],
    severity: "High",
  },
  {
    name: "Heart Failure",
    category: "Cardiovascular",
    symptoms: ["Shortness of breath", "Fatigue", "Swollen legs and ankles", "Rapid heartbeat", "Persistent cough", "Reduced exercise ability"],
    remedies: ["Medications", "Lifestyle modifications", "Device therapy", "Surgery", "Heart transplant"],
    prevention: ["Control blood pressure", "Manage diabetes", "Healthy weight", "Regular exercise", "Avoid smoking"],
    severity: "High",
  },
  {
    name: "Arrhythmia",
    category: "Cardiovascular",
    symptoms: ["Palpitations", "Chest pain", "Shortness of breath", "Dizziness", "Fatigue", "Fainting"],
    remedies: ["Medications", "Cardioversion", "Ablation", "Pacemaker", "Lifestyle changes"],
    prevention: ["Limit caffeine", "Reduce stress", "Avoid smoking", "Limit alcohol", "Regular checkups"],
    severity: "Medium",
  },

  // Metabolic & Endocrine Diseases
  {
    name: "Diabetes Type 1",
    category: "Metabolic",
    symptoms: ["Increased thirst", "Frequent urination", "Extreme hunger", "Fatigue", "Blurred vision", "Slow healing wounds"],
    remedies: ["Insulin therapy", "Blood sugar monitoring", "Healthy diet", "Regular exercise", "Carb counting"],
    prevention: ["No known prevention", "Early detection", "Family screening"],
    severity: "High",
  },
  {
    name: "Diabetes Type 2",
    category: "Metabolic",
    symptoms: ["Increased thirst", "Frequent urination", "Fatigue", "Blurred vision", "Slow healing wounds", "Numbness in extremities"],
    remedies: ["Blood sugar monitoring", "Medication", "Insulin therapy", "Healthy diet", "Regular exercise", "Weight management"],
    prevention: ["Maintain healthy weight", "Exercise regularly", "Eat balanced diet", "Limit sugar intake", "Regular screening"],
    severity: "High",
  },
  {
    name: "Hypothyroidism",
    category: "Endocrine",
    symptoms: ["Fatigue", "Weight gain", "Cold sensitivity", "Dry skin", "Hair loss", "Depression", "Constipation"],
    remedies: ["Thyroid hormone replacement", "Regular monitoring", "Healthy diet", "Exercise"],
    prevention: ["Iodine-rich diet", "Regular thyroid screening", "Manage autoimmune conditions"],
    severity: "Medium",
  },
  {
    name: "Hyperthyroidism",
    category: "Endocrine",
    symptoms: ["Weight loss", "Rapid heartbeat", "Nervousness", "Sweating", "Tremors", "Difficulty sleeping"],
    remedies: ["Anti-thyroid medications", "Radioactive iodine", "Beta blockers", "Surgery", "Regular monitoring"],
    prevention: ["Limit iodine intake", "Manage stress", "Regular checkups"],
    severity: "Medium",
  },
  {
    name: "Obesity",
    category: "Metabolic",
    symptoms: ["Excessive body fat", "Fatigue", "Joint pain", "Shortness of breath", "Snoring", "Depression"],
    remedies: ["Dietary changes", "Regular exercise", "Behavioral therapy", "Medication", "Bariatric surgery"],
    prevention: ["Balanced diet", "Regular physical activity", "Adequate sleep", "Stress management"],
    severity: "Medium",
  },

  // Gastrointestinal Diseases
  {
    name: "Gastroesophageal Reflux Disease (GERD)",
    category: "Gastrointestinal",
    symptoms: ["Heartburn", "Chest pain", "Difficulty swallowing", "Regurgitation", "Chronic cough", "Sore throat"],
    remedies: ["Antacids", "Lifestyle changes", "Avoid trigger foods", "Elevate head while sleeping", "Medications"],
    prevention: ["Maintain healthy weight", "Avoid trigger foods", "Eat smaller meals", "Don't lie down after eating"],
    severity: "Medium",
  },
  {
    name: "Irritable Bowel Syndrome (IBS)",
    category: "Gastrointestinal",
    symptoms: ["Abdominal pain", "Bloating", "Diarrhea", "Constipation", "Gas", "Mucus in stool"],
    remedies: ["Dietary changes", "Fiber supplements", "Medications", "Stress management", "Probiotics"],
    prevention: ["Identify trigger foods", "Manage stress", "Regular exercise", "Adequate sleep"],
    severity: "Medium",
  },
  {
    name: "Peptic Ulcer",
    category: "Gastrointestinal",
    symptoms: ["Burning stomach pain", "Bloating", "Nausea", "Vomiting", "Dark stools", "Weight loss"],
    remedies: ["Antibiotics", "Acid-reducing medications", "Avoid NSAIDs", "Lifestyle changes"],
    prevention: ["Avoid NSAIDs", "Limit alcohol", "Don't smoke", "Manage stress", "Good hygiene"],
    severity: "High",
  },
  {
    name: "Hepatitis B",
    category: "Gastrointestinal",
    symptoms: ["Fatigue", "Dark urine", "Jaundice", "Abdominal pain", "Nausea", "Joint pain"],
    remedies: ["Antiviral medications", "Rest", "Healthy diet", "Avoid alcohol", "Regular monitoring"],
    prevention: ["Vaccination", "Safe sex practices", "Don't share needles", "Screen blood products"],
    severity: "High",
  },

  // Neurological Diseases
  {
    name: "Migraine",
    category: "Neurological",
    symptoms: ["Severe headache", "Nausea", "Vomiting", "Light sensitivity", "Sound sensitivity", "Visual disturbances"],
    remedies: ["Pain relievers", "Triptans", "Rest in dark room", "Cold compress", "Preventive medications"],
    prevention: ["Identify triggers", "Regular sleep", "Stress management", "Stay hydrated", "Regular meals"],
    severity: "Medium",
  },
  {
    name: "Epilepsy",
    category: "Neurological",
    symptoms: ["Seizures", "Temporary confusion", "Staring spells", "Uncontrollable jerking", "Loss of consciousness"],
    remedies: ["Anti-seizure medications", "Surgery", "Vagus nerve stimulation", "Ketogenic diet"],
    prevention: ["Take medications as prescribed", "Avoid triggers", "Get adequate sleep", "Limit alcohol"],
    severity: "High",
  },
  {
    name: "Parkinson's Disease",
    category: "Neurological",
    symptoms: ["Tremors", "Slow movement", "Rigid muscles", "Impaired balance", "Speech changes", "Writing changes"],
    remedies: ["Medications", "Physical therapy", "Occupational therapy", "Speech therapy", "Surgery"],
    prevention: ["Regular exercise", "Healthy diet", "Avoid toxins", "Manage stress"],
    severity: "High",
  },
  {
    name: "Alzheimer's Disease",
    category: "Neurological",
    symptoms: ["Memory loss", "Confusion", "Difficulty planning", "Language problems", "Misplacing things", "Poor judgment"],
    remedies: ["Medications", "Cognitive training", "Physical exercise", "Social engagement", "Supportive care"],
    prevention: ["Mental stimulation", "Physical activity", "Social engagement", "Healthy diet", "Manage cardiovascular risk"],
    severity: "High",
  },

  // Musculoskeletal Diseases
  {
    name: "Osteoarthritis",
    category: "Musculoskeletal",
    symptoms: ["Joint pain", "Stiffness", "Swelling", "Reduced flexibility", "Grating sensation", "Bone spurs"],
    remedies: ["Pain relievers", "Physical therapy", "Exercise", "Weight management", "Joint replacement surgery"],
    prevention: ["Maintain healthy weight", "Regular exercise", "Avoid joint injuries", "Good posture"],
    severity: "Medium",
  },
  {
    name: "Rheumatoid Arthritis",
    category: "Musculoskeletal",
    symptoms: ["Joint pain", "Swelling", "Stiffness", "Fatigue", "Fever", "Weight loss"],
    remedies: ["Disease-modifying drugs", "Anti-inflammatory medications", "Physical therapy", "Surgery"],
    prevention: ["Early diagnosis", "Stop smoking", "Maintain healthy weight", "Regular exercise"],
    severity: "High",
  },
  {
    name: "Osteoporosis",
    category: "Musculoskeletal",
    symptoms: ["Back pain", "Loss of height", "Stooped posture", "Bone fractures", "Weak grip strength"],
    remedies: ["Calcium and vitamin D supplements", "Medications", "Exercise", "Fall prevention"],
    prevention: ["Adequate calcium and vitamin D", "Weight-bearing exercise", "Avoid smoking", "Limit alcohol"],
    severity: "Medium",
  },

  // Infectious Diseases
  {
    name: "COVID-19",
    category: "Infectious",
    symptoms: ["Fever", "Cough", "Fatigue", "Loss of taste or smell", "Shortness of breath", "Body aches"],
    remedies: ["Rest", "Hydration", "Medications for symptoms", "Antivirals", "Oxygen therapy if severe"],
    prevention: ["Vaccination", "Wear masks", "Social distancing", "Hand hygiene", "Avoid crowded places"],
    severity: "Medium",
  },
  {
    name: "Tuberculosis",
    category: "Infectious",
    symptoms: ["Persistent cough", "Blood in sputum", "Chest pain", "Fatigue", "Weight loss", "Night sweats", "Fever"],
    remedies: ["Antibiotics for 6-9 months", "Directly observed therapy", "Rest", "Isolation"],
    prevention: ["BCG vaccine", "Avoid close contact with infected", "Good ventilation", "Treatment of latent TB"],
    severity: "High",
  },
  {
    name: "Malaria",
    category: "Infectious",
    symptoms: ["High fever", "Chills", "Headache", "Nausea", "Vomiting", "Muscle pain", "Fatigue"],
    remedies: ["Antimalarial medications", "Rest", "Hydration", "Fever management", "Hospital care if severe"],
    prevention: ["Antimalarial prophylaxis", "Mosquito nets", "Insect repellent", "Avoid mosquito bites"],
    severity: "High",
  },
  {
    name: "Chickenpox",
    category: "Infectious",
    symptoms: ["Itchy rash", "Fever", "Fatigue", "Loss of appetite", "Headache", "Red spots that become blisters"],
    remedies: ["Antihistamines for itching", "Calamine lotion", "Rest", "Fever reducers", "Avoid scratching"],
    prevention: ["Vaccination", "Avoid contact with infected", "Good hygiene"],
    severity: "Low",
  },

  // Allergies & Immune System
  {
    name: "Seasonal Allergies (Hay Fever)",
    category: "Allergic",
    symptoms: ["Sneezing", "Runny nose", "Itchy eyes", "Congestion", "Postnasal drip", "Fatigue"],
    remedies: ["Antihistamines", "Nasal sprays", "Avoid allergens", "Use air purifier", "Immunotherapy"],
    prevention: ["Monitor pollen counts", "Keep windows closed", "Shower after being outside", "Use air conditioning"],
    severity: "Low",
  },
  {
    name: "Food Allergies",
    category: "Allergic",
    symptoms: ["Hives", "Swelling", "Difficulty breathing", "Abdominal pain", "Nausea", "Anaphylaxis"],
    remedies: ["Avoid trigger foods", "Epinephrine auto-injector", "Antihistamines", "Medical attention"],
    prevention: ["Read food labels", "Inform restaurants", "Carry epinephrine", "Avoid cross-contamination"],
    severity: "High",
  },
  {
    name: "Eczema (Atopic Dermatitis)",
    category: "Allergic",
    symptoms: ["Itchy skin", "Red patches", "Dry skin", "Cracked skin", "Swelling", "Oozing or crusting"],
    remedies: ["Moisturizers", "Topical corticosteroids", "Avoid triggers", "Antihistamines", "Wet wraps"],
    prevention: ["Moisturize regularly", "Avoid irritants", "Use mild soaps", "Manage stress", "Wear soft fabrics"],
    severity: "Medium",
  },

  // Mental Health
  {
    name: "Depression",
    category: "Mental Health",
    symptoms: ["Persistent sadness", "Loss of interest", "Fatigue", "Sleep changes", "Appetite changes", "Difficulty concentrating"],
    remedies: ["Psychotherapy", "Antidepressants", "Exercise", "Social support", "Lifestyle changes"],
    prevention: ["Regular exercise", "Social connections", "Stress management", "Adequate sleep", "Seek help early"],
    severity: "High",
  },
  {
    name: "Anxiety Disorder",
    category: "Mental Health",
    symptoms: ["Excessive worry", "Restlessness", "Fatigue", "Difficulty concentrating", "Irritability", "Muscle tension", "Sleep problems"],
    remedies: ["Cognitive behavioral therapy", "Medications", "Relaxation techniques", "Exercise", "Mindfulness"],
    prevention: ["Stress management", "Regular exercise", "Adequate sleep", "Limit caffeine", "Social support"],
    severity: "Medium",
  },

  // Kidney & Urinary
  {
    name: "Chronic Kidney Disease",
    category: "Renal",
    symptoms: ["Fatigue", "Swollen ankles", "Difficulty concentrating", "Decreased appetite", "Blood in urine", "Foamy urine"],
    remedies: ["Blood pressure medications", "Diabetes management", "Low-protein diet", "Dialysis", "Kidney transplant"],
    prevention: ["Control blood pressure", "Manage diabetes", "Healthy diet", "Regular exercise", "Avoid NSAIDs"],
    severity: "High",
  },
  {
    name: "Urinary Tract Infection (UTI)",
    category: "Renal",
    symptoms: ["Burning urination", "Frequent urination", "Cloudy urine", "Strong-smelling urine", "Pelvic pain", "Blood in urine"],
    remedies: ["Antibiotics", "Drink plenty of water", "Pain relievers", "Heating pad", "Avoid irritants"],
    prevention: ["Stay hydrated", "Urinate frequently", "Wipe front to back", "Avoid harsh soaps", "Empty bladder after sex"],
    severity: "Low",
  },

  // Skin Diseases
  {
    name: "Psoriasis",
    category: "Dermatological",
    symptoms: ["Red patches", "Silvery scales", "Dry cracked skin", "Itching", "Burning", "Thick nails"],
    remedies: ["Topical treatments", "Phototherapy", "Systemic medications", "Biologics", "Moisturizers"],
    prevention: ["Manage stress", "Moisturize skin", "Avoid triggers", "Limit alcohol", "Don't smoke"],
    severity: "Medium",
  },
  {
    name: "Acne",
    category: "Dermatological",
    symptoms: ["Whiteheads", "Blackheads", "Pimples", "Cysts", "Oily skin", "Scarring"],
    remedies: ["Topical treatments", "Antibiotics", "Retinoids", "Benzoyl peroxide", "Hormonal therapy"],
    prevention: ["Gentle cleansing", "Avoid touching face", "Remove makeup", "Use non-comedogenic products", "Manage stress"],
    severity: "Low",
  },
];
