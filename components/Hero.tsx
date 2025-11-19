import { Calendar } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#B5FFFF] opacity-10 blur-[120px] rounded-l-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#C3FFD4] opacity-20 blur-[100px] rounded-tr-full -z-10" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-[#C3FFD4] border border-[#3B3B3B]"></span>
          <span className="text-xs font-semibold tracking-wide uppercase text-gray-500">
            Nova versão 2.0 disponível
          </span>
        </div>

        <h1 className="font-serif-brand text-5xl md:text-7xl lg:text-8xl text-[#3B3B3B] leading-[0.9] mb-6 max-w-5xl mx-auto">
          Gestão de plantões com <br />
          <span className="italic text-[#65748D]">precisão cirúrgica.</span>
        </h1>

        <p className="font-sans-brand text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          O <strong>Turnus</strong> substitui planilhas caóticas por
          inteligência automatizada. Controle escalas, trocas e pagamentos em
          uma única plataforma sofisticada.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-[#3B3B3B] text-[#C3FFD4] px-8 py-4 rounded-2xl font-medium text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
            Agendar Demonstração <Calendar size={20} />
          </button>
          <button className="w-full sm:w-auto bg-white text-[#3B3B3B] border border-gray-200 px-8 py-4 rounded-2xl font-medium text-lg hover:bg-gray-50 transition-all duration-300">
            Ver Tour do Produto
          </button>
        </div>
      </div>
    </section>
  );
};
