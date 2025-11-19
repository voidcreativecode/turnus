import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { TurnusSchema } from "./schema";

// Turnus Brand Fonts
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

// SEO Otimizado
export const metadata: Metadata = {
  metadataBase: new URL("https://turnus.app.br"),
  title: {
    default: "Turnus - Gestão Inteligente de Plantões Médicos",
    template: "%s | Turnus",
  },
  description:
    "Tempus sub control. Sistema completo de gestão de escalas médicas. Automatize plantões, controle trocas e pagamentos com inteligência artificial. Solução para hospitais e clínicas.",
  keywords: [
    "gestão de plantões",
    "escala médica",
    "plantão médico",
    "gestão hospitalar",
    "sistema para hospitais",
    "gestão de escalas",
    "software médico",
    "automação hospitalar",
    "turnus",
    "plantonistas",
  ],
  authors: [{ name: "VOID Creative Code", url: "https://voidcc.com.br" }],
  creator: "VOID Creative Code",
  publisher: "Turnus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://turnus.app.br",
    title:
      "Turnus - Gestão Inteligente de Plantões Médicos | Tempus sub control",
    description:
      "Tempus sub control. Sistema completo de gestão de escalas médicas. Automatize plantões, controle trocas e pagamentos com inteligência artificial.",
    siteName: "Turnus",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Turnus - Gestão de Plantões Médicos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Turnus - Gestão Inteligente de Plantões Médicos | Tempus sub control",
    description:
      "Tempus sub control. Sistema completo de gestão de escalas médicas. Automatize plantões, controle trocas e pagamentos.",
    images: ["/og-image.png"],
    creator: "@turnus",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  // verification: {
  //   google: "codigo-opcional-se-ja-verificado-via-dns",
  // },
  alternates: {
    canonical: "https://turnus.app.br",
  },
  category: "healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <TurnusSchema />
      </head>
      <body
        className={`${dmSans.variable} ${dmSerifDisplay.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
