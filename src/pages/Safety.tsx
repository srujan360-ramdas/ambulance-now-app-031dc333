import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Radio, Heart, MapPin, CheckCircle } from "lucide-react";

const Safety = () => {
  const safetyMeasures = [
    {
      icon: Shield,
      title: "First Aid Equipped",
      description: "Every bike carries a comprehensive first aid kit with essential medical supplies",
    },
    {
      icon: MapPin,
      title: "GPS Tracking",
      description: "Real-time GPS tracking ensures precise location and faster response times",
    },
    {
      icon: Radio,
      title: "Emergency Communication",
      description: "Direct communication with emergency services and hospitals",
    },
    {
      icon: Heart,
      title: "Medical Training",
      description: "All riders are certified first responders with emergency medical training",
    },
  ];

  const standards = [
    "Helmets and protective gear for patient safety",
    "Regular bike maintenance and safety checks",
    "Insurance coverage for all rides",
    "24/7 emergency dispatch system",
    "Compliance with local traffic regulations",
    "Continuous training and certification programs",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-secondary">
      <Navigation />
      <main className="flex-grow mt-20 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-5xl font-bold text-primary mb-4">Safety Measures</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your safety is our top priority. We maintain the highest standards of emergency medical transport.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {safetyMeasures.map((measure, index) => (
              <div
                key={index}
                className="bg-card shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="bg-success/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <measure.icon className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{measure.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{measure.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card shadow-xl rounded-3xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-2xl font-bold text-foreground mb-6">Safety Standards</h2>
            <div className="space-y-3">
              {standards.map((standard, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-relaxed">{standard}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-primary/10 border border-primary/20 rounded-2xl p-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-900">
            <p className="text-foreground font-semibold mb-2">Have safety concerns or suggestions?</p>
            <p className="text-muted-foreground">
              Contact us at <span className="text-primary font-semibold">safety@bikeambulance.in</span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Safety;
