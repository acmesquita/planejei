import React from "react";
import { BlogSection } from "../components/BlogSection";

export const BlogPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-500 dark:text-slate-200">
          Artigos sobre Educação Financeira
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Conteúdo educativo para sua jornada de aprendizado financeiro
        </p>
        <div className="mt-6 pt-6 border-t border-slate-700/50">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Conteúdo atualizado regularmente • 20/10/2025
          </p>
        </div>
      </header>

      {/* Blog Section */}
      <BlogSection />
    </div>
  );
};
