import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Sparkles, ArrowRight } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  onScrollTo: (id: string) => void;
}

export default function Navbar({ darkMode, setDarkMode, onScrollTo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Solutions", id: "solutions" },
    { name: "Industries", id: "industries" },
    { name: "Dashboard", id: "dashboard" },
    { name: "Pricing", id: "pricing" },
    { name: "FAQ", id: "faq" },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-900 shadow-lg shadow-slate-950/20 py-3"
            : "bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-md shadow-slate-200/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavClick("home")}
          >
            <div className={`p-2 rounded-xl transition-all duration-300 ${
              darkMode 
                ? "bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600/30" 
                : "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100"
            }`}>
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <span className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}>
              Voxentra<span className="text-indigo-600">AI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 duration-200 cursor-pointer ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Utility Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border transition-all duration-250 cursor-pointer ${
                darkMode
                  ? "border-slate-800 text-slate-400 hover:text-yellow-400 hover:bg-slate-900"
                  : "border-slate-200 text-slate-500 hover:text-indigo-600 hover:bg-slate-100"
              }`}
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Login */}
            <button
              onClick={() => handleNavClick("newsletter-cta")}
              className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                darkMode ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-950"
              }`}
            >
              Login
            </button>

            {/* Book Demo */}
            <button
              onClick={() => handleNavClick("demo-contact")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm shadow-indigo-600/10 hover:shadow-lg hover:shadow-indigo-600/20 active:scale-[0.98] transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
            >
              Book Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-3">
            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                darkMode
                  ? "border-slate-800 text-slate-400 hover:text-yellow-400"
                  : "border-slate-200 text-slate-500 hover:text-indigo-600"
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                darkMode ? "text-slate-300 hover:bg-slate-900" : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden absolute w-full left-0 border-t transition-all duration-350 ${
            darkMode
              ? "bg-slate-950/95 backdrop-blur-lg border-slate-900"
              : "bg-white/95 backdrop-blur-lg border-slate-100"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left text-base font-medium py-2 px-3 rounded-lg hover:bg-indigo-600/10 hover:text-indigo-600 transition-all cursor-pointer ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="border-t border-slate-800/20 pt-4 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick("newsletter-cta")}
                className={`text-center py-2 px-3 rounded-lg text-base font-semibold transition-all cursor-pointer ${
                  darkMode ? "text-slate-300 hover:bg-slate-900" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => handleNavClick("demo-contact")}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg shadow-indigo-600/25 cursor-pointer"
              >
                Book Demo
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
