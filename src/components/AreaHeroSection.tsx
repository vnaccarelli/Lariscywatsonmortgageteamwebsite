import { motion } from "motion/react";
import { Phone, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import svgPaths from "../imports/svg-b4dwxxrddv";
import type { AreaData } from "../data/areasData";

interface AreaHeroSectionProps {
  areaData: AreaData;
}

export function AreaHeroSection({ areaData }: AreaHeroSectionProps) {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Wave Background - Simplified for mobile */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z"
            fill="#f0f9f1"
            opacity="0.5"
          />
          <path
            d="M0,500 Q360,420 720,500 T1440,500 L1440,800 L0,800 Z"
            fill="#e8f5e9"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="container relative z-10 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-flex items-center gap-2 bg-[#8fc295]/10 border border-[#8fc295]/30 rounded-full px-4 py-2 mb-6"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#507A56"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-['Poppins',sans-serif] text-[#507A56] text-sm" style={{ fontWeight: 600 }}>
                {areaData.city}, {areaData.stateAbbr}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.25,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-['Poppins',sans-serif] text-[#1e1e1e] text-3xl md:text-4xl lg:text-5xl mb-4"
              style={{ fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em" }}
            >
              Your Mortgage Partner in{" "}
              <span className="text-[#507A56]">{areaData.city}</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-['Poppins',sans-serif] text-[#637381] text-base md:text-lg mb-6"
              style={{ lineHeight: 1.6 }}
            >
              {areaData.heroSubheadline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-['Poppins',sans-serif] text-[#637381] text-sm md:text-base mb-8"
              style={{ lineHeight: 1.7 }}
            >
              {areaData.heroDescription}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://apply.gofireside.com/client/daniel_lariscy"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  duration: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#507A56] to-[#659b6d] text-white px-6 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-shadow font-['Poppins',sans-serif] text-sm sm:text-base"
                style={{ fontWeight: 600 }}
              >
                <FileText className="w-5 h-5" />
                Get Pre-Approved
              </motion.a>

              <motion.a
                href="tel:+19126633274"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  duration: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#507A56] text-[#507A56] px-6 py-3.5 rounded-lg hover:bg-[#507A56] hover:text-white transition-all font-['Poppins',sans-serif] text-sm sm:text-base"
                style={{ fontWeight: 600 }}
              >
                <Phone className="w-5 h-5" />
                Call Us Today
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.25,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={areaData.heroImageUrl}
                  alt={`${areaData.city}, ${areaData.state} homes`}
                  className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                />
              </div>

              {/* Decorative Dots SVG (bottom right) */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-30">
                <svg viewBox="0 0 100 100" fill="none">
                  {[...Array(5)].map((_, row) =>
                    [...Array(5)].map((_, col) => (
                      <circle
                        key={`${row}-${col}`}
                        cx={10 + col * 20}
                        cy={10 + row * 20}
                        r="3"
                        fill="#507A56"
                      />
                    ))
                  )}
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.25,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-12 lg:mt-16"
        >
          {/* Meta Info Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-white border border-[var(--border)] rounded-full px-4 py-2 shadow-sm">
              <svg className="w-4 h-4 text-[#507A56]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-['Poppins',sans-serif] text-[#1e1e1e] text-xs md:text-sm" style={{ fontWeight: 500 }}>
                {areaData.county}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 bg-white border border-[var(--border)] rounded-full px-4 py-2 shadow-sm">
              <svg className="w-4 h-4 text-[#507A56]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="font-['Poppins',sans-serif] text-[#1e1e1e] text-xs md:text-sm" style={{ fontWeight: 500 }}>
                {areaData.population} residents
              </span>
            </div>

            <div className="inline-flex items-center gap-2 bg-white border border-[var(--border)] rounded-full px-4 py-2 shadow-sm">
              <svg className="w-4 h-4 text-[#507A56]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="font-['Poppins',sans-serif] text-[#1e1e1e] text-xs md:text-sm" style={{ fontWeight: 500 }}>
                Serving since {areaData.foundedYear}
              </span>
            </div>
          </div>

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {areaData.quickFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.45 + index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-gradient-to-br from-[#8fc295]/5 to-[#507A56]/5 border border-[#8fc295]/20 rounded-xl p-5 text-center"
              >
                <p className="font-['Poppins',sans-serif] text-[#1e1e1e] text-sm" style={{ fontWeight: 500, lineHeight: 1.6 }}>
                  {fact}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}