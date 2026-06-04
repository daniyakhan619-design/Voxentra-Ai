import { useState, FormEvent } from "react";
import { Calendar, CheckCircle2, Sparkles, Send, PhoneCall, Mail, User, Store } from "lucide-react";

interface LeadFormProps {
  darkMode: boolean;
}

export default function LeadForm({ darkMode }: LeadFormProps) {
  const [name, setName] = useState("");
  const [businessType, setBusinessType] = useState("cafe");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Please pre-fill your Name, Email, and Phone number.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section
      id="demo-contact"
      className={`py-20 md:py-28 transition-colors duration-300 relative ${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Promotional Message */}
          <div className="lg:col-span-5 text-left">
            <span className="text-indigo-500 font-bold text-xs uppercase tracking-widest bg-indigo-500/10 px-3 py-1.5 rounded-full inline-block mb-3">
              Get Started Now
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              Book Your Free Demo Today
            </h2>
            <p className={`text-base md:text-lg mb-8 leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
              Schedule a personalized 1-on-1 walkthrough with an expert and set up custom AI-driven calling & WhatsApp flows tailored specifically for your café, medical clinic, salon, or retail brand.
            </p>

            {/* Quick highlight points of what they get on the call */}
            <div className="space-y-4">
              {[
                { title: "Bespoke Call Script Drafting", desc: "We'll draft your calling agent script together live on the call." },
                { title: "Free WhatsApp API Setup Guide", desc: "No meta verification friction. Learn how to verify your badge in hours." },
                { title: "1-Week Full Trial Access Check", desc: "Test the AI dashboard features completely free. No card needed." }
              ].map((highlight, idx) => (
                <div key={idx} className="flex gap-3.5">
                  <div className="p-2 h-9 w-9 rounded-lg bg-indigo-600/10 text-indigo-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base">{highlight.title}</h4>
                    <p className={`text-xs md:text-sm ${darkMode ? "text-slate-450" : "text-slate-600"}`}>{highlight.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Beautiful Interactive Form Container */}
          <div className="lg:col-span-7">
            <div className={`p-6 md:p-10 rounded-3xl border text-left shadow-2xl relative overflow-hidden transition-all ${
              isSubmitted
                ? "bg-indigo-650 text-white border-indigo-600"
                : darkMode
                  ? "bg-slate-900 border-slate-805"
                  : "bg-white border-slate-205"
            }`}>

              {isSubmitted ? (
                /* Success booking message confirmation */
                <div className="text-center py-8 space-y-6 animate-[fadeIn_0.4s_ease]">
                  <div className="w-16 h-16 bg-white/20 text-white rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Booking Request Logged!</h3>
                  <p className="text-sm md:text-base text-indigo-100 max-w-md mx-auto">
                    Hi <strong className="text-white">{name}</strong>, thank you for locking in your demo! We've automatically dispatched an SMS reminder to <span className="font-mono text-white underline">{phone}</span> and diagnostic parameters to <span className="underline">{email}</span>. One of our AI onboarding consultants will reach out shortly!
                  </p>

                  <div className="pt-4 border-t border-indigo-500/30">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setName("");
                        setEmail("");
                        setPhone("");
                        setMessage("");
                      }}
                      className="px-6 py-2.5 bg-white text-indigo-600 rounded-xl font-bold hover:bg-slate-50 transition-all cursor-pointer text-xs"
                    >
                      Book Another Demonstration Slot
                    </button>
                  </div>
                </div>
              ) : (
                /* Lead generation input form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-indigo-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-450">Fill to request simulation</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Full Name input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-400 block flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-indigo-400" /> Complete Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Zainab Malik"
                        className={`w-full text-xs md:text-sm p-3 rounded-xl border focus:outline-none focus:ring-1 focus:ring-indigo-600 ${
                          darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-200 text-slate-900"
                        }`}
                      />
                    </div>

                    {/* Business category drop check */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-400 block flex items-center gap-1">
                        <Store className="w-3.5 h-3.5 text-indigo-400" /> Business Segment
                      </label>
                      <select
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className={`w-full text-xs md:text-sm p-3 rounded-xl border focus:outline-none focus:ring-1 focus:ring-indigo-600 ${
                          darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-200 text-slate-900"
                        }`}
                      >
                        <option value="restaurant">Restaurant Cafe</option>
                        <option value="clinic">Medical Practise / Clinic</option>
                        <option value="salon">Salon Style & Spa</option>
                        <option value="retail">Retail Boutique / E-Commerce</option>
                        <option value="franchise">Multi-Location franchise</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Email address */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-400 block flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-indigo-400" /> Corporate Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. zainab@salonbrand.pk"
                        className={`w-full text-xs md:text-sm p-3 rounded-xl border focus:outline-none focus:ring-1 focus:ring-indigo-600 ${
                          darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-200 text-slate-900"
                        }`}
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-400 block flex items-center gap-1">
                        <PhoneCall className="w-3.5 h-3.5 text-indigo-400" /> Contact Mobile Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +92 300 1234567"
                        className={`w-full text-xs md:text-sm p-3 rounded-xl border focus:outline-none focus:ring-1 focus:ring-indigo-600 ${
                          darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-200 text-slate-900"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Message memo */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-400 block">Tell us about your traffic parameters:</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. We miss about 15 reservation calls every Friday weekend. Looking to automate scheduling..."
                      className={`w-full text-xs md:text-sm p-3 rounded-xl border focus:outline-none focus:ring-1 focus:ring-indigo-600 ${
                        darkMode ? "bg-slate-950 border-slate-800 text-slate-100" : "bg-slate-50 border-slate-200 text-slate-900"
                      }`}
                    />
                  </div>

                  {/* Submit CTA button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-805 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-indigo-650/40 text-sm flex items-center justify-center gap-2 cursor-pointer border border-indigo-500/20 active:scale-[0.98] transition-all"
                  >
                    {loading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Validating Booking Credentials...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit & Book Demo Slot
                      </>
                    )}
                  </button>

                  <p className={`text-[10px] text-center ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                    By submitting, you consent to receive a one-off SMS verification reminder from Voxentra-Systems. No spam. You can unsubscribe anytime.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
