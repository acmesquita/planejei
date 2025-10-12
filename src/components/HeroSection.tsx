import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <header className="text-center mb-8 md:mb-12 pt-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Planejador Financeiro Online
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-2">
        Calculadora gratuita de investimentos com juros compostos. 
        Simule projeções do seu patrimônio e planeje seu futuro financeiro.
      </p>
      <p className="text-sm text-gray-500">
        ✨ 100% gratuito • 📊 Cálculos precisos • 🚀 Fácil de usar
      </p>
    </header>
  );
};

