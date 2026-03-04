import React from "react";
import { motion } from "motion/react";
import {
  CreditCard,
  Zap,
  Shield,
  Smartphone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const AdvancePayments: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-6">
              Financial Flexibility
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
              Instant Wage Liquidation for Your Team
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Empower your employees with the ability to access their earned
              wages instantly. No more waiting for payday, no more high-interest
              loans. Just financial freedom.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Zero interest for employees",
                "No impact on company cash flow",
                "Automated payroll reconciliation",
                "Instant bank transfers",
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
              Enable for My Team
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-slate-900 rounded-[2.5rem] p-4 shadow-2xl">
              <img
                src="https://picsum.photos/seed/mobile-app/600/800"
                alt="Mobile App Interface"
                className="rounded-[2rem] w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-[240px]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <Zap className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="text-sm font-bold">Withdrawal Success</div>
              </div>
              <div className="text-2xl font-extrabold text-slate-900 mb-1">
                $450.00
              </div>
              <div className="text-xs text-slate-500">
                Sent to your bank account instantly
              </div>
            </div>
          </motion.div>
        </div>

        {/* How it works */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              How it works
            </h2>
            <p className="text-slate-600">
              Simple, secure, and transparent for everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Work & Earn",
                desc: "Employees work as usual and earn wages every day.",
                icon: <Zap className="w-6 h-6" />,
              },
              {
                title: "Request Advance",
                desc: "Access up to 50% of earned wages via the HRStream app.",
                icon: <Smartphone className="w-6 h-6" />,
              },
              {
                title: "Instant Transfer",
                desc: "Funds are transferred to the bank account in seconds.",
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

        {/* Security */}
        <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Enterprise-Grade Security
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We use bank-level encryption and comply with all financial
              regulations to ensure your data and funds are always protected.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-primary mr-3" />
                <span className="font-bold text-sm">256-bit SSL</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-primary mr-3" />
                <span className="font-bold text-sm">SOC2 Compliant</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-primary mr-3" />
                <span className="font-bold text-sm">GDPR Ready</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-primary mr-3" />
                <span className="font-bold text-sm">ISO Certified</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://picsum.photos/seed/security/600/400"
              alt="Security Illustration"
              className="rounded-3xl shadow-lg"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancePayments;
