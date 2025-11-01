import { Navigation, Hammer, Shield, Layers } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import heroImage from "@/assets/asphalt-hero.jpg";

const services = [
  {
    icon: Navigation,
    title: "Pavimentação Asfáltica",
    description: "Serviços profissionais de pavimentação para estradas, estacionamentos e vias utilizando materiais premium.",
  },
  {
    icon: Layers,
    title: "Recapeamento de Vias",
    description: "Recapeamento especializado para restaurar e melhorar superfícies de pavimento existentes.",
  },
  {
    icon: Hammer,
    title: "Reparos e Manutenção",
    description: "Soluções abrangentes de manutenção incluindo remendos, selagem de trincas e impermeabilização.",
  },
  {
    icon: Shield,
    title: "Garantia de Qualidade",
    description: "Testes rigorosos e controle de qualidade para garantir resultados duradouros e resistentes.",
  },
];

const Asphalt = () => {
  return (
    <div className="min-h-screen">
      <Header title="MR Pavimentação" showGroupNav={false} />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            MR Pavimentação
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Soluções profissionais de pavimentação e manutenção de estradas construídas para durar
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-center">
              Sobre Nossa Empresa
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-center">
              Como líder em serviços de asfalto há mais de três décadas, pavimentamos milhares de
              quilômetros de estradas, rodovias e propriedades comerciais. Nossa frota moderna de
              equipamentos de pavimentação e equipes experientes entregam resultados excepcionais em cada projeto.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              De pequenas vias residenciais a projetos rodoviários de grande escala, trazemos o mesmo
              compromisso com qualidade, segurança e satisfação do cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">
            Nossos Serviços
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
            Soluções Especializadas
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-3 text-foreground">Pavimentação Comercial</h3>
              <p className="text-muted-foreground">
                Pavimentação em larga escala para estacionamentos, áreas industriais e empreendimentos comerciais.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-3 text-foreground">Construção Rodoviária</h3>
              <p className="text-muted-foreground">
                Projetos rodoviários de grande porte com equipamentos avançados e equipes certificadas.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-3 text-foreground">Manutenção Preventiva</h3>
              <p className="text-muted-foreground">
                Programas de manutenção proativa para prolongar a vida útil do pavimento e reduzir custos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">
            Projetos em Destaque
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-shadow">
                <div className="aspect-video bg-muted" />
                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-2">Projeto de Pavimentação {i}</h3>
                  <p className="text-sm text-muted-foreground">
                    Pavimentação asfáltica profissional concluída com precisão e qualidade.
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
            Solicite um Orçamento
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Entre em contato hoje para discutir suas necessidades de pavimentação asfáltica e receber um orçamento competitivo.
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
