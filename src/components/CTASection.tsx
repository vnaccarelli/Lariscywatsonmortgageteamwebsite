import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { IMAGES } from "../constants/images";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#507A56] to-[#8fc295] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h2 className="text-white" style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>
              Ready to Start Your Home Loan Journey?
            </h2>
            <p className="text-white/90 mt-4 mb-8 leading-relaxed">
              Get pre-approved today and take the first step toward your dream home. Our team is ready to help you navigate the process with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://1425476.my1003app.com/2115404/register?time=1700599919933"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  duration: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-flex items-center justify-center gap-[10px] px-[28px] py-[13px] bg-white text-[#507A56] rounded-[6px] shadow-lg hover:shadow-xl transition-shadow"
                style={{
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  duration: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-flex items-center justify-center gap-[10px] px-[28px] py-[13px] bg-white text-[#8fc295] rounded-[6px] border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow"
                style={{
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.25,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={IMAGES.cta.keys}
                alt={IMAGES.cta.alt}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}