import React, { useState } from "react";
import type { YieldPeriod, ProjectionPeriod } from "../types";
import { formatCurrencyInput, parseCurrencyInput } from "../utils/currencyUtils";
import { calculateProjection } from "../utils/calculationUtils";
import { FormSection } from "../components/FormSection";
import { FinancialJourneyCard } from "../components/FinancialJourneyCard";
import { ProjectionTable } from "../components/ProjectionTable";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Estados da calculadora
  const [currentPatrimony, setCurrentPatrimony] = useState<string>("0,00");
  const [monthlyIncome, setMonthlyIncome] = useState<string>("0,00");
  const [monthlyExpenses, setMonthlyExpenses] = useState<string>("0,00");
  const [yieldRate, setYieldRate] = useState<string>("10.5");
  const [yieldPeriod, setYieldPeriod] = useState<YieldPeriod>("yearly");
  const [projectionValue, setProjectionValue] = useState<string>("1");
  const [projectionPeriod, setProjectionPeriod] = useState<ProjectionPeriod>("years");
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isTableExpanded, setIsTableExpanded] = useState<boolean>(false);

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
    <div className="max-w-7xl mx-auto p-4 md:p-8 overflow-x-hidden">
      {/* Hero Section */}
      <header className="text-center mb-12 pt-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-slate-400 bg-clip-text text-transparent">
          Planejador Financeiro Online
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4 font-medium">
          Sua plataforma completa de educação financeira e planejamento de investimentos
        </p>
        <p className="text-sm text-gray-400 mb-8">
          ✓ 100% gratuito • ✓ Cálculos precisos • ✓ Fácil de usar
        </p>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-300 leading-relaxed mb-8">
            <span className="font-semibold text-blue-400">Plataforma completa de educação financeira</span> com recursos, 
            artigos educativos, guias sobre tipos de investimentos e links para fontes confiáveis. 
            Aprenda sobre planejamento financeiro, diversificação de investimentos e estratégias para 
            alcançar seus objetivos financeiros com segurança e conhecimento.
          </p>
        </div>
      </header>

      {/* Calculadora de Investimentos */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-slate-400 bg-clip-text text-transparent">
            Calculadora de Investimentos
          </h2>
          <p className="text-gray-300 text-base font-medium">
            Simule projeções do seu patrimônio com juros compostos
          </p>
        </div>

        <div className="space-y-6 mb-8 w-full">
          {/* Formulário de entrada */}
          <div className="w-full">
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
          </div>

          {/* Resumo Lúdico - Só aparece quando usuário simula */}
          {hasValidData && showResults && (
            <div id="results-section" className="w-full">
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
            </div>
          )}
        </div>

        {/* Tabela de projeção - Só aparece quando usuário simula */}
        {hasValidData && showResults && (
          <div className="w-full">
            <ProjectionTable
              projections={projections}
              isExpanded={isTableExpanded}
              onToggleExpanded={() => setIsTableExpanded(!isTableExpanded)}
            />
          </div>
        )}
      </div>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 w-full">

        {/* Recursos */}
        <div 
          onClick={() => onNavigate("resources")}
          className="bg-slate-400/30 rounded-xl p-6 border border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 cursor-pointer group hover:scale-[1.02] shadow-lg"
        >
          <div className="text-center">
            <div className="mb-4 group-hover:scale-105 transition-transform duration-300 flex justify-center">
              <svg className="w-12 h-12 text-slate-500 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-200 mb-3">Recursos e Links</h3>
            <p className="text-blue-300 text-sm leading-relaxed mb-4">
              Acesse sites oficiais, calculadoras, livros recomendados e 
              ferramentas essenciais para sua educação financeira.
            </p>
            <div className="text-slate-500 dark:text-slate-200 text-sm font-medium group-hover:text-slate-400 transition-colors">
              Ver Recursos →
            </div>
          </div>
        </div>

        {/* Tipos de Investimentos */}
        <div 
          onClick={() => onNavigate("investments")}
          className="bg-slate-400/30 rounded-xl p-6 border border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 cursor-pointer group hover:scale-[1.02] shadow-lg"
        >
          <div className="text-center">
            <div className="mb-4 group-hover:scale-105 transition-transform duration-300 flex justify-center">
              <svg className="w-12 h-12 text-slate-500 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-200 mb-3">Tipos de Investimentos</h3>
            <p className="text-blue-300 text-sm leading-relaxed mb-4">
              Conheça renda fixa, renda variável, investimentos alternativos 
              e estratégias de diversificação para seu perfil.
            </p>
            <div className="text-slate-500 dark:text-slate-200 text-sm font-medium group-hover:text-slate-400 transition-colors">
              Aprender Mais →
            </div>
          </div>
        </div>

        {/* Artigos */}
        <div 
          onClick={() => onNavigate("blog")}
          className="bg-slate-400/30 rounded-xl p-6 border border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 cursor-pointer group hover:scale-[1.02] shadow-lg"
        >
          <div className="text-center">
            <div className="mb-4 group-hover:scale-105 transition-transform duration-300 flex justify-center">
              <svg className="w-12 h-12 text-slate-500 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-200 mb-3">Artigos Educativos</h3>
            <p className="text-blue-300 text-sm leading-relaxed mb-4">
              Leia artigos sobre educação financeira, planejamento, 
              psicologia financeira e estratégias de investimento.
            </p>
            <div className="text-slate-500 dark:text-slate-200 text-sm font-medium group-hover:text-slate-400 transition-colors">
              Ler Artigos →
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div 
          onClick={() => onNavigate("faq")}
          className="bg-slate-400/30 rounded-xl p-6 border border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 cursor-pointer group hover:scale-[1.02] shadow-lg"
        >
          <div className="text-center">
            <div className="mb-4 group-hover:scale-105 transition-transform duration-300 flex justify-center">
              <svg className="w-12 h-12 text-slate-500 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-200 mb-3">Perguntas Frequentes</h3>
            <p className="text-blue-300 text-sm leading-relaxed mb-4">
              Tire suas dúvidas sobre investimentos, planejamento financeiro 
              e conceitos importantes da educação financeira.
            </p>
            <div className="text-slate-500 dark:text-slate-200 text-sm font-medium group-hover:text-slate-400 transition-colors">
              Ver FAQ →
            </div>
          </div>
        </div>

        {/* Guia Básico */}
        <div 
          onClick={() => onNavigate("calculator")}
          className="bg-slate-400/30 rounded-xl p-6 border border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 cursor-pointer group hover:scale-[1.02] shadow-lg"
        >
          <div className="text-center">
            <div className="mb-4 group-hover:scale-105 transition-transform duration-300 flex justify-center">
              <svg className="w-12 h-12 text-slate-500 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-200 mb-3">Guia Básico</h3>
            <p className="text-blue-300 text-sm leading-relaxed mb-4">
              Aprenda como calcular patrimônio, renda e despesas. 
              O primeiro passo para um planejamento financeiro eficaz.
            </p>
            <div className="text-slate-500 dark:text-slate-200 text-sm font-medium group-hover:text-slate-400 transition-colors">
              Começar Agora →
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-slate-400/30 rounded-xl p-4 md:p-8 border border-slate-600/30 mb-12 w-full">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-slate-500 dark:text-slate-200">
          Por que escolher o Planejei?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
          <div className="text-center">
            <div className="text-2xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-200 mb-2">Precisão</h3>
            <p className="text-sm text-blue-300">
              Cálculos baseados em fórmulas matemáticas comprovadas para máxima precisão
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-3">📚</div>
            <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-200 mb-2">Educação</h3>
            <p className="text-sm text-blue-300">
              Conteúdo educativo abrangente para sua jornada de aprendizado financeiro
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-3">🔒</div>
            <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-200 mb-2">Segurança</h3>
            <p className="text-sm text-blue-300">
              Seus dados ficam no seu navegador. Nenhuma informação é enviada para servidores
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center w-full">
        <h2 className="text-xl md:text-2xl font-bold text-slate-500 dark:text-slate-200 mb-4">
          Pronto para começar sua jornada financeira?
        </h2>
        <p className="text-blue-300 mb-6 text-sm md:text-base">
          Use nossa calculadora gratuita e comece a planejar seu futuro hoje mesmo
        </p>
        <button
          onClick={() => onNavigate("calculator")}
          className="px-6 md:px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Começar Agora
        </button>
      </div>
    </div>
  );
};
