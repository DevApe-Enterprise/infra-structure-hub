import { Link } from "react-router-dom";
import { Building2, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface HeaderProps {
  title: string;
  showGroupNav?: boolean;
}

const Header = ({ title, showGroupNav = true }: HeaderProps) => {
  const navLinks = showGroupNav ? [
    { label: "Sobre", href: "#about" },
    { label: "Nossas Empresas", href: "#companies" },
    { label: "Contato", href: "#contact" },
  ] : [
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">{title}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            {!showGroupNav && (
              <Link to="/">
                <Button variant="outline">Voltar ao Grupo</Button>
              </Link>
            )}
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                {!showGroupNav && (
                  <Link to="/">
                    <Button variant="outline" className="w-full">Voltar ao Grupo</Button>
                  </Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
