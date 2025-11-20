"use client";

import { Cookie, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("turnus_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("turnus_cookie_consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-md z-60 animate-fade-in-up">
      <div className="bg-[#3B3B3B] text-white p-6 rounded-2xl shadow-2xl border border-gray-700 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>

        <div className="flex items-start gap-4">
          <div className="p-2 bg-[#C3FFD4]/10 rounded-lg shrink-0">
            <Cookie className="text-[#C3FFD4]" size={24} />
          </div>
          <div>
            <h4 className="font-bold text-[#C3FFD4] mb-1 text-sm">
              Sua privacidade importa
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              Utilizamos cookies para melhorar sua experiência e analisar o
              tráfego, conforme nossa{" "}
              <Link
                href="/privacidade"
                className="underline hover:text-white text-gray-200"
              >
                Política de Privacidade
              </Link>{" "}
              e{" "}
              <Link
                href="/lgpd"
                className="underline hover:text-white text-gray-200"
              >
                Diretrizes LGPD
              </Link>
              .
            </p>
            <div className="flex gap-3">
              <button
                onClick={acceptCookies}
                className="bg-[#C3FFD4] text-[#3B3B3B] px-4 py-2 rounded-lg text-xs font-bold hover:bg-white transition-colors flex-1"
              >
                Aceitar e Fechar
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg text-xs font-medium hover:border-gray-500 hover:text-white transition-colors"
              >
                Recusar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
