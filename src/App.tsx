import "./index.css";
import { useState } from "react";
import { Navigation, Footer } from "./components";
import { 
  HomePage, 
  ResourcesPage, 
  InvestmentsPage, 
  BlogPage, 
  FAQPage 
} from "./pages";

export function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    // Scroll para o topo quando mudar de página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handlePageChange} />;
      case "resources":
        return <ResourcesPage />;
      case "investments":
        return <InvestmentsPage />;
      case "blog":
        return <BlogPage />;
      case "faq":
        return <FAQPage />;
      default:
        return <HomePage onNavigate={handlePageChange} />;
    }
  };

  return (
    <div className="w-full h-full">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      
      <main className="min-h-screen">
        {renderCurrentPage()}
      </main>

      <Footer />
    </div>
  );
}
