import React, { useEffect, useState } from "react";
import { Menu, X, BriefcaseBusiness } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";

const links = [
  { name: "Start", href: "/#start" },
  { name: "Funktionen", href: "/#funktionen" },
  { name: "Preise", href: "/#preise" },
  { name: "Kontakt", href: "/#kontakt" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const showSolidStyle = !isHome || scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolidStyle ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="/#start" className="flex items-center">
            <div className="bg-primary p-1.5 rounded-lg mr-2">
              <BriefcaseBusiness className="w-6 h-6 text-white" />
            </div>
            <span
              className={`text-2xl font-extrabold tracking-tight ${
                showSolidStyle ? "text-slate-900" : "text-white"
              }`}
            >
              MitarbeiterApp Pro
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  showSolidStyle ? "text-slate-600 hover:text-primary" : "text-slate-100 hover:text-cyan-300"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#kontakt"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-colors"
            >
              Demo sichern
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden text-slate-900 p-2"
            aria-label={isOpen ? "Navigationsmenü schließen" : "Navigationsmenü öffnen"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/#kontakt"
                onClick={() => setIsOpen(false)}
                className="block mt-3 bg-primary text-white px-6 py-3 rounded-xl text-base font-bold text-center"
              >
                Demo sichern
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
