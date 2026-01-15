import { useEffect } from "react";
import { Header } from "./Header";
import { AreaHeroSection } from "./AreaHeroSection";
import { ProcessTimingSection } from "./ProcessTimingSection";
import { FeaturesSection } from "./FeaturesSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { getAreaBySlug } from "../data/areasData";

interface AreaLandingPageProps {
  slug: string;
  onNavigateHome: () => void;
  onNavigateToCalculator: () => void;
  onNavigateToLoanPrograms: () => void;
  onNavigateToRefiWatch: () => void;
  onNavigateToBlog: () => void;
}

export function AreaLandingPage({
  slug,
  onNavigateHome,
  onNavigateToCalculator,
  onNavigateToLoanPrograms,
  onNavigateToRefiWatch,
  onNavigateToBlog,
}: AreaLandingPageProps) {
  const areaData = getAreaBySlug(slug);

  // Set document title and meta description for SEO
  useEffect(() => {
    if (areaData) {
      document.title = areaData.metaTitle;
      
      // Update or create meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute("content", areaData.metaDescription);
    }
  }, [areaData]);

  // If area not found, redirect to home
  if (!areaData) {
    useEffect(() => {
      onNavigateHome();
    }, [onNavigateHome]);
    return null;
  }

  return (
    <div className="min-h-screen">
      <Header
        onNavigateHome={onNavigateHome}
        onNavigateToCalculator={onNavigateToCalculator}
        onNavigateToLoanPrograms={onNavigateToLoanPrograms}
        onNavigateToRefiWatch={onNavigateToRefiWatch}
        onNavigateToBlog={onNavigateToBlog}
      />
      <main>
        <AreaHeroSection areaData={areaData} />
        <ProcessTimingSection />
        <FeaturesSection customFeatures={areaData.customFeatures} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
