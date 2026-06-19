import { useState, useEffect, FormEvent } from "react";
import { MessageCircle, X, Send, Sparkles, AlertCircle, Bot, ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Industries from "./components/Industries";
import DashboardPreview from "./components/DashboardPreview";
import KeyBenefits from "./components/KeyBenefits";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showChatPopup, setShowChatPopup] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { role: "bot", text: "Assalam-o-Alaikum! Hello! I'm the Voxentra Virtual Concierge. Ask me anything about our AI agents, Urdu speech recognition, or pricing!" }
  ]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll for Back-To-Top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset scroll so layout header isn't cliping
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleSendChat = (e: FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const updated = [...chatMessages, { role: "user", text: chatInput }];
    setChatMessages(updated);
    const userQuery = chatInput;
    setChatInput("");

    // Simulated responsive AI answering
    setTimeout(() => {
      let botText = "We offer robust AI setups! Starter plans start at PKR 20,000/mo. Would you like me to alert our booking division to arrange a demonstration call for you?";
      
      const queryLower = userQuery.toLowerCase();
      if (queryLower.includes("price") || queryLower.includes("cost") || queryLower.includes("charge")) {
        botText = "Our Starter plan with WhatsApp texting and basic analytics is PKR 20,000/month. Our Professional plan with full AI-called speech lines, texting, and emails is PKR 35,000/month. Custom scales can be scheduled via DHA Karachi HQ!";
      } else if (queryLower.includes("urdu") || queryLower.includes("language") || queryLower.includes("accent")) {
        botText = "Yes! Voxentra has been custom-trained on Pakistani conversational linguistics. We natively support Urdu, standard English, and casual 'Roman Urdu' texting syntax!";
      } else if (queryLower.includes("contact") || queryLower.includes("email") || queryLower.includes("phone")) {
        botText = "You can dispatch corporate inquiries directly to support@voxentra.ai or telephone our operational line at +92 300 123 4567.";
      } else if (queryLower.includes("replace") || queryLower.includes("receptionist") || queryLower.includes("staff")) {
        botText = "Absolutely. It comfortably manages 98% of redundant booking chores, reservation orders, and timing inquiries. For critical lines, it can seamlessly escalate to physical operators.";
      }

      setChatMessages(prev => [...prev, { role: "bot", text: botText }]);
    }, 1200);
  };

  return (
    <div className={`min-h-screen font-sans ${
      darkMode ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900"
    } transition-colors duration-300`}>
      
      {/* Header Sticky Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onScrollTo={handleScrollTo}
      />

      {/* Hero presentation screen */}
      <Hero
        darkMode={darkMode}
        onScrollTo={handleScrollTo}
      />

      {/* AI calling, texting, emails solutions catalog */}
      <Solutions darkMode={darkMode} />

      {/* Custom industries adaptations (Cafes, spas, clinics) */}
      <Industries darkMode={darkMode} />

      {/* Live SaaS Administrative dashboard simulator */}
      <DashboardPreview darkMode={darkMode} />

      {/* Core cost, availability & scaling advantages list */}
      <KeyBenefits darkMode={darkMode} />

      {/* Modular PKR Starter/Pro/Custom pricing tables */}
      <Pricing
        darkMode={darkMode}
        onScrollTo={handleScrollTo}
      />

      {/* Accordion FAQs panel helper */}
      <FAQ darkMode={darkMode} />

      {/* CTA Demonstration intake form */}
      <LeadForm darkMode={darkMode} />

      {/* Corporate footer block with legal policy link list */}
      <Footer
        darkMode={darkMode}
        onScrollTo={handleScrollTo}
      />

      {/* --- FLOATING INTERACTIVE CONCIERGE CHATBOT --- */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {showChatPopup && (
          <div className={`w-[325px] sm:w-[350px] rounded-2xl shadow-2xl border mb-3 text-left overflow-hidden scale-[1.01] transition-transform duration-300 flex flex-col justify-between ${
            darkMode ? "bg-slate-900 border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"
          }`}>
            {/* Header bar */}
            <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-lg bg-white/20">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider">Voxentra Concierge</h4>
                  <span className="text-[9px] text-indigo-200 block font-mono">Real-time Urdu NLP Core</span>
                </div>
              </div>
              <button
                onClick={() => setShowChatPopup(false)}
                className="text-white hover:text-indigo-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body messages list */}
            <div className="p-4 h-[250px] overflow-y-auto space-y-3 scrollbar-thin text-xs text-left">
              {chatMessages.map((m, idx) => (
                <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-2.5 rounded-xl max-w-[85%] ${
                    m.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-none'
                      : darkMode
                        ? 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none'
                        : 'bg-slate-100 text-slate-800 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Question chips triggers */}
            <div className="px-4 pb-2.5 flex gap-1.5 overflow-x-auto scrollbar-none font-sans text-[10px]">
              {[
                { label: "Check Urdu accent support", query: "Do you support Urdu language accent dialects?" },
                { label: "What is the setup speed?", query: "How long does it take to implement?" },
              ].map((chip) => (
                <button
                  key={chip.label}
                  onClick={() => {
                    setChatInput(chip.query);
                  }}
                  className="px-2.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 cursor-pointer text-indigo-400 font-bold shrink-0 hover:bg-indigo-50 dark:hover:bg-slate-900 transition-colors"
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Form messaging composer */}
            <form onSubmit={handleSendChat} className="p-3 border-t border-slate-800/10 dark:border-slate-850 flex gap-2">
              <input
                type="text"
                placeholder="Ask pricing, languages, DHA setup..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                className={`flex-grow text-xs rounded-xl border px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-indigo-600 ${
                  darkMode ? "bg-slate-950 border-slate-800 text-white" : "bg-slate-50 border-slate-205 text-slate-800"
                }`}
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white p-2.5 rounded-xl cursor-pointer flex items-center justify-center transition-colors shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}

        <div className="flex gap-2">
          {/* Back to top scroll button */}
          {showBackToTop && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`p-3 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all text-white border flex items-center justify-center cursor-pointer bg-slate-900 hover:bg-slate-850 border-slate-800`}
              title="Scroll Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}

          {/* Core Chat trigger toggle bubble */}
          <button
            onClick={() => setShowChatPopup(!showChatPopup)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
          >
            {showChatPopup ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6 group-hover:rotate-6 transition-transform" />}
          </button>
        </div>
      </div>

    </div>
  );
}
