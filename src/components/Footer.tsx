import React from "react";
import {
  BriefcaseBusiness,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-primary p-1.5 rounded-lg mr-2">
                <BriefcaseBusiness className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                MitarbeiterApp Pro
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Die Mitarbeiter-App für digitale Stundenzettel, Urlaubsanträge,
              Vorschussanträge und dokumentierte Freigabeprozesse.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">
              Produkt
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Stundenzettel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Vorschussanträge
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Urlaubsanträge
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Admin-Konfiguration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">
              Einsatz
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Offline-First
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mehrsprachig
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  PDF & Versand
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Firmenbranding
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">
              Kontakt
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3" /> info@wpdl.de
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3" /> +49 2561 9792590
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1" /> Westfalia
                Personaldienstleistungen GmbH
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 MitarbeiterApp Pro. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
