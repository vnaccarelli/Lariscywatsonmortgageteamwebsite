import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, ThumbsUp, Facebook, Instagram, Linkedin } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

// TikTok icon as SVG since it's not in Lucide
function TikTokIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Reset form and close modal
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsFormOpen(false);
    // You could add a toast notification here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <section id="contact-section" ref={ref} className="relative py-20 overflow-hidden bg-[#2a3342]">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-40">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="contact-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#8FC295" strokeWidth="1"/>
              </pattern>
              <radialGradient id="contact-radial" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(43,43,58,0)" />
                <stop offset="100%" stopColor="rgba(43,43,58,1)" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
            <rect width="100%" height="100%" fill="url(#contact-radial)" />
          </svg>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Heading */}
            <h2 className="text-white mb-4 max-w-3xl" style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>
              Let's stay connected
            </h2>
            <p className="text-[#8896ab] mb-12 max-w-3xl">
              It's never been easier to get in touch with us. Give us a call or email and we'll get back to you as soon as possible!
            </p>

            {/* Send Message Button */}
            <div className="mb-12">
              <Button
                onClick={() => setIsFormOpen(true)}
                className="bg-[#8fc295] hover:bg-[#507A56] text-white px-7 py-6 rounded-md transition-all duration-150"
                style={{ fontWeight: 500 }}
              >
                Send Message
              </Button>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.2,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-8"
            >
              {/* Email */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#507A56] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white mb-2" style={{ fontWeight: 700 }}>Email</h3>
                  <a href="mailto:dlariscy@lhloans.com" className="text-white text-xl hover:text-[#8fc295] transition-colors" style={{ color: 'white' }}>dlariscy@lhloans.com</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#507A56] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white mb-2" style={{ fontWeight: 700 }}>Phone</h3>
                  <a href="tel:9123419743" className="text-white text-xl hover:text-[#8fc295] transition-colors" style={{ color: 'white' }}>
                    (912) 341-9743
                  </a>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-[#507A56] flex items-center justify-center flex-shrink-0">
                  <ThumbsUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white mb-4" style={{ fontWeight: 700 }}>Socials</h3>
                  <div className="flex items-center gap-4">
                    <a href="https://www.facebook.com/GoingCoastalWithDaniel" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8fc295] transition-colors">
                      <Facebook className="w-6 h-6" style={{ color: 'white' }} />
                    </a>
                    <a href="https://www.instagram.com/lariscy_watson_mortageteam/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8fc295] transition-colors">
                      <Instagram className="w-6 h-6" style={{ color: 'white' }} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8fc295] transition-colors">
                      <Linkedin className="w-6 h-6" style={{ color: 'white' }} />
                    </a>
                    <a href="https://www.tiktok.com/@lariscywatsonmortgage?lang=en" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8fc295] transition-colors">
                      <TikTokIcon className="w-6 h-6" style={{ color: 'white' }} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.2,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.8969784442445!2d-81.04087892379795!3d32.02524227393144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fb9e5b3c8c8c8b%3A0x8c8c8c8c8c8c8c8c!2s22%20Montgomery%20Cross%20Rd%2C%20Savannah%2C%20GA%2031406!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle style={{ fontWeight: 700 }}>Send us a message</DialogTitle>
            <DialogDescription>
              We'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(123) 456-7890"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us how we can help you..."
                required
                rows={5}
                className="mt-1"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsFormOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-br from-[#507A56] to-[#8fc295] hover:opacity-90"
              >
                Send Message
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}