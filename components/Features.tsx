import { CheckCircle, Clock, Shield, TrendingUp, Zap } from "lucide-react";
import { HourglassLogo } from "./HourglassLogo";

export const Features = () => {
  return (
    <section className="py-20 bg-white" id="funcionalidades">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="font-serif-brand text-4xl md:text-5xl text-[#3B3B3B] mb-4">
            Tempus sub control.
          </h2>
          <p className="text-gray-500 text-lg">
            Uma suíte completa de ferramentas desenhada para eliminar o caos da
            gestão hospitalar e clínica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* Card 1: Main Feature (Large) */}
          <div className="md:col-span-2 row-span-2 bg-[#F2F2F2] rounded-[2rem] p-8 md:p-12 relative overflow-hidden group bento-card border border-transparent hover:border-[#DBDBDB]">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <HourglassLogo className="w-64 h-64" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#3B3B3B] rounded-xl flex items-center justify-center text-[#B5FFFF] mb-6">
                  <Zap />
                </div>
                <h3 className="font-serif-brand text-3xl mb-4">
                  Escala Inteligente & Automatizada
                </h3>
                <p className="text-gray-600 text-lg max-w-md">
                  Nosso algoritmo evita conflitos de horário, respeita as regras
                  de descanso e preenche buracos na escala automaticamente em
                  segundos.
                </p>
              </div>
              <div className="mt-8 bg-white rounded-xl p-4 shadow-sm border border-gray-100 max-w-sm transform group-hover:translate-x-2 transition-transform">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle size={16} />
                  </div>
                  <span className="text-sm font-bold text-gray-700">
                    Escala Dr. André confirmada
                  </span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="w-[92%] h-full bg-[#3B3B3B]"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-600 mt-2">
                  <span>Cobertura</span>
                  <span>92%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Security */}
          <div className="bg-[#3B3B3B] rounded-[2rem] p-8 text-white relative overflow-hidden bento-card">
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#839CC7] opacity-20 rounded-full blur-2xl"></div>
            <Shield className="text-[#C3FFD4] mb-4 w-10 h-10" />
            <h3 className="font-serif-brand text-2xl mb-2">Compliance</h3>
            <p className="text-gray-300 text-sm">
              Regras da categoria e limites de horas monitorados em tempo real.
            </p>
          </div>

          {/* Card 3: Finance */}
          <div className="bg-[#D9FFE4] rounded-[2rem] p-8 relative overflow-hidden bento-card border border-[#C3FFD4]">
            <TrendingUp className="text-[#3B3B3B] mb-4 w-10 h-10" />
            <h3 className="font-serif-brand text-2xl mb-2 text-[#3B3B3B]">
              Financeiro
            </h3>
            <p className="text-[#4A5568] text-sm">
              Cálculo automático de valores de plantão por complexidade e
              horário.
            </p>
          </div>

          {/* Card 4: Mobile (Tall) */}
          <div className="md:col-span-1 row-span-2 bg-white rounded-[2rem] p-8 border border-gray-100 bento-card flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-[#B5FFFF]/20 to-transparent"></div>
            <h3 className="font-serif-brand text-2xl mb-2 mt-4 relative z-10">
              App Nativo
            </h3>
            <p className="text-gray-500 text-sm mb-8 relative z-10">
              Para iOS e Android em breve.
            </p>

            {/* Phone Mockup */}
            <div className="w-48 bg-[#3B3B3B] rounded-[2rem] p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-[#4A5568]">
              <div className="bg-white rounded-[1.5rem] overflow-hidden h-64 relative">
                {/* Mock App UI */}
                <div className="bg-[#3B3B3B] p-4 text-white">
                  <div className="text-xs opacity-70">Olá, Dr. Silva</div>
                  <div className="font-serif-brand text-lg">
                    Próximo Plantão
                  </div>
                </div>
                <div className="p-3 space-y-2">
                  <div className="bg-[#F2F2F2] p-2 rounded-lg text-xs">
                    <div className="font-bold text-[#3B3B3B]">UTI Geral</div>
                    <div className="text-gray-600">07:00 - 19:00</div>
                  </div>
                  <div className="bg-[#D9FFE4] p-2 rounded-lg text-xs flex justify-between items-center">
                    <span className="text-green-800 font-medium">
                      Troca Solicitada
                    </span>
                    <Clock size={12} className="text-green-800" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Wide */}
          <div className="md:col-span-2 bg-[#839CC7]/10 rounded-[2rem] p-8 flex flex-col md:flex-row items-center gap-8 bento-card border border-[#839CC7]/20">
            <div className="flex-1">
              <h3 className="font-serif-brand text-2xl mb-3 text-[#3B3B3B]">
                Trocas sem atrito
              </h3>
              <p className="text-gray-600 text-sm">
                O Turnus permite que os profissionais negociem trocas de plantão
                diretamente pelo app. O gestor apenas aprova ou o sistema valida
                automaticamente baseado em regras pré-definidas.
              </p>
            </div>
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                DR
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-600">
                ENF
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white bg-[#3B3B3B] text-[#C3FFD4] flex items-center justify-center text-xs font-bold">
                +40
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
