import type { PatrimonyProjection, YieldPeriod, ProjectionPeriod } from "../types";
import { parseCurrencyInput } from "./currencyUtils";

interface CalculationParams {
  currentPatrimony: string;
  monthlyIncome: string;
  monthlyExpenses: string;
  yieldRate: string;
  yieldPeriod: YieldPeriod;
  projectionValue: string;
  projectionPeriod: ProjectionPeriod;
}

export const calculateProjection = (params: CalculationParams): PatrimonyProjection[] => {
  const {
    currentPatrimony,
    monthlyIncome,
    monthlyExpenses,
    yieldRate,
    yieldPeriod,
    projectionValue,
    projectionPeriod
  } = params;

  const initial = parseCurrencyInput(currentPatrimony);
  const income = parseCurrencyInput(monthlyIncome);
  const expenses = parseCurrencyInput(monthlyExpenses);
  const rate = parseFloat(yieldRate) || 0;
  const projValue = parseInt(projectionValue) || 1;
  
  // Converte período para meses
  const months = projectionPeriod === "years" ? projValue * 12 : projValue;

  // Converte taxa anual para mensal usando juros compostos
  // Fórmula: taxa_mensal = (1 + taxa_anual)^(1/12) - 1
  let monthlyRate: number;
  if (yieldPeriod === "yearly") {
    monthlyRate = Math.pow(1 + rate / 100, 1 / 12) - 1;
  } else {
    monthlyRate = rate / 100;
  }

  const monthlySavings = income - expenses;
  const projections: PatrimonyProjection[] = [];

  let patrimony = initial;

  for (let month = 1; month <= months; month++) {
    // Salva o valor inicial do mês
    const initialMonthValue = patrimony;
    
    // Adiciona a economia mensal
    patrimony += monthlySavings;
    
    // Calcula o rendimento
    const monthlyYield = patrimony * monthlyRate;
    patrimony += monthlyYield;

    projections.push({
      month,
      initialValue: initialMonthValue,
      expenses,
      savings: monthlySavings,
      yield: monthlyYield,
      finalValue: patrimony,
    });
  }

  return projections;
};

// Converte taxa anual para mensal
export const convertYearlyToMonthlyRate = (yearlyRate: number): number => {
  return (Math.pow(1 + yearlyRate / 100, 1 / 12) - 1) * 100;
};

