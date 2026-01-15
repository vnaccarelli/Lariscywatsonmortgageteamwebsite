"use client";

import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { useInView } from "motion/react";
import { ArrowLeft, CheckCircle2, Building2, Plus, Trash2, FileText, Home, TrendingUp, DollarSign, Users, ShieldCheck, Medal, BadgeDollarSign, LandPlot, ArrowRightLeft, Hammer, Banknote, RefreshCw, Repeat, Sparkles, Shield } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { AddLoanProgramForm } from "./AddLoanProgramForm";

interface LoanProgramsProps {
  onBackToHome: () => void;
}

interface LoanProgram {
  id: number;
  title: string;
  icon?: React.ReactNode;
  iconName?: string;
  description: string;
  features: string[];
  idealFor: string[];
  custom?: boolean;
}

// Icon mapping for custom programs - dynamically load from Lucide library
const getIconComponent = (iconName: string) => {
  const IconComponent = (LucideIcons as any)[iconName];
  const FinalIcon = IconComponent || (LucideIcons as any).Home;
  return <FinalIcon className="size-6 text-white" />;
};

const defaultLoanPrograms: LoanProgram[] = [
  {
    id: 1,
    title: "Bank Statement Loans",
    icon: <FileText className="size-6 text-white" />,
    description: "Perfect for self-employed borrowers who can't provide traditional income documentation.",
    features: [
      "12 or 24-month bank statements",
      "No tax returns required",
      "Up to 90% LTV available",
      "Purchase or refinance"
    ],
    idealFor: [
      "Self-employed professionals",
      "Business owners",
      "Freelancers and contractors",
      "Commission-based income"
    ]
  },
  {
    id: 2,
    title: "DSCR (Debt Service Coverage Ratio)",
    icon: <Building2 className="size-6 text-white" />,
    description: "Investment property loans qualified based on rental income, not personal income.",
    features: [
      "No income documentation",
      "Qualify by property cash flow",
      "Long-term and short-term rentals",
      "1-4 unit properties"
    ],
    idealFor: [
      "Real estate investors",
      "Rental property owners",
      "Airbnb hosts",
      "Portfolio builders"
    ]
  },
  {
    id: 3,
    title: "Non-QM",
    icon: <Home className="size-6 text-white" />,
    description: "Alternative documentation programs for unique financial situations.",
    features: [
      "Asset-based qualification",
      "Foreign national programs",
      "Recent credit events OK",
      "Flexible DTI ratios"
    ],
    idealFor: [
      "High net worth individuals",
      "International buyers",
      "Recent bankruptcy/foreclosure",
      "Complex income sources"
    ]
  },
  {
    id: 4,
    title: "Jumbo Loans",
    icon: <TrendingUp className="size-6 text-white" />,
    description: "Financing for luxury properties and high-value home purchases.",
    features: [
      "Loan amounts up to $5M+",
      "Competitive rates",
      "Flexible down payments",
      "Strong credit rewarded"
    ],
    idealFor: [
      "Luxury home buyers",
      "High-income earners",
      "Portfolio diversification",
      "Second home purchases"
    ]
  },
  {
    id: 5,
    title: "Fix & Flip Loans",
    icon: <DollarSign className="size-6 text-white" />,
    description: "Short-term financing for real estate investors purchasing properties to renovate and sell.",
    features: [
      "Fast approval process",
      "Up to 90% of purchase",
      "Up to 100% of rehab costs",
      "6-18 month terms"
    ],
    idealFor: [
      "House flippers",
      "Real estate developers",
      "Renovation specialists",
      "Investment groups"
    ]
  },
  {
    id: 6,
    title: "Portfolio Loans",
    icon: <Users className="size-6 text-white" />,
    description: "Blanket financing solutions for investors with multiple properties.",
    features: [
      "Finance multiple properties",
      "Streamlined process",
      "Cross-collateralization options",
      "Flexible structures"
    ],
    idealFor: [
      "Experienced investors",
      "Property portfolio holders",
      "Commercial real estate",
      "Multi-unit owners"
    ]
  },
  {
    id: 11,
    title: "Government-Backed Loans",
    icon: <ShieldCheck className="size-6 text-white" />,
    description: "Traditional government loans that make buying or refinancing more affordable.",
    features: [
      "VA, FHA & USDA options",
      "Flexible credit guidelines",
      "Low down payment choices",
      "Fixed or ARM options"
    ],
    idealFor: [
      "First-time homebuyers",
      "Buyers with limited savings",
      "Borrowers rebuilding credit",
      "Homeowners seeking lower rates"
    ]
  },
  {
    id: 12,
    title: "VA Loans",
    icon: <Medal className="size-6 text-white" />,
    description: "$0 down, low-rate home loans for eligible veterans, active-duty, and surviving spouses.",
    features: [
      "100% financing available",
      "$0 down payment",
      "Competitive, low rates",
      "Fast, streamlined closings"
    ],
    idealFor: [
      "Veterans and service members",
      "Surviving spouses",
      "Buyers with limited savings",
      "VA buyers wanting no PMI"
    ]
  },
  {
    id: 13,
    title: "FHA Loans",
    icon: <BadgeDollarSign className="size-6 text-white" />,
    description: "Flexible, low-down-payment loans with options to finance home repairs and upgrades.",
    features: [
      "Low down payment options",
      "Flexible credit guidelines",
      "FHA 203(k) rehab available",
      "Fixed and ARM choices"
    ],
    idealFor: [
      "First-time buyers",
      "Buyers with limited credit",
      "Fixer-upper purchases",
      "Buyers needing smaller down"
    ]
  },
  {
    id: 14,
    title: "Conventional Loans",
    icon: <Home className="size-6 text-white" />,
    description: "Traditional Fannie Mae and Freddie Mac loans with competitive rates and flexible terms.",
    features: [
      "Backed by Fannie/Freddie",
      "Conforming loan limits",
      "Fixed or ARM options",
      "Can cancel mortgage insurance"
    ],
    idealFor: [
      "Buyers with solid credit",
      "Move-up homeowners",
      "Borrowers with 3–20% down",
      "Those wanting PMI removed"
    ]
  },
  {
    id: 15,
    title: "USDA Loans",
    icon: <LandPlot className="size-6 text-white" />,
    description: "$0 down loans for eligible rural areas, with options to finance home repairs and updates.",
    features: [
      "100% financing available",
      "USDA renovation options",
      "Income & area based",
      "Fixed-rate, low payments"
    ],
    idealFor: [
      "Buyers in rural areas",
      "First-time homebuyers",
      "Buyers with limited savings",
      "Fixer-uppers in USDA zones"
    ]
  },
  {
    id: 16,
    title: "Bridge Loans",
    icon: <ArrowRightLeft className="size-6 text-white" />,
    description: "Short-term financing that lets you buy your next home before selling your current one.",
    features: [
      "Short-term funding",
      "Use current home equity",
      "Stronger, non-contingent offers",
      "Flexible payoff at sale"
    ],
    idealFor: [
      "Move-up buyers",
      "Hot-market purchases",
      "Buyers avoiding double moves",
      "Sellers needing extra time"
    ]
  },
  {
    id: 17,
    title: "New Construction Loans",
    icon: <Hammer className="size-6 text-white" />,
    description: "Build your home with one loan and one closing, available for Conventional and VA buyers.",
    features: [
      "One-time close structure",
      "Conventional & VA options",
      "Interest-only during build",
      "Lock rate before completion"
    ],
    idealFor: [
      "Custom home builds",
      "VA buyers building new",
      "Owners avoiding 2 closings",
      "Buyers wanting cost certainty"
    ]
  },
  {
    id: 18,
    title: "Cash-Out Refinance",
    icon: <Banknote className="size-6 text-white" />,
    description: "Replace your mortgage and turn built-up equity into cash for bigger goals.",
    features: [
      "Access home equity in cash",
      "Consolidate higher-rate debt",
      "Fund projects or expenses",
      "One monthly payment"
    ],
    idealFor: [
      "Home renovations",
      "Debt consolidation",
      "College or big expenses",
      "Owners with strong equity"
    ]
  },
  {
    id: 19,
    title: "Rate & Term Refinance",
    icon: <RefreshCw className="size-6 text-white" />,
    description: "Refinance to lower your payment, change your term, or switch from an ARM to a fixed rate.",
    features: [
      "Lower rate potential",
      "Change loan term length",
      "Switch ARM to fixed",
      "No cash back required"
    ],
    idealFor: [
      "Owners seeking payment relief",
      "Paying off home faster",
      "ARM borrowers wanting fixed",
      "Long-term homeowners"
    ]
  },
  {
    id: 20,
    title: "VA IRRRL (Streamline)",
    icon: <Repeat className="size-6 text-white" />,
    description: "Fast VA refinance that can lower your rate with minimal paperwork and often no appraisal.",
    features: [
      "For existing VA loans",
      "Often no appraisal needed",
      "Reduced documentation",
      "Quick, simple process"
    ],
    idealFor: [
      "VA borrowers with higher rates",
      "Busy VA families",
      "Long-term VA homeowners",
      "Payment-conscious veterans"
    ]
  },
  {
    id: 21,
    title: "FHA Streamline Refinance",
    icon: <Sparkles className="size-6 text-white" />,
    description: "Easy refinance option for current FHA borrowers to lower their rate with less paperwork.",
    features: [
      "For existing FHA loans",
      "Often no appraisal required",
      "Minimal income docs",
      "Fast, streamlined approval"
    ],
    idealFor: [
      "FHA borrowers with higher rates",
      "Owners wanting payment relief",
      "Busy homeowners needing simple",
      "Long-term FHA homeowners"
    ]
  }
];

