import React from "react";
import type { Theme } from "../types";

interface ThemeToggleButtonProps {
  theme: Theme;
  onToggle: () => void;
}

export const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="theme-toggle-btn group fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-2 border-purple-500/30 hover:border-purple-400/50 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
      aria-label="Alternar tema"
    >
      <div className="relative w-12 h-6 bg-gray-700/50 rounded-full transition-colors">
        <div
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-gradient-to-br rounded-full shadow-md transition-all duration-300 ${
            theme === "dark"
              ? "translate-x-0 from-indigo-400 to-purple-500"
              : "translate-x-6 from-yellow-400 to-orange-500"
          }`}
        >
          <span className="absolute inset-0 flex items-center justify-center text-xs">
            {theme === "dark" ? "🌙" : "☀️"}
          </span>
        </div>
      </div>
      <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
};

