import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, User, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("Fetching your location...");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate location detection
    setTimeout(() => {
      setLocation("123 Main Street, Bangalore, India");
    }, 1500);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Booking Confirmed! 🚑",
      description: "A bike ambulance is on the way to your location.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-secondary">
        <Navigation />
        <main className="flex-grow flex items-center justify-center p-4 mt-20">
          <div className="bg-card shadow-2xl rounded-3xl p-8 w-full max-w-md text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-6 flex justify-center">
              <div className="bg-success/10 rounded-full p-4">
                <CheckCircle2 className="w-16 h-16 text-success" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Booking Confirmed!
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A bike ambulance is on the way to your location. The estimated arrival time is 8-10 minutes.
            </p>
            <div className="bg-secondary rounded-xl p-4 mb-6 text-left">
              <div className="flex items-center gap-2 mb-2">
                <User className="w-4 h-4 text-primary" />
                <span className="font-semibold text-foreground">{name}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-foreground">{phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-foreground text-sm">{location}</span>
              </div>
            </div>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="w-full"
            >
              Book Another Ambulance
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-secondary">
      <Navigation />
      <main className="flex-grow flex items-center justify-center p-4 mt-20">
        <div className="bg-card shadow-2xl rounded-3xl p-8 w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-primary mb-2">
              🚑 Book a Bike Ambulance
            </h1>
            <p className="text-muted-foreground">
              Fast emergency medical transport in traffic-congested areas
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 font-semibold">
                <User className="w-4 h-4 text-primary" />
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="transition-all focus:shadow-md"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2 font-semibold">
                <Phone className="w-4 h-4 text-primary" />
                Contact Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                className="transition-all focus:shadow-md"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-2 font-semibold">
                <MapPin className="w-4 h-4 text-primary" />
                Your Current Location
              </Label>
              <Input
                id="location"
                type="text"
                value={location}
                readOnly
                className="bg-secondary text-foreground"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all shadow-lg hover:shadow-xl text-lg py-6 font-semibold"
            >
              Book Ambulance Now
            </Button>
          </form>

          <div className="mt-6 p-4 bg-emergency/10 border border-emergency/20 rounded-xl">
            <p className="text-sm text-center text-foreground">
              <span className="font-semibold">Emergency Hotline:</span> +91 98765 43210
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
