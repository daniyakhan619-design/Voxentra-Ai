import { Star } from "lucide-react";
import { Testimonial } from "../types";

interface TestimonialsProps {
  darkMode: boolean;
}

export default function Testimonials({ darkMode }: TestimonialsProps) {
  const reviews: Testimonial[] = [
    {
      name: "Muhammad Ali",
      role: "Owner",
      company: "Kabab & Co. Restaurants",
      industry: "Restaurant",
      avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=120&h=120&q=80",
      quote: "Voxentra AI handles over 80 incoming reservation calls every Friday evening without breaking a sweat! Our wait staff never has to run back to answer landlines during rush hour now. It has saved us PKR 110,000 in monthly staffing costs.",
      rating: 5
    },
    {
      name: "Amina Shah",
      role: "General Manager",
      company: "Velvet & Gold Luxury Salon",
      industry: "Salon & Spa",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
      quote: "No-shows dropped by 85% within our first month of integrating Voxentra. Stylist calendars automatically synchronize with automated bilingual WhatsApp reminders. The Roman Urdu assistant matches the local accent and works flawlessly.",
      rating: 5
    },
    {
      name: "Dr. Tariq Mahmood",
      role: "Medical Director",
      company: "Mahmood Family Clinics",
      industry: "Clinic",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&h=120&q=80",
      quote: "Our front desk receptionist used to spend 4 hours daily confirming patient appointments. Now, Voxentra AI manages outbound scheduling validation silently. Clinic efficiency has drastically improved and our patients are happier.",
      rating: 5
    },
    {
      name: "Aisha Faisal",
      role: "Founder & CEO",
      company: "Faisal Kurta & Lawn Fabrics",
      industry: "Retail Emporium",
      avatar: "https://images.unsplash.com/photo-1534751516642-a131ffd107fd?auto=format&fit=crop&w=120&h=120&q=80",
      quote: "Customers browse collections and ask about inventory sizes at 2 AM over WhatsApp, and Voxentra AI answers back in Roman Urdu natively with exact link URLs! Our conversion ratios spiked by 28% and feedback is superb.",
      rating: 5
    }
  ];

  return (
    <section
      id="testimonials"
      className={`py-20 md:py-28 transition-colors duration-300 relative ${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-500 font-bold text-xs uppercase tracking-widest bg-indigo-500/10 px-3 py-1.5 rounded-full inline-block mb-3">
            Real Partner Feedback
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Loved by Local Business Owners
          </h2>
          <p className={`text-base md:text-lg ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Listen to the exact return on investment experienced by clinic managers, shop owners, and restaurant franchises across Pakistan since adopting Voxentra AI.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((rv, index) => {
            return (
              <div
                key={index}
                className={`p-6 md:p-8 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm ${
                  darkMode 
                    ? "bg-slate-900/60 border-slate-805/80 shadow-slate-950/40" 
                    : "bg-white border-slate-200/80 shadow-slate-300/10"
                }`}
              >
                <div>
                  {/* Rating star cards */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(rv.rating)].map((_, starI) => (
                      <Star key={starI} className="w-4 h-4 fill-amber-450 stroke-none" />
                    ))}
                  </div>

                  {/* Body quote review text */}
                  <p className={`text-sm md:text-base leading-relaxed mb-6 font-medium italic ${
                    darkMode ? "text-slate-250" : "text-slate-800"
                  }`}>
                    "{rv.quote}"
                  </p>
                </div>

                {/* Personal Bio details */}
                <div className="flex items-center gap-3.5 border-t border-slate-800/10 dark:border-slate-800/60 pt-5 mt-2">
                  <img
                    src={rv.avatar}
                    referrerPolicy="no-referrer"
                    alt={rv.name}
                    className="w-12 h-12 rounded-full border border-indigo-500/30 object-cover"
                  />
                  <div>
                    <h4 className="font-extrabold text-sm md:text-base">{rv.name}</h4>
                    <p className={`text-xs ${darkMode ? "text-slate-500" : "text-slate-400"}`}>
                      {rv.role}, <span className="text-indigo-400 font-semibold">{rv.company}</span> ({rv.industry})
                    </p>
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
