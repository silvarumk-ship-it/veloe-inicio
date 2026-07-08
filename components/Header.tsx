import Image from "next/image";
import Link from "next/link";
import { IMAGENS, LINKS } from "@/lib/constants";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={IMAGENS.logoPrincipal}
            alt="Logo TAG Tecnologia para o Sistema Financeiro"
            width={160}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Navegação e Atendimento */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/" className="text-veloe-gray-700 hover:text-veloe-navy transition-colors">
              Início
            </Link>
            <Link href="#servicos" className="text-veloe-gray-700 hover:text-veloe-navy transition-colors">
              Serviços
            </Link>
            <Link href="#como-funciona" className="text-veloe-gray-700 hover:text-veloe-navy transition-colors">
              Como Funciona
            </Link>
            <Link href="#duvidas" className="text-veloe-gray-700 hover:text-veloe-navy transition-colors">
              Dúvidas
            </Link>
          </nav>

          {/* Botão WhatsApp */}
          <a
            href={LINKS.linkWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-veloe-green hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-sm"
          >
            <Image
              src={IMAGENS.iconeWhatsapp}
              alt="Ícone WhatsApp"
              width={20}
              height={20}
            />
            <span className="hidden sm:inline">Atendimento</span>
          </a>
        </div>
      </div>
    </header>
  );
}
