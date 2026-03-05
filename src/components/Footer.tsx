import React from "react";
import { BriefcaseBusiness, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-primary p-1.5 rounded-lg mr-2">
                <BriefcaseBusiness className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                MitarbeiterApp Pro
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Digitale Stundenzettel, Urlaubsanträge und Vorschussanträge für
              schnellere Abläufe in der Personaldienstleistung.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
              Schnellnavigation
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href="/#funktionen"
                  className="hover:text-white transition-colors"
                >
                  Funktionen
                </a>
              </li>
              <li>
                <a
                  href="/#preise"
                  className="hover:text-white transition-colors"
                >
                  Preise
                </a>
              </li>
              <li>
                <a
                  href="/#kontakt"
                  className="hover:text-white transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" /> info@mitarbeiterapp.site
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" /> +49 171 2363977
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5" /> Schwarzer Weg 29, 48683 Ahaus
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© 2026 MitarbeiterApp Pro. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <a href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
