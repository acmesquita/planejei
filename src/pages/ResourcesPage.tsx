import React from "react";
import { ResourcesSection } from "../components/ResourcesSection";

export const ResourcesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-500 dark:text-slate-200">
          Recursos e Links sobre Investimentos
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Fontes confiáveis e ferramentas essenciais para sua educação financeira
        </p>
        <div className="mt-6 pt-6 border-t border-slate-700/50">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Última atualização • 20/10/2025
          </p>
        </div>
      </header>

      {/* Resources Section */}
      <ResourcesSection />
    </div>
  );
};
