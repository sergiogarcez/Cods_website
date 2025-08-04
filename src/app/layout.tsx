import './globals.css'; // Importa seu CSS global, incluindo o Tailwind
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Exemplo de importação de fonte
import Header from './components/header';
import Footer from './components/footer';

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
      <Header/>
        {children} {}
      <Footer/>
      </body>
    </html>
  );
}