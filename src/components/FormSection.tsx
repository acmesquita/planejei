import React from "react";
import type { YieldPeriod, ProjectionPeriod } from "../types";
import { convertYearlyToMonthlyRate } from "../utils/calculationUtils";

interface FormSectionProps {
  currentPatrimony: string;
  monthlyIncome: string;
  monthlyExpenses: string;
  yieldRate: string;
  yieldPeriod: YieldPeriod;
  projectionValue: string;
  projectionPeriod: ProjectionPeriod;
  hasValidData: boolean;
  onCurrentPatrimonyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMonthlyIncomeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMonthlyExpensesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onYieldRateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onYieldPeriodChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onProjectionValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onProjectionPeriodChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSimulate: () => void;
}

export const FormSection: React.FC<FormSectionProps> = ({
  currentPatrimony,
  monthlyIncome,
  monthlyExpenses,
  yieldRate,
  yieldPeriod,
  projectionValue,
  projectionPeriod,
  hasValidData,
  onCurrentPatrimonyChange,
  onMonthlyIncomeChange,
  onMonthlyExpensesChange,
  onYieldRateChange,
  onYieldPeriodChange,
  onProjectionValueChange,
  onProjectionPeriodChange,
  onSimulate,
}) => {
  return (
    <div className="bg-card-dark rounded-lg p-6 shadow-xl border border-theme">
      <h2 className="text-xl font-semibold mb-6 text-blue-400">Simule sua Jornada Financeira</h2>
      <p className="text-gray-400 text-sm mb-6">Preencha todos os campos abaixo para descobrir como seu patrimônio vai evoluir ao longo do tempo.</p>
      
      <div className="space-y-6">
        {/* Seção: Situação Financeira Atual */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
            💰 Situação Financeira Atual
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Patrimônio Atual
                <span className="text-xs text-gray-500"> (todos os seus investimentos)</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
                <input
                  type="text"
                  value={currentPatrimony}
                  onChange={onCurrentPatrimonyChange}
                  className="w-full pl-10 pr-4 py-2 rounded-lg text-right bg-input-dark border border-theme focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                  placeholder="Ex: 50.000,00"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Renda Líquida
                <span className="text-xs text-gray-500"> (após descontos)</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
                <input
                  type="text"
                  value={monthlyIncome}
                  onChange={onMonthlyIncomeChange}
                  className="w-full pl-10 pr-4 py-2 rounded-lg text-right bg-input-dark border border-theme focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                  placeholder="Ex: 8.000,00"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Despesas Mensais
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
                <input
                  type="text"
                  value={monthlyExpenses}
                  onChange={onMonthlyExpensesChange}
                  className="w-full pl-10 pr-4 py-2 rounded-lg text-right bg-input-dark border border-theme focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                  placeholder="Ex: 5.000,00"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-700"></div>

        {/* Seção: Parâmetros da Simulação */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
            📊 Parâmetros da Simulação
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Taxa de Rendimento
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={yieldRate}
                    onChange={onYieldRateChange}
                    className="w-full pl-4 pr-8 py-2 rounded-lg text-right bg-input-dark border border-theme focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                    placeholder="Ex: 10.5"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                </div>
                <select
                  value={yieldPeriod}
                  onChange={onYieldPeriodChange}
                  className="px-4 py-2 rounded-lg text-right bg-input-dark border border-theme focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition cursor-pointer"
                >
                  <option value="monthly">ao mês</option>
                  <option value="yearly">ao ano</option>
                </select>
              </div>
              {yieldPeriod === "yearly" && yieldRate && (
                <p className="text-xs text-gray-500 mt-1">
                  ≈ {convertYearlyToMonthlyRate(parseFloat(yieldRate)).toFixed(3)}% ao mês
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Período de Projeção
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={projectionValue}
                  onChange={onProjectionValueChange}
                  className="flex-1 px-4 py-2 rounded-lg text-right bg-input-dark border border-theme focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                  placeholder="Ex: 5"
                  min="1"
                />
                <select
                  value={projectionPeriod}
                  onChange={onProjectionPeriodChange}
                  className="px-4 py-2 rounded-lg text-right bg-input-dark border border-theme focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition cursor-pointer"
                >
                  <option value="months">{projectionValue === "1" ? "mês" : "meses"}</option>
                  <option value="years">{projectionValue === "1" ? "ano" : "anos"}</option>
                </select>
              </div>
              {projectionPeriod === "years" && projectionValue && (
                <p className="text-xs text-gray-500 mt-1">
                  = {parseInt(projectionValue) * 12} meses
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Botão Simular */}
        <div className="pt-6 border-t border-gray-700">
          <button
            onClick={onSimulate}
            disabled={!hasValidData}
            className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
              hasValidData
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] cursor-pointer'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed opacity-50'
            }`}
          >
            {hasValidData ? '🚀 Simular Evolução do Patrimônio' : '⚠️ Preencha todos os campos'}
          </button>
        </div>
      </div>
    </div>
  );
};

