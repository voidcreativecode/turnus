"use client";

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Eye, Lock, Shield } from "lucide-react"; // Adicionei ícones para dar um toque visual
import { useEffect, useState } from "react";

const PrivacyPage = () => {
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
              <Shield size={12} className="text-[#C3FFD4]" />
              Legal & Compliance
            </div>
            <h1 className="font-serif-brand text-4xl md:text-6xl mb-4 text-[#3B3B3B]">
              Política de Privacidade
            </h1>
            <p className="text-gray-500 flex items-center gap-2">
              <Eye size={16} />
              Última atualização: 20 de Novembro de 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-12 text-gray-700">
            {/* 1. Introdução */}
            <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-4 text-[#3B3B3B] flex items-center gap-3">
                1. Introdução
              </h2>
              <p className="leading-relaxed">
                A <strong>Turnus</strong>, uma plataforma desenvolvida pela{" "}
                <strong>VOID Creative Code</strong> (sob a razão social{" "}
                <strong>LM Soluções Digitais LTDA</strong>), está comprometida
                em proteger a privacidade e os dados pessoais de seus usuários.
                Esta Política de Privacidade descreve como coletamos, usamos,
                armazenamos e protegemos suas informações ao utilizar nossa
                plataforma de gestão de plantões médicos.
              </p>
            </section>

            {/* 2. Informações que Coletamos */}
            <section>
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-6 text-[#3B3B3B]">
                2. Informações que Coletamos
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-lg mb-3 text-[#3B3B3B] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C3FFD4] border border-[#3B3B3B]"></span>
                    2.1 Fornecidas por Você
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Dados de cadastro (Nome, CPF, CRM, Especialidade)</li>
                    <li>• Informações profissionais e de disponibilidade</li>
                    <li>• Dados bancários para processamento de pagamentos</li>
                    <li>• Histórico de chamados no suporte</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-lg mb-3 text-[#3B3B3B] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#839CC7]"></span>
                    2.2 Coletadas Automaticamente
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Logs de acesso e IP</li>
                    <li>• Tipo de dispositivo e navegador</li>
                    <li>• Páginas visitadas e tempo de sessão</li>
                    <li>• Cookies essenciais de segurança</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 3. Uso das Informações */}
            <section>
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-4 text-[#3B3B3B]">
                3. Como Utilizamos seus Dados
              </h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-[#3B3B3B]">
                <li>
                  Fornecer, operar e manter a estabilidade da plataforma Turnus.
                </li>
                <li>
                  Processar escalas, validar trocas de plantão e contabilizar
                  horas.
                </li>
                <li>Processar transações financeiras com segurança.</li>
                <li>
                  Enviar notificações críticas (ex: plantão cancelado, troca
                  aceita).
                </li>
                <li>
                  Melhorar a experiência do usuário através de análise de dados
                  anônimos.
                </li>
                <li>
                  Garantir segurança, prevenir fraudes e cumprir obrigações
                  legais do CRM/CFM.
                </li>
              </ul>
            </section>

            {/* 4. Compartilhamento */}
            <section>
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-4 text-[#3B3B3B]">
                4. Compartilhamento de Informações
              </h2>
              <div className="bg-[#E6FFEF] p-6 rounded-2xl border border-[#C3FFD4]">
                <p className="font-medium mb-4 flex items-center gap-2">
                  <Lock size={18} className="text-[#2E8B57]" />
                  Não vendemos seus dados. O compartilhamento ocorre apenas:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>• Com sua instituição de saúde:</strong> Para fins
                    operacionais da escala.
                  </li>
                  <li>
                    <strong>• Infraestrutura:</strong> Servidores (AWS/Google
                    Cloud) e Gateways de Pagamento.
                  </li>
                  <li>
                    <strong>• Requisito Legal:</strong> Quando exigido
                    judicialmente.
                  </li>
                </ul>
              </div>
            </section>

            {/* 5. Segurança */}
            <section>
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-4 text-[#3B3B3B]">
                5. Segurança dos Dados
              </h2>
              <p className="leading-relaxed mb-4">
                Implementamos rigorosas medidas técnicas, incluindo criptografia
                de ponta a ponta (SSL/TLS) para dados em trânsito e criptografia
                AES-256 para dados em repouso. Realizamos backups diários e
                auditorias de acesso.
              </p>
            </section>

            {/* 6. LGPD */}
            <section>
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-4 text-[#3B3B3B]">
                6. Seus Direitos (LGPD)
              </h2>
              <p className="leading-relaxed mb-4">
                Você tem total controle sobre seus dados, incluindo direitos de
                acesso, correção, portabilidade e eliminação (exceto quando a
                retenção for exigida por lei fiscal ou médica).
              </p>
              <p className="leading-relaxed mt-4 bg-white p-4 rounded-xl border border-gray-200 inline-block">
                Para exercer seus direitos, contate nosso DPO:{" "}
                <a
                  href="mailto:privacidade@turnus.com.br"
                  className="text-[#3B3B3B] font-bold hover:text-[#2E8B57] transition-colors border-b border-[#3B3B3B]"
                >
                  privacidade@turnus.com.br
                </a>
              </p>
            </section>

            {/* ... Outras seções padrão ... */}

            <section className="border-t border-gray-200 pt-8 mt-12">
              <h2 className="font-serif-brand text-2xl md:text-3xl mb-6 text-[#3B3B3B]">
                Contato do Encarregado de Dados
              </h2>
              <div className="bg-[#3B3B3B] text-white p-8 rounded-3xl">
                <p className="mb-6 text-gray-300">
                  Para dúvidas sobre esta Política ou tratamento de dados:
                </p>
                <div className="space-y-3">
                  <p className="flex items-center gap-3">
                    <span className="text-[#C3FFD4] font-bold w-24">
                      E-mail:
                    </span>
                    <a
                      href="mailto:dpo@turnus.com.br"
                      className="hover:text-[#C3FFD4] transition-colors"
                    >
                      dpo@turnus.com.br
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-[#C3FFD4] font-bold w-24">
                      Empresa:
                    </span>
                    <span>LM Soluções Digitais LTDA</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-[#C3FFD4] font-bold w-24">
                      Developer:
                    </span>
                    <a
                      href="https://voidcc.com.br"
                      target="_blank"
                      className="hover:text-[#C3FFD4] transition-colors"
                    >
                      VOID Creative Code
                    </a>
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

export default PrivacyPage;
