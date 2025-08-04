'use client'; // Indica que este é um Client Component

import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'; // Vamos instalar isso!
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'; // Para envolver seu app

interface FormData {
  name: string;
  email: string;
  message: string;
  // honeypot é adicionado dinamicamente
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { executeRecaptcha } = useGoogleReCaptcha(); // Hook para executar o reCAPTCHA

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // 1. Executar reCAPTCHA
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      setStatus('error');
      setErrorMessage('Erro ao carregar o reCAPTCHA. Tente novamente.');
      return;
    }

    const recaptchaToken = await executeRecaptcha('contact_form_submit');

    // 2. Adicionar o honeypot (campo oculto)
    const honeypotValue = (e.currentTarget.elements.namedItem('email_hp') as HTMLInputElement)?.value; // Captura o valor do honeypot
    const dataToSend = { ...formData, honeypot: honeypotValue, recaptchaToken };

    try {
      const response = await fetch('/api/contact', { // Chamando sua API Route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Ocorreu um erro ao enviar a mensagem.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Erro de rede ou servidor. Tente novamente mais tarde.');
      console.error('Erro ao enviar formulário:', error);
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">Entre em Contato</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600 text-white"
          ></textarea>
        </div>

        {/* Campo Honeypot (Oculto via CSS - para bots) */}
        <div style={{ display: 'none' }}>
          <label htmlFor="email_hp">Não preencha este campo:</label>
          <input type="text" name="email_hp" id="email_hp" tabIndex={-1} autoComplete="off" />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition-colors duration-300 disabled:opacity-50"
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
        </button>

        {status === 'success' && (
          <p className="text-green-500 text-center mt-4">Mensagem enviada com sucesso!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 text-center mt-4">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}

// Wrapper para usar o reCAPTCHA em toda a aplicação ou apenas em partes
// Você colocaria isso no seu layout.tsx
export function RecaptchaWrapper({ children }: { children: React.ReactNode }) {
    // Substitua pela sua chave pública do reCAPTCHA
    const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''; 

    if (!recaptchaKey) {
        console.warn('NEXT_PUBLIC_RECAPTCHA_SITE_KEY não está definida. O reCAPTCHA não funcionará.');
        return <>{children}</>;
    }

    return (
        <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}                                   
>
            {children}
        </GoogleReCaptchaProvider>
    );
}