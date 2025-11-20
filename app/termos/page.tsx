"use client";

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import {
  AlertCircle,
  CheckCircle,
  CreditCard,
  FileText,
  Scale,
} from "lucide-react";
import { useEffect, useState } from "react";

const TermsPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F2F2F2] font-sans text-[#3B3B3B] overflow-x-hidden selection:bg-[#C3FFD4] selection:text-[#3B3B3B]">
      <Navigation
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header da Página */}
          <div className="mb-12 border-b border-gray-200 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B3B3B] text-white text-xs font-bold uppercase tracking-wider mb-4">
              <FileText size={12} className="text-[#C3FFD4]" />
              Termos & Condições
            </div>
            <h1 className="font-serif-brand text-4xl md:text-6xl mb-4 text-[#3B3B3B]">
              Termos de Uso
            </h1>
            <p className="text-gray-500 flex items-center gap-2">
              <Scale size={16} />
              Vigência a partir de: 20 de Novembro de 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-12 text-gray-700">
            {/* 1. Aceitação */}
            <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-4 text-[#3B3B3B] flex items-center gap-3">
                1. Aceitação dos Termos
              </h2>
              <p className="leading-relaxed">
                Bem-vindo ao <strong>Turnus</strong>. Ao acessar nossa
                plataforma, você concorda em estar vinculado a estes Termos. A
                plataforma é desenvolvida e operada pela{" "}
                <strong>VOID Creative Code</strong> (razão social{" "}
                <strong>LM Soluções Digitais LTDA</strong>). Se você não
                concorda com qualquer parte destes termos, o uso dos serviços
                não é autorizado.
              </p>
            </section>

            {/* 2. O Serviço */}
            <section>
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-6 text-[#3B3B3B]">
                2. O Serviço Turnus
              </h2>
              <div className="bg-[#E6FFEF] p-6 rounded-2xl border border-[#C3FFD4]">
                <p className="mb-4 font-medium text-[#2E8B57]">
                  Somos uma plataforma SaaS (Software as a Service) focada em
                  inteligência de escalas:
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm list-none pl-0">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#2E8B57]" /> Gestão
                    automatizada de plantões
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#2E8B57]" /> Sistema
                    de trocas P2P
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#2E8B57]" /> Gestão
                    financeira de horas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#2E8B57]" />{" "}
                    Notificações em tempo real
                  </li>
                </ul>
              </div>
            </section>

            {/* 3. Elegibilidade */}
            <section>
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-4 text-[#3B3B3B]">
                3. Elegibilidade e Cadastro
              </h2>
              <p className="leading-relaxed mb-4">
                O uso é restrito a maiores de 18 anos, profissionais de saúde
                com registro ativo (CRM/COREN/etc) ou gestores autorizados.
              </p>
              <div className="border-l-4 border-[#3B3B3B] pl-4 italic text-gray-600">
                "Você é responsável por manter a confidencialidade de suas
                credenciais. Qualquer ação realizada através da sua conta será
                de sua responsabilidade."
              </div>
            </section>

            {/* 4. Uso Aceitável */}
            <section>
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-4 text-[#3B3B3B]">
                4. Uso Aceitável e Proibições
              </h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#3B3B3B]">
                <li>Violar leis ou regulamentos do CFM/Conselhos Regionais.</li>
                <li>Fornecer informações falsas em escalas oficiais.</li>
                <li>Tentar engenharia reversa ou scraping da plataforma.</li>
                <li>
                  Compartilhar sua senha com terceiros (o acesso é pessoal e
                  intransferível).
                </li>
              </ul>
            </section>

            {/* 5. Pagamentos */}
            <section>
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-4 text-[#3B3B3B]">
                5. Planos e Faturamento
              </h2>
              <div className="flex gap-4 items-start bg-white p-6 rounded-2xl border border-gray-100">
                <CreditCard className="text-[#3B3B3B] shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Assinatura e Cancelamento
                  </h3>
                  <p className="text-sm leading-relaxed mb-2">
                    O serviço é pré-pago (mensal ou anual). Você pode cancelar a
                    qualquer momento através do painel, sem multa de fidelidade
                    (exceto em contratos Enterprise específicos).
                  </p>
                  <p className="text-xs text-gray-500">
                    *O cancelamento interrompe a renovação automática, mantendo
                    o acesso até o fim do ciclo vigente.
                  </p>
                </div>
              </div>
            </section>

            {/* 8. Responsabilidades */}
            <section>
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-4 text-[#3B3B3B]">
                8. Limitação de Responsabilidade
              </h2>
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100 flex gap-4">
                <AlertCircle className="text-yellow-600 shrink-0" size={24} />
                <p className="text-sm text-yellow-800 leading-relaxed">
                  <strong>Importante:</strong> O Turnus é uma ferramenta de
                  gestão. Não nos responsabilizamos por faltas de plantonistas,
                  erros médicos ou inconsistências na assistência ao paciente
                  decorrentes da operação da escala. A responsabilidade técnica
                  final é do Diretor Clínico/Técnico da unidade.
                </p>
              </div>
            </section>

            {/* 11. Rescisão */}
            <section>
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-4 text-[#3B3B3B]">
                11. Rescisão
              </h2>
              <p className="leading-relaxed">
                Reservamos o direito de suspender contas que violem estes
                termos, especialmente em casos de fraude em escalas ou
                comportamento abusivo contra outros profissionais na plataforma.
              </p>
            </section>

            {/* 12. Foro */}
            <section>
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-4 text-[#3B3B3B]">
                12. Lei Aplicável
              </h2>
              <p className="leading-relaxed">
                Fica eleito o foro da comarca de São Paulo/SP para dirimir
                quaisquer dúvidas, com renúncia expressa a qualquer outro, por
                mais privilegiado que seja.
              </p>
            </section>

            {/* Contato */}
            <section className="border-t border-gray-200 pt-8 mt-12">
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-6 text-[#3B3B3B]">
                Dúvidas Jurídicas?
              </h2>
              <div className="bg-[#3B3B3B] text-white p-8 rounded-3xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="mb-4 text-gray-300">Canais de atendimento:</p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <span className="text-[#C3FFD4] font-bold w-20">
                          Jurídico:
                        </span>
                        <a
                          href="mailto:juridico@turnus.com.br"
                          className="hover:text-[#C3FFD4] transition-colors"
                        >
                          juridico@turnus.com.br
                        </a>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#C3FFD4] font-bold w-20">
                          Suporte:
                        </span>
                        <a
                          href="mailto:suporte@turnus.com.br"
                          className="hover:text-[#C3FFD4] transition-colors"
                        >
                          suporte@turnus.com.br
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="border-t md:border-t-0 md:border-l border-gray-600 pt-6 md:pt-0 md:pl-8">
                    <p className="text-sm text-gray-400 mb-2">Operado por:</p>
                    <p className="font-bold text-lg mb-1">
                      LM Soluções Digitais LTDA
                    </p>
                    <p className="text-gray-400 text-sm">
                      CNPJ 60.683.849/0001-39
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer Note */}
            <div className="text-center pt-8">
              <p className="text-gray-500 text-sm italic">
                "Tempus sub control." - Ao utilizar o Turnus, você confirma que
                leu e aceitou integralmente estes termos.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
