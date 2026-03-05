import React from "react";
import { ArrowLeft } from "lucide-react";

const Impressum: React.FC = () => {
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
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Impressum</h1>
        <p className="text-sm text-slate-500 mb-8">Stand: Januar 2026</p>

        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-10 space-y-8">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">1. Angaben gemäß § 5 DDG (Digitales-Dienste-Gesetz)</h2>
            <div className="text-slate-600 leading-relaxed">
              <p className="mb-2"><strong>Diensteanbieter:</strong></p>
              <p className="mb-2">Michael Friggemann</p>
              <p className="mb-2">Schwarzer Weg 29</p>
              <p className="mb-4">48683 Ahaus</p>
              
              <p className="mb-2"><strong>Kontakt:</strong></p>
              <p className="mb-2">E-Mail: info@mitarbeiterapp.site</p>
              <p className="mb-2">Tel.: +49 171 2363977</p>
            </div>
          </section>

          <section className="pt-8 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-3">2. Haftung für Inhalte</h2>
            <p className="text-slate-600 leading-relaxed">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Als Diensteanbieter sind wir 
              gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
              Nach §§ 8 bis 10 DDG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit 
              hinweisen.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr 
              übernehmen. Haftungsansprüche gegen uns, welche sich auf Schäden materieller oder ideeller Art 
              beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die 
              Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich 
              ausgeschlossen.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-3">3. Haftung für Links</h2>
            <p className="text-slate-600 leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss 
              haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte 
              der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente 
              inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer 
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
              Links umgehend entfernen.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-3">4. Urheberrecht</h2>
            <p className="text-slate-600 leading-relaxed">
              Die durch uns erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht 
              und den Gesetzen zum Schutze geistigen Eigentums. Die Vervielfältigung, Bearbeitung, Verbreitung 
              und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen 
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. 
              Soweit die Inhalte auf dieser Seite nicht von uns erstellt wurden, beachten wir die Urheberrechte 
              Dritter und kennzeichnen diese als solche.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-3">5. Alternative Streitbeilegung</h2>
            <p className="text-slate-600 leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-3">6. Verbraucherinformationen nach § 36 VSBG</h2>
            <p className="text-slate-600 leading-relaxed">
              Wir weisen darauf hin, dass wir nicht an einem freiwilligen Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilnehmen und hierzu auch nicht verpflichtet sind.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-3">7. Hinweis zur Verantwortlichkeit nach EU-DSA</h2>
            <p className="text-slate-600 leading-relaxed">
              Als Anbieter eines Online-Dienstes im Sinne des Digital Services Act (DSA) informieren wir Sie 
              darüber, dass wir gemäß Art. 16 DSA verpflichtet sind, klare und nutzerfreundliche Informationen 
              über die wesentlichen Funktionen und Risiken unserer Dienste bereitzustellen.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Unsere Dienste richten sich an gewerbliche Kunden (B2B). Die Verarbeitung personenbezogener Daten 
              erfolgt ausschließlich gemäß unserer Datenschutzerklärung und den gesetzlichen Vorgaben der DSGVO.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-3">8. Anwendbares Recht</h2>
            <p className="text-slate-600 leading-relaxed">
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG). 
              Gegenüber Verbrauchern gilt diese Rechtswahl nur insoweit, als nicht der gewährte Schutz durch 
              zwingende Bestimmungen des Rechts des Staates, in dem der Verbraucher seinen gewöhnlichen 
              Aufenthalt hat, entzogen wird.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
