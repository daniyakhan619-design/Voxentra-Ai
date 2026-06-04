import { useState, FormEvent } from "react";
import { PhoneCall, MessageSquare, Mail, CheckCircle2, ChevronRight, Sparkles, Send, Bot, User } from "lucide-react";

interface SolutionsProps {
  darkMode: boolean;
}

export default function Solutions({ darkMode }: SolutionsProps) {
  const [activeTab, setActiveTab] = useState<'call' | 'text' | 'email'>('call');
  
  // Text simulator state
  const [textMessages, setTextMessages] = useState([
    { role: 'user', text: "Hi, do you have any tables for 2 at 7 PM on Friday?" },
    { role: 'bot', text: "Hello! Let me verify our layout. Yes, absolutely! We have 2 cozy tables available. Shall I secure one under your name?" }
  ]);
  const [userInputText, setUserInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Email simulator state
  const [selectedInboundEmail, setSelectedInboundEmail] = useState(0);
  const [isDraftingEmail, setIsDraftingEmail] = useState(false);
  const [emailReply, setEmailReply] = useState("");

  const inboundEmails = [
    {
      from: "sarah.jenkins@gmail.com",
      subject: "Franchise business hours inquiry",
      body: "Hi team, I am planning a corporate gathering of 35 people next Tuesday. Do you extend your closing hours for catering, or do you have standard weekday parameters?",
      aiSuggestedReply: "Dear Sarah, Thank you for reaching out! We do indeed offer flexible timing brackets and bespoke menus for private corporate gatherings of 30+ attendees. I've flagged our primary event planner to reach out with space details within 2 hours. Let us know if you need to reserve sooner!"
    },
    {
      from: "marcus.k@techcorp.io",
      subject: "Refund request / billing glitch",
      body: "Hello, my credit card was charged twice for the salon appointment on May 28th. One charge for PKR 5,500 and another identical one. Can you initiate a reverse?",
      aiSuggestedReply: "Hi Marcus, We sincerely apologize for this duplicate billing! I've automatically verified your transactions against our payment gateway logs. The duplicate charge of PKR 5,500 has been reversed successfully. You will see it credit back within 2-3 business days. Please let us know if we can offer further assistance!"
    }
  ];

  const handleSendTextMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!userInputText.trim()) return;

    // Add user message
    const updatedMsgs = [...textMessages, { role: 'user', text: userInputText }];
    setTextMessages(updatedMsgs);
    setUserInputText("");
    setIsTyping(true);

    // Simulate AI response response after 1.5 seconds
    setTimeout(() => {
      let botResponse = "That sounds fantastic! Voxentra AI has captured this and safely logged it inside your Customer Dashboard. Let me know if there is anything else I can handle!";
      
      const textLower = userInputText.toLowerCase();
      if (textLower.includes("price") || textLower.includes("cost") || textLower.includes("how much")) {
        botResponse = "No setup fees! Starter plans begin at just PKR 10,000/month, providing full WhatsApp & SMS notifications.";
      } else if (textLower.includes("urdu") || textLower.includes("language")) {
        botResponse = "Yes! Our AI systems natively understand and speak both English, Urdu, and 'Roman Urdu' for seamless communication in Pakistan.";
      } else if (textLower.includes("book") || textLower.includes("reserve")) {
        botResponse = "I can book that in real-time. Please provide your preferred time slot and contact name!";
      }

      setTextMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const draftAIReply = () => {
    setIsDraftingEmail(true);
    setTimeout(() => {
      setEmailReply(inboundEmails[selectedInboundEmail].aiSuggestedReply);
      setIsDraftingEmail(false);
    }, 1200);
  };

  return (
    <section
      id="solutions"
      className={`py-20 md:py-28 transition-colors duration-300 relative ${
        darkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-500 font-bold text-xs uppercase tracking-widest bg-indigo-500/10 px-3 py-1.5 rounded-full inline-block mb-3">
            Core AI Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Automate Your Customer Interactions
          </h2>
          <p className={`text-base md:text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Voxentra AI gives businesses an army of virtual calling, texting, and email agents matching the eloquence and recall of an elite representative for a fraction of the cost.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'call', label: 'AI Calling Agent', icon: PhoneCall, color: 'border-emerald-500/40 text-emerald-400' },
            { id: 'text', label: 'AI Texting Automation', icon: MessageSquare, color: 'border-indigo-500/40 text-indigo-400' },
            { id: 'email', label: 'AI Email Automation', icon: Mail, color: 'border-violet-500/40 text-violet-400' },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setEmailReply(""); // Reset reply
                }}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold border transition-all text-sm md:text-base cursor-pointer ${
                  isActive
                    ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/20 scale-[1.02]"
                    : darkMode
                      ? "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Interactive Preview Container */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-2xl border p-6 md:p-10 ${
          darkMode ? "bg-slate-950 border-slate-800/80" : "bg-slate-50 border-slate-200"
        }`}>
          
          {/* Left Column - Specific Solution Descriptions */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {activeTab === 'call' && (
                <>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-4">
                    <PhoneCall className="w-3.5 h-3.5" /> Speak Fluently
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Intelligent AI Receptionists & Cold Dialers
                  </h3>
                  <p className={`text-sm md:text-base leading-relaxed mb-6 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                    Speak naturally to your customers, book calendars, answer service questions, and take telephone orders. Integrates directly with your store inventory or CRM.
                  </p>
                  <ul className="space-y-3.5">
                    {[
                      "Handles incoming calls 24/7 without hold times",
                      "Natively fluent in English and Urdu",
                      "Automated order punching & CRM scheduling",
                      "Voicemail filtering & direct human routing escalation"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className={darkMode ? "text-slate-300" : "text-slate-700"}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === 'text' && (
                <>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-4">
                    <MessageSquare className="w-3.5 h-3.5" /> Active 24/7 Messaging
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Smart WhatsApp & SMS Campaign Systems
                  </h3>
                  <p className={`text-sm md:text-base leading-relaxed mb-6 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                    Deliver appointment reminders, handle product reviews, issue coupon codes, and reply to customer catalog questions over WhatsApp Business and SMS.
                  </p>
                  <ul className="space-y-3.5">
                    {[
                      "WhatsApp API setup & verified business badge template support",
                      "Auto follow-ups triggered by calendar events",
                      "Interactive chat menus and immediate query resolve",
                      "Urdu and Roman Urdu conversational adaptation"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                        <span className={darkMode ? "text-slate-300" : "text-slate-700"}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === 'email' && (
                <>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-semibold mb-4">
                    <Mail className="w-3.5 h-3.5" /> Intelligent Inbox
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    AI Auto-Responder & Leads Cultivation
                  </h3>
                  <p className={`text-sm md:text-base leading-relaxed mb-6 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                    Monitor support mailboxes, reply to business emails with accurate information from your internal PDF docs, and qualify cold outreach leads instantly.
                  </p>
                  <ul className="space-y-3.5">
                    {[
                      "Analyzes inbound sentiment & categorizes priority",
                      "One-click AI drafting with internal vector memory accuracy",
                      "Integrates with Outlook, Gmail, and custom SMTP routing",
                      "Schedules reminders to follow up with cold accounts"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                        <span className={darkMode ? "text-slate-300" : "text-slate-700"}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/10 dark:border-slate-800/60">
              <span className={`text-sm font-mono block mb-1 ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                Operational performance metrics:
              </span>
              <span className="text-xl font-bold text-indigo-400">
                {activeTab === 'call' && "98% Answer Rate | < 2s Latency"}
                {activeTab === 'text' && "99.2% Deliverability | 100% WhatsApp Compliant"}
                {activeTab === 'email' && "Sentiment AI-Tagging | Auto-Replies in under 10s"}
              </span>
            </div>
          </div>

          {/* Right Column - Premium Live Sandbox Playground */}
          <div className="lg:col-span-7 flex items-center justify-center">
            
            {/* Call Simulator Playground */}
            {activeTab === 'call' && (
              <div className={`w-full max-w-md rounded-2xl p-6 border text-left shadow-lg ${
                darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
              }`}>
                <div className="flex items-center justify-between opacity-85 mb-6 border-b pb-3 border-slate-800/10 dark:border-slate-800/60">
                  <span className="text-xs font-bold tracking-widest uppercase text-indigo-400">Simulation Sandbox</span>
                  <span className={`text-[11px] font-mono ${darkMode ? "text-slate-500" : "text-slate-400"}`}>Urdu & English Ready</span>
                </div>

                <div className="space-y-4">
                  <div className={`flex items-start gap-3 p-3.5 rounded-xl border ${
                    darkMode ? "bg-slate-950/60 border-slate-800" : "bg-slate-50 border-slate-200"
                  }`}>
                    <div className="p-2.5 rounded-lg bg-pink-500/10 text-pink-400">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-400">Customer asks:</h4>
                      <p className={`text-sm font-semibold italic mt-1 ${darkMode ? "text-white" : "text-slate-800"}`}>
                        "Kya aapki restaurant mein special dinner platter available hai? Aur price kya hai?"
                      </p>
                    </div>
                  </div>

                  <div className="py-2 flex items-center justify-center">
                    <div className="h-0.5 bg-indigo-500/20 w-full relative">
                      <span className="absolute left-1/2 -top-3 -translate-x-1/2 bg-indigo-600 text-white font-mono text-[10px] font-bold px-2 py-1 rounded">
                        REASONING LOGIC
                      </span>
                    </div>
                  </div>

                  <div className={`flex items-start gap-3 p-3.5 rounded-xl border relative overflow-hidden ${
                    darkMode ? "bg-slate-950/60 border-slate-800" : "bg-indigo-50/40 border-indigo-100"
                  }`}>
                    <div className="absolute right-3 top-3">
                      <Sparkles className="w-4 h-4 text-indigo-500 animate-spin" />
                    </div>
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-indigo-500">Voxentra Native AI Speech:</h4>
                      <p className={`text-sm font-semibold mt-1 ${darkMode ? "text-emerald-400" : "text-slate-900"}`}>
                        "Ji bilkul! Hamara Special Dinner Platter features customized premium kebabs, tikka boti, aur special garlic naan. Iski price PKR 1,850 hai plus tax. Kya mein aap ki table reserve kardoon?"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Simulated Audio Wave Controls */}
                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>Generated speech voice pattern:</span>
                    <span>1.1s processing</span>
                  </div>
                  <div className="h-6 flex items-end justify-between px-2 bg-indigo-600/5 dark:bg-slate-950 rounded-lg py-1">
                    {[16, 24, 20, 10, 24, 32, 12, 16, 28, 20, 12, 8, 24, 30, 20, 16, 12, 28, 32, 20, 14, 16, 20, 8].map((ht, idx) => (
                      <div
                        key={idx}
                        className="w-1 bg-indigo-500 rounded-sm"
                        style={{ height: `${ht}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* WhatsApp Simulator Playground */}
            {activeTab === 'text' && (
              <div className="w-full max-w-sm rounded-2xl bg-[#0b141a] text-white p-4 shadow-xl border border-slate-800">
                
                {/* Whatsapp Header */}
                <div className="flex items-center gap-3 border-b border-gray-800 pb-3 mb-4">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80"
                      referrerPolicy="no-referrer"
                      alt="Avatar"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border border-slate-900 rounded-full" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold flex items-center gap-1.5">
                      Voxentra AI Assistant
                      <span className="bg-indigo-600/20 text-indigo-400 px-1.5 py-0.5 rounded text-[9px] uppercase font-bold tracking-widest leading-none">AI BOT</span>
                    </h4>
                    <span className="text-xs text-slate-400">Online • Typically replies instantly</span>
                  </div>
                </div>

                {/* Chat window body */}
                <div className="space-y-3 h-[220px] overflow-y-auto mb-4 pr-1 scrollbar-thin text-xs text-left">
                  {textMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`p-2.5 rounded-xl max-w-[85%] ${
                        msg.role === 'user'
                          ? 'bg-[#005c4b] text-white rounded-tr-none'
                          : 'bg-[#202c33] text-slate-200 rounded-tl-none'
                      }`}>
                        <p>{msg.text}</p>
                        <span className="block text-[8px] text-right text-slate-400 mt-1">
                          12:02 PM
                        </span>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-[#202c33] text-gray-400 p-2.5 rounded-xl rounded-tl-none flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Suggest Quick Replies clickable by the user */}
                <div className="flex gap-2 overflow-x-auto pb-2.5 scrollbar-none">
                  {[
                    "How much does it cost?",
                    "Do you support Urdu language?",
                    "Book a salon demo slot"
                  ].map((chip) => (
                    <button
                      key={chip}
                      onClick={() => {
                        setUserInputText(chip);
                      }}
                      className="px-2.5 py-1.5 rounded-full bg-[#202c33] hover:bg-[#2a3942] border border-slate-700/60 text-xs font-semibold cursor-pointer text-indigo-400 hover:text-indigo-300 transition-colors shrink-0"
                    >
                      {chip}
                    </button>
                  ))}
                </div>

                {/* Input form */}
                <form onSubmit={handleSendTextMessage} className="flex gap-2">
                  <input
                    type="text"
                    value={userInputText}
                    onChange={(e) => setUserInputText(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 bg-[#202c33] border border-slate-700/60 text-slate-100 rounded-xl px-3 py-2 text-xs focus:ring-1 focus:ring-indigo-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-xl transition-all active:scale-95 cursor-pointer flex items-center justify-center shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}

            {/* Email Composer Playground */}
            {activeTab === 'email' && (
              <div className={`w-full max-w-md rounded-2xl border p-5 text-left shadow-lg ${
                darkMode ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
              }`}>
                {/* Simulated Inbound Queue */}
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-2">Simulated Inbound Email Support Box:</span>
                <div className="flex gap-2 mb-4">
                  {inboundEmails.map((inbox, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedInboundEmail(idx);
                        setEmailReply("");
                      }}
                      className={`flex-1 p-2 rounded-lg border text-left transition-all text-xs cursor-pointer ${
                        selectedInboundEmail === idx
                          ? "bg-indigo-600/10 border-indigo-600 text-indigo-400 font-bold"
                          : darkMode
                            ? "bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-850"
                            : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <div className="truncate font-bold mb-1">{inbox.subject}</div>
                      <div className="truncate opacity-75">{inbox.from}</div>
                    </button>
                  ))}
                </div>

                {/* Selected email container */}
                <div className={`p-3 rounded-xl border text-xs mb-4 ${
                  darkMode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200"
                }`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold">{inboundEmails[selectedInboundEmail].from}</span>
                    <span className="text-slate-400">Received 12m ago</span>
                  </div>
                  <p className={`italic ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                    "{inboundEmails[selectedInboundEmail].body}"
                  </p>
                </div>

                {/* Draft AI response reply trigger */}
                {emailReply ? (
                  <div className={`p-4 rounded-xl border relative shadow-inner animate-[fadeIn_0.3s_ease] ${
                    darkMode ? "bg-indigo-950/20 border-indigo-500/30" : "bg-indigo-50/50 border-indigo-200"
                  }`}>
                    <div className="flex items-center gap-1 text-indigo-400 text-xs font-bold mb-2">
                      <Sparkles className="w-3.5 h-3.5 animate-bounce" /> Drafted Reply by Voxentra-Core AI Agent:
                    </div>
                    <p className={`text-xs leading-relaxed ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                      {emailReply}
                    </p>
                  </div>
                ) : (
                  <button
                    onClick={draftAIReply}
                    disabled={isDraftingEmail}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800/50 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg hover:shadow-indigo-600/20 transition-all cursor-pointer"
                  >
                    {isDraftingEmail ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Generating accurate response...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Auto-Draft Customer Reply
                      </>
                    )}
                  </button>
                )}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
