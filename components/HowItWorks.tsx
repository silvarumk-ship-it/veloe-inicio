import { LINKS } from "@/lib/constants";

export default function HowItWorks() {
  const passos = [
    {
      numero: "1",
      titulo: "Entre em Contato",
      descricao: "Clique no botão de atendimento e envie sua mensagem pelo WhatsApp para falar com nossa equipe."
    },
    {
      numero: "2",
      titulo: "Explique sua Necessidade",
      descricao: "Informe quais são suas demandas ou dúvidas, para que possamos direcionar o atendimento da melhor forma."
    },
    {
      numero: "3",
      titulo: "Receba as Informações",
      descricao: "Enviamos todos os detalhes, condições e orientações de forma clara e transparente, sem letras miúdas."
    },
    {
      numero: "4",
      titulo: "Acompanhamento Contínuo",
      descricao: "Após o início do serviço, mantemos o suporte sempre disponível para ajudar no que for necessário."
    }
  ];

  return (
    <section id="como-funciona" className="w-full bg-veloe-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold text-veloe-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-veloe-gray-600 max-w-2xl mx-auto">
            Processo simples, seguro e transparente. Veja como é fácil contar com as soluções da TAG Tecnologia para o Sistema Financeiro.
          </p>
        </div>

        {/* Lista de passos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {passos.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-veloe-gray-100 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-veloe-navy text-white text-xl font-bold mb-4">
                {item.numero}
              </div>
              <h3 className="text-lg font-semibold text-veloe-gray-900 mb-3">
                {item.titulo}
              </h3>
              <p className="text-veloe-gray-600 leading-relaxed">
                {item.descricao}
              </p>
            </div>
          ))}
        </div>

        {/* Chamada para atendimento */}
        <div className="text-center mt-12">
          <a
            href={LINKS.linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-veloe-green hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all shadow hover:shadow-md"
          >
            Iniciar Atendimento
          </a>
        </div>
      </div>
    </section>
  );
}
