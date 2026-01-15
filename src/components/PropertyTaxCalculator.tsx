"use client";

import { motion } from "motion/react";
import { useState, useRef, useMemo } from "react";
import { useInView } from "motion/react";
import { ArrowLeft, Calculator, Home, DollarSign, MapPin } from "lucide-react";

interface TaxBreakdown {
  monthlyTax: number;
  annualTax: number;
  effectiveRate: number;
  assessedValue: number;
}

interface PropertyTaxCalculatorProps {
  onBackToHome: () => void;
}

const municipalities = [
  { name: "Chatham - Savannah Unincorporated", rate: 1.46 },
  { name: "Chatham - Savannah City", rate: 1.77 },
  { name: "Chatham - Pooler", rate: 1.41 },
  { name: "Chatham - Port Wentworth", rate: 1.44 },
  { name: "Chatham - Garden City", rate: 1.41 },
  { name: "Chatham - Thunderbolt", rate: 1.51 },
  { name: "Chatham - Tybee Island", rate: 1.42 },
  { name: "Bryan - Unincorporated", rate: 0.96 },
  { name: "Bryan - Richmond Hill", rate: 1.12 },
  { name: "Bryan - Pembroke", rate: 1.36 },
];

export function PropertyTaxCalculator({ onBackToHome }: PropertyTaxCalculatorProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [homeValue, setHomeValue] = useState<string>("");
  const [selectedMunicipality, setSelectedMunicipality] = useState<string>("");
  const [result, setResult] = useState<TaxBreakdown | null>(null);

  // Calculate assessed value based on home value and selected municipality
  const assessedValue = useMemo(() => {
    if (!homeValue || !selectedMunicipality) return 0;
    
    const homeValueNum = parseFloat(homeValue.replace(/,/g, ""));
    const municipality = municipalities.find(m => m.name === selectedMunicipality);
    
    if (!municipality || isNaN(homeValueNum)) return 0;
    
    return (homeValueNum * municipality.rate) / 100;
  }, [homeValue, selectedMunicipality]);

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const formatPercent = (value: number): string => {
    return value.toFixed(3) + "%";
  };

  const handleCalculate = () => {
    const homeValueNum = parseFloat(homeValue.replace(/,/g, ""));
    const municipality = municipalities.find(m => m.name === selectedMunicipality);

    if (!municipality || isNaN(homeValueNum) || homeValueNum <= 0) {
      return;
    }

    const annualTax = assessedValue;
    const monthlyTax = annualTax / 12;
    const effectiveRate = municipality.rate;

    setResult({
      monthlyTax,
      annualTax,
      effectiveRate,
      assessedValue,
    });
  };

  const handleReset = () => {
    setHomeValue("");
    setSelectedMunicipality("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]">
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

      {/* Main Content */}
      <section ref={ref} className="py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-[#507A56] to-[#8fc295] p-4 rounded-2xl">
                <Calculator className="size-8 text-white" />
              </div>
            </div>
            <h1
              className="text-[#111928] mb-4 text-center"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                lineHeight: "1.2",
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
              }}
            >
              Property Tax Calculator
            </h1>
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
                Estimate your annual and monthly property taxes based on your home's value and local tax rate.
              </p>
            </div>
          </motion.div>

          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.25,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Home Value Input */}
              <div>
                <label
                  className="text-[#1e1e1e] mb-2 flex items-center gap-2"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1.5", fontSize: "0.95rem" }}
                >
                  <Home className="size-4 text-[#507A56]" />
                  Home Value
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                  <input
                    type="text"
                    value={homeValue}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, "");
                      if (value) {
                        setHomeValue(parseInt(value).toLocaleString());
                      } else {
                        setHomeValue("");
                      }
                    }}
                    placeholder="500,000"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#507A56] focus:outline-none transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: "1.5", fontSize: "16px" }}
                  />
                </div>
              </div>

              {/* Municipality Dropdown */}
              <div>
                <label
                  className="text-[#1e1e1e] mb-2 flex items-center gap-2"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1.5", fontSize: "0.95rem" }}
                >
                  <MapPin className="size-4 text-[#507A56]" />
                  Municipality
                </label>
                <div className="relative">
                  <select
                    value={selectedMunicipality}
                    onChange={(e) => setSelectedMunicipality(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#507A56] focus:outline-none transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: "1.5", fontSize: "16px" }}
                  >
                    <option value="">Select a municipality</option>
                    {municipalities.map(m => (
                      <option key={m.name} value={m.name}>
                        {m.name} | {m.rate}%
                      </option>
                    ))}
                  </select>
                </div>
                <p
                  className="text-gray-500 mt-1 text-sm"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: "1.4" }}
                >
                  Select your municipality to see the tax rate
                </p>
              </div>

              {/* Assessed Value Display */}
              {assessedValue > 0 && (
                <div className="md:col-span-2">
                  <label
                    className="text-[#1e1e1e] mb-2 flex items-center gap-2"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1.5", fontSize: "0.95rem" }}
                  >
                    <DollarSign className="size-4 text-[#507A56]" />
                    Calculated Assessment Value
                  </label>
                  <div className="relative">
                    <div className="w-full px-4 py-3 border-2 border-[#507A56] bg-[#e8f4ea] rounded-lg">
                      <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1.5", fontSize: "18px", color: "#507A56" }}>
                        {formatCurrency(assessedValue)}
                      </span>
                    </div>
                  </div>
                  <p
                    className="text-gray-500 mt-1 text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: "1.4" }}
                  >
                    This is your annual property tax (Home Value × Tax Rate)
                  </p>
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <motion.button
                onClick={handleCalculate}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 6px 20px rgba(80, 122, 86, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  duration: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex-1 bg-gradient-to-r from-[#507A56] to-[#8fc295] text-white py-3.5 rounded-lg shadow-md"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1", fontSize: "1rem" }}
              >
                Calculate
              </motion.button>
              <motion.button
                onClick={handleReset}
                whileHover={{
                  scale: 1.02,
                  borderColor: "#507A56",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  duration: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="px-8 py-3.5 rounded-lg border-2 border-gray-300 text-gray-700"
                style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1", fontSize: "1rem" }}
              >
                Reset
              </motion.button>
            </div>
          </motion.div>

          {/* Results */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-gradient-to-br from-[#507A56] to-[#8fc295] rounded-2xl shadow-xl p-8 md:p-10 text-white"
            >
              <h2
                className="mb-8 text-center"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  lineHeight: "1.3",
                  fontSize: "1.75rem",
                }}
              >
                Your Estimated Property Tax
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Monthly Tax */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                >
                  <p
                    className="text-white/80 mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, lineHeight: "1.4", fontSize: "0.9rem" }}
                  >
                    Monthly
                  </p>
                  <p
                    className="text-white"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      lineHeight: "1.2",
                      fontSize: "2rem",
                    }}
                  >
                    {formatCurrency(result.monthlyTax)}
                  </p>
                </motion.div>

                {/* Annual Tax */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                >
                  <p
                    className="text-white/80 mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, lineHeight: "1.4", fontSize: "0.9rem" }}
                  >
                    Annual
                  </p>
                  <p
                    className="text-white"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      lineHeight: "1.2",
                      fontSize: "2rem",
                    }}
                  >
                    {formatCurrency(result.annualTax)}
                  </p>
                </motion.div>

                {/* Effective Rate */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                >
                  <p
                    className="text-white/80 mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, lineHeight: "1.4", fontSize: "0.9rem" }}
                  >
                    Effective Rate
                  </p>
                  <p
                    className="text-white"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      lineHeight: "1.2",
                      fontSize: "2rem",
                    }}
                  >
                    {formatPercent(result.effectiveRate)}
                  </p>
                </motion.div>
              </div>

              <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <p
                  className="text-white/90 text-center"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: "1.6", fontSize: "0.95rem" }}
                >
                  💡 <strong>Note:</strong> This is an estimate. Actual property taxes may vary based on local assessments, millage rates, and other factors. Contact us for a more detailed analysis.
                </p>
              </div>
            </motion.div>
          )}

          {/* Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.25,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-12 bg-white rounded-2xl shadow-lg p-8 md:p-10"
          >
            <h3
              className="text-[#111928] mb-6"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                lineHeight: "1.3",
                fontSize: "1.5rem",
              }}
            >
              Understanding Property Taxes
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4
                  className="text-[#507A56] mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1.4", fontSize: "1.1rem" }}
                >
                  How are property taxes calculated?
                </h4>
                <p
                  className="text-gray-600"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: "1.6", fontSize: "1rem" }}
                >
                  Property taxes are typically calculated by multiplying your home's assessed value (minus any exemptions) by your local tax rate. Tax rates vary by county, city, and school district.
                </p>
              </div>

              <div>
                <h4
                  className="text-[#507A56] mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1.4", fontSize: "1.1rem" }}
                >
                  What are exemptions?
                </h4>
                <p
                  className="text-gray-600"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: "1.6", fontSize: "1rem" }}
                >
                  Exemptions reduce your taxable property value. Common exemptions include homestead exemptions (for primary residences), senior citizen exemptions, veteran exemptions, and disability exemptions.
                </p>
              </div>

              <div>
                <h4
                  className="text-[#507A56] mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1.4", fontSize: "1.1rem" }}
                >
                  Need help with your mortgage payment estimate?
                </h4>
                <p
                  className="text-gray-600 mb-4"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, lineHeight: "1.6", fontSize: "1rem" }}
                >
                  Property taxes are typically included in your monthly mortgage payment through an escrow account. Contact us to get a complete mortgage estimate including principal, interest, taxes, and insurance (PITI).
                </p>
                <motion.a
                  href="tel:+19126633274"
                  onClick={onBackToHome}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 6px 12px rgba(143, 194, 149, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    duration: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="bg-[#8fc295] text-white px-6 py-3 rounded-lg inline-block"
                  style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, lineHeight: "1", fontSize: "1rem" }}
                >
                  Contact Us Today
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}