import Image from 'next/image'; // Importar se você for usar imagens
import Link from 'next/link';   // Importar se for usar links de navegação
import HeroSection from './components/heroSection';
import ThreeBackgroundWrapper from './components/ThreeMiddle';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-white bg-gradient-to-r from-blue-400 to-purple-600">
      <ThreeBackgroundWrapper />
  
      
        

      {/* Seção de Serviços (Exemplo) */}
      {/* <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-16">
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-3 text-blue-400">Sites Incríveis</h2>
          <p className="text-gray-400">Desenvolvimento web moderno e responsivo, focado em performance e UX.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-3 text-purple-400">Aplicativos Móveis</h2>
          <p className="text-gray-400">Apps nativos e híbridos para iOS e Android, com design e funcionalidade impecáveis.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-3 text-green-400">Sistemas Personalizados</h2>
          <p className="text-gray-400">Soluções robustas e escaláveis para otimizar processos internos e externos.</p>
        </div>
      </section> */}

      {/* Seção de Chamada para Portfólio (Exemplo) */}
      <section className="text-center z-10">
        <h2 className="text-4xl font-bold mb-6 text-white">Veja Nossos Projetos de Destaque</h2>
        <p className="text-lg text-gray-300 mb-8">
          Conheça nosso portfólio e inspire-se com o que podemos criar para você.
        </p>
        <Link href="/portfolio">
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
            Explorar Portfólio
          </button>
        </Link>
      </section>

      {/* Exemplo de Rodapé Básico (você pode colocar isso no layout.tsx) */}
      <footer className="mt-24 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Seu Nome/Nome da Agência. Todos os direitos reservados.
      </footer>
    </main>
  );
}
