import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTATO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidade | TAG Tecnologia para o Sistema Financeiro",
  description: "Entenda como coletamos, usamos e protegemos os seus dados pessoais, seguindo a Lei Geral de Proteção de Dados (LGPD).",
};

export default function PoliticaPrivacidade() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-veloe-gray-900 mb-8">Política de Privacidade</h1>

        <div className="prose prose-gray max-w-none text-veloe-gray-700 space-y-6 leading-relaxed">
          <p>
            A <strong>{CONTATO.razaoSocial}</strong>, inscrita sob o CNPJ nº {CONTATO.cnpj}, valoriza a privacidade e a segurança das informações de seus usuários e clientes. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos os dados pessoais, em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais – LGPD).
          </p>

          <h2 className="text-xl font-semibold text-veloe-gray-900 mt-8">1. Quais dados coletamos</h2>
          <p>Podemos coletar os seguintes tipos de informações:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dados de contato: nome, telefone, e-mail e demais informações fornecidas voluntariamente por você ao entrar em contato.</li>
            <li>Dados de navegação: endereço IP, tipo de navegador, páginas acessadas e tempo de visita, coletados de forma automática para fins de segurança e melhoria da experiência.</li>
          </ul>

          <h2 className="text-xl font-semibold text-veloe-gray-900 mt-8">2. Finalidade do uso dos dados</h2>
          <p>Os dados são utilizados exclusivamente para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Prestar atendimento e responder dúvidas ou solicitações enviadas por você;</li>
            <li>Garantir a segurança e o funcionamento adequado do site;</li>
            <li>Cumprir obrigações legais e regulatórias aplicáveis ao setor financeiro;</li>
            <li>Melhorar continuamente nossos serviços e plataformas.</li>
          </ul>

          <h2 className="text-xl font-semibold text-veloe-gray-900 mt-8">3. Compartilhamento de dados</h2>
          <p>
            Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para cumprir obrigações legais, ordens judiciais ou com parceiros estritamente envolvidos na operação do site, sempre garantindo o mesmo nível de proteção.
          </p>

          <h2 className="text-xl font-semibold text-veloe-gray-900 mt-8">4. Armazenamento e segurança</h2>
          <p>
            Adotamos medidas técnicas e administrativas de segurança adequadas para proteger os dados contra acessos não autorizados, perdas ou alterações. Os dados são mantidos apenas pelo tempo necessário para cumprir suas finalidades ou obrigações legais.
          </p>

          <h2 className="text-xl font-semibold text-veloe-gray-900 mt-8">5. Seus direitos</h2>
          <p>Você tem o direito de:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Confirmar a existência de tratamento de seus dados;</li>
            <li>Acessar, corrigir ou atualizar suas informações;</li>
            <li>Solicitar a exclusão de seus dados, quando aplicável;</li>
            <li>Revogar o consentimento a qualquer momento.</li>
          </ul>
          <p>Para exercer seus direitos, entre em contato pelo e-mail: {CONTATO.email}.</p>

          <h2 className="text-xl font-semibold text-veloe-gray-900 mt-8">6. Contato</h2>
          <p>
            Em caso de dúvidas sobre esta política, entre em contato conosco:
            <br />
            <strong>{CONTATO.razaoSocial}</strong>
            <br />
            Endereço: {CONTATO.enderecoCompleto}
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
