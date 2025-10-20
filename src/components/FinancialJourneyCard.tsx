import React, { useState, useEffect } from "react";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 'initial',
      title: 'Patrimônio Inicial',
      emoji: '🏦',
      color: 'blue',
      value: formatCurrency(parseCurrencyInput(currentPatrimony)),
      description: 'Seu ponto de partida 🚀',
      badge: 'INÍCIO'
    },
    {
      id: 'monthly',
      title: 'Economia Mensal',
      emoji: monthlySavings >= 0 ? '💰' : '💸',
      color: monthlySavings >= 0 ? 'green' : 'red',
      value: `${formatCurrency(Math.abs(monthlySavings))}/mês`,
      description: monthlySavings >= 0 ? 'Você economiza' : 'Você gasta mais que ganha',
      badge: 'MENSAL'
    },
    {
      id: 'accumulated',
      title: 'Total Economizado',
      emoji: '🎯',
      color: 'purple',
      value: formatCurrency(monthlySavings * totalMonths),
      description: 'Total Economizado 💪',
      badge: 'ACÚMULO'
    },
    {
      id: 'yield',
      title: 'Rendimentos',
      emoji: '✨',
      color: 'yellow',
      value: formatCurrency(totalYield),
      description: `${yieldRate}% ${yieldPeriod === "yearly" ? "a.a." : "a.m."} 📈`,
      badge: 'RENDIMENTO'
    },
    {
      id: 'final',
      title: 'Resultado Final',
      emoji: '🏆',
      color: 'gradient',
      value: formatCurrency(finalPatrimony),
      description: 'Seu patrimônio final!',
      badge: 'RESULTADO FINAL',
      growth: totalGrowth,
      growthPercent: ((totalGrowth / parseCurrencyInput(currentPatrimony)) * 100).toFixed(1)
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        // Para no último slide ao invés de recomeçar
        if (prev >= slides.length - 1) {
          setIsAutoPlaying(false); // Para o auto-play quando chegar ao final
          return prev;
        }
        return prev + 1;
      });
    }, 3000); // 3 segundos por slide

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Pausa auto-play quando usuário interage
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      // Não avança se já estiver no último slide
      if (prev >= slides.length - 1) {
        return prev;
      }
      return prev + 1;
    });
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      // Não volta se já estiver no primeiro slide
      if (prev <= 0) {
        return prev;
      }
      return prev - 1;
    });
    setIsAutoPlaying(false);
  };
  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'from-blue-600/10 to-blue-700/10',
        border: 'border-blue-500/30',
        hoverBorder: 'hover:border-blue-400/50',
        shadow: 'hover:shadow-blue-500/20',
        iconBg: 'bg-blue-500/20',
        badge: 'bg-blue-500',
        text: 'text-blue-400',
        description: 'text-blue-300'
      },
      green: {
        bg: 'from-green-600/10 to-emerald-700/10',
        border: 'border-green-500/30',
        hoverBorder: 'hover:border-green-400/50',
        shadow: 'hover:shadow-green-500/20',
        iconBg: 'bg-green-500/20',
        badge: 'bg-green-500',
        text: 'text-green-400',
        description: 'text-green-300'
      },
      red: {
        bg: 'from-red-600/10 to-rose-700/10',
        border: 'border-red-500/30',
        hoverBorder: 'hover:border-red-400/50',
        shadow: 'hover:shadow-red-500/20',
        iconBg: 'bg-red-500/20',
        badge: 'bg-red-500',
        text: 'text-red-400',
        description: 'text-red-300'
      },
      purple: {
        bg: 'from-purple-600/10 to-pink-700/10',
        border: 'border-purple-500/30',
        hoverBorder: 'hover:border-purple-400/50',
        shadow: 'hover:shadow-purple-500/20',
        iconBg: 'bg-purple-500/20',
        badge: 'bg-purple-500',
        text: 'text-purple-400',
        description: 'text-purple-300'
      },
      yellow: {
        bg: 'from-yellow-600/10 to-orange-700/10',
        border: 'border-yellow-500/30',
        hoverBorder: 'hover:border-yellow-400/50',
        shadow: 'hover:shadow-yellow-500/20',
        iconBg: 'bg-yellow-500/20',
        badge: 'bg-yellow-500 text-black',
        text: 'text-yellow-400',
        description: 'text-yellow-300'
      },
      gradient: {
        bg: 'from-blue-600/20 via-purple-600/20 to-pink-600/20',
        border: 'border-transparent',
        hoverBorder: 'hover:shadow-purple-500/30',
        shadow: 'shadow-2xl',
        iconBg: 'bg-gradient-to-br from-blue-500 to-purple-500',
        badge: 'bg-gradient-to-r from-blue-500 to-purple-500',
        text: 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent',
        description: 'text-gray-300'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div id="results-section" className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg p-2 md:p-8 shadow-2xl border-2 border-purple-500/30 w-full max-w-full overflow-hidden">
      <div className="text-center mb-2 md:mb-6">
        <h2 className="text-base md:text-2xl font-bold mb-1 md:mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Sua Jornada Financeira
        </h2>
        <p className="text-gray-400 text-xs md:text-sm">Veja como seu dinheiro vai crescer!</p>
      </div>
      
      {/* Carrossel Container */}
      <div className="relative overflow-hidden rounded-xl w-full max-w-full">
        {/* Slides Container */}
        <div 
          className="flex transition-transform duration-2000 ease-in-out w-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => {
            const colors = getColorClasses(slide.color);
            return (
              <div key={slide.id} className="w-full flex-shrink-0 min-w-0">
                <div className={`group bg-gradient-to-r ${colors.bg} rounded-lg p-2 md:p-8 border-2 ${colors.border} ${colors.hoverBorder} ${colors.shadow} transition-all duration-300 relative overflow-hidden`}>
                  {/* Efeito de brilho para slide final */}
                  {slide.id === 'final' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  )}
                  
                  <div className="relative text-center">
                    <div className={`w-10 h-10 md:w-24 md:h-24 ${colors.iconBg} rounded-full flex items-center justify-center text-xl md:text-5xl group-hover:scale-110 ${slide.id === 'final' ? 'group-hover:rotate-12' : ''} transition-all duration-300 shadow-lg mx-auto mb-2 md:mb-6`}>
                      {slide.emoji}
                    </div>
                    
                    <div className="mb-1 md:mb-4">
                      <span className={`${colors.badge} text-white text-xs font-bold px-1.5 md:px-3 py-0.5 md:py-1 rounded-full`}>
                        {slide.badge}
                      </span>
                    </div>
                    
                    <p className={`text-sm md:text-4xl font-black mb-1 md:mb-3 ${colors.text}`}>
                      {slide.value}
                    </p>
                    
                    <p className={`text-xs md:text-sm ${colors.description} mb-1 md:mb-4`}>
                      {slide.description}
                    </p>

                    {/* Informações extras para slide final - Ultra compacto para 430px */}
                    {slide.id === 'final' && slide.growth !== undefined && (
                      <div className="bg-result-card rounded p-1.5 md:p-4 mt-1 md:mt-4">
                        {/* Crescimento em linha única */}
                        <div className="flex items-center justify-between mb-1 md:mb-3">
                          <span className="text-xs md:text-sm text-growth-label font-medium">Crescimento:</span>
                          <span className="text-xs md:text-xl text-growth-percent font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                            +{slide.growthPercent}%
                          </span>
                        </div>
                        
                        {/* Valor do crescimento compacto */}
                        <div className="text-center mb-1 md:mb-3">
                          <p className={`text-xs md:text-xl font-black ${slide.growth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {slide.growth >= 0 ? '🚀 +' : '📉 -'} {formatCurrency(Math.abs(slide.growth))}
                          </p>
                        </div>

                        {/* Breakdown ultra compacto */}
                        <div className="grid grid-cols-2 gap-1 md:gap-3 text-xs">
                          <div className="bg-blue-500/10 rounded p-1 md:p-3">
                            <div className="text-blue-300 font-medium text-xs">💰 Economia</div>
                            <div className="text-blue-400 font-bold text-xs md:text-sm">{formatCurrency(monthlySavings * totalMonths)}</div>
                          </div>
                          <div className="bg-yellow-500/10 rounded p-1 md:p-3">
                            <div className="text-yellow-300 font-medium text-xs">✨ Rendimento</div>
                            <div className="text-yellow-400 font-bold text-xs md:text-sm">{formatCurrency(totalYield)}</div>
                          </div>
                        </div>
                        
                        {/* Mensagem final ultra compacta */}
                        <div className="mt-1 md:mt-4 text-center">
                          <p className="text-xs md:text-sm text-growth-message">
                            {slide.growth >= 0 
                              ? '🎊 Parabéns!' 
                              : '⚠️ Atenção!'
                            }
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`absolute left-1 md:left-4 top-1/2 transform -translate-y-1/2 p-1.5 md:p-2 rounded-full transition-all duration-300 backdrop-blur-sm z-10 ${
            currentSlide === 0 
              ? 'bg-black/10 text-gray-500 cursor-not-allowed' 
              : 'bg-black/20 hover:bg-black/40 text-white hover:scale-110'
          }`}
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`absolute right-1 md:right-4 top-1/2 transform -translate-y-1/2 p-1.5 md:p-2 rounded-full transition-all duration-300 backdrop-blur-sm z-10 ${
            currentSlide === slides.length - 1 
              ? 'bg-black/10 text-gray-500 cursor-not-allowed' 
              : 'bg-black/20 hover:bg-black/40 text-white hover:scale-110'
          }`}
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Auto-play toggle */}
        <button
          onClick={() => {
            if (currentSlide === slides.length - 1 && !isAutoPlaying) {
              // Se estiver no último slide e pausado, reinicia do primeiro
              setCurrentSlide(0);
              setIsAutoPlaying(true);
            } else {
              setIsAutoPlaying(!isAutoPlaying);
            }
          }}
          className="absolute top-1 md:top-4 right-1 md:right-4 bg-black/20 hover:bg-black/40 text-white p-1.5 md:p-2 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
          title={
            currentSlide === slides.length - 1 && !isAutoPlaying 
              ? 'Reiniciar carrossel' 
              : isAutoPlaying 
                ? 'Pausar' 
                : 'Reproduzir'
          }
        >
          {currentSlide === slides.length - 1 && !isAutoPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
            </svg>
          ) : isAutoPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-2 md:mt-6 space-x-1 md:space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-purple-500 scale-125' 
                : 'bg-gray-400 hover:bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-1 md:mt-4">
        <div className="w-full bg-gray-700 rounded-full h-0.5 md:h-1">
          <div 
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-0.5 md:h-1 rounded-full transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

