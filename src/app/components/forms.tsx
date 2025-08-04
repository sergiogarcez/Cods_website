'use client';
import Link from "next/link";


// app/components/SimpleForm.tsx
 // Necessário para usar hooks como useState

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function SimpleForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você colocaria a lógica para enviar os dados
    // para a sua API Route.
    console.log('Dados do formulário:', formData);
    alert('Formulário enviado! (A lógica de envio ainda não foi implementada)');
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Entre em Contato
      </h2>
      <p className="text-gray-600 mb-8 text-center">
        Teremos o prazer de ouvir sobre seu projeto. Preencha o formulário e responderemos em breve.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Endereço de Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Sua Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  );
}
