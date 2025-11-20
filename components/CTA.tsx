import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section
      className="py-60 relative"
      id="contato"
      style={{
        background: "linear-gradient(to bottom, white 50%, #839CC7 50%)",
      }}
    >
      <div className="container mx-auto px-6">
        <div
          className="relative bg-linear-to-br from-[#3B3B3B] to-[#4A5568] overflow-hidden shadow-2xl"
          style={{
            borderRadius: "8rem 1rem 8rem 1rem",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Imagem à esquerda */}
            <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
              <img
                src="/cta.avif"
                alt="Profissional usando Turnus"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  borderRadius: "8rem 0 8rem 1rem",
                }}
              />
            </div>

            {/* Conteúdo à direita */}
            <div className="p-8 lg:p-16 lg:pr-20 flex flex-col justify-center">
              <h2 className="font-serif-brand text-5xl md:text-6xl lg:text-7xl text-white mb-10 leading-tight">
                Comece sua jornada com o Turnus hoje
              </h2>
              <button className="bg-[#C3FFD4] text-[#3B3B3B] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2 group w-fit">
                Comece agora
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-[#C3FFD4] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#839CC7] opacity-10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};
