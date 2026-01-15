import { MapPin, Phone, Mail } from "lucide-react";
import logoFooter from "figma:asset/8243e819593b83b808bfa7018675134253233b38.png";
import equalHousingLogo from "figma:asset/8684e7cfcacb2408669e46856c40c11111262153.png";

export function Footer() {
  return (
    <footer className="bg-[#282B3A] text-white py-12">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img 
              src={logoFooter} 
              alt="Lariscy Watson Mortgage Team" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Your trusted local mortgage partner, dedicated to helping you achieve homeownership.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: "1rem" }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.dispatchEvent(new CustomEvent('navigate', { detail: 'loan-programs' })); }} className="text-white/70 hover:text-white transition-colors cursor-pointer">Loan Programs</a></li>
              <li><a href="https://1425476.my1003app.com/2115404/register?time=1700599919933" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Apply Now</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: "1rem" }}>
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.dispatchEvent(new CustomEvent('navigate', { detail: 'refi-watch' })); }} className="text-white/70 hover:text-white transition-colors cursor-pointer">Refinancing Guide</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.dispatchEvent(new CustomEvent('navigate', { detail: 'all-blog-posts' })); }} className="text-white/70 hover:text-white transition-colors cursor-pointer">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: "1rem" }}>
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#8fc295]" />
                <span className="text-white/70">22 Montgomery Cross Road<br />Savannah, GA 31406</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#8fc295]" />
                <a href="tel:+19123419743" className="text-white/70 hover:text-white transition-colors">(912) 341-9743</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#8fc295]" />
                <a href="mailto:dlariscy@lhloans.com" className="text-white/70 hover:text-[#8fc295] transition-colors">
                  dlariscy@lhloans.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs text-white/60">
            {/* Left Column - Copyright & Logo */}
            <div className="flex items-center gap-3">
              <img src={equalHousingLogo} alt="Equal Housing Lender" className="h-6 w-auto flex-shrink-0" />
              <p className="text-[10px] leading-relaxed">Copyright ©2025 | Lending Heights, LLC. NMLS # 1425476 | Licensed to Do Business in the States of CA, CO, FL, GA, IL, MD, MI, NJ, NC, OH, PA, SC, TX, and WI</p>
            </div>
            
            {/* Right Column - Links */}
            <div className="flex flex-wrap gap-4 lg:gap-6 lg:justify-end items-center">
              <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.dispatchEvent(new CustomEvent('navigate', { detail: 'privacy-policy' })); }} className="hover:text-white transition-colors whitespace-nowrap cursor-pointer">Privacy Policy</a>
              <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.dispatchEvent(new CustomEvent('navigate', { detail: 'terms-conditions' })); }} className="hover:text-white transition-colors whitespace-nowrap cursor-pointer">Terms & Conditions</a>
              <a href="https://www.nmlsconsumeraccess.org/Home.aspx/SubSearch?searchText=Lending+Heights%2c+LLC" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors whitespace-nowrap">NMLS Consumer Access Portal</a>
              <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; window.dispatchEvent(new CustomEvent('navigate', { detail: 'texas-compliance' })); }} className="hover:text-white transition-colors whitespace-nowrap cursor-pointer">Texas Compliant/Recovery Fund Notice</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}