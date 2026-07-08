import Image from "next/image";
import { IMAGENS, LINKS } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="w-full bg-gradient-to-br from-veloe-navy to-veloe-navy-dark text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        
        {/* Texto da chamada */}
        <div className="w-full md:w-2/3 text-center md:text-left animate-fade-in">
          <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold leading-tight mb-4">
            Precisa de soluções seguras e eficientes para o seu negócio?
          </h2>
          <p className="text-[clamp(1rem,2vw,1.15rem)] text-veloe-gray-100 max-w-2xl mx-auto md:mx-0 mb-6">
            Conte com a experiência e a tecnologia da TAG Tecnologia para o Sistema Financeiro. Nossa equipe está pronta para oferecer o suporte e as soluções que você precisa, com total transparência e conformidade.
          </p>
          <a
            href={LINKS.linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-veloe-green hover:bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            <Image
              src={IMAGENS.iconeWhatsapp}
              alt="Ícone WhatsApp"
              width={28}
              height={28}
            />
            Atendimento Imediato
          </a>
        </div>

        {/* Imagem complementar */}
        <div className="w-full md:w-1/3 flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Image
            src={IMAGENS.fundoPagina}
            alt="Tecnologia e segurança para o setor financeiro"
            width={320}
            height={240}
            className="w-full max-w-xs h-auto object-contain opacity-90"
          />
        </div>

      </div>
    </section>
  );
}
