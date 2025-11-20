"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Quanto tempo demora para implantar o Turnus?",
    answer:
      "Para clínicas com até 50 usuários, a implantação é imediata. Você cria a conta, configura os setores e convida a equipe. Para hospitais maiores ou redes, nossa equipe de onboarding auxilia no setup, que geralmente leva de 3 a 5 dias úteis para estar 100% operacional.",
  },
  {
    question: "Os plantonistas mais velhos terão dificuldade?",
    answer:
      "Desenhamos o Turnus pensando exatamente nisso. A interface é extremamente visual, com botões grandes e textos claros. Se o profissional sabe usar o WhatsApp, ele saberá usar o Turnus sem necessidade de treinamento complexo.",
  },
  {
    question: "Preciso cadastrar cartão de crédito para testar?",
    answer:
      "Não. Oferecemos um período de degustação gratuito para você montar sua primeira escala e sentir a diferença. A cobrança só inicia quando você decide oficializar o uso da ferramenta.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Nossa equipe de suporte é humana e atende via WhatsApp e E-mail. Clientes dos planos Pro e Enterprise têm prioridade na fila e gerente de conta dedicado para resolver dúvidas operacionais.",
  },
  {
    question: "Existe fidelidade ou multa de cancelamento?",
    answer:
      "Para os planos mensais, não há fidelidade. Você pode cancelar a qualquer momento sem multa. Para os planos anuais (com desconto), o cancelamento encerra a renovação automática, mantendo o acesso até o fim do período contratado.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Absolutamente. Seguimos rigorosamente a LGPD. Utilizamos criptografia de ponta a ponta e servidores de alta segurança. Além disso, o Turnus foca na gestão da escala, não armazenando prontuários médicos sensíveis dos pacientes.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-[#F2F2F2]" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif-brand text-3xl md:text-4xl text-[#3B3B3B] mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600">
            Tiramos suas dúvidas para você focar no que importa: a gestão.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-[#3B3B3B] shadow-lg"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span
                  className={`font-bold text-lg ${
                    openIndex === index ? "text-[#3B3B3B]" : "text-gray-600"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`p-2 rounded-full transition-colors ${
                    openIndex === index
                      ? "bg-[#3B3B3B] text-[#C3FFD4]"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
