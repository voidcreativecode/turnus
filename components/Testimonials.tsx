import { MessageSquareQuote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Antes do Turnus, eu perdia 3 dias por mês fechando a folha de pagamento dos plantonistas. Hoje faço em 2 cliques. O suporte é fenomenal.",
    author: "Juliana Costa",
    role: "Diretora Clínica @ Hospital São Lucas",
    initials: "JC",
    bgColor: "bg-[#3B3B3B]",
    textColor: "text-white",
    cardBg: "bg-[#F2F2F2]",
    cardText: "text-gray-700",
    borderHover: "hover:border-[#C3FFD4]",
  },
  {
    quote:
      "A facilidade de trocar plantão pelo app mudou a vida da nossa equipe. Acabou a confusão nos grupos de WhatsApp.",
    author: "Dr. Ricardo Alves",
    role: "Coordenador UTI @ Santa Casa",
    initials: "RA",
    bgColor: "bg-[#C3FFD4]",
    textColor: "text-[#3B3B3B]",
    cardBg: "bg-[#3B3B3B]",
    cardText: "text-gray-200",
    authorColor: "text-[#C3FFD4]",
    roleColor: "text-gray-400",
    decorative: true,
  },
  {
    quote:
      "A implementação foi surpreendentemente rápida. Em uma semana já estávamos rodando com 100% da equipe engajada.",
    author: "Mariana Paiva",
    role: "Gestora de RH @ Clínica Vida",
    initials: "MP",
    bgColor: "bg-[#839CC7]",
    textColor: "text-white",
    cardBg: "bg-[#F2F2F2]",
    cardText: "text-gray-700",
    borderHover: "hover:border-[#B5FFFF]",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquareQuote className="text-[#839CC7]" />
              <span className="text-sm font-bold text-[#3B3B3B] uppercase tracking-widest">
                Depoimentos
              </span>
            </div>
            <h2 className="font-serif-brand text-4xl md:text-5xl text-[#3B3B3B]">
              Quem usa, não volta para a planilha.
            </h2>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={20}
                className="fill-[#3B3B3B] text-[#3B3B3B]"
              />
            ))}
            <span className="ml-2 font-bold text-[#3B3B3B]">
              4.9/5 de satisfação
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${
                testimonial.cardBg
              } p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent ${
                testimonial.borderHover || ""
              } ${testimonial.decorative ? "relative overflow-hidden" : ""}`}
            >
              {testimonial.decorative && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C3FFD4] opacity-10 rounded-bl-full"></div>
              )}
              <p
                className={`${
                  testimonial.cardText
                } text-lg mb-8 italic leading-relaxed ${
                  testimonial.decorative ? "relative z-10" : ""
                }`}
              >
                "{testimonial.quote}"
              </p>
              <div
                className={`flex items-center gap-4 ${
                  testimonial.decorative ? "relative z-10" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center ${testimonial.textColor} font-bold`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div
                    className={`font-bold ${
                      testimonial.authorColor || "text-[#3B3B3B]"
                    }`}
                  >
                    {testimonial.author}
                  </div>
                  <div
                    className={`text-xs ${
                      testimonial.roleColor || "text-gray-600"
                    }`}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
