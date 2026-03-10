import { useState } from "react";
import { User, Phone, ArrowRight, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface LeadFormProps {
  onSubmit: (name: string, phone: string) => void;
}

const LeadForm = ({ onSubmit }: LeadFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const digits = phone.replace(/\D/g, "");
    if (name.trim().length < 2) {
      setError("Por favor, insira seu nome completo.");
      return;
    }
    if (digits.length < 10) {
      setError("Por favor, insira um telefone válido com DDD.");
      return;
    }

    setLoading(true);

    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
    if (scriptUrl) {
      try {
        await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({ name: name.trim(), phone: digits }),
        });
      } catch {
        // no-cors não permite ler a resposta, mas os dados são enviados
      }
    }

    setLoading(false);
    onSubmit(name.trim(), digits);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Antes de calcular...</CardTitle>
        <CardDescription>
          Informe seus dados para que possamos entrar em contato com o seu orçamento.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="lead-name">Nome completo</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="lead-name"
                type="text"
                placeholder="Ex: João Silva"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-9"
                autoComplete="name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lead-phone">Telefone / WhatsApp</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="lead-phone"
                type="tel"
                placeholder="(00) 00000-0000"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                className="pl-9"
                autoComplete="tel"
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}

          <Button
            type="submit"
            className="w-full bg-[#F15A22] hover:bg-[#d94e1a]"
            size="lg"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <ArrowRight className="mr-2 h-5 w-5" />
            )}
            Acessar a Calculadora
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Seus dados não serão compartilhados com terceiros.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadForm;
