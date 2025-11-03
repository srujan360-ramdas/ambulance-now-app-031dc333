import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Emergency Hotline",
      details: "+91 98765 43210",
      description: "Available 24/7 for emergencies",
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "support@bikeambulance.in",
      description: "Response within 24 hours",
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: "123 Main Road, Bangalore, India",
      description: "Visit us Mon-Fri, 9 AM - 6 PM",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: "24/7 Emergency Service",
      description: "We never stop helping",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-secondary">
      <Navigation />
      <main className="flex-grow mt-20 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-5xl font-bold text-primary mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Reach out for support, inquiries, or emergency assistance. We're here to help 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-1">{info.title}</h3>
                <p className="text-xl font-bold text-foreground mb-2">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card shadow-xl rounded-3xl p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-2xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Have questions about our service? Want to partner with us? Or need immediate assistance? Don't hesitate to contact us through any of the channels above.
            </p>
            <div className="bg-emergency/10 border border-emergency/20 rounded-xl p-6">
              <p className="text-foreground font-semibold text-center text-lg mb-2">
                🚨 For Medical Emergencies
              </p>
              <p className="text-center text-muted-foreground">
                Call <span className="text-emergency font-bold text-xl">+91 98765 43210</span> immediately
              </p>
            </div>
          </div>

          <div className="mt-8 bg-success/10 border border-success/20 rounded-2xl p-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-900">
            <p className="text-foreground font-semibold mb-2">Follow us on social media</p>
            <p className="text-muted-foreground">
              Stay updated with our latest news and emergency tips
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
