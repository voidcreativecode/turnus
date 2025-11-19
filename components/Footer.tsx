import { HourglassLogo } from "./HourglassLogo";

export const Footer = () => {
  return (
    <footer className="bg-[#3B3B3B] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white/10 p-2 rounded-lg">
                <HourglassLogo className="w-6 h-6 text-[#C3FFD4]" />
              </div>
              <span className="font-serif-brand text-2xl">Turnus</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Tempus sub control. A solução definitiva para gestão de escalas
              complexas na saúde.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold mb-4 text-[#B5FFFF]">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">
                  Funcionalidades
                </li>
                <li className="hover:text-white cursor-pointer">Segurança</li>
                <li className="hover:text-white cursor-pointer">Planos</li>
                <li className="hover:text-white cursor-pointer">
                  Download App
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#B5FFFF]">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">Sobre Nós</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
                <li className="hover:text-white cursor-pointer">Carreiras</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-[#B5FFFF]">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">Privacidade</li>
                <li className="hover:text-white cursor-pointer">Termos</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-gray-500">
            © 2024 Turnus. Todos os direitos reservados.
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
