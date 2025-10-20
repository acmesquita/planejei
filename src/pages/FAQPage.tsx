import React from "react";
import { FAQSection } from "../components/FAQSection";

export const FAQPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-500 dark:text-slate-200">
          Perguntas Frequentes
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
          Tire suas dúvidas sobre investimentos e planejamento financeiro
          <div className="mt-6 pt-6 border-t border-slate-700/50">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Última atualização • 20/10/2025
            </p>
          </div>
        </p>
      </header>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};
