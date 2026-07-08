import { IMAGENS, LINKS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-veloe-light to-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* Texto principal */}
        <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in">
          <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-veloe-gray-900 leading-tight mb-4">
            TAG Tecnologia para o Sistema Financeiro
          </h1>
          <p className="text-[clamp(1rem,2vw,1.15rem)] text-veloe-gray-600 mb-6 max-w-xl mx-auto md:mx-0">
            Soluções seguras, ágeis e transparentes para gestão de meios de pagamento e serviços financeiros. 
            Atendimento especializado para você e sua empresa.
          </p>
          <a
            href={LINKS.linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-veloe-green hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium text-base transition-all shadow-md hover:shadow-lg"
          >
            <img
              src={IMAGENS.iconeWhatsapp}
              alt="Ícone WhatsApp"
              width={24}
              height={24}
            />
            Falar com Atendimento
          </a>
        </div>

        {/* Imagem ilustrativa */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={IMAGENS.tagVeloe}
            alt="Soluções e serviços da TAG Tecnologia"
            width={500}
            height={350}
            className="w-full max-w-md h-auto object-contain animate-fade-in"
          />
        </div>

      </div>
    </section>
  );
}
