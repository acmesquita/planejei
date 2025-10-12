import { useState, useEffect } from "react";
import type { Theme } from "../types";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  // Carrega tema salvo no localStorage
  useEffect(() => {
    // Verifica se estamos no browser
    if (typeof window === "undefined") return;
    
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // Se não houver preferência salva, verifica preferência do sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
    }
  }, []);

  // Função para alternar tema
  const toggleTheme = () => {
    const newTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    
    // Verifica se estamos no browser antes de acessar localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  };

  return { theme, toggleTheme };
};

