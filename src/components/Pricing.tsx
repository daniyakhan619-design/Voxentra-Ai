import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { PricingPlan } from "../types";

interface PricingProps {
  darkMode: boolean;
  onScrollTo: (id: string) => void;
}

export default function Pricing({ darkMode, onScrollTo }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans: PricingPlan[] = [
    {
      name: "Starter Plan",
      price: billingCycle === 'monthly' ? "PKR 20,000" : "PKR 16,000",
      period: "/month",
      description: "Ideal for small neighborhood cafes, baristas, salons, and medical checkups looking to automate texting support.",
      features: [
        "AI Texting / WhatsApp",
        "CRM Contact Manager",
        "Basic Reports & Analytics",
        "Bilingual Urdu & English NLP",
        "Standard SMTP email queues",
        "Email & Chat support"
      ],
      isPopular: false,
      ctaText: "Get Started Now"
    },
    {
      name: "Professional Plan",
      price: billingCycle === 'monthly' ? "PKR 35,000" : "PKR 28,000",
      period: "/month",
      description: "Our signature plan. Delivers powerful AI telephonic speaking agents, automated booking workflows, and advanced reports.",
      features: [
        "AI Calling Agent (Incoming line)",
        "AI Texting & WhatsApp Campaigns",
        "AI Email Reply Auto-Drafter",
        "Full Analytics Dashboard Access",
        "Google Sheets & Calendar Sync",
        "Urdu Dialect Accent training",
        "2 hours of priority voice customization",
        "Dedicated account expert"
      ],
      isPopular: true,
      ctaText: "Start Free 7-Day Demo"
    },
    {
      name: "Enterprise Plan",
      price: "Custom",
      period: "",
      description: "Bespoke system training for multi-location franchises, medical clinic networks, and high-volume retail portals.",
      features: [
        "Full AI custom prompt models",
        "Multi-location franchise routing",
        "Uncapped concurrent call lines",
        "API webhook backend connectivity",
        "Dedicated node hosting speeds",
        "Custom Voice Cloning training",
        "24/7 priority SLA support helpline"
      ],
      isPopular: false,
      ctaText: "Contact Sales"
    }
  ];

  return (
    <section
      id="pricing"
      className={`py-20 md:py-28 transition-colors duration-300 relative ${
        darkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-indigo-500 font-bold text-xs uppercase tracking-widest bg-indigo-500/10 px-3 py-1.5 rounded-full inline-block mb-3">
            Flexible Pricing Plans
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Transparent, Value-Driven Plans
          </h2>
          <p className={`text-base md:text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Equip your business with a world-class AI receptionist team. Pay absolute fractions of human wages, with zero recruitment overheads or insurance costs.
          </p>
        </div>

        {/* Annual / Monthly Toggle switcher */}
        <div className="flex justify-center items-center gap-3.5 mb-16">
          <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? "text-indigo-500" : "text-slate-400"}`}>
            Bill Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            className="w-12 h-6 rounded-full bg-indigo-650 p-1 transition-all duration-350 cursor-pointer relative"
          >
            <div className={`w-4 h-4 rounded-full bg-white transition-all ${
              billingCycle === 'annual' ? "translate-x-6" : "translate-x-0"
            }`} />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-semibold ${billingCycle === 'annual' ? "text-indigo-500" : "text-slate-400"}`}>
              Bill Annually
            </span>
            <span className="bg-emerald-500/10 text-emerald-450 border border-emerald-500/25 text-[10px] uppercase font-bold py-0.5 px-2.5 rounded-full">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((pl, idx) => {
            return (
              <div
                key={idx}
                className={`lg:col-span-4 rounded-3xl p-8 border text-left flex flex-col justify-between transition-all duration-300 relative ${
                  pl.isPopular
                    ? "bg-slate-950 border-indigo-500/80 shadow-2xl shadow-indigo-600/15 top-[-8px] scale-[1.02] ring-2 ring-indigo-500/30"
                    : darkMode
                      ? "bg-slate-950 border-slate-805 shadow-md hover:scale-[1.01]"
                      : "bg-slate-50 border-slate-205 shadow-md hover:scale-[1.01]"
                }`}
              >
                {/* Popular choice badge label overlay */}
                {pl.isPopular && (
                  <div className="absolute top-5 right-5 flex items-center gap-1 bg-indigo-600 text-white font-bold py-1 px-3.5 rounded-full text-[10px] uppercase tracking-wider animate-pulse">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  <h3 className={`text-lg font-bold mb-2 ${
                    pl.isPopular ? "text-indigo-400" : ""
                  }`}>{pl.name}</h3>
                  
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
                      {pl.price}
                    </span>
                    <span className={`text-xs ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                      {pl.period}
                    </span>
                  </div>

                  <p className={`text-xs leading-relaxed mb-6 border-b pb-6 ${
                    pl.isPopular 
                      ? "text-slate-400 border-indigo-900/30" 
                      : darkMode 
                        ? "text-slate-450 border-slate-800" 
                        : "text-slate-600 border-slate-200"
                  }`}>
                    {pl.description}
                  </p>

                  <ul className="space-y-3.5 mb-8">
                    {pl.features.map((ft, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-2.5 text-xs">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                          pl.isPopular ? "text-indigo-400" : "text-emerald-500"
                        }`} />
                        <span className={
                          pl.isPopular 
                            ? "text-slate-200" 
                            : darkMode 
                              ? "text-slate-300" 
                              : "text-slate-700"
                        }>{ft}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onScrollTo("demo-contact")}
                  className={`w-full font-bold py-3.5 px-4 rounded-xl text-xs active:scale-[0.98] transition-all cursor-pointer ${
                    pl.isPopular
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30"
                      : darkMode
                        ? "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-850 hover:text-white"
                        : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {pl.ctaText}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
