import { MessageCircle } from "lucide-react";
import ConcreteCalculator from "@/components/ConcreteCalculator";
import logo from "@/assets/logo.png";

const CalculatorPage = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5599991705960";
    const message = encodeURIComponent("Olá! Tenho interesse nos serviços da MR Mix Concreto.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img src={logo} alt="MR Mix Concreto" className="h-14 w-auto" />

          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </button>
        </div>
      </header>

      {/* Hero banner */}
      <div className="bg-[#F15A22] text-white py-10 px-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          Calculadora de Concreto
        </h1>
        <p className="text-white/85 text-base md:text-lg max-w-xl mx-auto">
          Calcule o volume e o custo estimado de concreto para sua obra em segundos
        </p>
      </div>

      {/* Calculator */}
      <main className="flex-1 container mx-auto px-4 py-10 max-w-4xl">
        <ConcreteCalculator />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 px-4 text-center">
        <img src={logo} alt="MR Mix Concreto" className="h-10 w-auto mx-auto mb-3" />
        <p className="text-sm text-gray-500">
          Precisa de mais informações?{" "}
          <button
            onClick={handleWhatsAppClick}
            className="text-[#F15A22] font-medium hover:underline"
          >
            Entre em contato pelo WhatsApp
          </button>
        </p>
        <p className="text-xs text-gray-400 mt-2">
          © {new Date().getFullYear()} MR Mix Concreto. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default CalculatorPage;
