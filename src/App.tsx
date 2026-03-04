import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import AdvancePayments from "./components/AdvancePayments";
import Timesheets from "./components/Timesheets";
import Vacation from "./components/Vacation";
import Setup from "./components/Setup";
import Contact from "./components/Contact";
import { motion, AnimatePresence } from "motion/react";

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background-light">
      <Navbar />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/advance" element={<AdvancePayments />} />
              <Route path="/timesheets" element={<Timesheets />} />
              <Route path="/vacation" element={<Vacation />} />
              <Route path="/setup" element={<Setup />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default App;
