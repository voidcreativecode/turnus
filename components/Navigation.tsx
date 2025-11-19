"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { HourglassLogo } from "./HourglassLogo";

interface NavigationProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const navLinks = [
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#planos", label: "Planos" },
  { href: "#contato", label: "Contato" },
];

export const Navigation = ({
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavigationProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // altura do header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Remove o # da URL sem recarregar a página
        window.history.pushState({}, "", window.location.pathname);
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            className="flex items-center gap-2 group cursor-pointer"
            onClick={scrollToTop}
          >
            <div className="bg-[#3B3B3B] text-[#C3FFD4] p-2 rounded-lg group-hover:rotate-180 transition-transform duration-700">
              <HourglassLogo className="w-6 h-6" />
            </div>
            <div>
              <span className="font-serif-brand text-2xl tracking-tight block leading-none">
                Turnus
              </span>
              <span className="font-sans-brand text-[0.65rem] uppercase tracking-widest text-[#4A5568] hidden md:block">
                Tempus sub control
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="hover:text-[#7D8EAD] transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-[#3B3B3B] text-white px-6 py-2.5 rounded-full hover:bg-[#4A5568] transition-all duration-300 flex items-center gap-2 hover:scale-105">
              Acessar Sistema <ArrowRight size={16} />
            </button>
          </div>

          <button
            className="md:hidden text-[#3B3B3B]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-20 right-0 left-0 bg-white shadow-2xl rounded-b-3xl p-6 mx-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-lg font-medium text-[#3B3B3B] hover:text-[#7D8EAD] transition-colors py-2 border-b border-gray-100 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <button className="bg-[#3B3B3B] text-white px-6 py-3 rounded-full hover:bg-[#4A5568] transition-all duration-300 flex items-center justify-center gap-2 mt-4">
                Acessar Sistema <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
