import React, { useState } from "react";
import { motion } from "motion/react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Globe2,
  HandCoins,
  Layers3,
  ShieldCheck,
  Signature,
  Smartphone,
  Workflow,
  Lock,
  Server,
  BadgeCheck,
} from "lucide-react";
import { useSeo } from "../hooks/useSeo";

const pillars = [
  {
    id: "zeiterfassung",
    title: "Stundenzettel",
    desc: "Wochenblätter, Schichtmodelle und mehrere Kunden pro Woche in einem sauberen Ablauf.",
    Icon: Clock3,
    points: ["Mehrere Blätter je KW", "QR-Code für automatische Erfassung", "PDF-Nachweis"],
  },
  {
    id: "urlaub",
    title: "Urlaub",
    desc: "Urlaubsanträge, Sonderurlaub und Freizeitausgleich strukturiert ohne Papier.",
    Icon: CalendarDays,
    points: ["Einheitlicher Antrag", "Status und Historie", "Dokumentierter Ablauf"],
  },
  {
    id: "vorschuss",
    title: "Vorschuss",
    desc: "Antrag, Hinweisbestätigung, Signatur und Versand in einem digitalen Prozess.",
    Icon: HandCoins,
    points: ["Digital unterschreiben", "QR-Code für automatische Erfassung", "Optional WhatsApp"],
  },
];

const values = [
  { label: "Zeitersparnis Verwaltung", value: "Bis zu 60 Min/Tag" },
  { label: "Sprachen", value: "10+" },
  { label: "Kernprozesse", value: "3" },
  { label: "Go-live", value: "In 1 Tag" },
];

const flow = [
  {
    step: "01",
    title: "Erfassen",
    text: "Mitarbeiter geben Daten direkt in der App ein: Stunden, Urlaub oder Vorschuss.",
    Icon: Smartphone,
  },
  {
    step: "02",
    title: "Bestätigen",
    text: "Hinweise, Signatur und Regeln werden im gleichen Ablauf dokumentiert.",
    Icon: Signature,
  },
  {
    step: "03",
    title: "Weitergeben",
    text: "PDFs werden direkt weitergeleitet und sind für den Betrieb nachvollziehbar.",
    Icon: Workflow,
  },
];

const pains = [
  "Mitarbeiter haben keine einheitliche App zur Zeiterfassung",
  "Papier geht verloren - Nachfragen kosten täglich Zeit",
  "Manuelle Datenerfassung in Ihr System ist aufwendig",
];

