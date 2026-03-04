import React, { useState, useEffect } from "react";
import { Menu, X, BriefcaseBusiness } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation, useNavigate } from "react-router-dom";

type RoutePath =
  | "/"
  | "/advance"
  | "/timesheets"
  | "/vacation"
  | "/contact"
  | "/setup";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const mobileMenuId = "primary-navigation-mobile";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Start", path: "/" as RoutePath },
    { name: "Vorschuss", path: "/advance" as RoutePath },
    { name: "Stundenzettel", path: "/timesheets" as RoutePath },
    { name: "Urlaub", path: "/vacation" as RoutePath },
    { name: "Kontakt", path: "/contact" as RoutePath },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button
            type="button"
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="bg-primary p-1.5 rounded-lg mr-2">
              <BriefcaseBusiness className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              MitarbeiterApp Pro
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`text-sm font-semibold transition-colors hover:text-primary ${location.pathname === link.path ? "text-primary" : "text-slate-600"}`}
              >
                {link.name}
              </button>
            ))}
            <button
              type="button"
              onClick={() => navigate("/setup")}
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-lg shadow-primary/20 active:scale-95"
            >
              Anfrage senden
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 p-2"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls={mobileMenuId}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            id={mobileMenuId}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.path}
                  onClick={() => {
                    navigate(link.path);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/setup");
                    setIsOpen(false);
                  }}
                  className="w-full bg-primary text-white px-6 py-4 rounded-xl text-base font-bold text-center"
                >
                  Anfrage senden
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
