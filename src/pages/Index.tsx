import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StatsSection from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";
import concreteImage from "@/assets/concrete-card.jpg";
import asphaltImage from "@/assets/asphalt-card.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header title="Grupo MR" showGroupNav />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Construindo o Futuro
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Liderando a excelência na construção com soluções em concreto e asfalto há mais de 30 anos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg">
              <a href="#companies">
                Nossas Empresas <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-black border-white hover:bg-white/10 text-lg">
              <a href="#contact">Entre em Contato</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Sobre o Grupo MR
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              O Grupo MR é uma força líder na indústria da construção, reunindo expertise
              especializada em soluções de concreto e asfalto. Com mais de três décadas de
              experiência, construímos nossa reputação com base em qualidade, confiabilidade e inovação.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa abordagem integrada nos permite fornecer soluções de construção abrangentes,
              da fundação ao acabamento, garantindo excelência em cada etapa do seu projeto.
            </p>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Nossas Empresas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Concrete Company Card */}
            <div className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={concreteImage} 
                  alt="Concrete Solutions"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">MR Mix Concreto</h3>
                <p className="text-muted-foreground mb-4">
                  Concreto usinado premium, serviços de bombeamento e produtos especializados
                  para todas as suas necessidades de construção.
                </p>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to="/concrete">
                    Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Asphalt Company Card */}
            <div className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="aspect-square overflow-hidden">
                <img 
                  src={asphaltImage} 
                  alt="Asphalt Services"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">MR Pavimentação</h3>
                <p className="text-muted-foreground mb-4">
                  Serviços profissionais de pavimentação, recapeamento e manutenção de estradas com
                  equipamentos de última geração e expertise comprovada.
                </p>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to="/asphalt">
                    Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Entre em Contato
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Pronto para iniciar seu próximo projeto? Entre em contato hoje para discutir como
              podemos ajudar a transformar sua visão de construção em realidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/concrete">Serviços de Concreto</Link>
              </Button>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/asphalt">Serviços de Asfalto</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
