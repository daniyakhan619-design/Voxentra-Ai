import { useState } from "react";
import { Utensils, Coffee, Scissors, Stethoscope, Store, Check, Sparkles, Phone, MessageSquare, ShieldCheck } from "lucide-react";

interface IndustryData {
  id: string;
  name: string;
  tagline: string;
  icon: any;
  metric: string;
  metricDesc: string;
  points: string[];
  sampleDialogue: string;
  colorClass: string;
  badgeBg: string;
}

interface IndustriesProps {
  darkMode: boolean;
}

export default function Industries({ darkMode }: IndustriesProps) {
  const industries: IndustryData[] = [
    {
      id: "restaurants",
      name: "Restaurants",
      tagline: "Secure table bookings and take takeaway fast orders over telephone lines.",
      icon: Utensils,
      metric: "30% More Tables Filled",
      metricDesc: "Never miss reservations from busy callers on Friday and Saturday rush hours.",
      points: [
        "Interactive table booking linked with host podiums",
        "Automated group booking size limits",
        "SMS reminders to confirm seat arrival",
        "Catering reservations coordinated by webhook triggers"
      ],
      sampleDialogue: "VOXENTRA: \"I have booked that booth for 6 guests on Thursday night at 7:30. Would you like our VIP appetizer sampler pre-served?\"",
      colorClass: "text-orange-400 border-orange-500/20 bg-orange-500/5",
      badgeBg: "bg-orange-500/10 text-orange-400"
    },
    {
      id: "cafes",
      name: "Cafés & Coffee Shops",
      tagline: "Streamline pre-ordering queues and boost your digital loyalty accounts.",
      icon: Coffee,
      metric: "95% Call Answer Success",
      metricDesc: "Save baristas' operational focus so they can craft spectacular coffee drinks.",
      points: [
        "Take rapid pre-orders for curbside pickup",
        "Explain dairy-free milk alternatives on the fly",
        "Connect easily with SMS loyalty discounts",
        "Notify customer when standard order is packed & hot"
      ],
      sampleDialogue: "VOXENTRA: \"Sure! Your Caramel Latte with Almond Milk and double espresso shot will be ready in 6 minutes. Code: CAF-04.\"",
      colorClass: "text-amber-400 border-amber-500/20 bg-amber-500/5",
      badgeBg: "bg-amber-500/10 text-amber-400"
    },
    {
      id: "salons",
      name: "Salons & Spas",
      tagline: "Automate appointment bookings, therapist rosters, and shift schedules.",
      icon: Scissors,
      metric: "85% No-Show Reduction",
      metricDesc: "Automatically confirm reservations & reschedule gaps instantly via automated WhatsApp lines.",
      points: [
        "Direct calendar synchronization with stylists",
        "Sends recurring deposit invoices over text",
        "Handles sudden re-scheduling requests",
        "Provides exact service catalogs & customized add-on offers"
      ],
      sampleDialogue: "VOXENTRA: \"Hi Olivia! Sarah has a opening at 2 PM instead. May I advance your balayage color slot to that time?\"",
      colorClass: "text-pink-400 border-pink-500/20 bg-pink-500/5",
      badgeBg: "bg-pink-500/10 text-pink-400"
    },
    {
      id: "clinics",
      name: "Medical Clinics",
      tagline: "Organize patient check-ins, record appointments, and minimize clerical duties.",
      icon: Stethoscope,
      metric: "14 hrs Saved / Week",
      metricDesc: "Empower front-desk officers to support physically waiting patients efficiently.",
      points: [
        "Safely booking check-in requests",
        "Informs callers regarding active doctor availability",
        "Delivers pre-appointment instructions automatically",
        "Secures urgent patient callback pipelines"
      ],
      sampleDialogue: "VOXENTRA: \"Dr. Alvi is available at 11:00 AM or 3:15 PM today. Which appointment fits your calendar best?\"",
      colorClass: "text-blue-400 border-blue-500/20 bg-blue-500/5",
      badgeBg: "bg-blue-500/10 text-blue-400"
    },
    {
      id: "retail",
      name: "Retail Stores",
      tagline: "Inquire about current inventory shelves and instantly track delivery coordinates.",
      icon: Store,
      metric: "4.8★ Support Rating",
      metricDesc: "Provide rapid shipment status notifications on all customer purchase invoices.",
      points: [
        "Cross-checks inventory availability in real-time",
        "Dispenses SMS order tracking links with carrier details",
        "Supports coupon discounts & return policies",
        "Captures customer lead contacts automatically"
      ],
      sampleDialogue: "VOXENTRA: \"Yes, our Gulberg boutique has 3 medium size items of the Emerald Kurta in stock today! Ready for reserve?\"",
      colorClass: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
      badgeBg: "bg-emerald-500/10 text-emerald-400"
    }
  ];

  const [activeInd, setActiveInd] = useState<string>("restaurants");
  const selectedInd = industries.find((i) => i.id === activeInd) || industries[0];

  return (
    <section
      id="industries"
      className={`py-20 md:py-28 transition-colors duration-300 relative ${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Dynamic Background Circle */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute bottom-[-10%] left-[-15%] w-[50%] h-[50%] rounded-full blur-[140px] opacity-20 mix-blend-screen transition-all ${
          darkMode ? "bg-indigo-950/40" : "bg-indigo-200/20"
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-500 font-bold text-xs uppercase tracking-widest bg-indigo-500/10 px-3 py-1.5 rounded-full inline-block mb-3">
            Industry Adaptation
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Custom-Trained for Your Business
          </h2>
          <p className={`text-base md:text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Every industry has specific vocabularies. Voxentra AI configures custom semantic structures designed specifically to serve your unique customer base perfectly.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Buttons - 5 Industries */}
          <div className="lg:col-span-4 space-y-3">
            {industries.map((ind) => {
              const IndIcon = ind.icon;
              const isSelected = ind.id === activeInd;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveInd(ind.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all group cursor-pointer ${
                    isSelected
                      ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/10 scale-[1.01]"
                      : darkMode
                        ? "bg-slate-900 border-slate-850 text-slate-400 hover:text-slate-200 hover:bg-slate-850"
                        : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-colors ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : darkMode
                          ? "bg-slate-950 text-indigo-400"
                          : "bg-indigo-50 text-indigo-600"
                    }`}>
                      <IndIcon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm md:text-base">{ind.name}</span>
                  </div>
                  <Check className={`w-4 h-4 transition-all ${
                    isSelected ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-40"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Presentation Panel - Details of selected industry */}
          <div className="lg:col-span-8">
            <div className={`rounded-2xl border p-6 md:p-10 text-left transition-all shadow-xl h-full flex flex-col justify-between ${
              darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200/80"
            }`}>
              
              <div>
                {/* Industry Header Details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/10 dark:border-slate-800/60">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wide mb-2 ${selectedInd.badgeBg}`}>
                      {selectedInd.name} Optimization
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold">{selectedInd.name} Solutions</h3>
                  </div>
                  
                  {/* Performance Showcase block */}
                  <div className={`p-3.5 rounded-xl border text-center font-bold ${selectedInd.colorClass}`}>
                    <span className="text-xl md:text-2xl font-black block leading-none mb-1">
                      {selectedInd.metric}
                    </span>
                    <span className={`text-[10px] uppercase font-bold tracking-wider ${
                      darkMode ? "text-slate-400" : "text-slate-500"
                    }`}>
                      Core Business Stat
                    </span>
                  </div>
                </div>

                <p className={`text-base leading-relaxed mb-6 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  {selectedInd.tagline} {selectedInd.metricDesc}
                </p>

                {/* Point Checks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {selectedInd.points.map((pt, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <div className="p-0.5 rounded-full bg-indigo-500/10 text-indigo-400 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className={darkMode ? "text-slate-300" : "text-slate-700"}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Script Banner representing AI conversation */}
              <div className={`p-5 rounded-xl border font-sans text-xs flex flex-col sm:flex-row items-start sm:items-center gap-4 ${
                darkMode ? "bg-slate-950 border-slate-800" : "bg-indigo-50/20 border-indigo-100"
              }`}>
                <div className="flex items-center gap-2 text-indigo-400 shrink-0 font-bold uppercase tracking-wider">
                  <Phone className="w-4 h-4 text-indigo-400 animate-pulse" />
                  <span>Interactive Script:</span>
                </div>
                <p className={`italic font-medium ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                  {selectedInd.sampleDialogue}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
