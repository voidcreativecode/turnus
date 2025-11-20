import { ArrowRight, MessageCircle } from "lucide-react";

export const CTA = () => {
  return (
    <section
      className="py-24 lg:py-32 relative bg-white overflow-hidden"
      id="contato"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div
          className="relative bg-[#3B3B3B] shadow-2xl overflow-hidden group"
          style={{
            borderRadius: "4rem 1rem 4rem 1rem",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            <div className="relative h-64 lg:h-auto min-h-[300px] lg:min-h-[500px] overflow-hidden">
              <div className="absolute inset-0 bg-[#3B3B3B]/20 z-10 mix-blend-multiply"></div>{" "}
              <img
                src="/cta.avif"
                alt="Profissional de saúde sorrindo usando tablet"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#3B3B3B] via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:to-[#3B3B3B] z-10 opacity-90"></div>
            </div>

            <div className="p-8 md:p-12 lg:p-20 flex flex-col justify-center relative z-20">
              <h2 className="font-serif-brand text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.1]">
                Pronto para organizar sua escala?
              </h2>

              <p className="text-gray-300 text-lg mb-10 max-w-md leading-relaxed">
                Junte-se aos gestores que economizam horas de trabalho todo mês.
                Setup rápido e acompanhamento dedicado.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <button className="bg-[#C3FFD4] text-[#3B3B3B] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(195,255,212,0.3)] hover:shadow-[0_0_30px_rgba(195,255,212,0.5)] hover:-translate-y-1 inline-flex items-center gap-3 group/btn w-full sm:w-auto justify-center">
                  Agendar Demonstração
                  <ArrowRight
                    size={20}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>

                <button className="px-8 py-4 rounded-2xl font-bold text-white border border-white/20 hover:bg-white/10 transition-all inline-flex items-center gap-3 w-full sm:w-auto justify-center">
                  <MessageCircle size={20} />
                  Falar no WhatsApp
                </button>
              </div>

              <p className="mt-6 text-xs text-gray-400 uppercase tracking-wider opacity-60">
                Resposta em até 1 hora comercial
              </p>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C3FFD4] opacity-5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-[#839CC7] opacity-10 rounded-full blur-[80px] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
