import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LGPD e Proteção de Dados",
  description:
    "Programa de conformidade LGPD do Turnus. Conheça políticas de privacidade, segurança e direitos dos titulares.",
  openGraph: {
    title: "LGPD | Turnus",
    description:
      "Transparência total sobre como o Turnus protege dados pessoais e atende à Lei Geral de Proteção de Dados.",
  },
};

export default function LGPDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
