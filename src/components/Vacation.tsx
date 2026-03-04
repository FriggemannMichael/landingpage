import React from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

const Vacation: React.FC = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const leaveTypes = [
    { name: "Bezahlter Urlaub", balance: "12 Tage", color: "bg-primary" },
    { name: "Sonderurlaub", balance: "3 Anträge", color: "bg-rose-500" },
    { name: "Freizeitausgleich", balance: "2 Anträge", color: "bg-amber-500" },
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Digitale Urlaubsanträge
            </h1>
            <p className="text-slate-500">
              Urlaub, Sonderurlaub und Freizeitausgleich direkt im selben
              Produkt beantragen.
            </p>
          </div>
          <button className="flex items-center px-6 py-3 bg-primary text-white rounded-2xl text-sm font-bold hover:bg-blue-600 transition-all shadow-lg shadow-primary/20 mt-6 md:mt-0">
            <Plus className="w-5 h-5 mr-2" /> Antrag erstellen
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-6">Antragsarten</h3>
              <div className="space-y-6">
                {leaveTypes.map((type, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-slate-700">
                        {type.name}
                      </span>
                      <span className="text-sm font-extrabold text-slate-900">
                        {type.balance}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${type.color}`}
                        style={{
                          width: i === 0 ? "60%" : i === 1 ? "30%" : "15%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-6">Beispielanträge</h3>
              <div className="space-y-6">
                {[
                  {
                    date: "12.10 - 15.10",
                    type: "Bezahlter Urlaub",
                    status: "Versendet",
                  },
                  {
                    date: "05.09 - 06.09",
                    type: "Sonderurlaub",
                    status: "Versendet",
                  },
                  {
                    date: "20.08 - 20.08",
                    type: "Freizeitausgleich",
                    status: "Entwurf",
                  },
                ].map((req, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-slate-900">
                        {req.date}
                      </div>
                      <div className="text-xs text-slate-500">{req.type}</div>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                        req.status === "Versendet"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-rose-50 text-rose-600"
                      }`}
                    >
                      {req.status}
                    </span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-3 text-sm font-bold text-primary hover:bg-primary/5 rounded-xl transition-colors">
                PDF-Workflow ansehen
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm h-full">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-slate-900">
                  Beispiel Monat
                </h3>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors border border-slate-100">
                    <ChevronLeft className="w-5 h-5 text-slate-600" />
                  </button>
                  <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors border border-slate-100">
                    <ChevronRight className="w-5 h-5 text-slate-600" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-4">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className="text-center text-xs font-bold text-slate-400 uppercase py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 2 }).map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}
                {days.map((day) => {
                  const isToday = day === 14;
                  const isLeave = day >= 12 && day <= 15;
                  return (
                    <div
                      key={day}
                      className={`aspect-square rounded-2xl flex flex-col items-center justify-center relative cursor-pointer transition-all hover:scale-105 ${
                        isToday
                          ? "bg-primary text-white shadow-lg shadow-primary/30"
                          : isLeave
                            ? "bg-blue-50 text-primary font-bold"
                            : "hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      <span className="text-sm font-bold">{day}</span>
                      {isLeave && !isToday && (
                        <div className="w-1 h-1 bg-primary rounded-full mt-1" />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3" />
                  <span className="text-xs font-bold text-slate-600">
                    Bezahlter Urlaub
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-rose-500 rounded-full mr-3" />
                  <span className="text-xs font-bold text-slate-600">
                    Sonderurlaub
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-amber-500 rounded-full mr-3" />
                  <span className="text-xs font-bold text-slate-600">
                    Freizeitausgleich
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacation;
