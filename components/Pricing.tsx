"use client";

import {
  Activity,
  ArrowRight,
  Check,
  HelpCircle,
  LifeBuoy,
  Mail,
  MessageCircle,
  Monitor,
  Smartphone,
  Users,
} from "lucide-react";

interface PricingProps {
  annualBilling: boolean;
  setAnnualBilling: (value: boolean) => void;
}

// Função auxiliar para renderizar texto com highlight sem usar dangerouslySetInnerHTML
const renderFeatureText = (text: string, highlight?: string) => {
  if (!highlight) return <span>{text}</span>;

  const parts = text.split(highlight);
  return (
    <span>
      {parts[0]}
      <strong className="font-bold text-current">{highlight}</strong>
      {parts[1]}
    </span>
  );
};

const commonFeatures = [
  { icon: Monitor, text: "Plat. Web de Gerenciamento" },
  { icon: Smartphone, text: "Plat. para Plantonistas*" },
];

const plans = [
  {
    tier: "Inicial",
    name: "Turnus Start",
    description: "Para clínicas e pequenas unidades iniciando a organização.",
    priceMonthly: 150,
    features: [
      {
        icon: Users,
        text: "Até 30 usuários ativos",
        highlight: "30 usuários",
      },
      {
        icon: Activity,
        text: "1 escala (setor)",
        highlight: "1 escala",
      },
      { icon: Mail, text: "Notificações via E-mail" },
      { icon: LifeBuoy, text: "Suporte via E-mail" },
    ],
    buttonText: "Começar Agora",
    bgColor: "bg-[#F2F2F2]",
    textColor: "text-[#3B3B3B]",
    accentColor: "text-[#3B3B3B]",
    borderHover: "hover:border-gray-300",
  },
  {
    tier: "Crescimento",
    name: "Turnus Plus",
    description: "Para unidades em expansão que precisam de mais recursos.",
    priceMonthly: 400,
    features: [
      {
        icon: Users,
        text: "Até 100 usuários ativos",
        highlight: "100 usuários",
      },
      {
        icon: Activity,
        text: "Até 5 escalas (setores)",
        highlight: "5 escalas",
      },
      { icon: Mail, text: "Notificações via E-mail" },
      {
        icon: MessageCircle,
        text: "Notificações via WhatsApp",
        highlight: "WhatsApp",
      },
      { icon: LifeBuoy, text: "Suporte via E-mail e WhatsApp" },
    ],
    buttonText: "Escolher Plus",
    bgColor: "bg-[#3B3B3B]",
    textColor: "text-white",
    accentColor: "text-[#C3FFD4]",
    featured: true,
  },
  {
    tier: "Profissional",
    name: "Turnus Pro",
    description: "Para hospitais e gestores que precisam de agilidade total.",
    priceMonthly: 950,
    features: [
      {
        icon: Users,
        text: "Até 300 usuários ativos",
        highlight: "300 usuários",
      },
      {
        icon: Activity,
        text: "Escalas ilimitadas",
        highlight: "Escalas ilimitadas", // Ajustado para bater com o texto visualmente
      },
      { icon: Mail, text: "Notificações via E-mail" },
      {
        icon: MessageCircle,
        text: "Notificações via WhatsApp",
        highlight: "WhatsApp",
      },
      { icon: LifeBuoy, text: "Suporte Prioritário via E-mail e WhatsApp" },
    ],
    buttonText: "Escolher Pro",
    bgColor: "bg-[#F2F2F2]",
    textColor: "text-[#3B3B3B]",
    accentColor: "text-[#3B3B3B]",
    borderHover: "hover:border-gray-300",
  },
  {
    tier: "Enterprise",
    name: "Turnus Corp",
    description:
      "Para grandes redes com infraestrutura própria e multi-tenant.",
    priceMonthly: null,
    features: [
      { icon: Users, text: "Usuários customizados", highlight: "customizados" },
      {
        icon: Activity,
        text: "Escalas customizadas",
        highlight: "customizadas",
      },
      { icon: Check, text: "Infraestrutura própria" },
      { icon: Check, text: "Gerente de Conta Dedicado" },
      { icon: Check, text: "Onboarding Presencial**" },
      { icon: LifeBuoy, text: "Suporte Prioritário Dedicado" },
    ],
    buttonText: "Falar com Consultor",
    bgColor: "bg-[#F2F2F2]",
    textColor: "text-[#3B3B3B]",
    accentColor: "text-[#3B3B3B]",
    borderHover: "hover:border-gray-300",
  },
];

