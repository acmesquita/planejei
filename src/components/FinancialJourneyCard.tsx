import React from "react";
import type { YieldPeriod, ProjectionPeriod } from "../types";
import { formatCurrency, parseCurrencyInput } from "../utils/currencyUtils";

interface FinancialJourneyCardProps {
  currentPatrimony: string;
  monthlyIncome: string;
  monthlyExpenses: string;
  yieldRate: string;
  yieldPeriod: YieldPeriod;
  projectionValue: string;
  projectionPeriod: ProjectionPeriod;
  monthlySavings: number;
  totalMonths: number;
  totalYield: number;
  finalPatrimony: number;
  totalGrowth: number;
}

export const FinancialJourneyCard: React.FC<FinancialJourneyCardProps> = ({
  currentPatrimony,
  monthlyIncome,
  monthlyExpenses,
  yieldRate,
  yieldPeriod,
  projectionValue,
  projectionPeriod,
  monthlySavings,
  totalMonths,
  totalYield,
  finalPatrimony,
  totalGrowth,
}) => {
  return (
    <div id="results-section" className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8 shadow-2xl border-2 border-purple-500/30">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          🎯 Sua Jornada Financeira
        </h2>
        <p className="text-gray-400 text-sm">Veja como seu dinheiro vai crescer!</p>
      </div>
      
      <div className="space-y-4">
        {/* Passo 1: Patrimônio Inicial */}
        <div className="group bg-gradient-to-r from-blue-600/10 to-blue-700/10 rounded-xl p-5 border-2 border-blue-500/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                🏦
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">INÍCIO</span>
                <p className="text-sm text-blue-300 font-semibold">Patrimônio Atual</p>
              </div>
              <p className="text-3xl font-black text-blue-400 mb-1">
                {formatCurrency(parseCurrencyInput(currentPatrimony))}
              </p>
              <p className="text-xs text-gray-500">Seu ponto de partida 🚀</p>
            </div>
          </div>
        </div>

        {/* Seta animada */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-1">
            <span className="text-purple-400 text-3xl animate-pulse">⬇️</span>
            <span className="text-xs text-gray-500">Todos os meses</span>
          </div>
        </div>

        {/* Passo 2: Economia Mensal */}
        <div className={`group rounded-xl p-5 border-2 transition-all duration-300 ${
          monthlySavings >= 0 
            ? 'bg-gradient-to-r from-green-600/10 to-emerald-700/10 border-green-500/30 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/20' 
            : 'bg-gradient-to-r from-red-600/10 to-rose-700/10 border-red-500/30 hover:border-red-400/50 hover:shadow-lg hover:shadow-red-500/20'
        }`}>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform ${
                monthlySavings >= 0 ? 'bg-green-500/20' : 'bg-red-500/20'
              }`}>
                {monthlySavings >= 0 ? '💰' : '💸'}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-white text-xs font-bold px-2 py-1 rounded-full ${
                  monthlySavings >= 0 ? 'bg-green-500' : 'bg-red-500'
                }`}>MENSAL</span>
                <p className={`text-sm font-semibold ${
                  monthlySavings >= 0 ? 'text-green-300' : 'text-red-300'
                }`}>
                  {monthlySavings >= 0 ? 'Você economiza' : 'Você gasta mais que ganha'}
                </p>
              </div>
              <p className={`text-3xl font-black mb-1 ${
                monthlySavings >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {formatCurrency(Math.abs(monthlySavings))}/mês
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>💵 {formatCurrency(parseCurrencyInput(monthlyIncome))}</span>
                <span>-</span>
                <span>🛒 {formatCurrency(parseCurrencyInput(monthlyExpenses))}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Seta com tempo */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-1">
            <span className="text-purple-400 text-3xl animate-pulse">⬇️</span>
            <span className="text-xs text-gray-400 font-semibold">
              Durante {projectionValue} {projectionPeriod === "years" ? (projectionValue === "1" ? "ano" : "anos") : (projectionValue === "1" ? "mês" : "meses")} ⏳
            </span>
          </div>
        </div>

        {/* Passo 3: Total Economizado */}
        <div className="group bg-gradient-to-r from-purple-600/10 to-pink-700/10 rounded-xl p-5 border-2 border-purple-500/30 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                🎯
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">ACÚMULO</span>
                <p className="text-sm text-purple-300 font-semibold">Total Economizado</p>
              </div>
              <p className="text-3xl font-black text-purple-400 mb-1">
                {formatCurrency(monthlySavings * totalMonths)}
              </p>
              <p className="text-xs text-gray-500">
                {formatCurrency(monthlySavings)} × {totalMonths} meses = seu esforço! 💪
              </p>
            </div>
          </div>
        </div>

        {/* Plus com rendimento */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/30">
            <span className="text-2xl">➕</span>
            <span className="text-sm text-yellow-400 font-bold">Magia dos Juros Compostos!</span>
          </div>
        </div>

        {/* Passo 4: Rendimentos */}
        <div className="group bg-gradient-to-r from-yellow-600/10 to-orange-700/10 rounded-xl p-5 border-2 border-yellow-500/30 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                ✨
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">RENDIMENTO</span>
                <p className="text-sm text-yellow-300 font-semibold">Dinheiro trabalhando pra você!</p>
              </div>
              <p className="text-3xl font-black text-yellow-400 mb-1">
                {formatCurrency(totalYield)}
              </p>
              <p className="text-xs text-gray-500">
                Com {yieldRate}% {yieldPeriod === "yearly" ? "a.a." : "a.m."} de rendimento 📈
              </p>
            </div>
          </div>
        </div>

        {/* Linha divisória com equals */}
        <div className="flex items-center justify-center py-2">
          <div className="flex items-center gap-2">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <span className="text-3xl">🎉</span>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          </div>
        </div>

        {/* Passo 5: Resultado Final */}
        <div className="group bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl p-6 border-4 border-transparent bg-clip-padding shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 relative overflow-hidden">
          {/* Efeito de brilho */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          
          <div className="relative">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                  🏆
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">RESULTADO FINAL</span>
                </div>
                <p className="text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                  {formatCurrency(finalPatrimony)}
                </p>
                <div className="bg-result-card rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-growth-label font-medium">Crescimento total:</span>
                    <span className="text-xs text-growth-percent font-semibold">
                      {((totalGrowth / parseCurrencyInput(currentPatrimony)) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <p className={`text-2xl font-black ${totalGrowth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {totalGrowth >= 0 ? '🚀 +' : '📉 -'} {formatCurrency(Math.abs(totalGrowth))}
                  </p>
                  <p className="text-xs text-growth-message mt-2">
                    {totalGrowth >= 0 
                      ? '🎊 Parabéns! Seu patrimônio cresceu!' 
                      : '⚠️ Atenção! Seu patrimônio diminuiu.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