const LandingPage: React.FC = () => {
  useSeo({
    title: "MitarbeiterApp Pro - Digitale Zeiterfassung für Unternehmen",
    description:
      "MitarbeiterApp Pro: Digitale Stundenzettel, Urlaubsanträge und Vorschüsse mit Unterschrift und QR-Code für Personaldienstleister und Handwerk.",
    canonicalPath: "/",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [targetGroup, setTargetGroup] = useState("");
  const [notes, setNotes] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedRequestType, setSelectedRequestType] = useState<"demo" | "contact" | "callback">("demo");
  const [status, setStatus] = useState<"idle" | "error" | "sending" | "sent">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submitEvent = event.nativeEvent as SubmitEvent;
    const submitter = submitEvent.submitter as HTMLButtonElement | null;
    const requestType =
      submitter?.value === "callback"
        ? "callback"
        : submitter?.value === "contact"
          ? "contact"
          : "demo";
    setSelectedRequestType(requestType);

    setErrorMessage("");

    if (!name.trim() || !email.trim() || !targetGroup) {
      setStatus("error");
      setErrorMessage("Bitte Name, E-Mail-Adresse und Zielgruppe ausfüllen.");
      return;
    }

    if (requestType === "callback" && !phone.trim()) {
      setStatus("error");
      setErrorMessage("Für einen Rückruf benötigen wir Ihre Telefonnummer.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",        },
        body: JSON.stringify({
          name,
          email,
          phone,
          targetGroup,
          notes,
          requestType,
        }),
      });

      if (!response.ok) {
        throw new Error("submit failed");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setPhone("");
      setTargetGroup("");
      setNotes("");

      if (requestType === "demo") {
        window.location.href = "https://demo.mitarbeiterapp.site";
      }
    } catch {
      setStatus("error");
      setErrorMessage("Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.");
    }
  };

  return (
    <div id="start" className="pt-24 bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(13,127,242,0.35),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(56,189,248,0.22),transparent_32%),linear-gradient(160deg,#020617_0%,#0f172a_45%,#111827_100%)]" />
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em]">
                <Layers3 className="w-4 h-4" /> MitarbeiterApp Pro
              </span>
              <h1 className="mt-7 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] text-white">
                Keine Zettel mehr. Keine Sucherei.
                <span className="text-cyan-300"> Mehr Zeit für echte Arbeit.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">
                Ihre Mitarbeiter erfassen Stunden, Urlaub und Vorschüsse digital. Mit Unterschrift und QR-Code für automatische Erfassung in Ihrem System.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a
                  href="#kontakt"
                  className="inline-flex justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white hover:bg-blue-600 transition-colors"
                >
                  Kostenlose Demo sichern
                </a>
                <a
                  href="#flow"
                  className="inline-flex justify-center rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-colors"
                >
                  Ablauf in 2 Minuten
                </a>
              </div>
              <p className="mt-3 text-xs text-slate-300">
                Keine Verpflichtung • In 15 Minuten vorgestellt • DSGVO-konform in Deutschland
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="lg:col-span-4"
            >
              <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur p-5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">Für Personaldienstleister</div>
                <div className="rounded-2xl bg-slate-900/80 border border-white/10 p-4">
                  <div className="text-3xl font-extrabold text-white">Digitale Prozesse für Ihr Team</div>
                  <div className="mt-1 text-sm text-slate-300">Stunden, Urlaub und Vorschüsse in einer App</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {values.slice(0, 2).map((item) => (
                    <div key={item.label} className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-3">
                      <div className="text-xl font-extrabold text-white">{item.value}</div>
                      <div className="text-xs text-slate-300 font-semibold">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {values.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-4">
                <div className="text-2xl font-extrabold text-white">{item.value}</div>
                <div className="text-xs font-bold uppercase tracking-wide text-slate-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-950 text-slate-200 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">Das kennen Sie bestimmt</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pains.map((pain) => (
              <div key={pain} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-sm font-semibold">
                {pain}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="funktionen" className="py-20 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Drei Kernbereiche. Ein messbarer Nutzen.</h2>
            <p className="mt-3 text-slate-600 max-w-3xl">
              Alle Prozesse greifen ineinander und sparen Zeit zwischen Mitarbeiter, Disposition und Verwaltung.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                id={pillar.id}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <pillar.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">{pillar.title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
                <div className="mt-5 space-y-2">
                  {pillar.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="py-20 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 p-8 md:p-10 bg-gradient-to-br from-slate-50 to-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {flow.map((item) => (
                <article key={item.step} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Schritt {item.step}</span>
                    <item.Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="preise" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold">Preismodelle</h2>
            <p className="mt-3 text-slate-600 max-w-3xl">
              Sie entscheiden: selbst hosten mit Einmalpreis oder Managed Hosting mit laufenden Updates und deutscher Infrastruktur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="rounded-3xl border border-slate-200 bg-white p-7">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Self-Hosting</div>
              <h3 className="mt-2 text-2xl font-extrabold">1999 EUR einmalig</h3>
              <p className="mt-2 text-sm text-slate-600">Unbegrenzte Mitarbeiter. Eigener Server, volle Kontrolle.</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Keine monatliche Lizenz</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Volle technische Kontrolle</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Updates nicht enthalten</li>
              </ul>
            </article>

            <article className="rounded-3xl border-2 border-primary bg-white p-7 shadow-[0_10px_30px_rgba(13,127,242,0.12)]">
              <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wide">Empfohlen</div>
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mt-4">Managed Hosting</div>
              <h3 className="mt-2 text-2xl font-extrabold">69 EUR/Monat</h3>
              <p className="mt-2 text-sm text-slate-600">Unbegrenzte Mitarbeiter. Auf Ihrer Subdomain.</p>
<ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Deutscher Server, DSGVO-konform</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> PGP-Verschlüsselung Ende-zu-Ende</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Updates inklusive</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> Monatlich kündbar</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-900 px-6 py-6 md:px-8 md:py-8 text-slate-100 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 p-4 bg-white/5">
              <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm"><Server className="w-4 h-4" /> Deutscher Server</div>
              <p className="text-sm text-slate-300 mt-2">Hosting in Deutschland für klare Datenschutz-Anforderungen.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-4 bg-white/5">
              <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm"><Lock className="w-4 h-4" /> PGP-Verschlüsselung</div>
              <p className="text-sm text-slate-300 mt-2">E-Mails werden bereits im Browser verschlüsselt.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-4 bg-white/5">
              <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm"><BadgeCheck className="w-4 h-4" /> Made in Germany</div>
              <p className="text-sm text-slate-300 mt-2">Entwicklung und Betrieb mit Fokus auf den deutschen Markt.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-20 bg-slate-950 text-white border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">
            <Globe2 className="w-4 h-4" /> Bereit für den Einsatz
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold">Kontakt, Demo oder Rückruf anfordern</h2>
          <p className="mt-4 text-slate-300 max-w-2xl">
            In einer kurzen Demo zeigen wir Ihnen den kompletten Ablauf. Alternativ können Sie direkt einen Rückruf anfordern.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 rounded-3xl border border-white/15 bg-white/10 backdrop-blur p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="demo-name" className="block text-sm font-bold text-slate-100 mb-2">
                  Name
                </label>
                <input
                  id="demo-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Vor- und Nachname"
                  className="w-full rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                />
              </div>

              <div>
                <label htmlFor="demo-email" className="block text-sm font-bold text-slate-100 mb-2">
                  E-Mail-Adresse
                </label>
                <input
                  id="demo-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@firma.de"
                  className="w-full rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                />
              </div>

              <div>
                <label htmlFor="demo-group" className="block text-sm font-bold text-slate-100 mb-2">
                  Zielgruppe
                </label>
                <select
                  id="demo-group"
                  value={targetGroup}
                  onChange={(e) => setTargetGroup(e.target.value)}
                  className="w-full rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                >
                  <option value="">Bitte auswählen</option>
                  <option value="Handwerk">Handwerk</option>
                  <option value="Zeitarbeit">Zeitarbeit</option>
                </select>
              </div>

              <div>
                <label htmlFor="demo-phone" className="block text-sm font-bold text-slate-100 mb-2">
                  Telefonnummer
                </label>
                <input
                  id="demo-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+49 170 1234567"
                  className={`w-full rounded-xl border bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 ${
                    selectedRequestType === "callback" && !phone.trim()
                      ? "border-red-400 focus:ring-red-300/40"
                      : "border-white/20 focus:ring-cyan-300/40"
                  }`}
                />
                <p className="mt-2 text-xs text-slate-300">Pflichtfeld nur bei "Rückruf anfordern".</p>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="demo-notes" className="block text-sm font-bold text-slate-100 mb-2">
                  Notizen (optional)
                </label>
                <textarea
                  id="demo-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Z. B. bevorzugte Rückrufzeit, Fragen oder kurze Infos zu Ihrem Anliegen"
                  rows={4}
                  className="w-full rounded-xl border border-white/20 bg-slate-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                type="submit"
                value="demo"
                onClick={() => setSelectedRequestType("demo")}
                disabled={status === "sending"}
                className="inline-flex justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white hover:bg-blue-600 transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Wird gesendet..." : "Demo anfordern"}
              </button>
              <button
                type="submit"
                value="contact"
                onClick={() => setSelectedRequestType("contact")}
                disabled={status === "sending"}
                className="inline-flex justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-colors disabled:opacity-60"
              >
                Kontakt aufnehmen
              </button>
              <button
                type="submit"
                value="callback"
                onClick={() => setSelectedRequestType("callback")}
                disabled={status === "sending"}
                className="inline-flex justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-slate-900 hover:bg-slate-100 transition-colors disabled:opacity-60"
              >
                Rückruf anfordern
              </button>
            </div>

            <p className="mt-3 text-xs text-slate-300">
              Ihre Daten werden vertraulich behandelt. Keine Weitergabe an Dritte.
            </p>
            <p className="mt-2 text-xs text-slate-300">
              Mit dem Absenden Ihrer Anfrage erklären Sie sich mit der Verarbeitung Ihrer Daten zur Bearbeitung Ihres Anliegens einverstanden.
            </p>

            {status === "error" && (
              <p className="mt-4 text-sm font-semibold text-amber-300">
                {errorMessage || "Bitte prüfen Sie Ihre Eingaben und versuchen Sie es erneut."}
              </p>
            )}
            {status === "sent" && (
              <p className="mt-4 text-sm font-semibold text-emerald-300">
                Danke, Ihre Anfrage wurde gesendet.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="py-14 bg-slate-900 text-slate-200 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-extrabold text-white mb-4">FAQ</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-2xl border border-white/10 p-4 bg-slate-950/40">
              <p className="font-bold text-white">Wie schnell können wir starten?</p>
              <p className="mt-2 text-slate-300">Nach Registrierung sofortiger Zugang zur Testversion. Die App ist selbsterklärend - Ihre Mitarbeiter können direkt starten.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-4 bg-slate-950/40">
              <p className="font-bold text-white">Ist die App DSGVO-konform?</p>
              <p className="mt-2 text-slate-300">Ja, zu 100%. Deutsche Server, keine Datenspeicherung bei uns, verschlüsselter Versand.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-4 bg-slate-950/40">
              <p className="font-bold text-white">Self-Hosting oder Managed?</p>
              <p className="mt-2 text-slate-300">Managed: Wir kümmern uns um alles. Self-Hosting: Sie hosten auf Ihrem eigenen Server.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

