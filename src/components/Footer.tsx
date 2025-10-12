import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          {/* Informação do desenvolvedor */}
          <div className="flex items-center gap-3 text-gray-400">
            <span className="text-sm">Desenvolvido com</span>
            <span className="text-red-400 text-lg animate-pulse">❤️</span>
            <span className="text-sm">por</span>
          </div>
          
          {/* Link para GitHub */}
          <a
            href="https://github.com/acmesquita"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <svg
              className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <div className="flex flex-col items-start">
              <span className="text-lg font-bold text-purple-300 group-hover:text-purple-200 transition-colors">
                Catharina Mesquita
              </span>
              <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                @acmesquita
              </span>
            </div>
            <svg
              className="w-4 h-4 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {/* Informação adicional */}
          <p className="text-xs text-gray-600 text-center mt-2">
            © {new Date().getFullYear()} Planejei • Planejamento Financeiro Inteligente
          </p>
        </div>
      </div>
    </footer>
  );
};

