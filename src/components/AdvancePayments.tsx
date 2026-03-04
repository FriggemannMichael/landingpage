import React from "react";
import { motion } from "motion/react";
import {
  CreditCard,
  Zap,
  Shield,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

const AdvancePayments: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-6">
              Vorschuss ohne Papierweg
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
              Vorschussanträge direkt in der Mitarbeiter-App
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Mitarbeiter stellen den Antrag mobil, bestätigen die Hinweise,
              unterschreiben digital und senden das PDF direkt an den Betrieb.
              Optional läuft die Weitergabe zusätzlich per WhatsApp.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Digitaler Antrag mit Unterschrift",
                "PDF-Erstellung direkt in der App",
                "Versand per E-Mail oder WhatsApp",
                "Lokale Historie der letzten Anträge",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center text-slate-700 font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
                  {item}
                </div>
              ))}
            </div>
            <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-600 transition-all shadow-lg shadow-primary/20">
              Vorschuss-Workflow ansehen
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-slate-900 rounded-[2.5rem] p-4 shadow-2xl">
              <div className="rounded-[2rem] w-full h-auto bg-gradient-to-br from-slate-100 to-white p-8">
                <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-600">
                    Vorschussantrag
                  </p>
                  <p className="mt-3 text-4xl font-extrabold text-slate-900">
                    150 €
                  </p>
                  <div className="mt-6 space-y-3">
                    <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                      Hinweise bestätigt
                    </div>
                    <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                      Mitarbeiter unterschrieben
                    </div>
                    <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                      Versand per E-Mail oder WhatsApp
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-[240px]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <Zap className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="text-sm font-bold">Antrag erstellt</div>
              </div>
              <div className="text-2xl font-extrabold text-slate-900 mb-1">
                150 €
              </div>
              <div className="text-xs text-slate-500">
                Direkt als PDF vorbereitet
              </div>
            </div>
          </motion.div>
        </div>

        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              So funktioniert es
            </h2>
            <p className="text-slate-600">
              Klarer Ablauf für Mitarbeiter und Verwaltung.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Antrag ausfüllen",
                desc: "Betrag, Hinweise und Zusatznotizen werden direkt mobil erfasst.",
                icon: <Zap className="w-6 h-6" />,
              },
              {
                title: "Digital bestätigen",
                desc: "Der Mitarbeiter bestätigt die Bedingungen und unterschreibt direkt in der App.",
                icon: <Smartphone className="w-6 h-6" />,
              },
              {
                title: "Weiterleiten",
                desc: "Das fertige PDF wird per E-Mail versendet oder über WhatsApp geteilt.",
                icon: <CreditCard className="w-6 h-6" />,
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Sicher und nachvollziehbar
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Der Vorschussprozess ist Teil des Gesamtprodukts: lokale
              Datenspeicherung, digitale Signatur, strukturierter PDF-Export
              und kontrollierter Versand.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-primary mr-3" />
                <span className="font-bold text-sm">PDF-Dokumentation</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-primary mr-3" />
                <span className="font-bold text-sm">Digitale Signatur</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-primary mr-3" />
                <span className="font-bold text-sm">DSGVO-orientiert</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-primary mr-3" />
                <span className="font-bold text-sm">Nachvollziehbarer Ablauf</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-3xl shadow-lg bg-white border border-slate-100 p-8">
              <div className="space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                  Antrag wird lokal vorbereitet
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                  PDF wird automatisch erzeugt
                </div>
                <div className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                  Versand an Betrieb und optional an Kontaktziel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancePayments;
