Create a modern, mobile-first landing page for a mortgage company branch.

Use:
- Left-aligned hero with headline, subhead, and two primary CTAs
- Card-based sections for "Why Choose Us", "Services", and "Areas We Serve"
- Poppins font, with bold, tight headings and clean body text
- Brand colors: light green #8fc295, green #507A56, light gray backgrounds, and a subtle gradient for primary CTAs

For motion and interaction, use Framer-style animation:
- Soft fade + slight slide-in for sections on scroll (8–16px, 150–250ms)
- Micro-interactions on cards and buttons: small scale up (1.02), slightly stronger shadow on hover
- Smooth easing like Framer (cubic-bezier(0.16, 1, 0.3, 1))
- No big bounces, spins, or looping gimmicks – everything should feel polished and product-grade.

---

## ⚠️ IMPORTANT REMINDER - MIGRATE TO SUPABASE
Currently using **localStorage** for Blog Post Builder (temporary demo only).
**MUST migrate to Supabase** for production because:
- localStorage is browser-only (doesn't sync across devices)
- No real image upload capability
- Data can be lost if browser cache is cleared
- Not suitable for actual marketer use

**TODO:** Connect to Supabase for:
- Blog posts storage (drafts + published)
- Image uploads
- Profile settings
- Cross-device access

---

## Text Layout Rule
Always wrap paragraph text in `<div className="flex justify-center">` containers when creating new pages to avoid text centering issues.