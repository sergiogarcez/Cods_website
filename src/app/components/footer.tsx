import Link from 'next/link';
// import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Instale esta biblioteca!

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Informações de Contato e Logo */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:opacity-80 transition-opacity duration-300">
              Seu Nome/Agência
            </Link>
            <p className="mt-2 text-sm max-w-xs mx-auto md:mx-0">
              Desenvolvendo soluções digitais inovadoras e de alta performance para o seu negócio.
            </p>
          </div>

          {/* Links de Navegação */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-3">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors duration-300">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-white transition-colors duration-300">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white transition-colors duration-300">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-3">Conecte-se</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                {/* <FaLinkedin size={24} /> */}
              </a>
              <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                {/* <FaGithub size={24} /> */}
              </a>
              <a href="mailto:seu-email@dominio.com" className="hover:text-white transition-colors duration-300">
                {/* <FaEnvelope size={24} /> */}
              </a>
            </div>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {currentYear} Seu Nome/Agência. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}