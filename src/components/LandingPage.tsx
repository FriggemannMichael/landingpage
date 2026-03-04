import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Clock, Calendar, CreditCard, ArrowRight } from "lucide-react";
import AppMockupStrip from "./AppMockupStrip";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const features = [
    {
      title: "Digitale Stundenzettel",
      desc: "Wochenzettel mit Schichtmodell, mehreren Kunden pro Woche, Signaturen und PDF-Export direkt auf dem Gerät.",
      Icon: Clock,
      path: "/timesheets",
    },
    {
      title: "Urlaubsanträge",
      desc: "Urlaub, Sonderurlaub und Freizeitausgleich digital erfassen, dokumentieren und als PDF weitergeben.",
      Icon: Calendar,
      path: "/vacation",
    },
    {
      title: "Vorschussanträge",
      desc: "Vorschüsse mobil beantragen, Hinweise bestätigen, unterschreiben und per E-Mail oder WhatsApp versenden.",
      Icon: CreditCard,
      path: "/advance",
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              Offline. Mehrsprachig. Sofort im Alltag nutzbar.
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
              Die Mitarbeiter-App für{" "}
              <span className="text-primary">Stundenzettel und Anträge</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              MitarbeiterApp Pro digitalisiert die Prozesse, die in der Praxis
              täglich anfallen: Zeiterfassung, Urlaub, Vorschuss, Signaturen,
              PDF-Erstellung und Versand. Entwickelt für mobile Teams,
              Personaldienstleister und Einsätze ohne dauerhafte Verbindung.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate("/setup")}
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-600 transition-all shadow-xl shadow-primary/25 active:scale-95"
              >
                Produkt anfragen
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all active:scale-95"
              >
                Kontakt aufnehmen
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <div className="w-full min-h-[320px] md:min-h-[520px] bg-gradient-to-br from-slate-900 via-slate-800 to-primary p-6 md:p-10 text-left">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                  <div className="md:col-span-2 bg-white rounded-3xl p-6 md:p-8">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                          Produktüberblick
                        </p>
                        <h3 className="text-2xl font-extrabold text-slate-900">
                          MitarbeiterApp Pro
                        </h3>
                      </div>
                      <div className="rounded-2xl bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                        Offline-First
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                          Diese Woche
                        </p>
                        <p className="mt-2 text-3xl font-extrabold text-slate-900">
                          38.5h
                        </p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                          Offene Zettel
                        </p>
                        <p className="mt-2 text-3xl font-extrabold text-slate-900">
                          2
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Stundenzettel mit Schichtmodell und digitaler Unterschrift",
                        "Urlaubsanträge als PDF mit dokumentiertem Ablauf",
                        "Vorschussanträge per E-Mail oder WhatsApp weiterleiten",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-slate-100 px-4 py-3 text-sm font-medium text-slate-700"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-3xl bg-white/10 backdrop-blur-sm p-5 text-white border border-white/10">
                      <p className="text-xs font-bold uppercase tracking-wide text-blue-100">
                        Mehrsprachig
                      </p>
                      <p className="mt-2 text-lg font-bold">
                        Für internationale Teams im Einsatz
                      </p>
                    </div>
                    <div className="rounded-3xl bg-white p-5">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                        Versand
                      </p>
                      <p className="mt-2 text-lg font-bold text-slate-900">
                        PDFs direkt teilen oder an den Betrieb senden
                      </p>
                    </div>
                    <div className="rounded-3xl bg-white p-5">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                        Admin
                      </p>
                      <p className="mt-2 text-lg font-bold text-slate-900">
                        Branding, Regeln und Konfiguration zentral pflegen
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Die Kernfunktionen eures Produkts
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Kein generisches HR-System, sondern ein fokussiertes Werkzeug für
              den operativen Mitarbeiteralltag.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <motion.button
                type="button"
                key={feature.path}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all hover:shadow-xl hover:bg-white group cursor-pointer text-left"
                onClick={() => navigate(feature.path)}
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <feature.Icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {feature.desc}
                </p>
                <div className="flex items-center text-primary font-bold text-sm">
                  Mehr erfahren <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">
                Offline
              </div>
              <div className="text-blue-100 text-sm font-medium uppercase tracking-wider">
                nutzbar im Einsatz
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">
                10+
              </div>
              <div className="text-blue-100 text-sm font-medium uppercase tracking-wider">
                Sprachen verfügbar
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">
                PDF
              </div>
              <div className="text-blue-100 text-sm font-medium uppercase tracking-wider">
                Export und Versand
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">
                Admin
              </div>
              <div className="text-blue-100 text-sm font-medium uppercase tracking-wider">
                Branding und Regeln
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                App-Mockups direkt aus euren Features
              </h2>
              <p className="text-slate-600 max-w-2xl">
                Statt unpassender Stock-Bilder zeigen wir hier konkrete
                Beispiel-Screens zu Stundenzettel, Urlaub und Vorschuss.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-100 px-5 py-4">
              <div className="text-xs font-bold uppercase tracking-wide text-slate-400">
                Fokus
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">
                Zeiterfassung, Antraege, Signaturen
              </div>
            </div>
          </div>
          <AppMockupStrip />
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(13,127,242,0.15),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Das Problem ist Papier. Die Lösung ist digital.
              </h2>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                MitarbeiterApp Pro bündelt Stundenzettel, Urlaub und Vorschuss
                in einer App, die sich an deine Firma und deine Abläufe anpassen
                lässt.
              </p>
              <button
                onClick={() => navigate("/setup")}
                className="bg-primary text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-600 transition-all shadow-xl shadow-primary/30 active:scale-95"
              >
                Jetzt anfragen
              </button>
              <p className="mt-6 text-slate-500 text-sm">
                Anpassbar auf Branding, Sprachen und Prozessregeln
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

