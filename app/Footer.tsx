const quickLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "/timeline", label: "EXPERIENCE" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
];

const Footer = () => {
  return (
    <footer className="relative font-mono">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>
      <div className="bg-black text-white border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 pb-8 sm:pb-10 md:pb-12">
            {/* About */}
            <div>
              <h3 className="font-bold text-lg pb-4 tracking-wide">
                BOSCO.DEV
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Building things. Breaking things. Fixing things. Repeat.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-xs tracking-widest pb-4 text-gray-300">
                QUICK LINKS
              </h3>
              <div className="space-y-2 font-mono text-sm">
                {quickLinks.map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-gray-400 hover:text-white transition block focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                    aria-label={`Navigate to ${label}`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

          </div>

          <div className="border-t border-gray-700 pt-6 sm:pt-8">
            <p className="text-xs text-gray-500 text-center sm:text-left">
              © 2025 BOSCO.DEV - ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
