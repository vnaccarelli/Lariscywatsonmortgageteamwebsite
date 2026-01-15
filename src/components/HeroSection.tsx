import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Phone } from "lucide-react";
import { IMAGES } from "../constants/images";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#e8f4ea] to-white">
      <div className="container py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="space-y-6"
          >
            <h1 style={{ fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Heightening The Mortgage Experience
            </h1>
            <p className="text-[var(--text-muted)] max-w-xl" style={{ lineHeight: 1.6 }}>
              We're a local mortgage branch committed to helping families find the right home financing solution. Fast approvals, personal service, competitive rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
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
                className="inline-flex items-center justify-center gap-[10px] px-[28px] py-[13px] bg-[#8fc295] text-white rounded-[6px] shadow-lg hover:shadow-xl transition-shadow"
                style={{
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Get Pre-Approved <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="tel:+19126633274"
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
                <Phone className="w-4 h-4" /> Call Us Today
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.25,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={IMAGES.hero.main}
                alt={IMAGES.hero.alt}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}