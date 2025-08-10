import {ContactForm} from '../components/form_recaptcha';

export default function FormsPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-8">
      {/* Aqui você renderiza o componente de formulário */}
      <ContactForm />
    </main>
  );
}