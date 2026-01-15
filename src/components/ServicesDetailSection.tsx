"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "motion/react";
import imgFrame1000005037 from "figma:asset/30f6b71d9125268e271fbc378ce4c0e15c627030.png";
import imgHappyCoupleHomeImprovement from "figma:asset/e9742209d610a738fa7f50c21b64987def2e32f5.png";
import imgImage5 from "figma:asset/233ecafd0b0b50c963107406a81d65b0e9977556.png";
import { Card, CardContent } from "./ui/card";

interface ServiceCard {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonVariant: "primary" | "secondary";
  imageBg?: string;
}

const services: ServiceCard[] = [
  {
    id: 1,
    image: imgFrame1000005037,
    title: "Home Purchases & Refinances",
    description:
      "We specialize in both purchase and refinance transactions, providing personalized solutions to suit individual financial situations and goals for primary residence, second homes and investment properties.",
    buttonText: "VIP Refi Watchlist",
    buttonVariant: "primary",
  },
  {
    id: 2,
    image: imgHappyCoupleHomeImprovement,
    title: "Loan Products & Programs",
    description:
      "We offer a full suite of Non-QM and alternative mortgage programs designed for borrowers who don't fit traditional lending boxes. Whether you're self-employed, an investor, or just have unique income or property needs—chances are, we have a solution.",
    buttonText: "Programs",
    buttonVariant: "secondary",
  },
  {
    id: 3,
    image: imgImage5,
    title: "Hero Housing Initiative",
    description:
      "The Hero Housing Initiative is a program designed exclusively for military personnel, veterans, EMS, police, firefighters, healthcare workers, and education workers.",
    buttonText: "Learn More",
    buttonVariant: "secondary",
    imageBg: "#272c3a",
  },
];

interface ServiceCardProps {
  service: ServiceCard;
  index: number;
  onNavigateToLoanPrograms?: () => void;
  onNavigateToRefiWatch?: () => void;
}

function ServiceCard({ service, index, onNavigateToLoanPrograms, onNavigateToRefiWatch }: ServiceCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
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
      <Card className="overflow-hidden rounded-[8px] transition-shadow hover:shadow-[0px_8px_30px_0px_rgba(0,0,0,0.15)] h-full flex flex-col">
        {/* Image Container */}
        <div
          className="h-[230px] overflow-clip relative shrink-0 w-full"
          style={{ backgroundColor: service.imageBg || "transparent" }}
        >
          <img
            alt={service.title}
            className="absolute inset-0 max-w-none object-cover object-center pointer-events-none size-full"
            src={service.image}
          />
        </div>

        {/* Content */}
        <CardContent className="flex flex-col px-[35px] py-[30px] flex-grow">
          {/* Text Content */}
          <div className="flex flex-col gap-[15px] items-start w-full mb-[28px]">
            <p
              className="font-['Poppins',sans-serif] text-[#1e1e1e] text-[22px] w-full"
              style={{
                fontWeight: 700,
                lineHeight: "30px",
              }}
            >
              {service.title}
            </p>
            <p
              className="font-['Poppins',sans-serif] text-[16px] text-gray-500 w-full"
              style={{
                fontWeight: 400,
                lineHeight: "24px",
              }}
            >
              {service.description}
            </p>
          </div>

          {/* Button */}
          <div className="mt-auto w-full">
            {service.buttonVariant === "primary" ? (
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 6px 12px rgba(143, 194, 149, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  duration: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-[#8fc295] flex items-center justify-center px-[28px] py-[14px] rounded-[6px] cursor-pointer w-full"
                onClick={service.buttonText === "VIP Refi Watchlist" ? onNavigateToRefiWatch : undefined}
              >
                <span
                  className="font-['Poppins',sans-serif] text-white text-[16px]"
                  style={{
                    fontWeight: 500,
                    lineHeight: "1",
                  }}
                >
                  {service.buttonText}
                </span>
              </motion.button>
            ) : (
              <motion.button
                whileHover={{
                  scale: 1.02,
                  borderColor: "#8fc295",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  duration: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white flex items-center justify-center px-[28px] py-[14px] rounded-[6px] border border-[#dfe4ea] cursor-pointer w-full"
                onClick={service.buttonText === "Programs" ? onNavigateToLoanPrograms : undefined}
              >
                <span
                  className="font-['Poppins',sans-serif] text-gray-500 text-[16px]"
                  style={{
                    fontWeight: 500,
                    lineHeight: "1",
                  }}
                >
                  {service.buttonText}
                </span>
              </motion.button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ServicesDetailSection({ onNavigateToLoanPrograms, onNavigateToRefiWatch }: { onNavigateToLoanPrograms?: () => void, onNavigateToRefiWatch?: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-white py-16 md:py-20 lg:py-24 w-full overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 mb-12 md:mb-16"
        >
          <p
            className="font-['Poppins',sans-serif] text-[#111928] text-[40px] text-center"
            style={{
              fontWeight: 700,
              lineHeight: "48px",
            }}
          >
            Services
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] w-full"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} onNavigateToLoanPrograms={onNavigateToLoanPrograms} onNavigateToRefiWatch={onNavigateToRefiWatch} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}