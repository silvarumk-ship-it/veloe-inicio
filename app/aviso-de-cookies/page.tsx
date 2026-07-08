import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTATO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aviso de Cookies | TAG Tecnologia para o Sistema Financeiro",
  description: "Entenda como utilizamos cookies para melhorar sua experiência e garantir o funcionamento adequado do nosso site.",
};

export default function AvisoDeCookies() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-veloe-gray-900 mb-8">Aviso de Cookies</h1>

        <div className="prose prose-gray max-w-none text-veloe-gray-700 space-y-6 leading-relaxed">
          <p>
            A <strong>{CONTATO.razaoSocial}</strong> utiliza cookies e tecnologias semelhantes em seu site para melhorar a experiência de navegação, garantir a segurança e analisar o uso da plataforma. Este aviso explica o que são cookies, como os utilizamos e como você pode gerenciá-los.
          </p>

          <h2 className="text-xl font-semibold text-veloe-gray-900 mt-8">1. O que são cookies?</h2>
          <p>
            Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, celular ou tablet) quando você visita um site. Eles permitem reconhecer o dispositivo e coletar informações sobre suas preferências e atividades.
          </p>

          <h2 className="text-xl font-semibold text-veloe-gray-900 mt-8">2. Tipos de cookies que utilizamos</h2>
          <p>Usamos apenas cookies estritamente necessários para o funcionamento do site, que:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Garantem o carregamento correto das páginas e funcionalidades básicas;</li>
            <li>Protegem o site contra acessos não autorizados;</li>
            <li>Não coletam informações pessoais que possam identificar você diretamente.</li>
          </ul>

          <h2 className="text-xl font-semibold text-veloe-gray-900 mt-8">3. Como gerenciar os cookies</h2>
          <p>
            Você pode configurar seu navegador para recusar cookies ou alertá-lo quando eles forem enviados. No entanto, ao desativar cookies necessários, algumas funcionalidades do site podem não funcionar corretamente. Cada navegador tem sua própria forma de configuração, que pode ser consultada na seção de ajuda do próprio programa.
          </p>

          <h2 className="text-xl font-semibold text-veloe-gray-900 mt-8">4. Alterações neste aviso</h2>
          <p>
            Podemos atualizar este Aviso de Cookies periodicamente. Sempre que houver alterações, elas serão publicadas nesta mesma página, com a data de atualização revisada.
          </p>

          <h2 className="text-xl font-semibold text-veloe-gray-900 mt-8">5. Contato</h2>
          <p>
            Para dúvidas sobre o uso de cookies ou tratamento de dados, entre em contato:
            <br />
            E-mail: {CONTATO.email}
            <br />
            Telefone: {CONTATO.telefone}
          </p>

          <p className="text-sm text-veloe-gray-500 mt-8">Última atualização: Julho de 2026</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
