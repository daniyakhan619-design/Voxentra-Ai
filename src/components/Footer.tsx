import { Sparkles, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Github } from "lucide-react";

interface FooterProps {
  darkMode: boolean;
  onScrollTo: (id: string) => void;
}

export default function Footer({ darkMode, onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t transition-colors duration-300 ${
      darkMode 
        ? "bg-slate-950 border-slate-900 text-slate-400" 
        : "bg-white border-slate-100 text-slate-600"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          
          {/* Column 1 - Brand Identity & Mission */}
          <div className="md:col-span-5 text-left space-y-4">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onScrollTo("home")}>
              <div className={`p-2 rounded-xl bg-indigo-505 bg-indigo-500/10 text-indigo-400`}>
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <span className={`text-lg font-extrabold tracking-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
                Voxentra<span className="text-indigo-600">AI</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Providing SME businesses with elite, multilingual AI call center agents, WhatsApp texting triggers, and email automation systems designed to slash office overheads and satisfy every customer.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-3">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Github, href: "#" }
              ].map((val, idx) => {
                const Icon = val.icon;
                return (
                  <a
                    key={idx}
                    href={val.href}
                    className={`p-2 rounded-lg border transition-all ${
                      darkMode 
                        ? "border-slate-800 text-slate-500 hover:text-white hover:bg-slate-900" 
                        : "border-slate-200 text-slate-400 hover:text-indigo-600 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 - Link Products navigation */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className={`text-sm font-bold uppercase tracking-wider ${darkMode ? "text-white" : "text-slate-900"}`}>
              SaaS Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "AI Calling Assistants", target: "solutions" },
                { name: "WhatsApp & SMS Marketing", target: "solutions" },
                { name: "Email Automation Engine", target: "solutions" },
                { name: "Interactive Customer Portal", target: "dashboard" },
                { name: "Pricing Tiers", target: "pricing" }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onScrollTo(link.target)}
                    className="hover:text-indigo-500 transition-colors text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact & Information */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className={`text-sm font-bold uppercase tracking-wider ${darkMode ? "text-white" : "text-slate-900"}`}>
              Contact Us & Support
            </h4>
            
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-indigo-400 shrink-0" />
                <a href="mailto:support@voxentra.ai" className="hover:text-indigo-500 transition-colors">
                  support@voxentra.ai
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-indigo-400 shrink-0" />
                <a href="tel:+923001234567" className="hover:text-indigo-500 transition-colors font-mono">
                  +92 300 123 4567
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>
                  Plaza 45, Phase 6, DHA,<br />
                  Karachi, Pakistan
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Closing Footnote Area with Legal Policies */}
        <div className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          darkMode ? "border-slate-905" : "border-slate-100"
        }`}>
          <span>
            {currentYear} Voxentra AI (Private) Limited. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-500 transition-colors">SLA Agreement</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
