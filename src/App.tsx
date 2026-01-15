import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AreasWeServe } from "./components/AreasWeServe";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { AboutSection } from "./components/AboutSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { BannerSection } from "./components/BannerSection";
import { ProcessTimingSection } from "./components/ProcessTimingSection";
import { BlogSection } from "./components/BlogSection";
import { ServicesDetailSection } from "./components/ServicesDetailSection";
import { GoogleReviewsSection } from "./components/GoogleReviewsSection";
import { BlogPost } from "./components/BlogPost";
import { PropertyTaxCalculator } from "./components/PropertyTaxCalculator";
import { LoanPrograms } from "./components/LoanPrograms";
import RefiWatch from "./components/RefiWatch";
import { AllBlogPosts } from "./components/AllBlogPosts";
import { ContactSection } from "./components/ContactSection";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsAndConditions } from "./components/TermsAndConditions";
import { TexasCompliance } from "./components/TexasCompliance";
import { AreaLandingPage } from "./components/AreaLandingPage";
import { BlogPostManager } from "./components/BlogPostManager";
import { BlogPostBuilder } from "./components/BlogPostBuilder";
import { ProfileSettings } from "./components/ProfileSettings";
import { getBlogPostById } from "./constants/blogData";
import { getAllAreaSlugs } from "./data/areasData";
import { Toaster } from './components/ui/sonner';

