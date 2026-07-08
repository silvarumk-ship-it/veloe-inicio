import Image from "next/image";
import Link from "next/link";
import { CONTATO, IMAGENS, LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-veloe-gray-900 text-veloe-gray-300 py-10 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Coluna 1: Marca e apresentação */}
          <div>
            <Image
              src={IMAGENS.logoPrincipal}
              alt="Logo TAG Tecnologia para o Sistema Financeiro"
              width={150}
              height={45}
              className="h-11 w-auto mb-4 brightness-200"
            />
            <p className="text-sm leading-relaxed">
              Soluções tecnológicas seguras e eficientes para o setor financeiro. Compromisso com a transparência, conformidade e a satisfação dos nossos clientes.
            </p>
          </div>

          {/* Coluna 2: Contato */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 {CONTATO.telefone}</li>
              <li>📧 {CONTATO.email}</li>
              <li>📍 {CONTATO.enderecoCompleto}</li>
              <li>CNPJ: {CONTATO.cnpj}</li>
            </ul>
          </div>

          {/* Coluna 3: Links úteis */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link href={LINKS.politicaPrivacidade} className="hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href={LINKS.termosUso} className="hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href={LINKS.avisoCookies} className="hover:text-white transition-colors">
                  Aviso de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Atendimento WhatsApp */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Atendimento</h4>
            <p className="text-sm mb-4">
              Fale diretamente com nossa equipe pelo WhatsApp e tire suas dúvidas ou solicite informações.
            </p>
            <a
              href={LINKS.linkWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-veloe-green hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-shadow shadow hover:shadow-md"
            >
              <Image
                src={IMAGENS.iconeWhatsapp}
                alt="Ícone WhatsApp"
                width={18}
                height={18}
              />
              Chamar no WhatsApp
            </a>
          </div>
        </div>

        {/* Linha de direitos autorais */}
        <div className="mt-10 pt-6 border-t border-veloe-gray-700 text-center text-xs">
          <p>
            © {new Date().getFullYear()} {CONTATO.razaoSocial} - Todos os direitos reservados.
          </p>
          <p className="mt-1">
            Este site segue todas as normas da LGPD e regulamentações do setor financeiro.
          </p>
        </div>
      </div>
    </footer>
  );
}
