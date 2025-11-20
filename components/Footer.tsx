import Link from "next/link";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Footer = () => {
  return (
    <footer className="bg-[#3B3B3B] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
          <div>
            <img
              src="/Negativa logo extensa.svg"
              alt="Turnus - Tempus sub control"
              className="h-32 mb-6"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-bold mb-4 text-[#B5FFFF]">Produto</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li
                  className="hover:text-white cursor-pointer transition-colors"
                  onClick={() => scrollToSection("funcionalidades")}
                >
                  Funcionalidades
                </li>
                <li
                  className="hover:text-white cursor-pointer transition-colors"
                  onClick={() => scrollToSection("funcionalidades")}
                >
                  Segurança
                </li>
                <li
                  className="hover:text-white cursor-pointer transition-colors"
                  onClick={() => scrollToSection("planos")}
                >
                  Planos
                </li>
                <li className="hover:text-white cursor-pointer transition-colors opacity-50">
                  Download App
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[#B5FFFF]">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">
                  <a
                    href="https://voidcc.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sobre a Void
                  </a>
                </li>
                <li className="hover:text-white cursor-pointer transition-colors opacity-50">
                  Carreiras
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[#B5FFFF]">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">
                  <Link href="/privacidade">Privacidade</Link>
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  <Link href="/termos">Termos</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()} Turnus. Todos os direitos reservados.
          </span>

          {/* Void Software House Signature */}
          <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full">
            <span>Desenvolvido com 🖤 pela</span>
            <span className="font-bold text-white tracking-wider">VOID</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
