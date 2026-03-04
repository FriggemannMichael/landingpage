import React from "react";

const AppMockupStrip: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900">Digitale Stundenzettel</h3>
          <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">
            KW 10
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-slate-50 rounded-xl p-3">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Erfasst</div>
            <div className="text-lg font-extrabold text-slate-900">38.5h</div>
          </div>
          <div className="bg-slate-50 rounded-xl p-3">
            <div className="text-[10px] text-slate-500 font-bold uppercase">Offen</div>
            <div className="text-lg font-extrabold text-slate-900">2</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="rounded-xl border border-slate-100 px-3 py-2 flex items-center justify-between">
            <div className="text-xs font-semibold text-slate-700">Kunde 1 / Blatt 1</div>
            <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">
              Signiert
            </span>
          </div>
          <div className="rounded-xl border border-slate-100 px-3 py-2 flex items-center justify-between">
            <div className="text-xs font-semibold text-slate-700">Kunde 1 / Blatt 2</div>
            <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-amber-50 text-amber-600">
              Offen
            </span>
          </div>
          <div className="rounded-xl border border-slate-100 px-3 py-2 flex items-center justify-between">
            <div className="text-xs font-semibold text-slate-700">Kunde 2 / Blatt 1</div>
            <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">
              Signiert
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900">Digitale Urlaubsantraege</h3>
          <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-rose-50 text-rose-600">
            Monat
          </span>
        </div>
        <div className="space-y-3 mb-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-xs font-bold text-slate-700">Bezahlter Urlaub</span>
              <span className="text-xs font-bold text-slate-900">12 Tage</span>
            </div>
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full w-3/5 bg-primary" />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-xs font-bold text-slate-700">Sonderurlaub</span>
              <span className="text-xs font-bold text-slate-900">3 Antraege</span>
            </div>
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full w-1/3 bg-rose-500" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 14 }).map((_, idx) => (
            <div
              key={`vac-day-${idx}`}
              className={`h-6 rounded-lg ${
                idx === 10 ? "bg-primary" : idx >= 8 && idx <= 11 ? "bg-blue-50" : "bg-slate-50"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900">Vorschussantraege</h3>
          <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">
            Versand
          </span>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4 mb-4">
          <div className="text-[10px] text-slate-500 font-bold uppercase">Vorschussantrag</div>
          <div className="text-3xl font-extrabold text-slate-900 mt-1">150 EUR</div>
        </div>
        <div className="space-y-2">
          <div className="rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">
            Hinweise bestaetigt
          </div>
          <div className="rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">
            Digital unterschrieben
          </div>
          <div className="rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">
            PDF per E-Mail oder WhatsApp
          </div>
          <div className="rounded-xl bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-600">
            Antrag erstellt
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppMockupStrip;
