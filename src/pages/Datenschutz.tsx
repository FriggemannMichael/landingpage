import React from "react";
import { ArrowLeft } from "lucide-react";

const Datenschutz: React.FC = () => {
  return (
    <div className="pt-32 pb-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="inline-flex items-center text-primary hover:text-blue-600 mb-8 font-semibold"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zur Startseite
        </a>
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Datenschutzerklärung</h1>
        <p className="text-sm text-slate-500 mb-8">Stand: März 2026</p>

        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-10 space-y-8">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">1. Grundsätze</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Der Schutz Ihrer Privatsphäre und persönlichen Daten ist für uns oberstes Gebot. Deshalb haben wir uns folgende Grundsätze auferlegt:
            </p>
            <ul className="text-slate-600 space-y-2 ml-4">
              <li><strong>Datensparsamkeit:</strong> Wir fordern nur Daten an, die für die Nutzung und Funktion unserer Software unbedingt notwendig sind.</li>
              <li><strong>Keine Cookies:</strong> Wir verwenden keine Cookies, mit Ausnahme der technisch unbedingt notwendigen.</li>
              <li><strong>Eigentum:</strong> Ihre persönlichen Daten gehören Ihnen. Sie haben das Recht auf Auskunft, Berichtigung, Datenübertragbarkeit, Löschung und Widerruf.</li>
              <li><strong>Vertraulichkeit:</strong> Sämtliche personenbezogenen Daten werden vertraulich behandelt und die Nutzung auf das Notwendigste beschränkt.</li>
              <li><strong>Transparenz:</strong> Wenn wir Daten benötigen, erklären wir, welche und wozu sie benötigt werden.</li>
            </ul>
          </section>

          <section className="pt-8 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-3">2. Erfassung persönlicher Daten und Zwecke</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Persönliche Daten fragen wir nur dann an, wenn sie zur Erfüllung des Nutzungsvertrags erforderlich sind.
            </p>
            <h3 className="font-semibold text-slate-800 mb-2">2.1 Anmeldung und Registrierung</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Für die Nutzung unserer App ist eine Registrierung erforderlich. Dafür benötigen wir Ihren Namen sowie Ihre E-Mail-Adresse für die Zustellung des Bestätigungslinks.
            </p>
            <h3 className="font-semibold text-slate-800 mb-2">2.2 Berechtigungen in der App</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Für bestimmte Funktionen kann die App Berechtigungen anfragen:
            </p>
            <ul className="text-slate-600 space-y-1 ml-4">
              <li>• Kamera - zum Scannen von QR-Codes</li>
              <li>• GPS/Standort - zur Erkennung von Standorten in der Nähe</li>
              <li>• Dateien - zum Herunter- und Hochladen von Dokumenten</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              Die Berechtigungen werden bei erstmaliger Nutzung der jeweiligen Funktion angefragt. Sie können sie jederzeit in den Geräteeinstellungen widerrufen.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-3">3. Weitergabe von Daten</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Ihre persönlichen Daten behandeln wir vertraulich. Wir geben Daten nur dann an Dritte weiter, wenn dies zur Vertragserfüllung unbedingt erforderlich ist.
            </p>
            <h3 className="font-semibold text-slate-800 mb-2">3.1 Hosting</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Unsere App wird auf Servern in Deutschland gehostet. Die Verarbeitung erfolgt innerhalb der EU.
            </p>
            <h3 className="font-semibold text-slate-800 mb-2">3.2 Externe Dienste</h3>
            <p className="text-slate-600 leading-relaxed">
              Für den Versand von E-Mails und WhatsApp-Nachrichten werden externe Dienste genutzt. Eine Weitergabe an sonstige Dritte erfolgt nicht.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-3">4. Datensicherheit</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Wir treffen technische und organisatorische Maßnahmen, um Ihre Daten vor unberechtigtem Zugriff zu schützen. Alle übermittelten Daten werden durch HTTPS verschlüsselt.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Mit allen Dienstleistern haben wir Auftragsverarbeitungsverträge abgeschlossen, um ein hohes Datenschutzniveau zu gewährleisten.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-3">5. Löschung von Daten</h2>
            <p className="text-slate-600 leading-relaxed">
              Sie können Ihre Daten jederzeit einsehen und zur Löschung anfordern. Sofern steuer- und handelsrechtliche Aufbewahrungsfristen eine sofortige Löschung einschränken, erfolgt die Löschung nach Ablauf der Fristen.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-3">6. Verantwortlicher</h2>
            <p className="text-slate-600 leading-relaxed">
              Michael Friggemann<br />
              Schwarzer Weg 29<br />
              48683 Ahaus<br />
              E-Mail: info@mitarbeiterapp.site
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
