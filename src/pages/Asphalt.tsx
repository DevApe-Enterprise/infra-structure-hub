import { Navigation, Hammer, Shield, Layers } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import heroImage from "@/assets/asphalt-hero.jpg";

const services = [
  {
    icon: Navigation,
    title: "Asphalt Paving",
    description: "Professional paving services for roads, parking lots, and driveways using premium materials.",
  },
  {
    icon: Layers,
    title: "Road Resurfacing",
    description: "Expert resurfacing to restore and enhance existing pavement surfaces.",
  },
  {
    icon: Hammer,
    title: "Repair & Maintenance",
    description: "Comprehensive maintenance solutions including patching, crack sealing, and sealcoating.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control to ensure long-lasting, durable results.",
  },
];

const Asphalt = () => {
  return (
    <div className="min-h-screen">
      <Header title="Asphalt Services" showGroupNav={false} />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Asphalt Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Professional paving and road maintenance solutions built to last
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-center">
              About Our Company
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-center">
              As a leader in asphalt services for over three decades, we've paved thousands of 
              miles of roads, highways, and commercial properties. Our modern fleet of paving 
              equipment and experienced crews deliver exceptional results on every project.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              From small residential driveways to large-scale highway projects, we bring the same 
              commitment to quality, safety, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">
            Our Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">
            Specialized Solutions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-3 text-foreground">Commercial Paving</h3>
              <p className="text-muted-foreground">
                Large-scale paving for parking lots, industrial areas, and commercial developments.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-3 text-foreground">Highway Construction</h3>
              <p className="text-muted-foreground">
                Major roadway projects with advanced equipment and certified crews.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-3 text-foreground">Preventive Maintenance</h3>
              <p className="text-muted-foreground">
                Proactive maintenance programs to extend pavement life and reduce costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-shadow">
                <div className="aspect-video bg-muted" />
                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-2">Paving Project {i}</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional asphalt paving completed with precision and quality.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-center">
            Request a Quote
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Contact us today to discuss your asphalt paving needs and get a competitive quote.
          </p>
          
          <ContactForm company="Asphalt" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Asphalt;
