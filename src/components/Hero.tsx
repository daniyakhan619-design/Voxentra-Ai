import { useState, useEffect } from "react";
import { Play, Calendar, Sparkles, CheckCircle2, PhoneCall, MessageCircle, ChevronRight, Users, BarChart3, Clock } from "lucide-react";

interface HeroProps {
  darkMode: boolean;
  onScrollTo: (id: string) => void;
}

export default function Hero({ darkMode, onScrollTo }: HeroProps) {
  const [activeCallStep, setActiveCallStep] = useState(0);
  const [typingText, setTypingText] = useState("");

  const callDialogue = [
    { speaker: "customer", text: "Hi, I'd like to book a table for 4 tonight at 8 PM." },
    { speaker: "voxentra", text: "Of course! Let me check availability. Yes, we have a table available in our main hall or our heated patio. Which would you prefer?" },
    { speaker: "customer", text: "The heated patio would be lovely, please." },
    { speaker: "voxentra", text: "Excellent choice. I've booked that for you under 'Daniel' for tonight at 8:00 PM. A confirmation SMS is on its way to your number!" }
  ];

  // Rotate through call dialogue steps autonomously
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCallStep((prev) => (prev + 1) % callDialogue.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className={`relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute -top-[30%] -left-[10%] w-[60%] h-[70%] rounded-full blur-[140px] opacity-45 mix-blend-screen transition-all ${
          darkMode ? "bg-indigo-950/60" : "bg-indigo-300/30"
        }`} />
        <div className={`absolute top-[20%] -right-[15%] w-[50%] h-[60%] rounded-full blur-[140px] opacity-35 mix-blend-screen transition-all ${
          darkMode ? "bg-violet-950/50" : "bg-violet-200/20"
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-6 text-left flex flex-col justify-center">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-full border mb-6 text-xs font-semibold tracking-wider uppercase transition-all duration-300 animate-pulse bg-indigo-500/10 border-indigo-500/20 text-indigo-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Investment Ready 2026 AI CRM</span>
            </div>

            {/* Headline */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 transition-all duration-300 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}>
              Your AI Workforce for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-indigo-600 to-violet-500 font-black">
                Customer Communication
              </span>
            </h1>

            {/* Subheadline */}
            <p className={`text-lg md:text-xl mb-8 font-normal leading-relaxed ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}>
              Automate calls, texts, emails, and customer support with AI agents that work 24/7. Connect records, capture leads, and delight your clients without a human receptionist.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => onScrollTo("demo-contact")}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-base cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                Book Your Demo
              </button>
              <button
                onClick={() => onScrollTo("solutions")}
                className={`border font-semibold px-8 py-4 rounded-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-base cursor-pointer ${
                  darkMode
                    ? "border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white"
                    : "border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Play className="w-4 h-4 fill-current" />
                Watch How it Works
              </button>
            </div>

            {/* Trust Badges or Brief Highlights */}
            <div className="border-t border-slate-800/10 dark:border-slate-800/60 pt-6 flex flex-wrap items-center gap-6">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    referrerPolicy="no-referrer"
                    alt="Active business user"
                    className="w-10 h-10 rounded-full border-2 border-slate-950 object-cover"
                  />
                ))}
              </div>
              <div>
                <div className={`text-sm font-semibold ${darkMode ? "text-slate-300" : "text-slate-800"}`}>
                  Trusted by 250+ small businesses & franchisers
                </div>
                <div className="flex items-center gap-1 text-xs text-indigo-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Setup in under 15 minutes • No code needed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Premium AI Mockup & Stats */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Interactive Showcase Box */}
            <div className={`relative w-full max-w-lg rounded-2xl border aspect-[4/3] p-6 shadow-2xl transition-all overflow-hidden ${
              darkMode 
                ? "bg-slate-900/60 border-slate-800/80 shadow-slate-950/50" 
                : "bg-white border-slate-200/80 shadow-slate-300/30"
            }`}>
              
              {/* Header bar of simulated app */}
              <div className="flex items-center justify-between border-b pb-4 mb-4 border-slate-800/10 dark:border-slate-800/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className={`text-xs font-mono ml-2 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                    voxentra-agent-stdout.log
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold animate-pulse bg-green-500/10 text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block mr-1" />
                  Live calling simulation
                </div>
              </div>

              {/* Simulated Mobile Voice / Conversation View */}
              <div className="space-y-4 font-sans text-sm h-[200px] overflow-y-auto pr-1">
                {callDialogue.map((dialogue, idx) => {
                  const isActive = idx === activeCallStep;
                  return (
                    <div
                      key={idx}
                      className={`flex flex-col mb-2 transition-all duration-500 p-2.5 rounded-xl ${
                        isActive
                          ? "ring-1 ring-indigo-500/50 bg-indigo-500/5 scale-[1.01]"
                          : "opacity-40"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {dialogue.speaker === "customer" ? (
                          <div className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            darkMode ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"
                          }`}>
                            CUSTOMER (caller)
                          </div>
                        ) : (
                          <div className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-600 text-white flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> VOXENTRA AI PHONE AGENT
                          </div>
                        )}
                        <span className={`text-[10px] font-mono ${darkMode ? "text-slate-600" : "text-slate-400"}`}>
                          {dialogue.speaker === "customer" ? "0:12" : "0:18"}
                        </span>
                      </div>
                      <p className={`font-medium ${
                        dialogue.speaker === "customer" 
                          ? darkMode ? "text-slate-200" : "text-slate-800"
                          : "text-indigo-400 dark:text-indigo-300"
                      }`}>
                        "{dialogue.text}"
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Simulated UI Waves / Ringing visualizer */}
              <div className={`mt-4 pt-4 border-t flex items-center justify-between ${
                darkMode ? "border-slate-800/60" : "border-slate-100"
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white animate-bounce">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`text-xs font-semibold ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                      AI Receptionist Line 1
                    </div>
                    <div className={`text-sm font-bold ${darkMode ? "text-white" : "text-slate-800"}`}>
                      Daniel's Cafe reservation
                    </div>
                  </div>
                </div>
                {/* Voice frequency wave bar indicators */}
                <div className="flex gap-1 items-end h-8">
                  <div className="w-1 h-3 bg-indigo-500 animate-[pulse_1.2s_infinite]" />
                  <div className="w-1 h-6 bg-indigo-400 animate-[pulse_0.8s_infinite]" />
                  <div className="w-1 h-5 bg-indigo-600 animate-[pulse_1s_infinite]" />
                  <div className="w-1 h-8 bg-indigo-300 animate-[pulse_0.5s_infinite]" />
                  <div className="w-1 h-4 bg-indigo-500 animate-[pulse_1.1s_infinite]" />
                </div>
              </div>
            </div>

            {/* --- FLOATING METRIC CARDS --- */}
            
            {/* Stat Card 1: Cost Reduction */}
            <div className={`absolute -top-6 -right-4 md:-right-8 p-4 rounded-xl border shadow-xl flex items-center gap-3 animate-float max-w-[180px] z-10 ${
              darkMode 
                ? "bg-slate-900/90 border-slate-800 text-white" 
                : "bg-white border-slate-100 text-slate-800"
            }`}>
              <div className="p-2 ml-1 rounded-lg bg-emerald-500/10 text-emerald-400">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-black text-emerald-400">60%</div>
                <div className={`text-[10px] font-semibold uppercase tracking-wider ${
                  darkMode ? "text-slate-400" : "text-slate-500"
                }`}>
                  Cost Reduction
                </div>
              </div>
            </div>

            {/* Stat Card 2: 24/7 Support */}
            <div className={`absolute bottom-10 -left-6 md:-left-12 p-4 rounded-xl border shadow-xl flex items-center gap-3 animate-float-delayed max-w-[190px] z-10 ${
              darkMode 
                ? "bg-slate-900/90 border-slate-800 text-white" 
                : "bg-white border-slate-100 text-slate-800"
            }`}>
              <div className="p-2 ml-1 rounded-lg bg-pink-500/10 text-pink-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-black text-pink-400">24/7</div>
                <div className={`text-[10px] font-semibold uppercase tracking-wider ${
                  darkMode ? "text-slate-400" : "text-slate-500"
                }`}>
                  Customer Support
                </div>
              </div>
            </div>

            {/* Stat Card 3: Response Times */}
            <div className={`absolute -bottom-6 right-2 p-4 rounded-xl border shadow-xl flex items-center gap-3 animate-float max-w-[180px] z-10 ${
              darkMode 
                ? "bg-slate-900/90 border-slate-800 text-white" 
                : "bg-white border-slate-100 text-slate-800"
            }`}>
              <div className="p-2 ml-1 rounded-lg bg-cyan-500/10 text-cyan-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-black text-cyan-400">3x</div>
                <div className={`text-[10px] font-semibold uppercase tracking-wider ${
                  darkMode ? "text-slate-400" : "text-slate-500"
                }`}>
                  Response Speed
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
