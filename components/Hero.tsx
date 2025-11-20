import { Calendar, PlayCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#B5FFFF] opacity-10 blur-[120px] rounded-l-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#C3FFD4] opacity-20 blur-[100px] rounded-tr-full -z-10" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-8 animate-fade-in-up hover:border-[#C3FFD4] transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C3FFD4] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2E8B57]"></span>
          </span>
          <span className="text-xs font-bold tracking-wide uppercase text-gray-600">
            A nova referência em gestão de escalas
          </span>
        </div>

        <h1 className="font-serif-brand text-5xl md:text-7xl lg:text-8xl text-[#3B3B3B] leading-[0.9] mb-6 max-w-5xl mx-auto tracking-tight">
          Gestão de plantões com <br />
          <span className="italic text-[#65748D]">precisão cirúrgica.</span>
        </h1>

        <p className="font-sans-brand text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          O <strong>Turnus</strong> elimina o caos das planilhas e grupos de
          WhatsApp. Automatize escalas, gerencie trocas e centralize o
          financeiro em uma plataforma{" "}
          <span className="text-[#3B3B3B] font-semibold decoration-[#C3FFD4] underline decoration-2 underline-offset-2">
            intuitiva e inteligente
          </span>
          .
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-[#3B3B3B] text-[#C3FFD4] px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 hover:shadow-[#C3FFD4]/20 transition-all duration-300 flex items-center justify-center gap-3 group">
            Começar Agora
            <Calendar
              size={20}
              className="group-hover:text-white transition-colors"
            />
          </button>

          <button className="w-full sm:w-auto bg-white text-[#3B3B3B] border border-gray-200 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-2">
            <PlayCircle size={20} className="text-gray-400" />
            Ver como funciona
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-400 uppercase tracking-widest">
          Demonstração sem compromisso • Setup rápido
        </p>
      </div>
    </section>
  );
};
