"use client";
import React, { useState } from 'react';

export default function Combos() {
  const [backgroundPosition, setBackgroundPosition] = useState('center');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY, currentTarget } = e;
    const { offsetWidth, offsetHeight } = currentTarget;

    const xPos = (clientX / offsetWidth) * 100;
    const yPos = (clientY / offsetHeight) * 100;

    setBackgroundPosition(`${xPos}% ${yPos}%`);
  };

  return (
    <section 
      id='combos' 
      className="py-16 bg-black text-center"
      style={{ 
        backgroundImage: `url('/bg-combos.jpg')`,
        backgroundPosition: backgroundPosition 
      }}
      onMouseMove={handleMouseMove}
    >
      <h2 style={textShadowStyle} className="text-white text-4xl font-bold mb-8">
        Nossos Combos
      </h2>

      <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        {/* Primeiro combo */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex-1 px-4 text-left">
            <h3 className="text-2xl font-bold">Combo X-TUDO</h3>
            <p className="text-xl"> X-TUDO E 1 REFRIGERANTE 1.5L</p>
            <p className="text-xl font-bold">R$ 49,99</p>
          </div>
          <div className="w-24 h-24 bg-amber-300 rounded-lg"></div> {/* Placeholder para imagem */}
        </div>

        {/* Segundo combo */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex-1 px-4 text-left">
            <h3 className="text-2xl font-bold">Combo X-BACON</h3>
            <p className="text-xl">2 X-BACON e 1 REFRIGERANTE 1.5L</p>
            <p className="text-xl font-bold">R$ 35,99</p>
          </div>
          <div className="w-24 h-24 bg-amber-300 rounded-lg"></div> {/* Placeholder para imagem */}
        </div>
      </div>
    </section>
  );
}

const textShadowStyle = {
  textShadow: '4px 4px 4px rgba(0, 0, 0, 0.9)',
};