type ViewType = "home" | "blog-post" | "all-blog-posts" | "property-tax-calculator" | "loan-programs" | "refi-watch" | "privacy-policy" | "terms-conditions" | "texas-compliance" | "area-landing" | "blog-manager" | "blog-builder" | "profile-settings";

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>("home");
  const [selectedBlogPostId, setSelectedBlogPostId] = useState<number | null>(null);
  const [selectedAreaSlug, setSelectedAreaSlug] = useState<string | null>(null);
  const [editingPostId, setEditingPostId] = useState<string | undefined>(undefined);

  // Check for hidden blog admin URL on mount
  useEffect(() => {
    const checkAdminUrl = () => {
      const hash = window.location.hash;
      if (hash === '#/blog-admin-secret') {
        setCurrentView('blog-manager');
      }
    };
    
    checkAdminUrl();
    window.addEventListener('hashchange', checkAdminUrl);
    return () => window.removeEventListener('hashchange', checkAdminUrl);
  }, []);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentView]);

  // Listen for navigation events from Footer
  useEffect(() => {
    const handleNavigate = (e: CustomEvent) => {
      const view = e.detail as ViewType;
      setCurrentView(view);
    };
    
    window.addEventListener('navigate', handleNavigate as EventListener);
    return () => window.removeEventListener('navigate', handleNavigate as EventListener);
  }, []);

  const handleReadPost = (postId: number) => {
    setSelectedBlogPostId(postId);
    setCurrentView("blog-post");
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedBlogPostId(null);
    setSelectedAreaSlug(null);
  };

  const handleNavigateToCalculator = () => {
    setCurrentView("property-tax-calculator");
  };

  const handleNavigateToPost = (postId: number) => {
    setSelectedBlogPostId(postId);
    // View is already "blog-post", just update the content
  };

  const handleNavigateToLoanPrograms = () => {
    setCurrentView("loan-programs");
  };

  const handleNavigateToRefiWatch = () => {
    setCurrentView("refi-watch");
  };

  const handleNavigateToAllBlogPosts = () => {
    setCurrentView("all-blog-posts");
  };

  const handleNavigateToPrivacyPolicy = () => {
    setCurrentView("privacy-policy");
  };

  const handleNavigateToTermsConditions = () => {
    setCurrentView("terms-conditions");
  };

  const handleNavigateToTexasCompliance = () => {
    setCurrentView("texas-compliance");
  };

  const handleNavigateToArea = (slug: string) => {
    setSelectedAreaSlug(slug);
    setCurrentView("area-landing");
  };

  const handleEditPost = (postId: string) => {
    setEditingPostId(postId);
    setCurrentView("blog-builder");
  };

  const handleCancelEdit = () => {
    setEditingPostId(undefined);
    setCurrentView("blog-manager");
  };

  const handleNewPost = () => {
    setEditingPostId(undefined);
    setCurrentView("blog-builder");
  };

  const handleViewPost = (slug: string) => {
    // For now, just show a toast since we're viewing from localStorage
    // In production with Supabase, this would navigate to the actual post
    window.open(`#/blog/${slug}`, '_blank');
  };

  const handleOpenProfileSettings = () => {
    setCurrentView("profile-settings");
  };

  const handleBackToBlogManager = () => {
    setCurrentView("blog-manager");
  };

  // Render area landing page
  if (currentView === "area-landing" && selectedAreaSlug) {
    return (
      <AreaLandingPage
        slug={selectedAreaSlug}
        onNavigateHome={handleBackToHome}
        onNavigateToCalculator={handleNavigateToCalculator}
        onNavigateToLoanPrograms={handleNavigateToLoanPrograms}
        onNavigateToRefiWatch={handleNavigateToRefiWatch}
        onNavigateToBlog={handleNavigateToAllBlogPosts}
      />
    );
  }

  // Render property tax calculator view
  if (currentView === "property-tax-calculator") {
    return (
      <div className="min-h-screen">
        <Header 
          onNavigateHome={handleBackToHome} 
          onNavigateToCalculator={handleNavigateToCalculator}
          onNavigateToLoanPrograms={handleNavigateToLoanPrograms}
          onNavigateToRefiWatch={handleNavigateToRefiWatch}
          onNavigateToBlog={handleNavigateToAllBlogPosts}
        />
        <PropertyTaxCalculator onBackToHome={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  // Render blog post view
  if (currentView === "blog-post" && selectedBlogPostId) {
    const post = getBlogPostById(selectedBlogPostId);
    if (post) {
      return (
        <div className="min-h-screen">
          <Header 
            onNavigateHome={handleBackToHome} 
            onNavigateToCalculator={handleNavigateToCalculator}
            onNavigateToLoanPrograms={handleNavigateToLoanPrograms}
            onNavigateToRefiWatch={handleNavigateToRefiWatch}
            onNavigateToBlog={handleNavigateToAllBlogPosts}
          />
          <BlogPost
            post={post}
            onBackToHome={handleBackToHome}
            onNavigateToPost={handleNavigateToPost}
          />
          <Footer />
        </div>
      );
    }
  }

  // Render all blog posts view
  if (currentView === "all-blog-posts") {
    return (
      <div className="min-h-screen">
        <Header 
          onNavigateHome={handleBackToHome} 
          onNavigateToCalculator={handleNavigateToCalculator}
          onNavigateToLoanPrograms={handleNavigateToLoanPrograms}
          onNavigateToRefiWatch={handleNavigateToRefiWatch}
          onNavigateToBlog={handleNavigateToAllBlogPosts}
        />
        <AllBlogPosts
          onReadPost={handleReadPost}
          onBackToHome={handleBackToHome}
        />
        <Footer />
      </div>
    );
  }

  // Render loan programs view
  if (currentView === "loan-programs") {
    return (
      <div className="min-h-screen">
        <Header 
          onNavigateHome={handleBackToHome} 
          onNavigateToCalculator={handleNavigateToCalculator}
          onNavigateToLoanPrograms={handleNavigateToLoanPrograms}
          onNavigateToRefiWatch={handleNavigateToRefiWatch}
          onNavigateToBlog={handleNavigateToAllBlogPosts}
        />
        <LoanPrograms onBackToHome={handleBackToHome} />
        <Footer />
      </div>
    );
  }

  // Render Refi Watch view
  if (currentView === "refi-watch") {
    return (
      <div className="min-h-screen">
        <Header 
          onNavigateHome={handleBackToHome} 
          onNavigateToCalculator={handleNavigateToCalculator}
          onNavigateToLoanPrograms={handleNavigateToLoanPrograms}
          onNavigateToRefiWatch={handleNavigateToRefiWatch}
          onNavigateToBlog={handleNavigateToAllBlogPosts}
        />
        <RefiWatch />
        <Footer />
      </div>
    );
  }

  // Render privacy policy view
  if (currentView === "privacy-policy") {
    return (
      <div className="min-h-screen">
        <Header 
          onNavigateHome={handleBackToHome} 
          onNavigateToCalculator={handleNavigateToCalculator}
          onNavigateToLoanPrograms={handleNavigateToLoanPrograms}
          onNavigateToRefiWatch={handleNavigateToRefiWatch}
          onNavigateToBlog={handleNavigateToAllBlogPosts}
        />
        <PrivacyPolicy />
        <Footer />
      </div>
    );
  }

  // Render terms and conditions view
  if (currentView === "terms-conditions") {
    return (
      <div className="min-h-screen">
        <Header 
          onNavigateHome={handleBackToHome} 
          onNavigateToCalculator={handleNavigateToCalculator}
          onNavigateToLoanPrograms={handleNavigateToLoanPrograms}
          onNavigateToRefiWatch={handleNavigateToRefiWatch}
          onNavigateToBlog={handleNavigateToAllBlogPosts}
        />
        <TermsAndConditions />
        <Footer />
      </div>
    );
  }

  // Render Texas Compliance view
  if (currentView === "texas-compliance") {
    return (
      <div className="min-h-screen">
        <Header 
          onNavigateHome={handleBackToHome} 
          onNavigateToCalculator={handleNavigateToCalculator}
          onNavigateToLoanPrograms={handleNavigateToLoanPrograms}
          onNavigateToRefiWatch={handleNavigateToRefiWatch}
          onNavigateToBlog={handleNavigateToAllBlogPosts}
        />
        <TexasCompliance />
        <Footer />
      </div>
    );
  }

  // Render blog manager view
  if (currentView === "blog-manager") {
    return (
      <div className="min-h-screen">
        <BlogPostManager
          onNewPost={handleNewPost}
          onEditPost={handleEditPost}
          onViewPost={handleViewPost}
          onBackToHome={handleBackToHome}
        />
        <Toaster />
      </div>
    );
  }

  // Render blog builder view
  if (currentView === "blog-builder") {
    return (
      <div className="min-h-screen">
        <BlogPostBuilder
          postId={editingPostId}
          onBack={handleBackToBlogManager}
          onProfileSettings={handleOpenProfileSettings}
        />
        <Toaster />
      </div>
    );
  }

  // Render profile settings view
  if (currentView === "profile-settings") {
    return (
      <div className="min-h-screen">
        <ProfileSettings
          onBack={handleBackToBlogManager}
        />
        <Toaster />
      </div>
    );
  }

  // Render homepage view
  return (
    <div className="min-h-screen">
      <Header 
        onNavigateHome={handleBackToHome} 
        onNavigateToCalculator={handleNavigateToCalculator}
        onNavigateToLoanPrograms={handleNavigateToLoanPrograms}
        onNavigateToRefiWatch={handleNavigateToRefiWatch}
        onNavigateToBlog={handleNavigateToAllBlogPosts}
      />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <BannerSection />
        <ProcessTimingSection />
        <BlogSection onReadPost={handleReadPost} onViewAllPosts={handleNavigateToAllBlogPosts} />
        <ServicesDetailSection 
          onNavigateToLoanPrograms={handleNavigateToLoanPrograms}
          onNavigateToRefiWatch={handleNavigateToRefiWatch}
        />
        <GoogleReviewsSection />
        <AreasWeServe onNavigateToArea={handleNavigateToArea} />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}