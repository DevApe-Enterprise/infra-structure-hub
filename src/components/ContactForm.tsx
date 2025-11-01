import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("Endereço de e-mail inválido").max(255),
  phone: z.string().trim().min(1, "Telefone é obrigatório").max(20),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(1000),
});

interface ContactFormProps {
  company: string;
}

const ContactForm = ({ company }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setErrors({});
      
      // Here you would typically send the data to your backend
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <Input
          name="name"
          placeholder="Seu Nome"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "border-destructive" : ""}
        />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
      </div>
      
      <div>
        <Input
          name="email"
          type="email"
          placeholder="Seu E-mail"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
      </div>
      
      <div>
        <Input
          name="phone"
          placeholder="Seu Telefone"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? "border-destructive" : ""}
        />
        {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
      </div>
      
      <div>
        <Textarea
          name="message"
          placeholder={`Conte-nos sobre suas necessidades de ${company === 'Concrete' ? 'concreto' : 'asfalto'}...`}
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
      </div>
      
      <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
        Enviar Mensagem
      </Button>
    </form>
  );
};

export default ContactForm;
