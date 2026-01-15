"use client";

import { motion } from "motion/react";
import { useEffect } from "react";
import imgHappyPeoplePictures from "figma:asset/ee897b3deef9743e57b74bdf36953d82523740e4.png";

export function BannerSection() {
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

  const contentVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1,
      },
    },
  };

  useEffect(() => {
    // Load the form embed script
    const script = document.createElement("script");
    script.src = "https://connect.theloportal.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className="relative w-full overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          alt="Happy people"
          className="w-full h-full object-cover"
          src={imgHappyPeoplePictures}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#282b3a] opacity-85" />

      {/* Content Container */}
      <motion.div
        variants={contentVariants}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32"
      >
        <div className="max-w-[624px] mx-auto flex flex-col gap-[30px] items-center text-center">
          {/* Heading and Description */}
          <div className="flex flex-col gap-[15px] items-center">
            {/* Main Heading */}
            <div className="flex flex-col gap-[12px] items-center">
              <h2
                className="font-['Poppins',sans-serif] font-bold text-white text-[32px] md:text-[40px] lg:text-[48px]"
                style={{
                  lineHeight: "58px",
                  textShadow: "rgba(0,0,0,0.2) 0px 0px 1px",
                }}
              >
                Am I Ready To Buy?
              </h2>
            </div>

            {/* Description */}
            <p
              className="font-['Poppins',sans-serif] text-white text-[16px] max-w-full"
              style={{
                lineHeight: "24px",
                textShadow: "rgba(0,0,0,0.2) 0px 0px 1px",
              }}
            >
              A few simple questions can tell you what is the best way for YOU to proceed
              forward. Take our 3 minute quiz to determine if now may be the time.
            </p>

            {/* Features List */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-[10px] items-center justify-center w-full font-['Poppins',sans-serif] font-bold text-white text-[16px]">
              <p
                className="flex-1 text-center"
                style={{
                  lineHeight: "24px",
                  textShadow: "rgba(0,0,0,0.2) 0px 0px 1px",
                }}
              >
                No Credit Pull
              </p>
              <p
                className="flex-1 text-center"
                style={{
                  lineHeight: "24px",
                  textShadow: "rgba(0,0,0,0.2) 0px 0px 1px",
                }}
              >
                Takes 3 Minutes
              </p>
              <p
                className="flex-1 text-center"
                style={{
                  lineHeight: "24px",
                  textShadow: "rgba(0,0,0,0.2) 0px 0px 1px",
                }}
              >
                Instant Results
              </p>
            </div>
          </div>

          {/* Survey iFrame */}
          <div className="w-full max-w-[624px] min-h-[400px]">
            <iframe
              src="https://connect.theloportal.com/widget/survey/9Qg7KcIkenG04EW1z4gz"
              style={{ border: "none", width: "100%", minHeight: "600px" }}
              scrolling="no"
              id="9Qg7KcIkenG04EW1z4gz"
              title="survey"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}