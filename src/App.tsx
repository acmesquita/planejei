import "./index.css";
import React, { useState } from "react";
import type { YieldPeriod, ProjectionPeriod } from "./types";
import { formatCurrencyInput, parseCurrencyInput } from "./utils/currencyUtils";
import { calculateProjection } from "./utils/calculationUtils";
import { useTheme } from "./hooks/useTheme";
import { ThemeToggleButton } from "./components/ThemeToggleButton";
import { HeroSection } from "./components/HeroSection";
import { FormSection } from "./components/FormSection";
import { FinancialJourneyCard } from "./components/FinancialJourneyCard";
import { ProjectionTable } from "./components/ProjectionTable";
import { InfoSection } from "./components/InfoSection";
import { Footer } from "./components/Footer";

export function App() {
  const [currentPatrimony, setCurrentPatrimony] = useState<string>("0,00");
  const [monthlyIncome, setMonthlyIncome] = useState<string>("0,00");
  const [monthlyExpenses, setMonthlyExpenses] = useState<string>("0,00");
  const [yieldRate, setYieldRate] = useState<string>("10.5");
  const [yieldPeriod, setYieldPeriod] = useState<YieldPeriod>("yearly");
  const [projectionValue, setProjectionValue] = useState<string>("1");
  const [projectionPeriod, setProjectionPeriod] = useState<ProjectionPeriod>("years");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isTableExpanded, setIsTableExpanded] = useState<boolean>(false);

  const { theme, toggleTheme } = useTheme();

  // Esconde resultados quando qualquer campo muda
  const handleFieldChange = (setter: (value: string) => void) => (value: string) => {
    setter(value);
    if (showResults) {
      setShowResults(false);
    }
  };

  // Handler para campos monetários
  const handleCurrencyChange = (setter: (value: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formatted = formatCurrencyInput(inputValue);
    handleFieldChange(setter)(formatted);
  };

  // Verifica se há dados suficientes para calcular
  const hasValidData = currentPatrimony !== "0,00" && 
                       monthlyIncome !== "" && 
                       monthlyExpenses !== "" && 
                       yieldRate !== "" && 
                       projectionValue !== "" &&
                       parseCurrencyInput(currentPatrimony) >= 0 &&
                       parseCurrencyInput(monthlyIncome) >= 0 &&
                       parseCurrencyInput(monthlyExpenses) >= 0 &&
                       parseFloat(yieldRate) >= 0 &&
                       parseInt(projectionValue) > 0;

  const handleSimulate = () => {
    if (hasValidData) {
      setShowResults(true);
      // Scroll suave até os resultados após um pequeno delay
      setTimeout(() => {
        const resultsElement = document.getElementById('results-section');
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const projections = hasValidData ? calculateProjection({
    currentPatrimony,
    monthlyIncome,
    monthlyExpenses,
    yieldRate,
    yieldPeriod,
    projectionValue,
    projectionPeriod
  }) : [];

  const monthlySavings = parseCurrencyInput(monthlyIncome) - parseCurrencyInput(monthlyExpenses);
  const finalProjection = projections[projections.length - 1];
  const finalPatrimony = finalProjection ? finalProjection.finalValue : 0;
  const totalGrowth = finalPatrimony - parseCurrencyInput(currentPatrimony);
  const totalYield = projections.reduce((sum, p) => sum + p.yield, 0);
  const totalMonths = projectionPeriod === "years" ? parseInt(projectionValue) * 12 : parseInt(projectionValue);

  return (
    <>
      <ThemeToggleButton theme={theme} onToggle={toggleTheme} />

      <div className="max-w-7xl mx-auto p-4 md:p-8 relative z-10">
        {/* Hero Section com H1 */}
        <HeroSection />

      <div className="space-y-6 mb-8">
        {/* Formulário de entrada */}
          <FormSection
            currentPatrimony={currentPatrimony}
            monthlyIncome={monthlyIncome}
            monthlyExpenses={monthlyExpenses}
            yieldRate={yieldRate}
            yieldPeriod={yieldPeriod}
            projectionValue={projectionValue}
            projectionPeriod={projectionPeriod}
            hasValidData={hasValidData}
            onCurrentPatrimonyChange={handleCurrencyChange(setCurrentPatrimony)}
            onMonthlyIncomeChange={handleCurrencyChange(setMonthlyIncome)}
            onMonthlyExpensesChange={handleCurrencyChange(setMonthlyExpenses)}
            onYieldRateChange={(e) => handleFieldChange(setYieldRate)(e.target.value)}
            onYieldPeriodChange={(e) => setYieldPeriod(e.target.value as YieldPeriod)}
            onProjectionValueChange={(e) => handleFieldChange(setProjectionValue)(e.target.value)}
            onProjectionPeriodChange={(e) => setProjectionPeriod(e.target.value as ProjectionPeriod)}
            onSimulate={handleSimulate}
          />

        {/* Resumo Lúdico - Só aparece quando usuário simula */}
        {hasValidData && showResults && (
            <FinancialJourneyCard
              currentPatrimony={currentPatrimony}
              monthlyIncome={monthlyIncome}
              monthlyExpenses={monthlyExpenses}
              yieldRate={yieldRate}
              yieldPeriod={yieldPeriod}
              projectionValue={projectionValue}
              projectionPeriod={projectionPeriod}
              monthlySavings={monthlySavings}
              totalMonths={totalMonths}
              totalYield={totalYield}
              finalPatrimony={finalPatrimony}
              totalGrowth={totalGrowth}
            />
          )}
      </div>

      {/* Tabela de projeção - Só aparece quando usuário simula */}
      {hasValidData && showResults && (
          <ProjectionTable
            projections={projections}
            isExpanded={isTableExpanded}
            onToggleExpanded={() => setIsTableExpanded(!isTableExpanded)}
          />
      )}

      {/* Seção Informativa - Artigo sobre como calcular (sempre visível) */}
        <InfoSection />
      </div>

      {/* Rodapé */}
      <Footer />
    </>
  );
}
