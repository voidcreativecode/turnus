"use client";

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { FileText, Lock, Scale, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

const LGPDPage = () => {
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
          {/* Header */}
          <div className="mb-12 border-b border-gray-200 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B3B3B] text-white text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck size={12} className="text-[#C3FFD4]" />
              Compliance LGPD
            </div>
            <h1 className="font-serif-brand text-4xl md:text-6xl mb-4 text-[#3B3B3B]">
              Programa LGPD Turnus
            </h1>
            <p className="text-gray-500 flex items-center gap-2">
              <FileText size={16} />
              Última atualização: 20 de Novembro de 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-12 text-gray-700">
            {/* Visão Geral */}
            <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-4 text-[#3B3B3B]">
                1. Compromisso com a Proteção de Dados
              </h2>
              <p className="leading-relaxed">
                A <strong>Turnus</strong> é um produto desenvolvido e operado
                pela <strong>LM Soluções Digitais LTDA (VOID)</strong>. Operamos
                sob rigorosa aderência à <strong>Lei 13.709/2018 (LGPD)</strong>
                , garantindo transparência, segurança e governança em todo o
                ciclo de vida dos dados pessoais tratados em nossa plataforma.
              </p>
            </section>

            {/* Papéis - Ajustado para Void como Controladora */}
            <section>
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-6 text-[#3B3B3B]">
                2. Papéis e Responsabilidades
              </h2>
              <div className="bg-white p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="text-[#3B3B3B]" size={24} />
                  <h3 className="font-bold text-xl">Controladora de Dados</h3>
                </div>
                <p className="text-base leading-relaxed">
                  A <strong>LM Soluções Digitais LTDA (VOID)</strong> atua como{" "}
                  <strong>Controladora</strong> dos dados pessoais inseridos e
                  processados na plataforma Turnus. Nós tomamos as decisões
                  referentes ao tratamento dos dados pessoais, definindo a
                  finalidade e os meios de processamento, sempre em conformidade
                  com as bases legais aplicáveis e respeitando a privacidade dos
                  titulares (profissionais de saúde e gestores).
                </p>
              </div>
            </section>

            {/* Bases Legais */}
            <section>
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-4 text-[#3B3B3B]">
                3. Bases Legais Utilizadas
              </h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#3B3B3B]">
                <li>
                  <strong>Execução de contrato:</strong> para viabilizar a
                  gestão de escalas e o funcionamento da plataforma.
                </li>
                <li>
                  <strong>Obrigação legal/regulatória:</strong> cumprimento de
                  normas trabalhistas, fiscais e regulações do setor de saúde
                  (CFM).
                </li>
                <li>
                  <strong>Legítimo interesse:</strong> para segurança da
                  plataforma, prevenção a fraudes e melhoria dos serviços.
                </li>
                <li>
                  <strong>Consentimento:</strong> para comunicações específicas
                  e funcionalidades opcionais.
                </li>
              </ul>
            </section>

            {/* Segurança */}
            <section>
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-4 text-[#3B3B3B]">
                4. Segurança e Governança
              </h2>
              <div className="bg-[#E6FFEF] p-6 rounded-2xl border border-[#C3FFD4]">
                <p className="font-medium mb-4 flex items-center gap-2">
                  <Lock size={18} className="text-[#2E8B57]" />
                  Principais práticas adotadas pela VOID:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    • Criptografia TLS 1.3 em trânsito e AES-256 em repouso.
                  </li>
                  <li>
                    • Gestão de acessos com MFA e segregação de ambientes.
                  </li>
                  <li>• Monitoramento contínuo e backups criptografados.</li>
                  <li>
                    • Políticas de resposta a incidentes e plano de continuidade
                    de negócios.
                  </li>
                </ul>
              </div>
            </section>

            {/* Direitos dos titulares */}
            <section>
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-4 text-[#3B3B3B]">
                5. Direitos dos Titulares
              </h2>
              <p className="leading-relaxed mb-4">
                Como titular dos dados, você pode exercer seus direitos
                previstos nos artigos 18 e 19 da LGPD (acesso, correção,
                portabilidade, eliminação, etc.) entrando em contato diretamente
                conosco.
              </p>
              <div className="bg-white p-4 rounded-xl border border-gray-200 inline-flex flex-col gap-2 text-sm">
                <span className="font-semibold">
                  Canal exclusivo de Privacidade:
                </span>
                <a
                  href="mailto:lgpd@voidcc.com.br"
                  className="text-[#3B3B3B] font-bold hover:text-[#2E8B57] transition-colors border-b border-transparent hover:border-[#2E8B57] w-fit"
                >
                  lgpd@voidcc.com.br
                </a>
              </div>
            </section>

            {/* Ciclo de vida */}
            <section>
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-4 text-[#3B3B3B]">
                6. Ciclo de Vida dos Dados
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                {["Coleta", "Uso", "Retenção"].map((fase) => (
                  <div
                    key={fase}
                    className="bg-white rounded-2xl border border-gray-100 p-5 text-center hover:border-[#C3FFD4] transition-colors"
                  >
                    <Scale className="mx-auto mb-3 text-[#3B3B3B]" size={20} />
                    <p className="font-semibold">{fase}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      Gerenciado pela VOID sob políticas rígidas.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Incidentes */}
            <section>
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-4 text-[#3B3B3B]">
                7. Encarregado pelo Tratamento (DPO)
              </h2>
              <p className="leading-relaxed mb-4">
                Para qualquer solicitação referente aos seus dados pessoais ou
                para reportar incidentes de segurança, entre em contato com
                nosso Encarregado de Proteção de Dados.
              </p>
              <div className="bg-[#3B3B3B] text-white p-8 rounded-3xl">
                <p className="mb-4 text-gray-300">Dados de Contato:</p>
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="text-[#C3FFD4] font-bold w-20 inline-block">
                      Controladora:
                    </span>{" "}
                    LM Soluções Digitais LTDA (VOID)
                  </p>
                  <p>
                    <span className="text-[#C3FFD4] font-bold w-20 inline-block">
                      E-mail DPO:
                    </span>{" "}
                    <a
                      href="mailto:dpo@voidcc.com.br"
                      className="hover:text-[#C3FFD4] transition-colors"
                    >
                      dpo@voidcc.com.br
                    </a>
                  </p>
                  <p>
                    <span className="text-[#C3FFD4] font-bold w-20 inline-block">
                      CNPJ:
                    </span>{" "}
                    60.683.849/0001-39
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LGPDPage;
