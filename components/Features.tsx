import { ArrowRight, CheckCircle, Clock, TrendingUp, Zap } from "lucide-react";
import { HourglassLogo } from "./HourglassLogo";

export const Features = () => {
  return (
    <section className="py-20 bg-white" id="funcionalidades">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <h2 className="font-serif-brand text-4xl md:text-5xl text-[#3B3B3B] mb-4">
            Tempus sub control.
          </h2>
          <p className="text-gray-600 text-lg">
            Ferramentas inteligentes que transformam a complexidade da gestão de
            escalas em processos simples e automatizados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* Card 1: Main Feature (Large) */}
          <div className="md:col-span-2 row-span-2 bg-[#F2F2F2] rounded-4xl p-8 md:p-12 relative overflow-hidden group bento-card border border-transparent hover:border-[#DBDBDB]">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <HourglassLogo className="w-64 h-64" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#3B3B3B] rounded-xl flex items-center justify-center text-[#B5FFFF] mb-6">
                  <Zap />
                </div>
                <h3 className="font-serif-brand text-3xl mb-4">
                  Disponibilização & Candidatura Inteligente
                </h3>
                <p className="text-gray-600 text-lg max-w-md">
                  Plantonistas disponibilizam plantões que não podem cumprir.
                  Outros profissionais se candidatam e nosso algoritmo seleciona
                  automaticamente com base nos critérios do gestor. Trocas
                  diretas também são validadas pelo sistema.
                </p>
              </div>
              <div className="mt-8 bg-white rounded-xl p-4 shadow-sm border border-gray-100 max-w-sm transform group-hover:translate-x-2 transition-transform">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                    <Clock size={16} />
                  </div>
                  <span className="text-sm font-bold text-gray-700">
                    3 candidatos para UTI - 19h
                  </span>
                </div>
                <div className="flex gap-2 mt-3">
                  <div className="flex-1 bg-green-50 border border-green-200 rounded-lg p-2 text-xs">
                    <div className="font-bold text-green-800">Dr. Silva</div>
                    <div className="text-green-600">98% match</div>
                  </div>
                  <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg p-2 text-xs">
                    <div className="font-bold text-gray-700">Dra. Costa</div>
                    <div className="text-gray-600">85% match</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Trades */}
          <div className="bg-[#3B3B3B] rounded-4xl p-8 text-white relative overflow-hidden bento-card">
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#839CC7] opacity-20 rounded-full blur-2xl"></div>
            <Clock className="text-[#C3FFD4] mb-4 w-10 h-10" />
            <h3 className="font-serif-brand text-2xl mb-2">Trocas Diretas</h3>
            <p className="text-gray-300 text-sm">
              Um oferece, outro aceita. Negociações simplificadas entre
              plantonistas.
            </p>
          </div>

          {/* Card 3: Reports */}
          <div className="bg-[#D9FFE4] rounded-4xl p-8 relative overflow-hidden bento-card border border-[#C3FFD4]">
            <TrendingUp className="text-[#3B3B3B] mb-4 w-10 h-10" />
            <h3 className="font-serif-brand text-2xl mb-2 text-[#3B3B3B]">
              Relatórios
            </h3>
            <p className="text-[#4A5568] text-sm">
              Dashboards e relatórios completos de escalas, horas e cobertura em
              tempo real.
            </p>
          </div>

          {/* Card 4: Mobile (Tall) */}
          <div className="md:col-span-1 row-span-2 bg-white rounded-4xl p-8 border border-gray-100 bento-card flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 w-full h-32 bg-linear-to-b from-[#B5FFFF]/20 to-transparent"></div>
            <h3 className="font-serif-brand text-2xl mb-2 mt-4 relative z-10">
              App Nativo
            </h3>
            <p className="text-gray-500 text-sm mb-8 relative z-10">
              Para iOS e Android em breve.
            </p>

            {/* Phone Mockup */}
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 flex-1 flex items-center justify-center">
              <img
                src="/iPhone 15 Pro Max.png"
                alt="App Turnus no iPhone"
                className="w-full max-w-xs h-auto drop-shadow-2xl scale-125"
              />
            </div>
          </div>

          {/* Card 5: Wide */}
          <div className="md:col-span-2 bg-[#839CC7]/10 rounded-4xl p-8 flex flex-col md:flex-row items-center gap-8 bento-card border border-[#839CC7]/20">
            <div className="flex-1">
              <h3 className="font-serif-brand text-2xl mb-3 text-[#3B3B3B]">
                Escalas Automáticas com Templates
              </h3>
              <p className="text-gray-600 text-sm">
                Configure um template uma vez e reutilize mês a mês. O sistema
                gera escalas completas automaticamente com base nas suas regras.
                Gerenciamento simples, resultados consistentes.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                <CheckCircle size={16} className="text-green-600" />
                <span className="text-xs font-medium text-gray-700">
                  Templates reutilizáveis
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                <CheckCircle size={16} className="text-green-600" />
                <span className="text-xs font-medium text-gray-700">
                  Geração automática
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                <CheckCircle size={16} className="text-green-600" />
                <span className="text-xs font-medium text-gray-700">
                  Gestão simplificada
                </span>
              </div>
            </div>
          </div>

          {/* Card 6: CTA Marketing */}
          <div className="md:col-span-2 bg-[#C3FFD4] rounded-4xl p-8 md:p-12 bento-card border-2 border-[#C3FFD4] flex flex-col items-center justify-center text-center gap-6 shadow-[0_0_30px_rgba(195,255,212,0.3)] relative overflow-hidden group hover:scale-[1.02] transition-transform">
            <div className="absolute inset-0 bg-[#3B3B3B] opacity-0 group-hover:opacity-5 transition-opacity"></div>
            <h3 className="font-serif-brand text-2xl md:text-3xl lg:text-4xl text-[#3B3B3B] leading-tight relative z-10">
              Organize. Automatize. Simplifique.
            </h3>
            <button className="bg-[#3B3B3B] text-white px-4 py-2 rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-2 group/btn relative z-10">
              Começar agora
              <ArrowRight
                size={22}
                className="group-hover/btn:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
