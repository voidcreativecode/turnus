"use client";

import {
  Activity,
  Check,
  LifeBuoy,
  Mail,
  MessageCircle,
  Smartphone,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

interface PricingProps {
  annualBilling: boolean;
  setAnnualBilling: (value: boolean) => void;
}

const plans = [
  {
    tier: "Inicial",
    name: "Turnus Start",
    description: "Para clínicas e pequenas unidades iniciando a organização.",
    priceMonthly: 500,
    priceAnnual: 400,
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
      { icon: Smartphone, text: "App para Plantonistas" },
      { icon: Mail, text: "Notificações via E-mail", highlight: "E-mail" },
      { icon: LifeBuoy, text: "Suporte via Chamado (48h)" },
    ],
    buttonText: "Começar Agora",
    bgColor: "bg-[#F2F2F2]",
    textColor: "text-[#3B3B3B]",
    borderHover: "hover:border-gray-300",
  },
  {
    tier: "Intermediário",
    name: "Turnus Pro",
    description: "Para hospitais e gestores que precisam de agilidade total.",
    priceMonthly: 940,
    priceAnnual: 750,
    features: [
      {
        icon: Users,
        text: "Até 300 usuários ativos",
        highlight: "300 usuários",
      },
      {
        icon: Activity,
        text: "Até 10 escalas (setores)",
        highlight: "10 escalas",
      },
      { icon: Zap, text: "Trocas Automatizadas" },
      {
        icon: MessageCircle,
        text: "Notificações via WhatsApp",
        highlight: "WhatsApp",
      },
      { icon: TrendingUp, text: "Relatórios Financeiros" },
      { icon: LifeBuoy, text: "Suporte Prioritário (24h)" },
    ],
    buttonText: "Escolher Profissional",
    bgColor: "bg-[#3B3B3B]",
    textColor: "text-white",
    featured: true,
  },
  {
    tier: "Enterprise",
    name: "Turnus Corp",
    description: "Para grandes redes hospitalares e cooperativas médicas.",
    priceMonthly: null,
    priceAnnual: null,
    features: [
      { icon: Users, text: "Usuários Ilimitados", highlight: "Ilimitados" },
      { icon: Activity, text: "Escalas Ilimitadas", highlight: "Ilimitadas" },
      { icon: Check, text: "Gestão Multi-unidade" },
      { icon: Check, text: "API de Integração (ERP)" },
      { icon: Check, text: "Gerente de Conta Dedicado" },
      { icon: Check, text: "Onboarding Presencial" },
    ],
    buttonText: "Falar com Consultor",
    bgColor: "bg-[#F2F2F2]",
    textColor: "text-[#3B3B3B]",
    borderHover: "hover:border-gray-300",
  },
];

export const Pricing = ({ annualBilling, setAnnualBilling }: PricingProps) => {
  return (
    <section
      className="py-24 bg-[#3B3B3B] relative overflow-hidden"
      id="planos"
    >
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4A5568]/30 via-[#3B3B3B] to-[#3B3B3B] -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif-brand text-4xl md:text-5xl text-white mb-6">
            Planos que crescem com sua operação
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Escolha a estrutura ideal para sua unidade. Cancele ou altere quando
            quiser.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-sm font-medium transition-colors ${
                !annualBilling ? "text-white" : "text-gray-500"
              }`}
            >
              Mensal
            </span>
            <button
              onClick={() => setAnnualBilling(!annualBilling)}
              className="w-16 h-8 bg-[#4A5568] rounded-full p-1 relative transition-colors hover:bg-[#5A6B85]"
            >
              <div
                className={`w-6 h-6 bg-[#C3FFD4] rounded-full shadow-md transform transition-transform duration-300 ${
                  annualBilling ? "translate-x-8" : "translate-x-0"
                }`}
              ></div>
            </button>
            <span
              className={`text-sm font-medium transition-colors ${
                annualBilling ? "text-white" : "text-gray-500"
              }`}
            >
              Anual{" "}
              <span className="text-[#C3FFD4] text-xs ml-1 font-bold uppercase">
                -20% OFF
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${plan.bgColor} rounded-3xl p-8 border ${
                plan.featured
                  ? "border-2 border-[#C3FFD4] relative transform md:scale-105 shadow-2xl z-10"
                  : `border-transparent ${plan.borderHover}`
              } transition-all`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C3FFD4] text-[#3B3B3B] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(195,255,212,0.5)]">
                  Mais Escolhido
                </div>
              )}
              <div
                className={`mb-4 ${
                  plan.featured ? "text-[#C3FFD4]" : "text-[#839CC7]"
                } font-bold tracking-widest text-xs uppercase`}
              >
                {plan.tier}
              </div>
              <h3
                className={`font-serif-brand text-2xl ${
                  plan.featured ? "text-white" : plan.textColor
                } mb-2`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm ${
                  plan.featured ? "text-gray-400" : "text-gray-500"
                } mb-6 h-10`}
              >
                {plan.description}
              </p>
              <div className="flex items-baseline gap-1 mb-8">
                {plan.priceMonthly ? (
                  <>
                    <span
                      className={`text-sm ${
                        plan.featured ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      R$
                    </span>
                    <span
                      className={`${
                        plan.featured ? "text-5xl" : "text-4xl"
                      } font-bold ${
                        plan.featured ? "text-[#C3FFD4]" : plan.textColor
                      }`}
                    >
                      {annualBilling ? plan.priceAnnual : plan.priceMonthly}
                    </span>
                    <span
                      className={`${
                        plan.featured ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      /mês
                    </span>
                  </>
                ) : (
                  <span className={`text-3xl font-bold ${plan.textColor}`}>
                    Sob Medida
                  </span>
                )}
              </div>

              <div
                className={`space-y-4 mb-8 ${
                  plan.featured ? "text-gray-300" : ""
                }`}
              >
                {plan.features.map((feature, featureIndex) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={featureIndex}
                      className={`flex items-center gap-3 text-sm ${
                        plan.featured ? "" : "text-gray-700"
                      }`}
                    >
                      <Icon
                        size={18}
                        className={
                          plan.featured ? "text-[#C3FFD4]" : "text-[#839CC7]"
                        }
                      />
                      <span
                        dangerouslySetInnerHTML={{
                          __html: feature.highlight
                            ? feature.text.replace(
                                feature.highlight,
                                `<strong>${feature.highlight}</strong>`
                              )
                            : feature.text,
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              <button
                className={`w-full ${
                  plan.featured ? "py-4" : "py-3"
                } rounded-xl ${
                  plan.featured
                    ? "bg-[#C3FFD4] text-[#3B3B3B] hover:bg-white shadow-[0_0_20px_rgba(195,255,212,0.3)]"
                    : "border border-[#3B3B3B] text-[#3B3B3B] hover:bg-[#3B3B3B] hover:text-white"
                } font-bold transition-colors`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Footer note for pricing */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>
            Todos os planos incluem atualizações gratuitas e segurança de dados
            padrão LGPD.
          </p>
        </div>
      </div>
    </section>
  );
};
