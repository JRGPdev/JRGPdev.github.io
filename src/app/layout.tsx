import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, JetBrains_Mono } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { SmoothAnchors } from "@/components/SmoothAnchors";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "800"],
  variable: "--font-bricolage",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Jose Rene Guarachi · AI Engineer & Full Stack",
  description:
    "Portafolio de Jose Rene Guarachi, desarrollador Full Stack e Ingeniero de Sistemas especializado en agentes de IA, RAG y automatización. Experiencia, proyectos y CV.",
  openGraph: {
    title: "Jose Rene Guarachi · AI Engineer & Full Stack",
    description: "Desarrollador Full Stack especializado en agentes de IA. Experiencia, proyectos y CV.",
    locale: "es_BO",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0F17",
};

const themeScript = `try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t==="light"?"light":"dark"}catch(e){document.documentElement.dataset.theme="dark"}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      data-theme="dark"
      suppressHydrationWarning
      className={`${bricolage.variable} ${geist.variable} ${jetbrains.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans text-base antialiased sm:text-[17px]">
        <MotionProvider>{children}</MotionProvider>
        <SmoothAnchors />
      </body>
    </html>
  );
}
