'use client'; // Necessário para usar hooks ou eventos de clique

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Nome do Site */}
        <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hover:opacity-80 transition-opacity duration-300">
          Seu Nome/Agência
        </Link>

        {/* Botão do Menu para Dispositivos Móveis */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>

        {/* Links de Navegação */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white font-medium transition-colors duration-300">
            Home
          </Link>
          <Link href="/portfolio" className="text-gray-300 hover:text-white font-medium transition-colors duration-300">
            Portfólio
          </Link>
          <Link href="/servicos" className="text-gray-300 hover:text-white font-medium transition-colors duration-300">
            Serviços
          </Link>
          <Link href="/contato" className="text-gray-300 hover:text-white font-medium transition-colors duration-300">
            Contato
          </Link>
        </nav>
      </div>

      {/* Menu para Dispositivos Móveis (oculto por padrão) */}
      <nav className={`md:hidden ${isOpen ? 'block' : 'hidden'} px-6 pt-2 pb-4 space-y-2`}>
        <Link href="/" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white font-medium transition-colors duration-300 p-2 rounded-md">
          Home
        </Link>
        <Link href="/portfolio" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white font-medium transition-colors duration-300 p-2 rounded-md">
          Portfólio
        </Link>
        <Link href="/servicos" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white font-medium transition-colors duration-300 p-2 rounded-md">
          Serviços
        </Link>
        <Link href="/contato" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-white font-medium transition-colors duration-300 p-2 rounded-md">
          Contato
        </Link>
      </nav>
    </header>
  );
}