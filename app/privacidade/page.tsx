"use client";

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
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
          <h1 className="font-serif-brand text-5xl md:text-6xl mb-6 text-[#3B3B3B]">
            Política de Privacidade
          </h1>
          <p className="text-gray-600 mb-12">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                1. Introdução
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A Turnus, desenvolvida pela VOID Creative Code, está
                comprometida em proteger a privacidade e os dados pessoais de
                seus usuários. Esta Política de Privacidade descreve como
                coletamos, usamos, armazenamos e protegemos suas informações ao
                utilizar nossa plataforma de gestão de plantões médicos.
              </p>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                2. Informações que Coletamos
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#3B3B3B]">
                    2.1 Informações Fornecidas por Você
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Dados de cadastro: nome, e-mail, telefone, CPF, CRM,
                      especialidade médica
                    </li>
                    <li>
                      Informações profissionais: instituição de trabalho, cargo,
                      horários de disponibilidade
                    </li>
                    <li>Dados de pagamento e informações bancárias</li>
                    <li>
                      Comunicações e interações com nosso suporte e plataforma
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#3B3B3B]">
                    2.2 Informações Coletadas Automaticamente
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Dados de uso: páginas visitadas, funcionalidades
                      utilizadas, tempo de sessão
                    </li>
                    <li>
                      Informações técnicas: endereço IP, tipo de navegador,
                      sistema operacional, dispositivo
                    </li>
                    <li>Cookies e tecnologias similares de rastreamento</li>
                    <li>Logs de acesso e atividades na plataforma</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                3. Como Utilizamos suas Informações
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Fornecer, operar e manter os serviços da plataforma Turnus
                </li>
                <li>
                  Processar e gerenciar escalas médicas, plantões e trocas de
                  turno
                </li>
                <li>Processar pagamentos e transações financeiras</li>
                <li>
                  Enviar notificações importantes sobre escalas, trocas e
                  atualizações
                </li>
                <li>Melhorar e personalizar sua experiência na plataforma</li>
                <li>
                  Realizar análises e desenvolver novos recursos e
                  funcionalidades
                </li>
                <li>
                  Garantir a segurança e prevenir fraudes ou uso inadequado
                </li>
                <li>
                  Cumprir obrigações legais e regulatórias do setor de saúde
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                4. Compartilhamento de Informações
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Não vendemos suas informações pessoais. Podemos compartilhar
                seus dados apenas nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Com sua instituição de saúde:</strong> para gestão de
                  escalas e plantões
                </li>
                <li>
                  <strong>Prestadores de serviços:</strong> processamento de
                  pagamentos, hospedagem, análise de dados
                </li>
                <li>
                  <strong>Requisitos legais:</strong> quando exigido por lei ou
                  ordem judicial
                </li>
                <li>
                  <strong>Proteção de direitos:</strong> para proteger nossos
                  direitos, propriedade ou segurança
                </li>
                <li>
                  <strong>Com seu consentimento:</strong> em outras situações
                  mediante sua autorização expressa
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                5. Segurança dos Dados
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas técnicas e organizacionais apropriadas
                para proteger suas informações pessoais contra acesso não
                autorizado, alteração, divulgação ou destruição. Isso inclui:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                <li>Criptografia de dados em trânsito e em repouso</li>
                <li>Controles de acesso rigorosos e autenticação multifator</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Auditorias regulares de segurança</li>
                <li>Conformidade com padrões de segurança da informação</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                6. Seus Direitos (LGPD)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem
                os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Confirmação e acesso:</strong> saber se tratamos seus
                  dados e acessá-los
                </li>
                <li>
                  <strong>Correção:</strong> corrigir dados incompletos,
                  inexatos ou desatualizados
                </li>
                <li>
                  <strong>Anonimização, bloqueio ou eliminação:</strong> de
                  dados desnecessários ou excessivos
                </li>
                <li>
                  <strong>Portabilidade:</strong> receber seus dados em formato
                  estruturado
                </li>
                <li>
                  <strong>Eliminação:</strong> de dados tratados com seu
                  consentimento
                </li>
                <li>
                  <strong>Informação:</strong> sobre compartilhamento de dados
                </li>
                <li>
                  <strong>Revogação do consentimento:</strong> a qualquer
                  momento
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Para exercer seus direitos, entre em contato através do e-mail:{" "}
                <a
                  href="mailto:privacidade@turnus.app.br"
                  className="text-[#3B3B3B] font-bold hover:text-[#C3FFD4] transition-colors"
                >
                  privacidade@turnus.app.br
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                7. Retenção de Dados
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Mantemos suas informações pessoais pelo tempo necessário para
                cumprir as finalidades descritas nesta política, a menos que um
                período de retenção mais longo seja exigido ou permitido por
                lei. Dados relacionados a registros médicos e financeiros podem
                ser mantidos por períodos mais longos conforme exigido pela
                legislação aplicável.
              </p>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                8. Cookies e Tecnologias Similares
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Utilizamos cookies e tecnologias similares para melhorar sua
                experiência, analisar o uso da plataforma e personalizar
                conteúdo. Você pode gerenciar suas preferências de cookies
                através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                9. Alterações nesta Política
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente.
                Notificaremos você sobre mudanças significativas através da
                plataforma ou por e-mail. Recomendamos que você revise esta
                política regularmente.
              </p>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                10. Contato
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Para questões sobre esta Política de Privacidade ou sobre o
                tratamento de seus dados pessoais, entre em contato:
              </p>
              <div className="mt-4 space-y-2 text-gray-700">
                <p>
                  <strong>E-mail:</strong>{" "}
                  <a
                    href="mailto:privacidade@turnus.app.br"
                    className="text-[#3B3B3B] font-bold hover:text-[#C3FFD4] transition-colors"
                  >
                    privacidade@turnus.app.br
                  </a>
                </p>
                <p>
                  <strong>Encarregado de Dados (DPO):</strong>{" "}
                  <a
                    href="mailto:dpo@turnus.app.br"
                    className="text-[#3B3B3B] font-bold hover:text-[#C3FFD4] transition-colors"
                  >
                    dpo@turnus.app.br
                  </a>
                </p>
                <p>
                  <strong>Desenvolvido por:</strong> VOID Creative Code
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://voidcc.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3B3B3B] font-bold hover:text-[#C3FFD4] transition-colors"
                  >
                    voidcc.com.br
                  </a>
                </p>
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
