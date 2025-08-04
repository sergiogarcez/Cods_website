import Link from "next/link";


export default function FormsPage() {
    return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Página do Formulário</h1>
      
      {/* Aqui você renderiza seu componente de formulário */}
      {/* <MeuFormulario /> */}
      
      <p className="mt-8">
        <Link href="/">
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
            Voltar para a Home
          </button>
        </Link>
      </p>
    </main>
  );
}
