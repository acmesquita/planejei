// Formata valor para moeda brasileira (R$ 1.234,56)
export const formatCurrencyInput = (value: string): string => {
  // Remove tudo que não é dígito
  const numbers = value.replace(/\D/g, '');
  
  if (!numbers) return '';
  
  // Converte para número com centavos
  const numberValue = parseFloat(numbers) / 100;
  
  // Formata com separadores brasileiros
  return numberValue.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

// Remove formatação para cálculos
export const parseCurrencyInput = (value: string): number => {
  if (!value) return 0;
  // Remove pontos de milhar e substitui vírgula por ponto
  const cleanValue = value.replace(/\./g, '').replace(',', '.');
  return parseFloat(cleanValue) || 0;
};

// Formata valor como moeda brasileira
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

