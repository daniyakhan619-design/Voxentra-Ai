import { DollarSign, Star, Clock, Zap, Smile, ArrowUp } from "lucide-react";

interface BenefitCard {
  title: string;
  metric: string;
  description: string;
  icon: any;
  colorClass: string;
}

interface KeyBenefitsProps {
  darkMode: boolean;
}

export default function KeyBenefits({ darkMode }: KeyBenefitsProps) {
  const benefits: BenefitCard[] = [
    {
      title: "Reduce Staffing Costs",
      metric: "Save PKR 150K/mo",
      description: "Replace expensive night-shift staff and outsourced callback centers with 24/7 automated systems that never call in sick.",
      icon: DollarSign,
      colorClass: "bg-emerald-500/10 text-emerald-450 border-emerald-500/20"
    },
    {
      title: "Never Miss a Customer",
      metric: "100% Response Rate",
      description: "No more missed booking requests, busy telephone signals, or unreplied emails during peak weekend hours.",
      icon: Star,
      colorClass: "bg-amber-500/10 text-amber-400 border-amber-500/20"
    },
    {
      title: "24/7 Availability",
      metric: "Always-On Support",
      description: "Support clients at midnight, answer restaurant reservation enquiries, and log records during bank holidays natively.",
      icon: Clock,
      colorClass: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      title: "Faster Response Times",
      metric: "< 2 Seconds Voice Response",
      description: "Customers receive instant voice replies and immediate WhatsApp invoices, cutting standard hold durations to absolute zero.",
      icon: Zap,
      colorClass: "bg-pink-500/10 text-pink-400 border-pink-500/20"
    },
    {
      title: "Better Customer Satisfaction",
      metric: "+42% NPS Improvement",
      description: "Keep people delighted with pleasant, bilingual Urdu/English receptionists that handle queries with zero frustration.",
      icon: Smile,
      colorClass: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
    },
    {
      title: "Scalable Operations",
      metric: "Infinite Parallel Lines",
      description: "Process 50 incoming customer telephone calls or WhatsApp queries in parallel with zero congestion or delayed waiting queues.",
      icon: ArrowUp,
      colorClass: "bg-violet-500/10 text-violet-400 border-violet-500/20"
    }
  ];

  return (
    <section
      id="benefits"
      className={`py-20 md:py-28 transition-colors duration-300 relative ${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-500 font-bold text-xs uppercase tracking-widest bg-indigo-500/10 px-3 py-1.5 rounded-full inline-block mb-3">
            Core Advantages
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Why SME Leaders Choose Voxentra AI
          </h2>
          <p className={`text-base md:text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Engineered specifically to solve the front-office communication bottlenecks of local businesses, franchises, clinics, and retail storefronts in Pakistan.
          </p>
        </div>

        {/* Core Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((bt, index) => {
            const Icon = bt.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 hover:scale-[1.03] group ${
                  darkMode 
                    ? "bg-slate-900 border-slate-805/70 shadow-lg shadow-slate-950/40" 
                    : "bg-white border-slate-200/80 shadow-md shadow-slate-200/40"
                }`}
              >
                <div>
                  {/* Top Icon Block */}
                  <div className={`p-3 rounded-xl inline-block mb-6 border transition-transform group-hover:scale-110 ${bt.colorClass}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-indigo-500 transition-colors">
                    {bt.title}
                  </h3>
                  
                  <p className={`text-xs md:text-sm font-semibold tracking-wide uppercase mb-4 text-indigo-400`}>
                    {bt.metric}
                  </p>

                  <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                    {bt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
