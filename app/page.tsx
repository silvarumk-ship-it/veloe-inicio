import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { CONTATO } from "@/lib/constants";

// Dados para SEO e indexação pelo Google
export const metadata: Metadata = {
  title: "TAG Tecnologia para o Sistema Financeiro | Soluções Seguras",
  description: "Soluções tecnológicas completas para o setor financeiro. Gestão de pagamentos, infraestrutura, suporte e conformidade com todas as normas regulatórias.",
  keywords: "tecnologia financeira, meios de pagamento, sistemas financeiros, suporte técnico, conformidade LGPD",
  authors: [{ name: CONTATO.razaoSocial }],
  openGraph: {
    title: "TAG Tecnologia para o Sistema Financeiro",
    description: "Inovação e segurança para o seu negócio no setor financeiro",
    type: "website",
    locale: "pt_BR",
  },
  robots: "index, follow",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
