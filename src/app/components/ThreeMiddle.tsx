// Basicamente esse arquivo foi criado para servir como um intermediador para que a renderização
// fique do lado do client. Teve que ser criado esse middle pois se colocar o import diretamente na page
// da erro pois as page sao server component e a lib Three usa o client component.
'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Importa o componente ThreeBackground de forma dinâmica dentro de um Client Component
const ThreeBackground = dynamic(() => import('./ThreeComponents'), {
  ssr: false,
});

const ThreeBackgroundWrapper: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
      }}
    >
      <ThreeBackground />
    </div>
  );
};

export default ThreeBackgroundWrapper;