export function LoanPrograms({ onBackToHome }: LoanProgramsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);
  const [loanPrograms, setLoanPrograms] = useState<LoanProgram[]>(defaultLoanPrograms);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    // Check for admin mode from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const adminParam = urlParams.get('admin');
    
    // Check localStorage for persisted admin mode
    const storedAdminMode = localStorage.getItem('adminMode') === 'true';
    
    // If URL has admin=true, enable admin mode and save to localStorage
    if (adminParam === 'true') {
      setIsAdminMode(true);
      localStorage.setItem('adminMode', 'true');
    } else if (adminParam === 'false') {
      // Allow disabling via URL
      setIsAdminMode(false);
      localStorage.setItem('adminMode', 'false');
    } else {
      // Use stored preference
      setIsAdminMode(storedAdminMode);
    }
    
    // Load custom loan programs from localStorage
    loadCustomPrograms();
  }, []);

  useEffect(() => {
    // Load the booking widget script when modal opens
    if (showBookingModal) {
      const script = document.createElement('script');
      script.src = 'https://connect.theloportal.com/js/form_embed.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup script when modal closes
        document.body.removeChild(script);
      };
    }
  }, [showBookingModal]);

  const toggleAdminMode = () => {
    const newMode = !isAdminMode;
    setIsAdminMode(newMode);
    localStorage.setItem('adminMode', newMode.toString());
  };

  const loadCustomPrograms = () => {
    const storedPrograms = localStorage.getItem("customLoanPrograms");
    if (storedPrograms) {
      const customPrograms = JSON.parse(storedPrograms);
      setLoanPrograms([...defaultLoanPrograms, ...customPrograms]);
    }
  };

  const handleDeleteCustomProgram = (id: number) => {
    if (confirm("Are you sure you want to delete this custom loan program?")) {
      const storedPrograms = JSON.parse(localStorage.getItem("customLoanPrograms") || "[]");
      const updatedCustomPrograms = storedPrograms.filter((p: any) => p.id !== id);
      localStorage.setItem("customLoanPrograms", JSON.stringify(updatedCustomPrograms));
      setLoanPrograms([...defaultLoanPrograms, ...updatedCustomPrograms]);
    }
  };

  const handleFormSuccess = () => {
    loadCustomPrograms();
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Admin Mode Badge */}
      {isAdminMode && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 z-50"
        >
          <motion.button
            onClick={toggleAdminMode}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#507A56] to-[#8fc295] text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-sm"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1", fontSize: "0.85rem" }}
          >
            <Shield className="size-4" />
            Admin Mode
          </motion.button>
        </motion.div>
      )}

      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.button
            onClick={onBackToHome}
            whileHover={{ x: -4 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-[#507A56] hover:text-[#8fc295] transition-colors"
          >
            <ArrowLeft className="size-5" />
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, lineHeight: "1.5", fontSize: "16px" }}>
              Back to Home
            </span>
          </motion.button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-20">
        {/* Animated Gradient Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, #507A56 0%, #8fc295 100%)",
              "linear-gradient(135deg, #3d5e42 0%, #7ab182 100%)",
              "linear-gradient(135deg, #507A56 0%, #8fc295 100%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large circle top right */}
          <motion.div
            className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full border border-white/20"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Medium circle bottom left */}
          <motion.div
            className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full border border-white/20"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          {/* Small circle middle */}
          <motion.div
            className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/15 rounded-full border border-white/30"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                className="relative"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Glowing ring behind icon */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-2xl blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30">
                  <Building2 className="size-10 text-white" />
                </div>
              </motion.div>
            </div>
            <motion.h1
              className="text-white mb-4 text-center"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                lineHeight: "1.2",
                fontSize: "clamp(2rem, 5vw, 3rem)",
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.25,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Loan Products & Programs
            </motion.h1>
            <div className="flex justify-center">
              <motion.p
                className="text-white/90 max-w-3xl"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  lineHeight: "1.6",
                  fontSize: "1.125rem",
                  textAlign: "center",
                }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                We offer a full suite of Non-QM and alternative mortgage programs designed for borrowers who don't fit traditional lending boxes. Whether you're self-employed, an investor, or have unique income or property needs—we have a solution.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Loan Programs Grid */}
      <section ref={ref} className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-center mb-12"
          >
            <h2
              className="text-[#111928] mb-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                lineHeight: "1.2",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              }}
            >
              Our Programs
            </h2>
            <div className="flex justify-center">
              <p
                className="text-gray-600 max-w-2xl"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  lineHeight: "1.6",
                  fontSize: "1.125rem",
                  textAlign: "center",
                }}
              >
                Explore our comprehensive range of alternative mortgage solutions tailored to your unique financial situation.
              </p>
            </div>
          </motion.div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.25,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                  transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
                }}
                onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-br from-[#507A56] to-[#8fc295] p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      {program.icon || getIconComponent(program.iconName || "Home")}
                    </div>
                    <h3
                      className="text-white flex-1"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        lineHeight: "1.3",
                        fontSize: "1.25rem",
                      }}
                    >
                      {program.title}
                    </h3>
                  </div>
                  <div className="flex justify-center">
                    <p
                      className="text-white/90 max-w-full"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 400,
                        lineHeight: "1.5",
                        fontSize: "0.95rem",
                        textAlign: "center",
                      }}
                    >
                      {program.description}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Features */}
                  <div className="mb-6">
                    <h4
                      className="text-[#507A56] mb-3"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        lineHeight: "1.4",
                        fontSize: "1rem",
                      }}
                    >
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-5 text-[#8fc295] flex-shrink-0 mt-0.5" />
                          <span
                            className="text-gray-600"
                            style={{
                              fontFamily: "'Poppins', sans-serif",
                              fontWeight: 400,
                              lineHeight: "1.5",
                              fontSize: "0.9rem",
                            }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For - Expandable */}
                  {selectedProgram === program.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="pt-4 border-t border-gray-200"
                    >
                      <h4
                        className="text-[#507A56] mb-3"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 600,
                          lineHeight: "1.4",
                          fontSize: "1rem",
                        }}
                      >
                        Ideal For
                      </h4>
                      <ul className="space-y-2">
                        {program.idealFor.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="size-2 rounded-full bg-[#8fc295] flex-shrink-0 mt-2" />
                            <span
                              className="text-gray-600"
                              style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 400,
                                lineHeight: "1.5",
                                fontSize: "0.9rem",
                              }}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Click to expand hint */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p
                      className="text-[#8fc295] text-center"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 500,
                        lineHeight: "1",
                        fontSize: "0.85rem",
                      }}
                    >
                      {selectedProgram === program.id ? "Click to collapse" : "Click to see more"}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add New Program Button */}
          {isAdminMode && (
            <div className="flex justify-center mt-8">
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 20px rgba(255,255,255,0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  duration: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white text-[#507A56] px-8 py-4 rounded-lg shadow-lg"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  lineHeight: "1",
                  fontSize: "1.05rem",
                }}
                onClick={() => setShowAddForm(true)}
              >
                Add New Program
              </motion.button>
            </div>
          )}

          {/* Add Loan Program Form */}
          {showAddForm && (
            <AddLoanProgramForm
              onClose={() => setShowAddForm(false)}
              onSuccess={handleFormSuccess}
            />
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="bg-gradient-to-br from-[#507A56] to-[#8fc295] rounded-2xl p-8 md:p-12 text-center"
          >
            <h2
              className="text-white mb-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                lineHeight: "1.3",
                fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
              }}
            >
              Ready to Explore Your Options?
            </h2>
            <div className="flex justify-center mb-8">
              <p
                className="text-white/90 max-w-2xl"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  lineHeight: "1.6",
                  fontSize: "1.125rem",
                  textAlign: "center",
                }}
              >
                Every borrower's situation is unique. Let us help you find the perfect loan program that fits your needs and goals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 20px rgba(255,255,255,0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  duration: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white text-[#507A56] px-8 py-4 rounded-lg shadow-lg"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  lineHeight: "1",
                  fontSize: "1.05rem",
                }}
                onClick={() => setShowBookingModal(true)}
              >
                Schedule a Consultation
              </motion.button>
              <motion.button
                onClick={onBackToHome}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  duration: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg border-2 border-white/30"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  lineHeight: "1",
                  fontSize: "1.05rem",
                }}
              >
                Back to Home
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowBookingModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-br from-[#507A56] to-[#8fc295] p-6 flex items-center justify-between">
              <h3
                className="text-white"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  lineHeight: "1.3",
                  fontSize: "1.5rem",
                }}
              >
                Schedule a Consultation
              </h3>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setShowBookingModal(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg
                  className="size-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </motion.button>
            </div>

            {/* Modal Body with Iframe */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <iframe
                src="https://connect.theloportal.com/widget/booking/mFdNTwaMhw7mEG7BNkBU"
                style={{
                  width: "100%",
                  border: "none",
                  overflow: "hidden",
                  minHeight: "600px",
                }}
                scrolling="no"
                id="wpoVlXlDPrZnup9kMkDN_1764015698729"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}