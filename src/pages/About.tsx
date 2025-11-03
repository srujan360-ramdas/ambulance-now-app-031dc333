import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Zap, Users, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Navigate through traffic quickly to reach patients in critical condition",
    },
    {
      icon: Heart,
      title: "Life-Saving Mission",
      description: "Every second counts in emergencies. We ensure timely medical assistance",
    },
    {
      icon: Users,
      title: "Trained Professionals",
      description: "All our riders are trained first responders with medical knowledge",
    },
    {
      icon: Target,
      title: "Precision Response",
      description: "GPS-enabled bikes with real-time tracking for accurate navigation",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-secondary">
      <Navigation />
      <main className="flex-grow mt-20 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-5xl font-bold text-primary mb-4">About Our Service</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Bike Ambulance is an innovative initiative to save lives faster by providing quick medical transport in traffic-congested cities.
            </p>
          </div>

          <div className="bg-card shadow-xl rounded-3xl p-8 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We believe that every patient deserves to receive emergency care on time, regardless of traffic conditions. Our bike ambulance service is designed to navigate through the most congested areas, ensuring that medical help reaches those in need within minutes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With trained first responders, essential medical equipment, and GPS-enabled tracking, we're revolutionizing emergency medical services in urban India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
