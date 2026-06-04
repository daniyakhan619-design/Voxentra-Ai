import { useState, useEffect } from "react";
import { Users, PhoneCall, BarChart3, Settings, Search, CheckCircle2, AlertCircle, MessageSquare, Mail, RefreshCw, ArrowUpRight, Play, Server, Layers, Volume2, Sparkles } from "lucide-react";
import { ConversationLog, MetricCard } from "../types";

interface DashboardPreviewProps {
  darkMode: boolean;
}

export default function DashboardPreview({ darkMode }: DashboardPreviewProps) {
  const [activeTab, setActiveTab] = useState<'conversations' | 'analytics' | 'crm' | 'config'>('conversations');
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiTemperature, setAiTemperature] = useState(0.3);
  const [accentSelect, setAccentSelect] = useState('formal-lahore');
  const [urduDialeclt, setUrduDialect] = useState(true);

  // Auto-refresh simulations
  const [metrics, setMetrics] = useState<MetricCard[]>([
    { id: "1", title: "Total Conversations", value: "1,482", change: "+12.4%", isPositive: true, icon: "MessageSquare" },
    { id: "2", title: "AI Automation Rate", value: "91.8%", change: "+3.2%", isPositive: true, icon: "Sparkles" },
    { id: "3", title: "Operator Hours Saved", value: "128 hrs", change: "This month", isPositive: true, icon: "BarChart3" },
    { id: "4", title: "Estimated Savings", value: "PKR 142,000", change: "+18.5%", isPositive: true, icon: "Users" },
  ]);

  const [logs, setLogs] = useState<ConversationLog[]>([
    { id: "101", customer: "Zainab Malik", channel: "call", status: "completed", summary: "Booked hair spa & manicure slot for Friday 3 PM.", time: "10m ago", duration: "1m 45s" },
    { id: "102", customer: "Farhan Qureshi", channel: "whatsapp", status: "resolved", summary: "Answered menu pricing for family deal. Shared WhatsApp link.", time: "18m ago" },
    { id: "103", customer: "Ames Medical Care", channel: "email", status: "pending", summary: "Drafted reply for appointment shift. Awaiting clinician confirmation.", time: "42m ago" },
    { id: "104", customer: "Kashif Ali", channel: "call", status: "active", summary: "AI Agent discussing pre-order pickup timing for retail delivery.", time: "Live now", duration: "0m 42s" },
    { id: "105", customer: "Salma Begum", channel: "whatsapp", status: "completed", summary: "Urdu translation support for delivery instructions completed.", time: "1h ago" },
    { id: "106", customer: "Imran Khan Cafe", channel: "email", status: "resolved", summary: "Corporate lunch event quotation computed and delivered automatically.", time: "2h ago" },
  ]);

  const [customers, setCustomers] = useState([
    { name: "Zainab Malik", phone: "+92 300 1245678", email: "zainab@gmail.com", category: "Salon User", sentiment: "Excellent" },
    { name: "Farhan Qureshi", phone: "+92 321 9876543", email: "farhan.q@outlook.com", category: "Restaurant Guest", sentiment: "Good" },
    { name: "Dr. Bilal Siddiqui", phone: "+92 345 8887711", email: "bilal@siddiquiclinic.pk", category: "Clinic Partner", sentiment: "Neutral" },
    { name: "Ayesha Ahmed", phone: "+92 312 2341299", email: "ayesha@ayeshaboutique.com", category: "Retail Owner", sentiment: "Excellent" },
  ]);

  const handleSimulateCall = () => {
    setLoading(true);
    setTimeout(() => {
      // Prepend a new simulated log
      const newLog: ConversationLog = {
        id: (Math.floor(Math.random() * 100) + 200).toString(),
        customer: "Nabeel Jahangir",
        channel: "call",
        status: "active",
        summary: "AI Agent active. Conversing regarding restaurant takeaway coupon codes.",
        time: "Live now",
        duration: "0m 10s"
      };
      setLogs(prev => [newLog, ...prev]);
      setLoading(false);

      // Upgrade metric value!
      setMetrics(prev => prev.map(m => {
        if (m.title === "Total Conversations") {
          return { ...m, value: "1,483" };
        }
        return m;
      }));
    }, 1000);
  };

  const filteredLogs = logs.filter(log => 
    log.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      id="dashboard"
      className={`py-20 md:py-28 transition-colors duration-300 relative ${
        darkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-500 font-bold text-xs uppercase tracking-widest bg-indigo-500/10 px-3 py-1.5 rounded-full inline-block mb-3">
            Interactive Portal
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Command Center Dashboard
          </h2>
          <p className={`text-base md:text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Track agent activities, check customer transcripts, fine-tune voice parameters, and observe your cost savings compound in real-time. Try creating a simulated interaction below!
          </p>
        </div>

        {/* --- DYNAMIC STATS ROW --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {metrics.map((card) => {
            return (
              <div
                key={card.id}
                className={`p-6 rounded-2xl border transition-all hover:scale-[1.02] shadow-sm ${
                  darkMode ? "bg-slate-950/80 border-slate-800" : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    darkMode ? "text-slate-400" : "text-slate-500"
                  }`}>
                    {card.title}
                  </span>
                  <div className="p-2 rounded-lg bg-indigo-600/10 text-indigo-400 animate-pulse">
                    {card.title.includes("Total") && <MessageSquare className="w-4 h-4" />}
                    {card.title.includes("Rate") && <Sparkles className="w-4 h-4" />}
                    {card.title.includes("Hours") && <BarChart3 className="w-4 h-4" />}
                    {card.title.includes("Savings") && <Users className="w-4 h-4" />}
                  </div>
                </div>
                <div className="text-2xl font-black mb-1.5 tracking-tight font-sans">
                  {card.value}
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold">
                  <span className="text-emerald-400">{card.change}</span>
                  <span className={darkMode ? "text-slate-500" : "text-slate-400"}>vs last month</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- ACTIONS & SAAS INTERFACES GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Monitor Panel Box - 8 Columns */}
          <div className="lg:col-span-8 flex flex-col h-full justify-between">
            <div className={`rounded-2xl border aspect-[16/10] overflow-hidden flex flex-col shadow-xl ${
              darkMode ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"
            }`}>
              
              {/* Dashboard Sub Header Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-5 border-b border-slate-800/10 dark:border-slate-800/60 bg-indigo-500/5">
                <div className="flex gap-2">
                  {[
                    { id: 'conversations', label: 'Conversations Log', icon: MessageSquare },
                    { id: 'analytics', label: 'Analytics Chart', icon: BarChart3 },
                    { id: 'crm', label: 'Customer CRM', icon: Users },
                    { id: 'config', label: 'AI Configuration', icon: Settings },
                  ].map((subtab) => {
                    const SubIcon = subtab.icon;
                    const isActive = activeTab === subtab.id;
                    return (
                      <button
                        key={subtab.id}
                        onClick={() => setActiveTab(subtab.id as any)}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          isActive
                            ? "bg-indigo-600 text-white shadow-sm"
                            : darkMode
                              ? "text-slate-450 hover:bg-slate-900 hover:text-slate-100"
                              : "text-slate-600 hover:bg-slate-105 hover:text-slate-900"
                        }`}
                      >
                        <SubIcon className="w-3.5 h-3.5" />
                        {subtab.label}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-3">
                  {/* Search input for filter logs / clients */}
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-450" />
                    <input
                      type="text"
                      placeholder="Search log..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`placeholder:text-slate-500 text-xs pl-8 pr-3 py-1.5 rounded-lg border max-w-[150px] focus:outline-none focus:ring-1 focus:ring-indigo-600 ${
                        darkMode ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-200 text-slate-900"
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Subtab Render Area */}
              <div className="flex-1 p-5 overflow-y-auto">
                {activeTab === 'conversations' && (
                  <div className="space-y-3.5 text-left text-xs font-sans">
                    {filteredLogs.length > 0 ? (
                      filteredLogs.map((log) => {
                        return (
                          <div
                            key={log.id}
                            className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors ${
                              darkMode ? "bg-slate-900/40 border-slate-800/60" : "bg-slate-50/60 border-slate-205"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              {/* Channel Identifier Icon */}
                              <div className={`p-2 rounded-lg mt-0.5 ${
                                log.channel === 'call'
                                  ? 'bg-emerald-500/10 text-emerald-400'
                                  : log.channel === 'whatsapp'
                                    ? 'bg-indigo-500/10 text-indigo-400'
                                    : 'bg-violet-500/10 text-violet-400'
                              }`}>
                                {log.channel === 'call' && <PhoneCall className="w-4 h-4" />}
                                {log.channel === 'whatsapp' && <MessageSquare className="w-4 h-4" />}
                                {log.channel === 'email' && <Mail className="w-4 h-4" />}
                              </div>

                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className={`font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>{log.customer}</span>
                                  <span className={`text-[9px] uppercase px-1.5 py-0.5 rounded-sm font-semibold tracking-wider ${
                                    log.status === "completed" || log.status === "resolved"
                                      ? "bg-emerald-500/10 text-emerald-400"
                                      : log.status === "active"
                                        ? "bg-green-500/15 text-green-400 animate-pulse font-bold"
                                        : "bg-amber-500/10 text-amber-500"
                                  }`}>
                                    {log.status}
                                  </span>
                                  {log.duration && (
                                    <span className="text-[10px] text-slate-500 font-mono">({log.duration})</span>
                                  )}
                                </div>
                                <p className={darkMode ? "text-slate-400" : "text-slate-600"}>{log.summary}</p>
                              </div>
                            </div>
                            <div className="text-[10px] text-slate-500 font-mono self-end sm:self-center shrink-0">
                              {log.time}
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-center py-10">
                        <AlertCircle className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                        <span className="text-slate-400">No active interactions match "{searchQuery}"</span>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="h-full flex flex-col justify-between text-left">
                    <div>
                      <h4 className="text-sm font-bold mb-1">AI Cost Preservation Metrics</h4>
                      <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>Hourly performance comparison chart depicting weekly preserved customer leads.</p>
                    </div>

                    {/* Highly custom, beautiful interactive SVG Area Graph */}
                    <div className="h-44 w-full my-4 relative">
                      <svg viewBox="0 0 500 150" className="w-full h-full overflow-visible">
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Grid lines */}
                        <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(128,128,128,0.1)" strokeDasharray="3" />
                        <line x1="0" y1="60" x2="500" y2="60" stroke="rgba(128,128,128,0.1)" strokeDasharray="3" />
                        <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(128,128,128,0.1)" strokeDasharray="3" />
                        
                        {/* Area Fill */}
                        <path
                          d="M0,130 Q80,110 150,60 T300,45 T450,25 L500,20 L500,140 L0,140 Z"
                          fill="url(#chartGrad)"
                        />
                        {/* Stroke Path Line */}
                        <path
                          d="M0,130 Q80,110 150,60 T300,45 T450,25 L500,20"
                          fill="none"
                          stroke="#6366f1"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        {/* Data dots */}
                        <circle cx="150" cy="60" r="5" fill="#a5b4fc" stroke="#4f46e5" strokeWidth="2" />
                        <text x="145" y="45" fill="#818cf8" fontSize="10" fontWeight="bold">92% AI Rate</text>
                        <circle cx="450" cy="25" r="5" fill="#a5b4fc" stroke="#4f46e5" strokeWidth="2" />
                        <text x="415" y="15" fill="#818cf8" fontSize="10" fontWeight="bold">98.2% Accurate</text>
                      </svg>
                      {/* X Axis Labels */}
                      <div className={`flex justify-between items-center text-[10px] font-mono mt-1 ${darkMode ? "text-slate-550" : "text-slate-450"}`}>
                        <span>Week 1</span>
                        <span>Week 2</span>
                        <span>Week 3</span>
                        <span>Week 4 (Current)</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 border-t pt-4 border-slate-800/10 dark:border-slate-800/60">
                      <div>
                        <span className="text-xs text-slate-550 block">Accuracy Ratio</span>
                        <span className="text-base font-bold text-emerald-450">98.4%</span>
                      </div>
                      <div>
                        <span className="text-xs text-slate-550 block">Inbound Solved</span>
                        <span className="text-base font-bold text-indigo-400">91.8%</span>
                      </div>
                      <div>
                        <span className="text-xs text-slate-550 block">Average Latency</span>
                        <span className="text-base font-bold text-indigo-300">1.25s</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'crm' && (
                  <div className="space-y-4 text-left">
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left">
                        <thead>
                          <tr className={`border-b ${darkMode ? "text-slate-400 border-slate-800" : "text-slate-500 border-slate-205"}`}>
                            <th className="pb-2.5 font-bold">Customer</th>
                            <th className="pb-2.5 font-bold">Phone Number</th>
                            <th className="pb-2.5 font-bold">Audience Channel</th>
                            <th className="pb-2.5 font-bold">Feedback Mood</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/10 dark:divide-slate-800/60">
                          {customers.map((c, i) => (
                            <tr key={i} className={darkMode ? "text-slate-350" : "text-slate-650"}>
                              <td className="py-3 font-bold text-slate-900 dark:text-white">{c.name}</td>
                              <td className="py-3 font-mono">{c.phone}</td>
                              <td className="py-3">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                                  c.category.includes('Salon') ? 'bg-pink-500/10 text-pink-400' : 'bg-orange-500/10 text-orange-400'
                                }`}>
                                  {c.category}
                                </span>
                              </td>
                              <td className="py-3 font-bold text-emerald-400">{c.sentiment}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'config' && (
                  <div className="space-y-5 text-left">
                    <h4 className="text-sm font-bold mb-2">Configure Voxentra AI Engine Keynotes</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* LLM Temperature controller */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold flex items-center gap-1.5"><Server className="w-4 h-4 text-indigo-400" /> AI Temperature / Creativity:</span>
                          <span className="font-mono text-indigo-400 font-bold">{aiTemperature} (Accurate)</span>
                        </div>
                        <input
                          type="range"
                          min="0.1"
                          max="1.0"
                          step="0.05"
                          value={aiTemperature}
                          onChange={(e) => setAiTemperature(parseFloat(e.target.value))}
                          className="w-full bg-slate-800 accent-indigo-600 h-1 rounded"
                        />
                        <p className={`text-[10px] ${darkMode ? "text-slate-500" : "text-slate-400"}`}>Lower temperatures assure the calling agent strictly stick to your menu PDF cards and store rules.</p>
                      </div>

                      {/* Accent dialect toggles */}
                      <div className="space-y-2">
                        <span className="text-xs font-bold flex items-center gap-1.5"><Volume2 className="w-4 h-4 text-indigo-400" /> Accent Dialect & Pronunciation:</span>
                        <select
                          value={accentSelect}
                          onChange={(e) => setAccentSelect(e.target.value)}
                          className={`w-full text-xs p-2.5 rounded-lg border-slate-800 border focus:ring-1 focus:ring-indigo-600 focus:outline-none ${
                            darkMode ? "bg-slate-900 text-slate-100" : "bg-white text-slate-900"
                          }`}
                        >
                          <option value="formal-lahore">Standard Urdu (Lahore Academic Pronunciation)</option>
                          <option value="karachi-urban">Karachi Urban Dialect (Conversational)</option>
                          <option value="islamabad-corporate">Polite Bilingual English-Urdu (Corporate)</option>
                          <option value="english-uk">Standard British Accent (English)</option>
                        </select>
                      </div>

                    </div>

                    <div className={`p-4 rounded-xl border flex items-center justify-between gap-4 mt-4 ${
                      darkMode ? "bg-slate-900/60 border-slate-800" : "bg-indigo-50/20 border-indigo-100"
                    }`}>
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                        <div>
                          <h5 className="text-xs font-bold">Natively translate on-the-fly:</h5>
                          <p className={`text-[10px] ${darkMode ? "text-slate-500" : "text-slate-400"}`}>Translating incoming requests instantly without cloud token overheads.</p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={urduDialeclt}
                        onChange={(e) => setUrduDialect(e.target.checked)}
                        className="w-4 h-4 text-indigo-600 accent-indigo-600"
                      />
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Prompt / Live Demonstration trigger - 4 Columns */}
          <div className="lg:col-span-4 space-y-6">
            <div className={`p-6 rounded-2xl border text-left flex flex-col justify-between h-full relative overflow-hidden ${
              darkMode ? "bg-slate-950 border-slate-805" : "bg-slate-50 border-slate-205"
            }`}>
              
              {/* Spark effects inside card */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-600/10 blur-xl pointer-events-none rounded-full" />

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-600/10 text-indigo-400">
                    <Sparkles className="w-5 h-5 animate-spin" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block font-mono">Sandbox Sandbox</span>
                    <h3 className="text-lg font-extrabold leading-tight">Simulate Active AI Call</h3>
                  </div>
                </div>

                <p className={`text-xs leading-relaxed mb-6 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  Observe how instantly our database catches incoming telephone lines. Triggers pre-loaded orders and populates your "Conversations Log" table immediately!
                </p>

                <div className={`p-4 rounded-xl border text-xs mb-6 flex flex-col gap-2 ${
                  darkMode ? "bg-slate-900/50 border-slate-800" : "bg-white border-slate-200"
                }`}>
                  <div className="flex justify-between items-center text-slate-500 font-mono text-[9px]">
                    <span>OUTGOING SIGNAL</span>
                    <span>ACTIVE</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Nabeel J. (Takeaway)</span>
                    <span className="text-emerald-400 font-mono">Ready to Dial</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSimulateCall}
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all hover:shadow-lg shadow-indigo-600/30 cursor-pointer"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Connecting Virtual Dial...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    Simulate Call & Update Log
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
