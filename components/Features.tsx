import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { HourglassLogo } from "./HourglassLogo";

export const Features = () => {
  return (
    <section className="py-20 bg-white" id="funcionalidades">
      <div className="container mx-auto px-6">
        {/* Header da Seção */}
        <div className="mb-16 max-w-3xl">
          <h2 className="font-serif-brand text-4xl md:text-5xl text-[#3B3B3B] mb-4">
            Tempus sub control.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            O caos da escala manual vira passado. Ferramentas inteligentes que
            transformam complexidade em processos simples, justos e
            automatizados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          <div className="md:col-span-2 row-span-2 bg-[#F2F2F2] rounded-4xl p-8 md:p-10 relative overflow-hidden group bento-card border border-transparent hover:border-[#DBDBDB] transition-colors">
            <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none">
              <HourglassLogo className="w-96 h-96 text-[#3B3B3B]" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#3B3B3B] rounded-xl flex items-center justify-center text-[#C3FFD4] mb-6 shadow-lg shadow-[#3B3B3B]/20">
                  <Sparkles size={24} />
                </div>
                <h3 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                  Candidatura Inteligente
                </h3>
                <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
                  O plantonista avisa que não pode ir. O sistema abre a vaga.
                  Interessados se candidatam e nosso algoritmo{" "}
                  <strong>seleciona o melhor perfil</strong> com base nas regras
                  do setor. Sem "panelinha", sem confusão.
                </p>
              </div>

              {/* Micro-interação Visual (Mockup) */}
              <div className="mt-8 bg-white rounded-xl p-4 shadow-md border border-gray-200/60 max-w-sm transform group-hover:translate-x-2 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3 border-b border-gray-100 pb-2">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block uppercase tracking-wider font-bold">
                      Vaga em aberto
                    </span>
                    <span className="text-sm font-bold text-gray-700">
                      UTI Geral - 19h
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-green-50/50 border border-green-100 rounded-lg p-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <div className="text-xs font-bold text-green-900">
                        Dr. Silva
                      </div>
                    </div>
                    <div className="text-[10px] font-bold bg-white px-2 py-1 rounded text-green-700 border border-green-100 shadow-sm">
                      98% Match
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-gray-50 border border-gray-100 rounded-lg p-2.5 opacity-60">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <div className="text-xs font-bold text-gray-700">
                        Dra. Costa
                      </div>
                    </div>
                    <div className="text-[10px] font-medium text-gray-500">
                      85% Match
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#3B3B3B] rounded-4xl p-8 text-white relative overflow-hidden bento-card group">
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#839CC7] opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity"></div>
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
              <ArrowRight className="text-[#C3FFD4]" size={20} />
            </div>
            <h3 className="font-serif-brand text-2xl mb-2">Trocas Diretas</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Negociação P2P: Um oferece, outro aceita. A escala é atualizada
              automaticamente, sem burocracia. Fim dos prints de WhatsApp.
            </p>
          </div>

          <div className="bg-[#D9FFE4] rounded-4xl p-8 relative overflow-hidden bento-card border border-[#C3FFD4] group hover:shadow-lg hover:shadow-[#C3FFD4]/20 transition-all">
            <div className="w-10 h-10 bg-[#3B3B3B]/10 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="text-[#3B3B3B]" size={20} />
            </div>
            <h3 className="font-serif-brand text-2xl mb-2 text-[#3B3B3B]">
              Relatórios de Horas
            </h3>
            <p className="text-[#4A5568] text-sm leading-relaxed">
              Chega de somar horas na mão. Tenha o consolidado exato de carga
              horária por profissional para facilitar o fechamento dos
              pagamentos.
            </p>
          </div>

          <div className="md:col-span-1 row-span-2 bg-white rounded-4xl p-8 border border-gray-100 bento-card flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 w-full h-32 bg-linear-to-b from-[#B5FFFF]/20 to-transparent"></div>

            <h3 className="font-serif-brand text-2xl mb-2 mt-4 relative z-10">
              Na palma da mão
            </h3>

            <p className="text-gray-500 text-sm mb-8 relative z-10">
              Acesse escalas e trocas agora mesmo via{" "}
              <strong>Web App (PWA)</strong>. <br />
              <span className="text-xs opacity-70 block mt-2">
                App nativo iOS/Android em breve.
              </span>
            </p>

            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 flex-1 flex items-center justify-center">
              <img
                src="/iPhone 15 Pro Max.png"
                alt="App Turnus no iPhone"
                className="w-full max-w-xs h-auto drop-shadow-2xl scale-125"
              />
            </div>
          </div>

          <div className="md:col-span-2 bg-[#839CC7]/10 rounded-4xl p-8 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-8 bento-card border border-[#839CC7]/20">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Calendar className="text-[#3B3B3B]" size={20} />
                </div>
                <h3 className="font-serif-brand text-2xl text-[#3B3B3B]">
                  Escalas Recorrentes
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Configure o padrão do setor uma vez e replique para o ano todo.
                Nosso sistema respeita regras de folga e valida conflitos
                automaticamente. Geração de escala em segundos, não dias.
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col gap-3 min-w-[200px]">
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100/50">
                <CheckCircle size={18} className="text-green-500" />
                <span className="text-sm font-medium text-gray-700">
                  Templates salvos
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100/50">
                <CheckCircle size={18} className="text-green-500" />
                <span className="text-sm font-medium text-gray-700">
                  Validação de conflitos
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100/50">
                <CheckCircle size={18} className="text-green-500" />
                <span className="text-sm font-medium text-gray-700">
                  Replicação automática
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-[#C3FFD4] rounded-4xl p-8 md:p-12 bento-card border-2 border-[#C3FFD4] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(195,255,212,0.2)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

            <div className="text-center md:text-left">
              <h3 className="font-serif-brand text-2xl md:text-3xl text-[#3B3B3B] leading-tight mb-2">
                Sua equipe merece essa agilidade.
              </h3>
              <p className="text-[#3B3B3B]/80 text-sm md:text-base">
                Experimente gratuitamente e sinta a diferença na primeira
                semana.
              </p>
            </div>

            <button className="whitespace-nowrap bg-[#3B3B3B] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-lg hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-3 group/btn relative z-10">
              Começar agora
              <ArrowRight
                size={20}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
