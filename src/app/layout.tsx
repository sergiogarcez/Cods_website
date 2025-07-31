import './globals.css'; // Importa seu CSS global, incluindo o Tailwind
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Exemplo de importação de fonte

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Seu Nome/Agência - Desenvolvimento de Sites, Apps e Sistemas',
  description: 'Soluções personalizadas em desenvolvimento web, mobile e sistemas. Transformando ideias em realidade digital.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* Aqui você pode adicionar um cabeçalho global, por exemplo */}
        {/* <header className="bg-gray-800 text-white p-4 text-center">
          <nav>
            <Link href="/" legacyBehavior><a className="mx-2 hover:text-blue-400">Home</a></Link>
            <Link href="/portfolio" legacyBehavior><a className="mx-2 hover:text-blue-400">Portfólio</a></Link>
            <Link href="/servicos" legacyBehavior><a className="mx-2 hover:text-blue-400">Serviços</a></Link>
            <Link href="/contato" legacyBehavior><a className="mx-2 hover:text-blue-400">Contato</a></Link>
          </nav>
        </header> */}

        {children} {/* Isso renderiza o conteúdo da sua página (page.tsx) */}

        {/* Aqui você pode adicionar um rodapé global, se não o colocou no page.tsx */}
      </body>
    </html>
  );
}