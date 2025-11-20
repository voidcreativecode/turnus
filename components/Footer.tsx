"use client";

import { Instagram, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSectionNavigation = (sectionId: string) => {
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-[#3B3B3B] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12 lg:gap-20">
          <div className="max-w-sm">
            <img
              src="/Negativa logo extensa.svg"
              alt="Turnus - Tempus sub control"
              className="h-24 mb-6 -ml-2"
            />
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              A plataforma definitiva para gestão de escalas médicas. Automatize
              processos, elimine conflitos e ganhe tempo.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#C3FFD4] hover:text-[#3B3B3B] transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#C3FFD4] hover:text-[#3B3B3B] transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:contato@turnus.com.br"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#C3FFD4] hover:text-[#3B3B3B] transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 w-full lg:w-auto">
            <div>
              <h3 className="font-bold mb-6 text-[#C3FFD4]">Produto</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <button
                    onClick={() => handleSectionNavigation("funcionalidades")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Funcionalidades
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSectionNavigation("planos")}
                    className="hover:text-white transition-colors text-left"
                  >
                    Planos & Preços
                  </button>
                </li>
                <li
                  className="group flex items-center gap-2 opacity-50 cursor-not-allowed"
                  title="Em breve"
                >
                  <span>App Mobile</span>
                  <span className="text-[10px] border border-gray-600 rounded px-1">
                    Em breve
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-[#C3FFD4]">Empresa</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <a
                    href="https://voidcc.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Sobre a Void
                  </a>
                </li>
                <li
                  className="opacity-50 cursor-not-allowed"
                  title="Sem vagas no momento"
                >
                  Carreiras
                </li>
                <li>
                  <a
                    href="mailto:suporte@turnus.com.br"
                    className="hover:text-white transition-colors"
                  >
                    Central de Ajuda
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-6 text-[#C3FFD4]">Legal</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <Link
                    href="/privacidade"
                    className="hover:text-white transition-colors"
                  >
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="/termos"
                    className="hover:text-white transition-colors"
                  >
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lgpd"
                    className="hover:text-white transition-colors"
                  >
                    LGPD
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="text-sm text-gray-400">
              © {new Date().getFullYear()} Turnus. Todos os direitos reservados.
            </span>
            <span className="text-[10px] text-gray-600 font-medium uppercase tracking-wide">
              LM Soluções Digitais LTDA • CNPJ 60.683.849/0001-39
            </span>
          </div>

          <a
            href="https://voidcc.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <span>Desenvolvido com 🖤 pela</span>
            <span className="font-bold text-white tracking-wider group-hover:text-[#C3FFD4] transition-colors">
              VOID
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
