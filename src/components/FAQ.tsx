import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { FAQItem } from "../types";

interface FAQProps {
  darkMode: boolean;
}

export default function FAQ({ darkMode }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How does Voxentra AI work?",
      answer: "Voxentra AI integrates into your existing telephony lines or WhatsApp business accounts. Our advanced Large Language Models process incoming calls or texts, reference your internal menu card/PDF system memory directories, and reply back to customers instantly in active bilingual voice or chat formats."
    },
    {
      question: "Is setup difficult?",
      answer: "Not at all. In fact, most local businesses are live in under 15 minutes! Simply synchronize your calendar (Google Calendar, Outlook, etc.), upload a PDF of your service roster or menu pricing, and choose your preferred AI voice dialect accent. Our systems generate the routing automatically."
    },
    {
      question: "Can it replace human receptionists?",
      answer: "Yes, fully! Voxentra AI is trained to comfortably execute 98% of standard reception duties (booking tables, answering store timings, checking inventory, logging guest feedback) without human supervision. For complex or high-priority requests, you can configure the AI to seamlessly pass the telephone line to a live human operator."
    },
    {
      question: "Does it support Urdu and English languages?",
      answer: "Yes, absolutely! Voxentra AI natively understands and speaks English, formal Urdu, and conversational 'Roman Urdu' (writing Urdu using the English alphabet). Our system switches languages dynamically depending on how your customer addresses the agent."
    },
    {
      question: "How much money can local SMEs save?",
      answer: "By replacing the need for full-time night shifts or outsourcing call centers, standard local cafes and businesses save an estimated PKR 100,000 to PKR 180,000 monthly! Additionally, immediate answer speeds mean you preserve valuable reservation revenue that typically goes missed on peak weekend hours."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`py-20 md:py-28 transition-colors duration-300 relative ${
        darkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-500 font-bold text-xs uppercase tracking-widest bg-indigo-500/10 px-3 py-1.5 rounded-full inline-block mb-3">
            Common Inquiries
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className={`text-base md:text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Got questions about integrations, localized Urdu dictionaries, or billing cycles? We are here to clarify how everything works.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all text-left overflow-hidden ${
                  isOpen
                    ? "ring-1 ring-indigo-500/40"
                    : ""
                } ${
                  darkMode 
                    ? "bg-slate-950 border-slate-805/70" 
                    : "bg-slate-50 border-slate-205"
                }`}
              >
                {/* Header question button */}
                <button
                  onClick={() => handleToggle(index)}
                  className={`w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-sm md:text-base gap-4 transition-colors cursor-pointer ${
                    isOpen && darkMode 
                      ? "text-indigo-400 bg-indigo-500/5" 
                      : isOpen
                        ? "text-indigo-600 bg-indigo-50/20"
                        : darkMode 
                          ? "text-white" 
                          : "text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 shrink-0 text-indigo-400 opacity-70" />
                    <span>{faq.question}</span>
                  </div>
                  {isOpen ? <ChevronUp className="w-5 h-5 shrink-0" /> : <ChevronDown className="w-5 h-5 shrink-0" />}
                </button>

                {/* Answer body panel */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t" : "max-h-0"
                  } ${
                    darkMode ? "border-slate-900" : "border-slate-200"
                  }`}
                >
                  <div className={`p-5 md:p-6 text-xs md:text-sm leading-relaxed ${
                    darkMode ? "text-slate-400 bg-slate-950" : "text-slate-600 bg-white"
                  }`}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
