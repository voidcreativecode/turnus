import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade do Turnus. Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.",
  openGraph: {
    title: "Política de Privacidade | Turnus",
    description:
      "Política de Privacidade do Turnus. Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.",
  },
};

export default function PrivacidadeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
