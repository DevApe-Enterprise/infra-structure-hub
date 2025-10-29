import { Truck, Wrench, Package, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import heroImage from "@/assets/concrete-hero.jpg";

const services = [
  {
    icon: Truck,
    title: "Ready-Mix Concrete",
    description: "High-quality concrete delivered fresh to your site, customized to your specifications.",
  },
  {
    icon: Wrench,
    title: "Concrete Pumping",
    description: "Professional pumping services for efficient placement in hard-to-reach areas.",
  },
  {
    icon: Package,
    title: "Specialized Mixes",
    description: "Custom concrete formulations for specific applications and requirements.",
  },
  {
    icon: CheckCircle,
    title: "Quality Testing",
    description: "Comprehensive quality control and testing to ensure superior performance.",
  },
];

const Concrete = () => {
  return (
    <div className="min-h-screen">
      <Header title="Concrete Solutions" showGroupNav={false} />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Concrete Solutions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Premium concrete products and services for every construction need
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
              With over 30 years of experience in the concrete industry, we've become a trusted 
              partner for construction projects of all sizes. Our state-of-the-art batching plants 
              and fleet of modern concrete trucks ensure timely delivery of high-quality products.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              We pride ourselves on technical expertise, reliable service, and commitment to 
              sustainability, making us the preferred choice for contractors and developers.
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

      {/* Products Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">
            Concrete Products
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-3 text-foreground">Standard Mix</h3>
              <p className="text-muted-foreground">
                General purpose concrete for foundations, slabs, and structural applications.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-3 text-foreground">High-Strength Mix</h3>
              <p className="text-muted-foreground">
                Enhanced formulations for demanding structural requirements and load-bearing needs.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-3 text-foreground">Specialty Concrete</h3>
              <p className="text-muted-foreground">
                Custom mixes including fiber-reinforced, self-leveling, and rapid-setting concrete.
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
                  <h3 className="font-bold text-foreground mb-2">Commercial Project {i}</h3>
                  <p className="text-sm text-muted-foreground">
                    High-quality concrete solutions delivered on time and within budget.
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
            Get in touch with our team to discuss your concrete needs and receive a detailed quote.
          </p>
          
          <ContactForm company="Concrete" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Concrete;
