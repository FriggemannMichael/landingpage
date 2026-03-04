import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  Clock,
  Calendar,
  CreditCard,
  Zap,
  ArrowRight,
} from "lucide-react";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const features = [
    {
      title: "Timesheet Management",
      desc: "Track hours, manage shifts, and automate overtime calculations with ease.",
      Icon: Clock,
      path: "/timesheets",
    },
    {
      title: "Vacation & Leave",
      desc: "Automated leave balances and multi-level approval workflows.",
      Icon: Calendar,
      path: "/vacation",
    },
    {
      title: "Advance Payments",
      desc: "Give your employees financial flexibility with instant wage liquidation.",
      Icon: CreditCard,
      path: "/advance",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              The Future of HR is Here
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
              Streamline Your HR with{" "}
              <span className="text-primary">HRStream</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              Empower your workforce with automated timesheets, flexible
              payments, and seamless leave management. All in one powerful
              platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate("/setup")}
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-600 transition-all shadow-xl shadow-primary/25 active:scale-95"
              >
                Start Free Trial
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all active:scale-95"
              >
                Book a Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://picsum.photos/seed/hr-dashboard/1200/600"
                alt="HRStream Dashboard"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything you need to manage your team
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Powerful tools designed to simplify complex HR processes and
              improve employee satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <motion.button
                type="button"
                key={feature.path}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all hover:shadow-xl hover:bg-white group cursor-pointer text-left"
                onClick={() => navigate(feature.path)}
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <feature.Icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {feature.desc}
                </p>
                <div className="flex items-center text-primary font-bold text-sm">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">
                50k+
              </div>
              <div className="text-blue-100 text-sm font-medium uppercase tracking-wider">
                Active Users
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">
                99.9%
              </div>
              <div className="text-blue-100 text-sm font-medium uppercase tracking-wider">
                Uptime
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">
                24/7
              </div>
              <div className="text-blue-100 text-sm font-medium uppercase tracking-wider">
                Support
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">
                15+
              </div>
              <div className="text-blue-100 text-sm font-medium uppercase tracking-wider">
                Countries
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Loved by HR teams worldwide
              </h2>
              <p className="text-slate-600">
                Don't just take our word for it. See what our customers have to
                say.
              </p>
            </div>
            <div className="flex space-x-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    className="w-12 h-12 rounded-full border-4 border-white"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="ml-4">
                <div className="text-sm font-bold text-slate-900">
                  4.9/5 Rating
                </div>
                <div className="text-xs text-slate-500">
                  From 2,000+ reviews
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Zap key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-xl text-slate-700 italic mb-8 leading-relaxed">
                "HRStream has completely transformed how we handle our monthly
                timesheets. What used to take days now happens automatically."
              </p>
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/100?img=32"
                  className="w-12 h-12 rounded-full mr-4"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-slate-900">Sarah Jenkins</div>
                  <div className="text-sm text-slate-500">
                    HR Director, TechFlow
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Zap key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-xl text-slate-700 italic mb-8 leading-relaxed">
                "The advance payment feature is a game-changer for our
                employees' financial well-being. It's so easy to set up and
                manage."
              </p>
              <div className="flex items-center">
                <img
                  src="https://i.pravatar.cc/100?img=44"
                  className="w-12 h-12 rounded-full mr-4"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-slate-900">Michael Chen</div>
                  <div className="text-sm text-slate-500">
                    COO, Global Logistics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(13,127,242,0.15),transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Ready to modernize your HR?
              </h2>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                Join thousands of companies that trust HRStream to manage their
                most important asset: their people.
              </p>
              <button
                onClick={() => navigate("/setup")}
                className="bg-primary text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-600 transition-all shadow-xl shadow-primary/30 active:scale-95"
              >
                Get Started for Free
              </button>
              <p className="mt-6 text-slate-500 text-sm">
                No credit card required • 14-day free trial
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
