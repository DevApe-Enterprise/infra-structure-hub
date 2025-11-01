import { Truck, Wrench, Package, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import heroImage from "@/assets/concrete-hero.jpg";

const services = [
  {
    icon: Truck,
    title: "Concreto Usinado",
    description: "Concreto de alta qualidade entregue fresco no seu local, personalizado de acordo com suas especificações.",
  },
  {
    icon: Wrench,
    title: "Bombeamento de Concreto",
    description: "Serviços profissionais de bombeamento para colocação eficiente em áreas de difícil acesso.",
  },
  {
    icon: Package,
    title: "Misturas Especializadas",
    description: "Formulações personalizadas de concreto para aplicações e requisitos específicos.",
  },
  {
    icon: CheckCircle,
    title: "Testes de Qualidade",
    description: "Controle de qualidade abrangente e testes para garantir desempenho superior.",
  },
];

const Concrete = () => {
  return (
    <div className="min-h-screen">
      <Header title="MR Mix Concreto" showGroupNav={false} />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            MR Mix Concreto
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Produtos e serviços premium de concreto para todas as necessidades de construção
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
              Com mais de 30 anos de experiência na indústria de concreto, nos tornamos um parceiro
              confiável para projetos de construção de todos os tamanhos. Nossas centrais de dosagem
              de última geração e frota de caminhões betoneira modernos garantem entrega pontual de produtos de alta qualidade.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Nos orgulhamos de nossa expertise técnica, serviço confiável e compromisso com a
              sustentabilidade, tornando-nos a escolha preferida de construtoras e incorporadoras.
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

      {/* Products Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">
            Produtos de Concreto
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-3 text-foreground">Mistura Padrão</h3>
              <p className="text-muted-foreground">
                Concreto de uso geral para fundações, lajes e aplicações estruturais.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-3 text-foreground">Mistura de Alta Resistência</h3>
              <p className="text-muted-foreground">
                Formulações aprimoradas para requisitos estruturais exigentes e necessidades de suporte de carga.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-bold mb-3 text-foreground">Concreto Especial</h3>
              <p className="text-muted-foreground">
                Misturas personalizadas incluindo concreto reforçado com fibras, autonivelante e de pega rápida.
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
                  <h3 className="font-bold text-foreground mb-2">Projeto Comercial {i}</h3>
                  <p className="text-sm text-muted-foreground">
                    Soluções de concreto de alta qualidade entregues no prazo e dentro do orçamento.
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
            Entre em contato com nossa equipe para discutir suas necessidades de concreto e receber um orçamento detalhado.
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