export const Pricing = ({ annualBilling, setAnnualBilling }: PricingProps) => {
  const DISCOUNT_PERCENTAGE = 0.2;

  return (
    <section
      className="py-24 bg-[#3B3B3B] relative overflow-hidden selection:bg-[#C3FFD4] selection:text-[#3B3B3B]"
      id="planos"
    >
      {/* Background Decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4A5568]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header da Seção */}
        <div className="text-center mb-12">
          <h2 className="font-serif-brand text-4xl md:text-5xl text-white mb-6">
            Planos que crescem com sua operação
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            Escolha a estrutura ideal para sua unidade. Transparência total, sem
            taxas ocultas.
          </p>

          {/* Toggle Switch Otimizado */}
          <div
            className="flex items-center justify-center gap-4 cursor-pointer group"
            onClick={() => setAnnualBilling(!annualBilling)}
          >
            <span
              className={`text-sm font-medium transition-colors ${
                !annualBilling ? "text-white" : "text-gray-400"
              }`}
            >
              Mensal
            </span>
            <div
              className={`w-16 h-8 rounded-full p-1 relative transition-colors duration-300 border ${
                annualBilling
                  ? "bg-[#C3FFD4]/10 border-[#C3FFD4]"
                  : "bg-[#4A5568] border-transparent"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                  annualBilling
                    ? "translate-x-8 bg-[#C3FFD4]"
                    : "translate-x-0 bg-white"
                }`}
              >
                {/* Ícone opcional dentro da bolinha */}
              </div>
            </div>
            <span
              className={`text-sm font-medium transition-colors flex items-center gap-2 ${
                annualBilling ? "text-white" : "text-gray-400"
              }`}
            >
              Anual
              <span className="bg-[#C3FFD4] text-[#3B3B3B] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                -{(DISCOUNT_PERCENTAGE * 100).toFixed(0)}% OFF
              </span>
            </span>
          </div>
        </div>

        {/* Features Comuns */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-[#4A5568]/30 backdrop-blur-md rounded-2xl p-6 border border-white/5 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <p className="text-[#C3FFD4] font-bold text-sm uppercase tracking-wider hidden md:block">
              Incluído em todos os planos:
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {commonFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-200 text-sm font-medium"
                  >
                    <div className="p-1.5 bg-[#C3FFD4]/10 rounded-full">
                      <Icon size={16} className="text-[#C3FFD4]" />
                    </div>
                    <span>{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto items-stretch">
          {plans.map((plan, index) => {
            const finalPrice = plan.priceMonthly
              ? annualBilling
                ? Math.floor(plan.priceMonthly * (1 - DISCOUNT_PERCENTAGE))
                : plan.priceMonthly
              : null;

            return (
              <div
                key={index}
                className={`
                  ${
                    plan.bgColor
                  } rounded-3xl p-6 xl:p-8 flex flex-col relative transition-all duration-300 h-full min-h-[560px]
                  ${
                    plan.featured
                      ? "lg:min-h-[600px] shadow-2xl z-10 ring-2 ring-[#C3FFD4] shadow-[#C3FFD4]/10 lg:scale-105"
                      : `border border-transparent ${plan.borderHover} opacity-95 hover:opacity-100`
                  }
                `}
              >
                {/* Badge "Mais Escolhido" */}
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C3FFD4] text-[#3B3B3B] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Activity size={12} />
                    Mais Escolhido
                  </div>
                )}

                {/* Header do Card */}
                <div className="mb-6">
                  <div
                    className={`mb-2 ${
                      plan.featured ? "text-[#C3FFD4]" : "text-[#839CC7]"
                    } font-bold tracking-widest text-xs uppercase`}
                  >
                    {plan.tier}
                  </div>
                  <h3
                    className={`font-serif-brand text-2xl ${plan.textColor} mb-2`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      plan.featured ? "text-gray-400" : "text-gray-500"
                    } leading-relaxed min-h-[40px]`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Preço */}
                <div className="mb-8">
                  {finalPrice ? (
                    <div className="flex flex-col">
                      {/* Preço "De" (Riscado) se anual */}
                      {annualBilling && (
                        <span className="text-xs text-gray-400 line-through font-medium mb-0.5 ml-1">
                          R$ {plan.priceMonthly}
                        </span>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span
                          className={`text-sm font-medium ${
                            plan.featured ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          R$
                        </span>
                        <span
                          className={`text-5xl font-bold tracking-tight ${plan.accentColor}`}
                        >
                          {finalPrice}
                        </span>
                        <span
                          className={`${
                            plan.featured ? "text-gray-400" : "text-gray-500"
                          } text-sm`}
                        >
                          /mês
                        </span>
                      </div>
                      {annualBilling && (
                        <span
                          className={`text-[10px] mt-1 font-medium ${
                            plan.featured ? "text-[#C3FFD4]" : "text-gray-500"
                          }`}
                        >
                          Cobrado anualmente (economia de R${" "}
                          {(
                            plan.priceMonthly! *
                            12 *
                            DISCOUNT_PERCENTAGE
                          ).toFixed(0)}
                          )
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="h-[88px] flex items-center">
                      <span className={`text-3xl font-bold ${plan.textColor}`}>
                        Sob Consulta
                      </span>
                    </div>
                  )}
                </div>

                {/* Lista de Features */}
                <div className="space-y-4 mb-8 grow">
                  <div
                    className={`w-full h-px ${
                      plan.featured ? "bg-gray-700" : "bg-gray-200"
                    } mb-6`}
                  ></div>
                  {plan.features.map((feature, featureIndex) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={featureIndex}
                        className={`flex items-start gap-3 text-sm group/item`}
                      >
                        <Icon
                          size={18}
                          className={`shrink-0 mt-0.5 ${
                            plan.featured ? "text-[#C3FFD4]" : "text-[#839CC7]"
                          }`}
                        />
                        <span
                          className={`${
                            plan.featured ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {renderFeatureText(feature.text, feature.highlight)}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <button
                  className={`
                    w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn
                    ${
                      plan.featured
                        ? "bg-[#C3FFD4] text-[#3B3B3B] hover:bg-white shadow-[0_0_20px_rgba(195,255,212,0.2)] hover:shadow-[0_0_25px_rgba(195,255,212,0.4)] relative overflow-hidden"
                        : "border border-[#3B3B3B]/20 bg-transparent text-[#3B3B3B] hover:bg-[#3B3B3B] hover:text-white"
                    }
                  `}
                >
                  {plan.featured && (
                    <div className="absolute inset-0 flex -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none">
                      <div className="w-12 h-full bg-white/40 skew-x-25 blur-sm"></div>
                    </div>
                  )}
                  {plan.buttonText}
                  {plan.featured && (
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 border-t border-white/10 pt-8">
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm bg-white/5 px-4 py-2 rounded-full mb-4">
            <HelpCircle size={14} />
            <span>Dúvida sobre qual plano escolher?</span>
            <a
              href="#"
              className="text-[#C3FFD4] hover:underline decoration-[#C3FFD4]"
            >
              Fale com um especialista
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-xs text-gray-500 mt-4">
            <p>
              * App nativo em desenvolvimento (em breve). Versão Web (PWA) já
              disponível.
            </p>
            <p>
              ** Onboarding presencial disponível sob consulta para todo o
              Brasil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
