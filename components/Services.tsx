import { LINKS } from "@/lib/constants";

export default function Services() {
  const servicos = [
    {
      titulo: "Gestão de Meios de Pagamento",
      descricao: "Soluções completas para administração de transações, cartões e processamento de pagamentos com segurança e estabilidade."
    },
    {
      titulo: "Infraestrutura para Serviços Financeiros",
      descricao: "Plataformas tecnológicas robustas e seguras, desenvolvidas para atender às necessidades do setor financeiro com conformidade."
    },
    {
      titulo: "Suporte Técnico Especializado",
      descricao: "Atendimento qualificado para resolução de dúvidas, ajustes e manutenção dos sistemas, garantindo continuidade das operações."
    },
    {
      titulo: "Conformidade e Segurança de Dados",
      descricao: "Sistemas que seguem todas as normas e regulamentações vigentes, com proteção total das informações de clientes e parceiros."
    }
  ];

  return (
    <section id="servicos" className="w-full bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-[clamp(1.5rem,3vw,2.2rem)] font-bold text-veloe-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-veloe-gray-600 max-w-2xl mx-auto">
            Conheça as soluções tecnológicas da TAG Tecnologia para o Sistema Financeiro, desenvolvidas para trazer eficiência e segurança para o seu negócio.
          </p>
        </div>

        {/* Grade de serviços */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {servicos.map((item, index) => (
            <div 
              key={index}
              className="bg-veloe-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-veloe-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-veloe-navy mb-3">
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
            className="inline-block bg-veloe-navy hover:bg-veloe-navy-dark text-white px-6 py-3 rounded-lg font-medium transition-all shadow hover:shadow-md"
          >
            Mais Informações
          </a>
        </div>
      </div>
    </section>
  );
}
