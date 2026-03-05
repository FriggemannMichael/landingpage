import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background-light">
      <a
        href="#start"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:font-bold"
      >
        Zum Hauptinhalt springen
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Suspense fallback={<div className="sr-only">Lade Seite...</div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
