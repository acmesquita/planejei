import React from "react";
import type { PatrimonyProjection } from "../types";
import { formatCurrency } from "../utils/currencyUtils";

interface ProjectionTableProps {
  projections: PatrimonyProjection[];
  isExpanded: boolean;
  onToggleExpanded: () => void;
}

export const ProjectionTable: React.FC<ProjectionTableProps> = ({
  projections,
  isExpanded,
  onToggleExpanded,
}) => {
  return (
    <div className="bg-card-dark rounded-lg p-6 shadow-xl border border-theme">
      <div 
        className="flex items-center justify-between p-3 -m-3 mb-4 rounded-lg cursor-pointer group hover:bg-theme-hover transition-all duration-300"
        onClick={onToggleExpanded}
      >
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold text-green-400 group-hover:text-green-300 transition">
            Projeção Detalhada do Patrimônio
          </h2>
          <span className="text-xs text-gray-500 group-hover:text-gray-400 transition">
            {isExpanded ? '(clique para ocultar)' : '(clique para expandir)'}
          </span>
        </div>
        <button
          className={`text-3xl text-green-400 group-hover:text-green-300 transition-all duration-300 transform group-hover:scale-125 ${
            isExpanded ? 'rotate-90' : ''
          }`}
          aria-label={isExpanded ? "Colapsar tabela" : "Expandir tabela"}
        >
          &gt;
        </button>
      </div>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-300">Mês</th>
                <th className="px-3 py-3 text-right text-xs font-semibold text-gray-300">Valor Inicial</th>
                <th className="px-3 py-3 text-right text-xs font-semibold text-gray-300">Despesas</th>
                <th className="px-3 py-3 text-right text-xs font-semibold text-gray-300">Aporte</th>
                <th className="px-3 py-3 text-right text-xs font-semibold text-gray-300">Rendimento</th>
                <th className="px-3 py-3 text-right text-xs font-semibold text-gray-300">Valor Final</th>
              </tr>
            </thead>
            <tbody>
              {projections.map((projection, index) => {
                const monthlyGrowth = projection.finalValue - projection.initialValue;
                const monthlyGrowthPercentage = projection.initialValue > 0 
                  ? ((monthlyGrowth / projection.initialValue) * 100).toFixed(2)
                  : "0.00";
                
                return (
                  <tr
                    key={projection.month}
                    className={`border-b border-theme hover:bg-theme-hover transition ${
                      index % 2 === 0 ? 'bg-card-alt' : ''
                    }`}
                  >
                    <td className="px-3 py-3 text-left font-medium text-gray-300">
                      Mês {projection.month}
                    </td>
                    <td className="px-3 py-3 text-right text-gray-400">
                      {formatCurrency(projection.initialValue)}
                    </td>
                    <td className="px-3 py-3 text-right text-red-400">
                      {formatCurrency(projection.expenses)}
                    </td>
                    <td className={`px-3 py-3 text-right font-semibold ${projection.savings >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {formatCurrency(projection.savings)}
                    </td>
                    <td className="px-3 py-3 text-right text-yellow-400">
                      {formatCurrency(projection.yield)}
                    </td>
                    <td className="px-3 py-3 text-right">
                      <div className="flex flex-col items-end">
                        <span className="font-bold text-blue-400">
                          {formatCurrency(projection.finalValue)}
                        </span>
                        <span className="text-xs text-gray-500">
                          {monthlyGrowth >= 0 ? '+' : ''}{formatCurrency(monthlyGrowth)} ({monthlyGrowthPercentage}%)
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Legenda */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-xs text-gray-500 mb-2">📊 Legenda:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">●</span>
                <span className="text-gray-400">Valor Inicial: patrimônio no início do mês</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">●</span>
                <span className="text-gray-400">Despesas: gastos mensais</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">●</span>
                <span className="text-gray-400">Aporte: economia mensal (renda - despesas)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">●</span>
                <span className="text-gray-400">Rendimento: juros sobre o patrimônio</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">●</span>
                <span className="text-gray-400">Valor Final: patrimônio no fim do mês</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

