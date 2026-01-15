import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, TrendingDown, Zap, Database, ExternalLink } from "lucide-react";

export default function RefiWatch() {
  const formRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);

  // Load CRM form embed script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://connect.theloportal.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top + window.pageYOffset - 96;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="flex flex-col gap-12">
            {/* Hero Content */}
            <motion.div {...fadeInUp} className="max-w-[900px] mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ecd8b0] mb-4">
                <span className="text-[13px] font-semibold text-[#1E1E1E]">
                  NMLS #1425476 · Equal Housing Lender
                </span>
              </div>

              <h1 className="text-[40px] md:text-[52px] leading-[1.1] mb-3.5 font-extrabold text-[#1E1E1E]">
                Refi Watch: Know exactly{" "}
                <span className="text-[#8fc295]">when to refinance</span>—and save sooner.
              </h1>

              <div className="flex justify-center">
                <p className="text-lg leading-[1.7] text-[#111111] opacity-90 max-w-[720px]">
                  We monitor market moves for you. When it's time to strike, our hybrid platform—combining broker optionality and banker control—delivers fast, transparent options tailored to your loan.
                </p>
              </div>

              {/* KPI Pills */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-[600px] mx-auto">
                <motion.div
                  className="flex items-center justify-center gap-2 px-3 py-2.5 border border-[#E5E7EB] rounded-full bg-white/70"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <TrendingDown className="w-[18px] h-[18px] text-[#507A56]" />
                  <span className="text-sm font-medium">Wholesale Rates</span>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center gap-2 px-3 py-2.5 border border-[#E5E7EB] rounded-full bg-white/70"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Zap className="w-[18px] h-[18px] text-[#507A56]" />
                  <span className="text-sm font-medium">Fast Closings</span>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center gap-2 px-3 py-2.5 border border-[#E5E7EB] rounded-full bg-white/70"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Database className="w-[18px] h-[18px] text-[#507A56]" />
                  <span className="text-sm font-medium">Save Money</span>
                </motion.div>
              </div>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <motion.button
                  onClick={() => {
                    scrollToSection(formRef);
                    setTimeout(() => {
                      const input = document.getElementById("full_name") as HTMLInputElement;
                      if (input) {
                        input.focus();
                        input.select();
                      }
                    }, 350);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] bg-[#8fc295] text-[#0e2b15] font-semibold"
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(143, 194, 149, 0.3)" }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  Start Refi Watch
                  <ArrowRight className="w-[18px] h-[18px]" />
                </motion.button>

                <motion.button
                  onClick={() => scrollToSection(howItWorksRef)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] bg-white border border-[#E5E7EB] text-[#1E1E1E] font-semibold"
                  whileHover={{ scale: 1.02, boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)" }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  How it works
                </motion.button>
              </div>

              <div className="flex justify-center mt-3">
                <p className="text-sm text-[#6B7280]">
                  Bank-level security • We only ask for what we need.
                </p>
              </div>
            </motion.div>

            {/* Form Card - Below Hero */}
            <motion.div
              ref={formRef}
              {...fadeInUp}
              transition={{ duration: 0.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-[#E5E7EB] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-6 overflow-hidden max-w-[700px] mx-auto w-full"
            >
              <h3 className="text-xl font-bold mb-1.5">Join Refi Watch</h3>
              <div className="flex justify-start">
                <p className="text-sm text-[#6B7280] mb-2">
                  Upload your latest mortgage statement—we'll track rates and alert an advisor when it's time.
                </p>
              </div>

              <div className="h-px bg-[#E5E7EB] my-4"></div>

              {/* CRM Iframe Form */}
              <div className="w-full -mx-6 -mb-6" style={{ minHeight: "1070px" }}>
                <iframe
                  src="https://connect.theloportal.com/widget/form/zHrac16SgUxM0ctx6LtB"
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "1070px",
                    border: "none",
                    borderRadius: "0 0 16px 16px",
                    display: "block"
                  }}
                  id="inline-zHrac16SgUxM0ctx6LtB-top"
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Refi Watch List Form - Copy"
                  data-height="1070"
                  data-layout-iframe-id="inline-zHrac16SgUxM0ctx6LtB-top"
                  data-form-id="zHrac16SgUxM0ctx6LtB"
                  title="Refi Watch List Form - Copy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={howItWorksRef} className="py-16 bg-gray-50">
        <div className="max-w-[1160px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "Step 1",
                title: "Upload & Enroll",
                description: "Securely share your mortgage statement and basic info so we can baseline your current loan.",
              },
              {
                step: "Step 2",
                title: "Smart Monitoring",
                description: "We watch key market signals and product pricing across 30+ investors and 1,500+ programs.",
              },
              {
                step: "Step 3",
                title: "Strike at the Right Time",
                description: "Your advisor reaches out with clear options; our operations move fast to lock and close.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ duration: 0.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02, boxShadow: "0 12px 32px rgba(0, 0, 0, 0.08)" }}
                className="bg-white border border-[#E5E7EB] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-6"
              >
                <h4 className="text-lg font-bold mb-1.5">
                  {item.step} · {item.title}
                </h4>
                <div className="h-px bg-[#E5E7EB] my-4"></div>
                <div className="flex justify-start">
                  <p className="text-sm text-[#6B7280] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}