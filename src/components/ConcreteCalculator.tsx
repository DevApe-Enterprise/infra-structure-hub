import { useState } from "react";
import { Calculator, MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type StructureType = "laje" | "base-pilar" | "pilar-retangular" | "pilar-redondo" | "viga";

interface CalculatorState {
  structureType: StructureType | "";
  width: string;
  length: string;
  height: string;
  thickness: string;
  diameter: string;
  quantity: string;
}

const ConcreteCalculator = () => {
  const [state, setState] = useState<CalculatorState>({
    structureType: "",
    width: "",
    length: "",
    height: "",
    thickness: "",
    diameter: "",
    quantity: "1",
  });

  const [result, setResult] = useState<number | null>(null);

  const updateField = (field: keyof CalculatorState, value: string) => {
    setState(prev => ({ ...prev, [field]: value }));
    setResult(null);
  };

  const calculateVolume = (): number => {
    const w = parseFloat(state.width);
    const l = parseFloat(state.length);
    const h = parseFloat(state.height);
    const t = parseFloat(state.thickness);
    const d = parseFloat(state.diameter);
    const qty = parseFloat(state.quantity) || 1;

    switch (state.structureType) {
      case "laje":
        // Laje: largura × comprimento × espessura
        if (w && l && t) {
          return w * l * t * qty;
        }
        break;

      case "base-pilar":
        // Base de pilar: largura × comprimento × altura
        if (w && l && h) {
          return w * l * h * qty;
        }
        break;

      case "pilar-retangular":
        // Pilar retangular: largura × comprimento × altura
        if (w && l && h) {
          return w * l * h * qty;
        }
        break;

      case "pilar-redondo":
        // Pilar redondo: π × r² × altura
        if (d && h) {
          const radius = d / 2;
          return Math.PI * radius * radius * h * qty;
        }
        break;

      case "viga":
        // Viga: largura × altura × comprimento
        if (w && h && l) {
          return w * h * l * qty;
        }
        break;
    }

    return 0;
  };

  const formatBR = (value: number) =>
    value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const handleCalculate = () => {
    setResult(calculateVolume());
  };

  const getStructureTypeName = (type: StructureType | ""): string => {
    const names = {
      "laje": "laje",
      "base-pilar": "base de pilar",
      "pilar-retangular": "pilar retangular",
      "pilar-redondo": "pilar redondo",
      "viga": "viga",
    };
    return names[type as StructureType] || "";
  };

  const generateWhatsAppMessage = (): string => {
    const structureName = getStructureTypeName(state.structureType as StructureType);
    const qty = parseFloat(state.quantity) || 1;
    const qtyText = qty > 1 ? ` (${qty} unidades)` : "";

    let dimensionsText = "";

    switch (state.structureType) {
      case "laje":
        dimensionsText = `${state.width}m de largura, ${state.length}m de comprimento e ${state.thickness}m de espessura`;
        break;
      case "base-pilar":
      case "pilar-retangular":
        dimensionsText = `${state.width}m de largura, ${state.length}m de comprimento e ${state.height}m de altura`;
        break;
      case "pilar-redondo":
        dimensionsText = `${state.diameter}m de diâmetro e ${state.height}m de altura`;
        break;
      case "viga":
        dimensionsText = `${state.width}m de largura, ${state.height}m de altura e ${state.length}m de comprimento`;
        break;
    }

    const volumeText = result !== null ? `\n\nVolume calculado: ${formatBR(result)} m³` : "";

    return `Olá! Gostaria de um orçamento personalizado de concreto para uma ${structureName} com ${dimensionsText}${qtyText}.${volumeText}`;
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "5599991705960";
    const message = encodeURIComponent(generateWhatsAppMessage());
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const renderDimensionInputs = () => {
    const inputClass = "mt-1";

    switch (state.structureType) {
      case "laje":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="width">Largura (m)</Label>
              <Input
                id="width"
                type="number"
                step="0.01"
                placeholder="Ex: 5,0"
                value={state.width}
                onChange={(e) => updateField("width", e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="length">Comprimento (m)</Label>
              <Input
                id="length"
                type="number"
                step="0.01"
                placeholder="Ex: 10,0"
                value={state.length}
                onChange={(e) => updateField("length", e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="thickness">Espessura (m)</Label>
              <Input
                id="thickness"
                type="number"
                step="0.01"
                placeholder="Ex: 0,15"
                value={state.thickness}
                onChange={(e) => updateField("thickness", e.target.value)}
                className={inputClass}
              />
            </div>
          </>
        );

      case "base-pilar":
      case "pilar-retangular":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="width">Largura (m)</Label>
              <Input
                id="width"
                type="number"
                step="0.01"
                placeholder="Ex: 0,30"
                value={state.width}
                onChange={(e) => updateField("width", e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="length">Comprimento (m)</Label>
              <Input
                id="length"
                type="number"
                step="0.01"
                placeholder="Ex: 0,30"
                value={state.length}
                onChange={(e) => updateField("length", e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Altura (m)</Label>
              <Input
                id="height"
                type="number"
                step="0.01"
                placeholder="Ex: 3,0"
                value={state.height}
                onChange={(e) => updateField("height", e.target.value)}
                className={inputClass}
              />
            </div>
          </>
        );

      case "pilar-redondo":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="diameter">Diâmetro (m)</Label>
              <Input
                id="diameter"
                type="number"
                step="0.01"
                placeholder="Ex: 0,30"
                value={state.diameter}
                onChange={(e) => updateField("diameter", e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Altura (m)</Label>
              <Input
                id="height"
                type="number"
                step="0.01"
                placeholder="Ex: 3,0"
                value={state.height}
                onChange={(e) => updateField("height", e.target.value)}
                className={inputClass}
              />
            </div>
          </>
        );

      case "viga":
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="width">Largura (m)</Label>
              <Input
                id="width"
                type="number"
                step="0.01"
                placeholder="Ex: 0,20"
                value={state.width}
                onChange={(e) => updateField("width", e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Altura (m)</Label>
              <Input
                id="height"
                type="number"
                step="0.01"
                placeholder="Ex: 0,50"
                value={state.height}
                onChange={(e) => updateField("height", e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="length">Comprimento (m)</Label>
              <Input
                id="length"
                type="number"
                step="0.01"
                placeholder="Ex: 5,0"
                value={state.length}
                onChange={(e) => updateField("length", e.target.value)}
                className={inputClass}
              />
            </div>
          </>
        );

      default:
        return (
          <div className="text-center py-8 text-muted-foreground">
            Selecione um tipo de estrutura para começar
          </div>
        );
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Calculator className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl">Calculadora de Concreto</CardTitle>
            <CardDescription>
              Calcule o volume de concreto necessário para sua obra
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Structure Type Selection */}
        <div className="space-y-2">
          <Label htmlFor="structureType">Tipo de Estrutura</Label>
          <Select
            value={state.structureType}
            onValueChange={(value) => {
              setState({
                structureType: value as StructureType,
                width: "",
                length: "",
                height: "",
                thickness: "",
                diameter: "",
                quantity: state.quantity,
              });
              setResult(null);
            }}
          >
            <SelectTrigger id="structureType">
              <SelectValue placeholder="Selecione o tipo de estrutura" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="laje">Laje</SelectItem>
              <SelectItem value="base-pilar">Base de Pilar</SelectItem>
              <SelectItem value="pilar-retangular">Pilar Retangular</SelectItem>
              <SelectItem value="pilar-redondo">Pilar Redondo</SelectItem>
              <SelectItem value="viga">Viga</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Dimension Inputs */}
        {state.structureType && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderDimensionInputs()}
          </div>
        )}

        {/* Quantity */}
        {state.structureType && (
          <div className="pt-4 border-t max-w-xs">
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantidade</Label>
              <Input
                id="quantity"
                type="number"
                step="1"
                min="1"
                placeholder="Ex: 1"
                value={state.quantity}
                onChange={(e) => updateField("quantity", e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Calculate Button */}
        {state.structureType && (
          <Button
            onClick={handleCalculate}
            className="w-full md:w-auto"
            size="lg"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Calcular
          </Button>
        )}

        {/* Results */}
        {result !== null && result > 0 && (
          <div className="mt-6 p-6 bg-primary/5 rounded-lg border-2 border-primary/20">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Resultado</h3>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Volume de Concreto:</span>
              <span className="text-2xl font-bold text-primary">
                {formatBR(result)} m³
              </span>
            </div>
            <div className="mt-4 pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-4">
                💡 <strong>Dica:</strong> É recomendável adicionar cerca de 5-10% a mais para compensar
                possíveis perdas durante a concretagem.
              </p>
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-accent hover:bg-accent/90"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar Orçamento Personalizado
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ConcreteCalculator;
