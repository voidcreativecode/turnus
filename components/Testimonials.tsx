import { MessageSquareQuote, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Antes do Turnus, eu perdia 3 dias por mês fechando a folha de pagamento dos plantonistas. Hoje faço em 2 cliques. O suporte é fenomenal.",
    author: "Juliana Costa",
    role: "Diretora Clínica @ Hospital São Lucas",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&h=200&auto=format&fit=crop",
    cardBg: "bg-[#F2F2F2]",
    cardText: "text-gray-600",
    authorColor: "text-[#3B3B3B]",
    roleColor: "text-gray-500",
    borderHover: "hover:border-[#3B3B3B]/20",
  },
  {
    quote:
      "A facilidade de trocar plantão pelo app mudou a vida da nossa equipe. Acabou a confusão e os prints perdidos nos grupos de WhatsApp.",
    author: "Dr. Ricardo Alves",
    role: "Coordenador UTI @ Santa Casa",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&auto=format&fit=crop",
    cardBg: "bg-[#3B3B3B]",
    cardText: "text-gray-300",
    authorColor: "text-white",
    roleColor: "text-[#C3FFD4]",
    featured: true,
  },
  {
    quote:
      "A implementação foi surpreendentemente rápida. Em uma semana já estávamos rodando com 100% da equipe engajada.",
    author: "Mariana Paiva",
    role: "Gestora de RH @ Clínica Vida",
    image:
      "https://images.unsplash.com/photo-1594824476969-51c44d7ebe67?q=80&w=200&h=200&auto=format&fit=crop",
    cardBg: "bg-[#F2F2F2]",
    cardText: "text-gray-600",
    authorColor: "text-[#3B3B3B]",
    roleColor: "text-gray-500",
    borderHover: "hover:border-[#3B3B3B]/20",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-white border-t border-b border-gray-100 relative overflow-hidden">
      {/* Decoração de fundo sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-[#E6FFEF] rounded-lg">
                <MessageSquareQuote className="text-[#2E8B57]" size={20} />
              </div>
              <span className="text-sm font-bold text-[#3B3B3B] uppercase tracking-widest">
                Depoimentos Reais
              </span>
            </div>
            <h2 className="font-serif-brand text-4xl md:text-5xl text-[#3B3B3B] leading-tight">
              Quem usa, não volta <br /> para a planilha.
            </h2>
          </div>

          {/* Rating Box */}
          <div className="bg-[#F9FAFB] border border-gray-200 p-4 rounded-2xl flex items-center gap-4 shadow-sm">
            <div className="flex flex-col">
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className="fill-[#F59E0B] text-[#F59E0B]"
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 font-medium">
                Baseado em 50+ reviews
              </span>
            </div>
            <div className="h-8 w-px bg-gray-200"></div>
            <span className="font-bold text-[#3B3B3B] text-xl">
              4.9<span className="text-sm text-gray-400 font-normal">/5</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`
                ${
                  testimonial.cardBg
                } p-8 rounded-4xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden
                ${
                  testimonial.featured
                    ? "shadow-2xl shadow-[#3B3B3B]/20 md:-mt-4 md:mb-4 ring-4 ring-[#F2F2F2]"
                    : `border border-transparent ${testimonial.borderHover} hover:shadow-xl hover:-translate-y-1`
                }
              `}
            >
              {/* Ícone de aspas decorativo */}
              <Quote
                className={`absolute top-6 right-8 opacity-10 w-16 h-16 ${
                  testimonial.featured ? "text-white" : "text-[#3B3B3B]"
                }`}
              />

              <div className="relative z-10">
                {/* Estrelas dentro do card */}
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      className={`${
                        testimonial.featured
                          ? "fill-[#C3FFD4] text-[#C3FFD4]"
                          : "fill-[#3B3B3B] text-[#3B3B3B]"
                      }`}
                    />
                  ))}
                </div>

                <p
                  className={`${testimonial.cardText} text-lg mb-8 font-medium leading-relaxed`}
                >
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 relative z-10 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className={`w-12 h-12 rounded-full object-cover border-2 ${
                    testimonial.featured
                      ? "border-[#C3FFD4]"
                      : "border-gray-200"
                  }`}
                />
                <div>
                  <div
                    className={`font-bold text-sm ${testimonial.authorColor}`}
                  >
                    {testimonial.author}
                  </div>
                  <div className={`text-xs ${testimonial.roleColor}`}>
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
