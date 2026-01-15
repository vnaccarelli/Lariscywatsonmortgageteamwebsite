import { motion } from "motion/react";
import { Phone, Calculator, Menu, X } from "lucide-react";
import { useState } from "react";
import logoHeader from "figma:asset/ef9e1dc4e40c23044365e1b95eb3c563230ad0f1.png";

interface HeaderProps {
  onNavigateHome?: () => void;
  onNavigateToCalculator?: () => void;
  onNavigateToLoanPrograms?: () => void;
  onNavigateToRefiWatch?: () => void;
  onNavigateToBlog?: () => void;
}

export function Header({ onNavigateHome, onNavigateToCalculator, onNavigateToLoanPrograms, onNavigateToRefiWatch, onNavigateToBlog }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNavClick = (callback?: () => void) => {
    setIsMobileMenuOpen(false);
    if (callback) callback();
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--border)]">
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={onNavigateHome} className="flex items-center">
            <img 
              src={logoHeader} 
              alt="Lariscy Watson Mortgage Team" 
              className="h-10 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={onNavigateHome} className="text-sm hover:text-[#507A56] transition-colors" style={{ fontWeight: 500 }}>
              Home
            </button>
            <button onClick={onNavigateToLoanPrograms} className="text-sm hover:text-[#507A56] transition-colors" style={{ fontWeight: 500 }}>
              Loan Programs
            </button>
            <button onClick={onNavigateToRefiWatch} className="text-sm hover:text-[#507A56] transition-colors" style={{ fontWeight: 500 }}>
              Refi Watch
            </button>
            <button onClick={onNavigateToCalculator} className="text-sm hover:text-[#507A56] transition-colors flex items-center gap-1.5" style={{ fontWeight: 500 }}>
              <Calculator className="w-4 h-4" />
              Tax Calculator
            </button>
            <button onClick={onNavigateToBlog} className="text-sm hover:text-[#507A56] transition-colors" style={{ fontWeight: 500 }}>
              Blog
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-[#507A56] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop CTA Button */}
          <motion.a
            href="tel:+19126633274"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              duration: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="hidden md:inline-flex items-center gap-[10px] px-[28px] py-[13px] bg-[#8fc295] text-white rounded-[6px] shadow-md hover:shadow-lg transition-shadow"
            style={{
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            <Phone className="w-4 h-4" />
            Call Now
          </motion.a>
        </div>

        {/* Mobile Menu Panel */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{
            duration: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 flex flex-col gap-3">
            <button 
              onClick={() => handleMobileNavClick(onNavigateHome)} 
              className="text-sm hover:text-[#507A56] transition-colors py-2 text-left" 
              style={{ fontWeight: 500 }}
            >
              Home
            </button>
            <button 
              onClick={() => handleMobileNavClick(onNavigateToLoanPrograms)} 
              className="text-sm hover:text-[#507A56] transition-colors py-2 text-left" 
              style={{ fontWeight: 500 }}
            >
              Loan Programs
            </button>
            <button 
              onClick={() => handleMobileNavClick(onNavigateToRefiWatch)} 
              className="text-sm hover:text-[#507A56] transition-colors py-2 text-left" 
              style={{ fontWeight: 500 }}
            >
              Refi Watch
            </button>
            <button 
              onClick={() => handleMobileNavClick(onNavigateToCalculator)} 
              className="text-sm hover:text-[#507A56] transition-colors flex items-center gap-1.5 py-2" 
              style={{ fontWeight: 500 }}
            >
              <Calculator className="w-4 h-4" />
              Tax Calculator
            </button>
            <button 
              onClick={() => handleMobileNavClick(onNavigateToBlog)} 
              className="text-sm hover:text-[#507A56] transition-colors py-2 text-left" 
              style={{ fontWeight: 500 }}
            >
              Blog
            </button>
            
            {/* Mobile CTA Button */}
            <motion.a
              href="tel:+19126633274"
              whileTap={{ scale: 0.98 }}
              transition={{
                duration: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-br from-[#507A56] to-[#8fc295] text-white rounded-full shadow-md"
              style={{
                fontWeight: 600,
                fontSize: "0.875rem",
              }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </motion.a>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}