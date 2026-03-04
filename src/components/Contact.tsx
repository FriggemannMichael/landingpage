import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

const Contact: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const faqs = [
    {
      q: "Für wen ist MitarbeiterApp Pro gedacht?",
      a: "Für Unternehmen mit mobilen Mitarbeitern, wechselnden Einsätzen und dokumentenbasierten Prozessen wie Stundenzettel, Urlaub und Vorschuss.",
    },
    {
      q: "Funktioniert die App ohne dauerhafte Internetverbindung?",
      a: "Ja. Der Kern des Produkts ist offline-first ausgelegt, damit Mitarbeiter auch unterwegs oder direkt im Einsatz arbeiten können.",
    },
    {
      q: "Kann die App auf unsere Firma angepasst werden?",
      a: "Ja. Branding, Texte, Konfiguration, Arbeitszeitregeln und Kontaktziele lassen sich auf deine Anforderungen zuschneiden.",
    },
    {
      q: "Welche Prozesse deckt das Produkt heute schon ab?",
      a: "Digitale Stundenzettel, Urlaubsanträge, Vorschussanträge, Signaturen, PDF-Erstellung, Versand und ein Adminbereich für die Konfiguration.",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Kontakt
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Wenn du die App auf deine Bedürfnisse anpassen möchtest, ist das der
            richtige Einstieg.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Vorname
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Nachname
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  E-Mail
                </label>
                <input
                  type="email"
                  className="w-full px-5 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Nachricht
                </label>
                <textarea
                  rows={4}
                  className="w-full px-5 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-medium resize-none"
                />
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-primary/20 flex items-center justify-center">
                Anfrage senden <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </motion.div>

          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Kontaktinformationen
              </h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-6 text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">E-Mail</div>
                    <div className="text-slate-500">info@wpdl.de</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-6 text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Telefon</div>
                    <div className="text-slate-500">+49 2561 9792590</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-6 text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Unternehmen</div>
                    <div className="text-slate-500">
                      Westfalia Personaldienstleistungen GmbH
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-[2.5rem] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              <MessageSquare className="w-10 h-10 mb-6 opacity-50" />
              <h4 className="text-xl font-bold mb-2">Produktanpassung</h4>
              <p className="text-blue-100 text-sm mb-6">
                Wir passen die App auf deine Prozesse, dein Branding und deine
                Einsatzrealität an.
              </p>
              <button className="bg-white text-primary px-6 py-3 rounded-xl text-sm font-bold hover:bg-blue-50 transition-colors">
                Anfrage starten
              </button>
            </div>
          </div>
        </div>

        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Häufige Fragen
            </h2>
            <p className="text-slate-600">
              Die wichtigsten Punkte zum Produkt und zur Anpassung.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              const buttonId = `faq-button-${i}`;
              const panelId = `faq-panel-${i}`;

              return (
                <div key={faq.q} className="bg-slate-50 rounded-2xl p-6">
                  <button
                    type="button"
                    id={buttonId}
                    className="flex w-full items-center justify-between text-left"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  >
                    <h4 className="font-bold text-slate-900">{faq.q}</h4>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-colors transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <p
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="mt-4 text-slate-600 text-sm leading-relaxed"
                    >
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
