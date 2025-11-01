import { Building2, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Building2 className="h-8 w-8" />
              <span className="text-xl font-bold">Grupo MR</span>
            </Link>
            <p className="text-primary-foreground/80 mb-4">
              Liderando a indústria da construção com excelência e inovação desde 1990.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossas Empresas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/concrete" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  MR Mix Concreto
                </Link>
              </li>
              <li>
                <Link to="/asphalt" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  MR Pavimentação
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>info@constructiongroup.com</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>123 Construction Ave, City, State</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Grupo MR. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
