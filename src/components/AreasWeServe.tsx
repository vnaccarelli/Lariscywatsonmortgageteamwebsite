import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const areas = [
  { city: "Savannah", state: "Georgia", slug: "savannah-ga" },
  { city: "Pooler", state: "Georgia", slug: "pooler-ga" },
  { city: "Richmond Hill", state: "Georgia", slug: "richmond-hill-ga" },
  { city: "Guyton", state: "Georgia", slug: "guyton-ga" },
  { city: "Rincon", state: "Georgia", slug: "rincon-ga" },
  { city: "Springfield", state: "Georgia", slug: "springfield-ga" },
  { city: "Hinesville", state: "Georgia", slug: "hinesville-ga" },
  { city: "Tybee Island", state: "Georgia", slug: "tybee-island-ga" },
  { city: "Midway", state: "Georgia", slug: "midway-ga" },
  { city: "Pembroke", state: "Georgia", slug: "pembroke-ga" },
  { city: "Port Wentworth", state: "Georgia", slug: "port-wentworth-ga" },
  { city: "Bluffton", state: "South Carolina", slug: "bluffton-sc" },
  { city: "Hilton Head Island", state: "South Carolina", slug: "hilton-head-island-sc" },
];

export function AreasWeServe({ onNavigateToArea }: { onNavigateToArea?: (slug: string) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleCardClick = (slug: string) => {
    if (onNavigateToArea) {
      onNavigateToArea(slug);
    }
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center mb-12"
        >
          <h2 style={{ fontWeight: 700, letterSpacing: "-0.02em", textAlign: "center" }}>
            Areas We Serve
          </h2>
          <div className="flex justify-center">
            <p className="text-[var(--text-muted)] text-sm mt-3 max-w-[600px]">
              Licensed in GA, FL, OH, SC, and TX. Our primary focus is Savannah, Georgia and surrounding communities.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.18,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
                transition: {
                  duration: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              onClick={() => handleCardClick(area.slug)}
              className="p-5 bg-white border border-[var(--border)] rounded-xl cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-[#507A56]" />
                <h3 style={{ fontWeight: 600, fontSize: "1rem" }}>
                  {area.city}
                </h3>
              </div>
              <p className="text-[var(--text-muted)] text-xs">
                {area.state}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.2,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center mt-10"
        >
          <p className="text-[var(--text-muted)] text-sm">
            Serving additional areas in Florida, Georgia, Ohio, South Carolina, and Texas. <button onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })} className="text-[#507A56] hover:underline cursor-pointer bg-transparent border-none p-0" style={{ fontWeight: 600 }}>Contact us</button> to discuss your location.
          </p>
        </motion.div>
      </div>
    </section>
  );
}