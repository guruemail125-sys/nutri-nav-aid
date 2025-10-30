import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Activity, Heart, Droplet, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import healthMonitoringImage from "@/assets/health-monitoring.jpg";

const HealthMetrics = () => {
  const [metrics, setMetrics] = useState({
    bloodPressureSys: "",
    bloodPressureDia: "",
    heartRate: "",
    sugarLevel: "",
    weight: "",
    height: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Health metrics saved successfully!");
  };

  const getHealthStatus = () => {
    const bp = parseInt(metrics.bloodPressureSys);
    const hr = parseInt(metrics.heartRate);
    const sugar = parseInt(metrics.sugarLevel);

    if (bp < 120 && hr >= 60 && hr <= 100 && sugar >= 70 && sugar <= 100) {
      return { status: "Excellent", color: "text-success", icon: TrendingUp };
    } else if (bp < 140 || hr < 60 || hr > 100 || sugar > 100) {
      return { status: "Moderate", color: "text-accent", icon: Activity };
    }
    return { status: "Needs Attention", color: "text-destructive", icon: Heart };
  };

  const healthStatus = getHealthStatus();
  const StatusIcon = healthStatus.icon;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-2">Health Metrics Dashboard</h1>
        <p className="text-muted-foreground">Monitor and track your vital health indicators</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6 animate-slide-up">
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label className="flex items-center gap-2 mb-2">
                    <Activity className="h-4 w-4 text-primary" />
                    Blood Pressure (mmHg)
                  </Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      type="number"
                      placeholder="Systolic"
                      value={metrics.bloodPressureSys}
                      onChange={(e) => setMetrics({ ...metrics, bloodPressureSys: e.target.value })}
                    />
                    <Input
                      type="number"
                      placeholder="Diastolic"
                      value={metrics.bloodPressureDia}
                      onChange={(e) => setMetrics({ ...metrics, bloodPressureDia: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label className="flex items-center gap-2 mb-2">
                    <Heart className="h-4 w-4 text-destructive" />
                    Heart Rate (bpm)
                  </Label>
                  <Input
                    type="number"
                    placeholder="Enter heart rate"
                    value={metrics.heartRate}
                    onChange={(e) => setMetrics({ ...metrics, heartRate: e.target.value })}
                  />
                </div>

                <div>
                  <Label className="flex items-center gap-2 mb-2">
                    <Droplet className="h-4 w-4 text-accent" />
                    Blood Sugar Level (mg/dL)
                  </Label>
                  <Input
                    type="number"
                    placeholder="Enter blood sugar level"
                    value={metrics.sugarLevel}
                    onChange={(e) => setMetrics({ ...metrics, sugarLevel: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="mb-2">Weight (kg)</Label>
                    <Input
                      type="number"
                      placeholder="Weight"
                      value={metrics.weight}
                      onChange={(e) => setMetrics({ ...metrics, weight: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label className="mb-2">Height (cm)</Label>
                    <Input
                      type="number"
                      placeholder="Height"
                      value={metrics.height}
                      onChange={(e) => setMetrics({ ...metrics, height: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Save Metrics
              </Button>
            </form>
          </Card>
        </div>

        <div className="space-y-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
          <div className="health-metric-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <StatusIcon className={`h-6 w-6 ${healthStatus.color}`} />
              </div>
              <div>
                <h3 className="font-semibold">Current Health Status</h3>
                <p className={`text-lg font-bold ${healthStatus.color}`}>{healthStatus.status}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="health-metric-card">
              <Activity className="h-5 w-5 text-primary mb-2" />
              <div className="text-2xl font-bold">{metrics.bloodPressureSys || "--"}/{metrics.bloodPressureDia || "--"}</div>
              <div className="text-sm text-muted-foreground">Blood Pressure</div>
            </div>
            <div className="health-metric-card">
              <Heart className="h-5 w-5 text-destructive mb-2 pulse-slow" />
              <div className="text-2xl font-bold">{metrics.heartRate || "--"}</div>
              <div className="text-sm text-muted-foreground">Heart Rate</div>
            </div>
            <div className="health-metric-card">
              <Droplet className="h-5 w-5 text-accent mb-2" />
              <div className="text-2xl font-bold">{metrics.sugarLevel || "--"}</div>
              <div className="text-sm text-muted-foreground">Blood Sugar</div>
            </div>
            <div className="health-metric-card">
              <TrendingUp className="h-5 w-5 text-success mb-2" />
              <div className="text-2xl font-bold">
                {metrics.weight && metrics.height
                  ? ((parseFloat(metrics.weight) / Math.pow(parseFloat(metrics.height) / 100, 2)).toFixed(1))
                  : "--"}
              </div>
              <div className="text-sm text-muted-foreground">BMI</div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-border">
            <img src={healthMonitoringImage} alt="Health Monitoring" className="w-full h-64 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthMetrics;
