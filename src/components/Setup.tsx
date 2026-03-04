import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Check,
  Building2,
  Users,
  CreditCard,
  Rocket,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const Setup: React.FC = () => {
  const [step, setStep] = useState(2);

  const steps = [
    { id: 1, name: "Kontakt", icon: <Users className="w-5 h-5" /> },
    { id: 2, name: "Firma", icon: <Building2 className="w-5 h-5" /> },
    { id: 3, name: "Bedarf", icon: <CreditCard className="w-5 h-5" /> },
    { id: 4, name: "Start", icon: <Rocket className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50 flex items-center justify-center">
      <div className="max-w-2xl w-full px-4">
        <div className="mb-12">
          <div className="flex justify-between items-center relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2" />
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-primary -z-10 -translate-y-1/2 transition-all duration-500"
              style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
            />
            {steps.map((s) => (
              <div key={s.id} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    step >= s.id
                      ? "bg-primary text-white"
                      : "bg-white text-slate-400 border border-slate-200"
                  }`}
                >
                  {step > s.id ? <Check className="w-5 h-5" /> : s.icon}
                </div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider mt-2 ${
                    step >= s.id ? "text-primary" : "text-slate-400"
                  }`}
                >
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Produktanfrage
            </h2>
            <p className="text-slate-500">
              Das Grunddesign bleibt gleich. Hier zeigen wir die angepasste
              Anfrage-Strecke für dein Produkt.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Firmenname
                </label>
                <input
                  type="text"
                  placeholder="Musterfirma GmbH"
                  className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Einsatzbereich
                </label>
                <select className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-medium">
                  <option>Zeitarbeit</option>
                  <option>Produktion</option>
                  <option>Logistik</option>
                  <option>Dienstleistung</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Mitarbeiterzahl
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["1-10", "11-50", "51-200", "201+"].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`py-3 rounded-xl text-sm font-bold border transition-all ${
                      size === "11-50"
                        ? "bg-primary/5 border-primary text-primary"
                        : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Gewünschte Anpassung
              </label>
              <input
                type="text"
                placeholder="Branding, Sprachen, Prozesse"
                className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-medium"
              />
            </div>

            <div className="pt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(Math.max(1, step - 1))}
                className="flex items-center text-slate-500 font-bold hover:text-slate-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Zurück
              </button>
              <button
                type="button"
                onClick={() => setStep(Math.min(4, step + 1))}
                className="flex items-center bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-primary/20 active:scale-95"
              >
                Weiter <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </form>
        </motion.div>

        <p className="text-center mt-8 text-slate-400 text-sm">
          Du möchtest lieber direkt sprechen?{" "}
          <a href="#" className="text-primary font-bold hover:underline">
            Kontakt aufnehmen
          </a>
        </p>
      </div>
    </div>
  );
};

export default Setup;
