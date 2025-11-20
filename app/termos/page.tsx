"use client";

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
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
          <h1 className="font-serif-brand text-5xl md:text-6xl mb-6 text-[#3B3B3B]">
            Termos de Uso
          </h1>
          <p className="text-gray-600 mb-12">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                1. Aceitação dos Termos
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Bem-vindo ao Turnus. Ao acessar e usar nossa plataforma de
                gestão de plantões médicos, você concorda em cumprir e estar
                vinculado a estes Termos de Uso. Se você não concorda com
                qualquer parte destes termos, não deve usar nossos serviços. A
                Turnus é desenvolvida e operada pela VOID Creative Code.
              </p>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                2. Descrição do Serviço
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                O Turnus é uma plataforma SaaS que oferece:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Gestão automatizada de escalas e plantões médicos</li>
                <li>Sistema de trocas de turnos entre profissionais</li>
                <li>Controle de pagamentos e gestão financeira</li>
                <li>Notificações e alertas em tempo real</li>
                <li>Relatórios e análises de dados</li>
                <li>Integração com sistemas hospitalares</li>
                <li>Suporte via inteligência artificial</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                3. Elegibilidade e Cadastro
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#3B3B3B]">
                    3.1 Requisitos
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Para usar o Turnus, você deve ser maior de 18 anos e
                    profissional da área de saúde com registro ativo em conselho
                    profissional, ou representante autorizado de instituição de
                    saúde.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#3B3B3B]">
                    3.2 Informações de Cadastro
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Você concorda em fornecer informações precisas, atuais e
                    completas durante o processo de cadastro e manter essas
                    informações atualizadas. Você é responsável por manter a
                    confidencialidade de sua conta e senha.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                4. Uso Aceitável
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Você concorda em usar o Turnus apenas para fins legítimos e de
                acordo com estes Termos. Você não deve:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Usar a plataforma de maneira que viole leis ou regulamentos
                  aplicáveis
                </li>
                <li>
                  Fornecer informações falsas ou enganosas sobre plantões ou
                  escalas
                </li>
                <li>
                  Tentar obter acesso não autorizado a sistemas ou dados de
                  outros usuários
                </li>
                <li>
                  Interferir ou interromper a integridade ou desempenho da
                  plataforma
                </li>
                <li>
                  Usar a plataforma para transmitir vírus, malware ou código
                  malicioso
                </li>
                <li>
                  Copiar, modificar ou distribuir conteúdo da plataforma sem
                  autorização
                </li>
                <li>
                  Usar bots, scripts ou ferramentas automatizadas não
                  autorizadas
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                5. Planos e Pagamentos
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#3B3B3B]">
                    5.1 Assinaturas
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    O Turnus oferece diferentes planos de assinatura. Os preços
                    e recursos de cada plano estão descritos em nossa página de
                    preços e podem ser alterados mediante aviso prévio.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#3B3B3B]">
                    5.2 Faturamento
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    As assinaturas são cobradas antecipadamente de forma mensal
                    ou anual. Você autoriza a cobrança automática no método de
                    pagamento fornecido. Todos os valores são em reais (BRL) e
                    não incluem impostos aplicáveis.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#3B3B3B]">
                    5.3 Cancelamento e Reembolso
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Você pode cancelar sua assinatura a qualquer momento. O
                    cancelamento terá efeito ao final do período de faturamento
                    atual. Não oferecemos reembolsos proporcionais, exceto
                    quando exigido por lei.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                6. Propriedade Intelectual
              </h2>
              <p className="text-gray-700 leading-relaxed">
                O Turnus e todo seu conteúdo, recursos e funcionalidades são de
                propriedade da VOID Creative Code e estão protegidos por leis de
                direitos autorais, marcas registradas e outras leis de
                propriedade intelectual. Você recebe uma licença limitada, não
                exclusiva e intransferível para usar a plataforma conforme estes
                Termos.
              </p>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                7. Dados e Privacidade
              </h2>
              <p className="text-gray-700 leading-relaxed">
                O tratamento de dados pessoais está descrito em nossa Política
                de Privacidade, que faz parte integrante destes Termos. Ao usar
                o Turnus, você concorda com a coleta e uso de informações
                conforme descrito na Política de Privacidade.
              </p>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                8. Responsabilidades e Limitações
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#3B3B3B]">
                    8.1 Disponibilidade do Serviço
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nos esforçamos para manter o Turnus disponível 24/7, mas não
                    garantimos operação ininterrupta. Podemos realizar
                    manutenções programadas ou emergenciais que podem afetar
                    temporariamente a disponibilidade.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#3B3B3B]">
                    8.2 Limitação de Responsabilidade
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    O Turnus é uma ferramenta de gestão e não substitui a
                    responsabilidade profissional dos usuários. Você é
                    responsável por verificar a precisão das escalas e cumprir
                    suas obrigações profissionais. Não nos responsabilizamos por
                    danos indiretos, incidentais ou consequenciais decorrentes
                    do uso da plataforma.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#3B3B3B]">
                    8.3 Backup de Dados
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Realizamos backups regulares dos dados, mas recomendamos que
                    você mantenha cópias próprias de informações críticas.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                9. Conformidade Legal
              </h2>
              <p className="text-gray-700 leading-relaxed">
                O Turnus está em conformidade com a Lei Geral de Proteção de
                Dados (LGPD), Código de Defesa do Consumidor e demais
                legislações aplicáveis ao setor de saúde no Brasil. Você
                concorda em usar a plataforma em conformidade com todas as leis
                e regulamentos aplicáveis.
              </p>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                10. Modificações dos Termos
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Reservamos o direito de modificar estes Termos a qualquer
                momento. Notificaremos você sobre mudanças significativas
                através da plataforma ou por e-mail. O uso continuado da
                plataforma após as modificações constitui aceitação dos novos
                termos.
              </p>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                11. Rescisão
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos suspender ou encerrar sua conta se você violar estes
                Termos ou se envolver em atividades fraudulentas ou ilegais.
                Você pode encerrar sua conta a qualquer momento através das
                configurações da plataforma ou entrando em contato com nosso
                suporte.
              </p>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                12. Lei Aplicável e Jurisdição
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Estes Termos são regidos pelas leis da República Federativa do
                Brasil. Quaisquer disputas serão resolvidas nos tribunais
                brasileiros competentes.
              </p>
            </section>

            <section>
              <h2 className="font-serif-brand text-3xl mb-4 text-[#3B3B3B]">
                13. Contato
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Para questões sobre estes Termos de Uso, entre em contato:
              </p>
              <div className="mt-4 space-y-2 text-gray-700">
                <p>
                  <strong>E-mail:</strong>{" "}
                  <a
                    href="mailto:contato@turnus.app.br"
                    className="text-[#3B3B3B] font-bold hover:text-[#C3FFD4] transition-colors"
                  >
                    contato@turnus.app.br
                  </a>
                </p>
                <p>
                  <strong>Suporte:</strong>{" "}
                  <a
                    href="mailto:suporte@turnus.app.br"
                    className="text-[#3B3B3B] font-bold hover:text-[#C3FFD4] transition-colors"
                  >
                    suporte@turnus.app.br
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

            <section className="bg-[#C3FFD4]/20 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                <strong>Tempus sub control.</strong> Ao usar o Turnus, você
                reconhece que leu, compreendeu e concorda em estar vinculado a
                estes Termos de Uso e à nossa Política de Privacidade.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;
