import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso do Turnus. Conheça as regras e condições para utilização da plataforma de gestão de plantões médicos.",
  openGraph: {
    title: "Termos de Uso | Turnus",
    description:
      "Termos de Uso do Turnus. Conheça as regras e condições para utilização da plataforma de gestão de plantões médicos.",
  },
};

export default function TermosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
