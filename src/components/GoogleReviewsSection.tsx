"use client";

import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useInView } from "motion/react";

export function GoogleReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    // Load the Elfsight platform script
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-[#f9fafb]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            className="font-['Poppins',sans-serif]"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            What Our Clients Say
          </h2>
          <div className="flex justify-center">
            <p className="text-[var(--text-muted)] text-sm mt-3 max-w-[600px]">
              Don't just take our word for it. See what our satisfied clients have to say about their experience working with us.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.25,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.1,
          }}
          className="max-w-5xl mx-auto"
        >
          {/* Elfsight Google Reviews Widget */}
          <div
            className="elfsight-app-e143ce10-6be8-419a-a88c-eb3007f18782"
            data-elfsight-app-lazy
          />
        </motion.div>
      </div>
    </section>
  );
}
