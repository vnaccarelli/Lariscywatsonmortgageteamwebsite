"use client";

import { motion } from "motion/react";
import svgPaths from "../imports/svg-zqy0g4t7es";
import { Card, CardContent } from "./ui/card";
import type { AreaData } from "../data/areasData";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.05,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        duration: 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="h-full"
    >
      <Card className="rounded-[20px] transition-shadow h-full">
        <CardContent className="flex flex-col gap-[30px] p-[40px] h-full">
          {/* Icon Container */}
          <div className="relative shrink-0">
            <div className="bg-[#8fc295] rounded-[15px] size-[56px] flex items-center justify-center">
              <div className="size-[28px] flex items-center justify-center [&>*]:w-full [&>*]:h-full">
                {icon}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-[14px]">
            <h3
              className="font-['Poppins',sans-serif] font-semibold text-[#1e1e1e] text-[24px]"
              style={{ lineHeight: "30px" }}
            >
              {title}
            </h3>
            <p
              className="font-['Poppins',sans-serif] text-[#637381] text-[16px]"
              style={{ lineHeight: "24px" }}
            >
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function FeaturesSection({ customFeatures }: { customFeatures?: AreaData["customFeatures"] }) {
  const sectionVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const features = [
    {
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
          <path
            d={svgPaths.p2121e200}
            stroke="#F3F3F3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      title: customFeatures?.localExpertise || "Local Market Expertise",
      description:
        "We know the neighborhoods — Ardsley Park, Southbridge, Islands, Richmond Hill, Effingham and beyond.",
    },
    {
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
          <path
            d={svgPaths.p1e177500}
            stroke="#F3F3F3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Fast Pre-Approvals",
      description: "Most clients are pre-approved in under 24 hours.",
    },
    {
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
          <path
            d={svgPaths.p13e37f80}
            stroke="#F3F3F3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Clear Communication",
      description:
        "You'll never wonder where your loan stands — we update you at every milestone.",
    },
    {
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
          <path
            d={svgPaths.p8b5b600}
            stroke="#F3F3F3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Flexible Options",
      description:
        "We shop multiple wholesale lenders to find the best rate, term, and structure for your goals.",
    },
    {
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
          <path
            d={svgPaths.p22d10980}
            stroke="#F3F3F3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      title: customFeatures?.countyKnowledge || "Community-Driven Relationship-Focused",
      description:
        "We're your neighbors. As active members of the Savannah community, we focus on building lasting relationships, not just closing loans. When you work with us, you're part of a local network that feels like home.",
    },
    {
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
          <path
            d={svgPaths.p197a0a00}
            stroke="#F3F3F3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      title: customFeatures?.experience || "Trusted Team",
      description:
        "Daniel Lariscy and Cameron Watson bring years of experience helping Savannah families navigate the mortgage process with confidence.",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className="bg-white py-16 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-[8px] items-center mb-12 md:mb-16">
          <p
            className="font-['Poppins',sans-serif] font-semibold text-[#8fc295] text-[18px] text-center"
            style={{ lineHeight: "26px" }}
          >
            Why Choose Us
          </p>
          <h2
            className="font-['Poppins',sans-serif] font-bold text-[#1e1e1e] text-[32px] md:text-[40px] text-center"
            style={{ lineHeight: "48px" }}
          >
            Why Homeowners Choose Us
          </h2>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}