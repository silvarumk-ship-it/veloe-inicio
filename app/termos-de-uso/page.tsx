import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTATO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Termos de Uso | TAG Tecnologia para o Sistema Financeiro",
  description: "Leia os termos e condições que regulam o uso do nosso site e serviços, com clareza e transparência.",
};

export default function TermosDeUso() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-veloe-gray-900 mb-8">Termos de Uso</h1>

        <div className="prose prose-gray max-w-none text-veloe-gray-700 space-y-6 leading-relaxed">
          <p>
            Estes Termos de Uso regulam o acesso e a utilização do site da <strong>{CONTATO.razaoSocial}</strong>, com sede no endereço {CONTATO.enderecoCompleto}, inscrita sob o CNPJ nº {CONTATO.cnpj}. Ao acessar e utilizar nosso site, você concorda com todas as condições aqui descritas.
          </p>

          <h2 className="text-xl font-semibold text-veloe-gray-900 mt-8">1. Objetivo do site</h2>
          <p>
            O site tem como finalidade apresentar informações institucionais, serviços prestados e canais de atendimento da TAG Tecnologia. Não constitui oferta de contratação, mas sim meio de comunicação e orientação aos usuários.
          </p>

          <h2 className="text-xl font-semibold text-veloe-gray-900 mt-8">2. Responsabilidades do usuário</h2>
          <p>O usuário compromete-se a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Utilizar o site apenas para fins lícitos e legítimos;</li>
            <li>Não inserir ou transmitir conteúdo que seja ofensivo, ilegal ou que viole direitos de terceiros;</li>
            <li>Fornecer informações corretas e verdadeiras ao entrar em contato;</li>
            <li>Respeitar as leis e regulamentações aplicáveis ao uso da internet.</li>
          </ul>

          <h2 className="text-xl font-semibold text-veloe-gray-900 mt-8">3. Propriedade intelectual</h2>
          <p>
            Todo o conteúdo do site — incluindo textos, imagens, logotipos, layout e códigos — é de propriedade exclusiva da TAG Tecnologia ou licenciado para uso. É proibida a reprodução, distribuição ou modificação sem autorização prévia e por escrito.
          </p>

          <h2 className="text-xl font-semibold text-veloe-gray-900 mt-8">4. Limitações de responsabilidade</h2>
          <p>
            Buscamos manter as informações sempre atualizadas e corretas, mas não garantimos a ausência de eventuais imprecisões. O uso das informações é de responsabilidade do usuário. Não nos responsabilizamos por danos decorrentes do uso indevido do site ou de links externos.
          </p>

          <h2 className="text-xl font-semibold text-veloe-gray-900 mt-8">5. Alterações nos termos</h2>
          <p>
            Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento, mediante publicação no próprio site. As alterações passam a valer a partir da data de sua publicação.
          </p>

          <h2 className="text-xl font-semibold text-veloe-gray-900 mt-8">6. Legislação aplicável</h2>
          <p>
            Estes Termos são regidos pelas leis da República Federativa do Brasil. Qualquer controvérsia será resolvida no foro da comarca de Barueri/SP, com exclusão de qualquer outro, por mais privilegiado que seja.
          </p>

          <p className="text-sm text-veloe-gray-500 mt-8">Última atualização: Julho de 2026</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
