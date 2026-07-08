import { useState } from "react";
import { LINKS } from "@/lib/constants";

type Pergunta = {
  pergunta: string;
  resposta: string;
};

export default function FAQ() {
  const perguntas: Pergunta[] = [
    {
      pergunta: "Quais serviços a TAG Tecnologia oferece?",
      resposta: "Atuamos com soluções tecnológicas para o setor financeiro, incluindo gestão de meios de pagamento, infraestrutura de sistemas, suporte técnico e conformidade com normas regulatórias."
    },
    {
      pergunta: "Como posso entrar em contato para atendimento?",
      resposta: "O atendimento é feito diretamente pelo WhatsApp, através do número disponibilizado no site. Nossa equipe está preparada para orientar e responder suas dúvidas com agilidade."
    },
    {
      pergunta: "Os dados dos clientes são protegidos?",
      resposta: "Sim. Seguimos rigorosamente a Lei Geral de Proteção de Dados (LGPD) e todas as normas do setor financeiro, garantindo total segurança e sigilo das informações."
    },
    {
      pergunta: "A empresa é regularizada e autorizada a atuar?",
      resposta: "Sim. Somos a TAG Tecnologia para o Sistema Financeiro S.A., inscrita no CNPJ 31.345.107/0001-03, seguindo todas as regulamentações exigidas para o funcionamento no setor."
    },
    {
      pergunta: "Quanto tempo leva para receber uma resposta?",
      resposta: "Nossa equipe responde dentro do horário comercial, de segunda a sexta-feira, das 9h às 18h, sempre buscando agilidade e clareza em cada atendimento."
    }
  ];

  const [aberto, setAberto] = useState<number | null>(null);

  const alternar = (indice: number) => {
    setAberto(aberto === indice ? null : indice);
  };

  return (
    <section id="duvidas" className="w-full bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold text-veloe-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-veloe-gray-600 max-w-2xl mx-auto">
            Tire suas principais dúvidas sobre nossos serviços e atendimento. Se precisar de mais detalhes, é só entrar em contato.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {perguntas.map((item, indice) => (
            <div 
              key={indice}
              className="border border-veloe-gray-200 rounded-lg overflow-hidden bg-veloe-gray-50 animate-fade-in"
              style={{ animationDelay: `${indice * 0.1}s` }}
            >
              <button
                onClick={() => alternar(indice)}
                className="w-full flex items-center justify-between p-4 text-left font-medium text-veloe-gray-900 hover:bg-veloe-gray-100 transition-colors"
              >
                {item.pergunta}
                <span className="text-xl text-veloe-navy">
                  {aberto === indice ? "−" : "+"}
                </span>
              </button>
              {aberto === indice && (
                <div className="p-4 border-t border-veloe-gray-200 text-veloe-gray-700 leading-relaxed bg-white">
                  {item.resposta}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={LINKS.linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-veloe-navy hover:bg-veloe-navy-dark text-white px-6 py-3 rounded-lg font-medium transition-all shadow hover:shadow-md"
          >
            Ainda tem dúvidas? Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
}
