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
      q: "How long is the free trial?",
      a: "Our free trial lasts for 14 days and includes access to all premium features.",
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes, you can cancel your subscription at any time from your account settings.",
    },
    {
      q: "Do you offer custom enterprise plans?",
      a: "Absolutely. For companies with over 500 employees, we offer tailored solutions.",
    },
    {
      q: "Is my data secure with HRStream?",
      a: "We use bank-level encryption and are SOC2 Type II compliant to ensure your data is safe.",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Get in touch
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Send us a message and we'll
            respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-5 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-5 py-4 bg-white border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 font-medium resize-none"
                />
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-primary/20 flex items-center justify-center">
                Send Message <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Contact Information
              </h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-6 text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Email Us</div>
                    <div className="text-slate-500">support@hrstream.io</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-6 text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Call Us</div>
                    <div className="text-slate-500">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-6 text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Visit Us</div>
                    <div className="text-slate-500">
                      123 Innovation Way, San Francisco, CA 94105
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-[2.5rem] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              <MessageSquare className="w-10 h-10 mb-6 opacity-50" />
              <h4 className="text-xl font-bold mb-2">Live Chat Support</h4>
              <p className="text-blue-100 text-sm mb-6">
                Our team is available 24/7 to help you with any issues.
              </p>
              <button className="bg-white text-primary px-6 py-3 rounded-xl text-sm font-bold hover:bg-blue-50 transition-colors">
                Start Chat
              </button>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Everything you need to know about the product and billing.
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
