import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <header className="text-center mb-8 md:mb-12 pt-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-slate-400 bg-clip-text text-transparent">
        Planejador Financeiro Online
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-3 font-medium">
        Calculadora gratuita de investimentos com juros compostos. 
        Simule projeções do seu patrimônio e planeje seu futuro financeiro.
      </p>
      <p className="text-sm text-gray-400 mb-6">
        ✓ 100% gratuito • ✓ Cálculos precisos • ✓ Fácil de usar
      </p>
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-gray-300 leading-relaxed">
          <span className="font-semibold text-blue-400">Plataforma completa de educação financeira</span> com recursos, 
          artigos educativos, guias sobre tipos de investimentos e links para fontes confiáveis. 
          Aprenda sobre planejamento financeiro, diversificação de investimentos e estratégias para 
          alcançar seus objetivos financeiros com segurança e conhecimento.
        </p>
      </div>
    </header>
  );
};

