"use client";

import React, { useState } from 'react';

type Item = {
  nome: string;
  descricao: string;
  preco: string | string[];
};

type Categoria = 'hamburguer' | 'hamburguerArtesanal' | 'peitoDeFrango' | 'lombo' | 'contraFile' | 'daModa' | 'minis' | 'porções' | 'outros' | 'opcionais';

type Cardapio = {
  [key in Categoria]: Item[];
};

export default function Cardapio() {
  const cardapio: Cardapio = {
    hamburguer: [
      { nome: "NÚMERO: 1", descricao: "PÃO DE HAMBURGUER, HAMBURGUER, MUSSARELA, PRESUNTO, ALFACE E TOMATE", preco: "R$ 15,00" },
      { nome: "NÚMERO: 2", descricao: "PÃO DE HAMBURGUER, HAMBURGUER, MUSSARELA, BACON, ALFACE E TOMATE", preco: "R$ 15,00" },
      { nome: "NÚMERO: 3", descricao: "PÃO DE HAMBURGUER, HAMBURGUER, MUSSARELA, OVO, ALFACE E TOMATE", preco: "R$ 15,00" },
      { nome: "NÚMERO: 4", descricao: "PÃO DE HAMBURGUER, HAMBURGUER, MUSSARELA, OVO, BACON, MILHO, ALFACE E TOMATE", preco: "R$ 18,00" },
      { nome: "NÚMERO: 5", descricao: "PÃO DE HAMBURGUER, HAMBURGUER, MUSSARELA, PRESUNTO, OVO, BACON, SALSICHA, MILHO, ALFACE E TOMATE", preco: "R$ 21,00" },
     
    ],
    hamburguerArtesanal: [
      { nome: "NÚMERO: 19", descricao: "PÃO DE BATATA, HAMBURGUER ARTESANAL, BACON, MUSSARELA, CHEDDAR, CEBOLA ROXA E SALADA", preco: "R$ 30,00" },
     
    ],
    peitoDeFrango: [
      { nome: "NÚMERO: 6", descricao: "PÃO DE HAMBÚRGUER, PEITO DE FRANGO, MUSSARELA, MILHO, ALFACE E TOMATE", preco: "R$ 18,00" },
      { nome: "NÚMERO: 7", descricao: "PÃO DE HAMBÚRGUER, PEITO DE FRANGO, MUSSARELA, PRESUNTO, BACON, MILHO, ALFACE E TOMATE", preco: "R$ 19,00" },
      { nome: "NÚMERO: 8", descricao: "PÃO DE HAMBÚRGUER, PEITO DE FRANGO, MUSSARELA, SALSICHA, MILHO, ALFACE E TOMATE", preco: "R$ 18,00" },
      { nome: "NÚMERO: 9", descricao: "PÃO DE HAMBÚRGUER, PEITO DE FRANGO, MUSSARELA, PRESUNTO, BACON, OVO, SALSICHA, MILHO, ALFACE E TOMATE", preco: "R$ 22,00" },
    ],
    lombo: [
      { nome: "NÚMERO: 10", descricao: "PÃO DE HAMBÚRGUER, LOMBO, MUSSARELA, MILHO, ALFACE E TOMATE", preco: "R$ 19,00" },
      { nome: "NÚMERO: 11", descricao: "PÃO DE HAMBÚRGUER, LOMBO, MUSSARELA, SALSICHA, PRESUNTO, ALFACE E TOMATE" , preco: "R$ 20,00" },
      { nome: "NÚMERO: 12", descricao: "PÃO DE HAMBÚRGUER, LOMBO, MUSSARELA, BACON, OVO, ALFACE E TOMATE", preco: "R$ 20,00" },
      { nome: "NÚMERO: 13", descricao: "PÃO DE HAMBÚRGUER, LOMBO, MUSSARELA, PRESUNTO, BACON, OVO, SALSICHA, MILHO, ALFACE E TOMATE.", preco: "R$ 22,00" },
      
    ],
    contraFile: [
      { nome: "NÚMERO: 14", descricao: "PÃO DE HAMBÚRGUER, CONTRA FILE, MUSSARELA, MILHO, ALFACE E TOMATE", preco: "R$ 26,00" },
      { nome: "NÚMERO: 15", descricao: "PÃO DE HAMBÚRGUER, CONTRA FILE, MUSSARELA, PRESUNTO, BACON, MILHO, ALFACE E TOMATE", preco: "R$ 26,00" },
      { nome: "NÚMERO: 16", descricao: "PÃO DE HAMBÚRGUER, CONTRA FILE, MUSSARELA, OVO, BACON, MILHO, ALFACE E TOMATE", preco: "R$ 26,00" },
      { nome: "NÚMERO: 17", descricao: "PÃO DE HAMBÚRGUER, CONTRA FILE, MUSSARELA, PRESUNTO, BACON, OVO, SALSICHA, MILHO, ALFACE E TOMATE", preco: "R$ 29,00" },
 
    ],
    daModa: [
      { nome: "NÚMERO: 18", descricao: "PÃO DE HAMBÚRGUER, LOMBO, FILÉ DE FRANGO, HAMBÚRGUER, MUSSARELA, PRESUNTO, BACON, OVO, SALSICHA, MILHO, ALFACE E TOMATE", preco: "R$ 40,00"},
 
    ],
    minis: [
      { nome: "NÚMERO: 20", descricao: "PÃO DE HAMBÚRGUER, HAMBÚRGUER, MUSSARELA", preco: "R$ 9,00"},
      { nome: "NÚMERO: 21", descricao: "PÃO DE HAMBÚRGUER, PEITO DE FRANGO, MUSSARELA, ALFACE E TOMATE", preco: "R$ 14,00"},
      { nome: "NÚMERO: 22", descricao: "PÃO DE HAMBÚRGUER, 2 HAMBÚRGUERES, 2 FATIAS DE MUSSARELA, ALFACE E TOMATE", preco: "R$ 14,00"},
      { nome: "NÚMERO: 23", descricao: "PÃO DE HAMBURGUER, LOMBO, MUSSARELA, ALFACE E TOMATE", preco: "R$ 17,00"},
      { nome: "NÚMERO: 24", descricao: "PÃO DE HAMBÚRGUER, CONTRA FILE, MUSSARELA, ALFACE E TOMATE.", preco: "R$ 22,00"},
 
    ],
    porções: [
      { nome: "NÚMERO 25: LOMBO", descricao: "INTEIRA | MEIA", preco: ["R$40,00  |" , "|  R$28,00"] },
      { nome: "NÚMERO 26: PEITO DE FRANGO", descricao: "INTEIRA | MEIA", preco: ["R$40,00  |" , "|  R$28,00"] },
      { nome: "NÚMERO 27: CONTRA FILÉ", descricao: "INTEIRA | MEIA", preco: ["R$57,00  |" , "|  R$39,00"] },
      { nome: "NÚMERO 28: BATATA FRITA", descricao: "", preco: ["R$23,00"] },
      { nome: "NÚMERO 29: BATATA FRITA ESPECIAL", descricao: "", preco: ["R$28,00"] },
     
    ],
    outros: [
      { nome: "NÚMERO: 30", descricao: "VEGETARIANO, 3 FATIAS DE MUSSARELA, MILHO, OVO, ALFACE E TOMATE.", preco: ["R$16,00"] },
      { nome: "NÚMERO: 31", descricao: "PÃO DE HAMBÜRGUER SALSICHA, MUSSARELA E PRESUNTO", preco: ["R$12,00"] },
      { nome: "NÚMERO: 32", descricao: "PÃO FRANCES, CONTRA, MUSSARELA, CEBOLA, E TOMATE", preco: ["R$25,00"] },
      { nome: "NÚMERO: 33", descricao: "PÃO DE FORMA, MUSSARELA, PRESUNTO E TOMATE", preco: ["R$11,00"] },
 
    ],
    opcionais: [
      {nome: "CATUPIRY", descricao: "", preco:"R$ 5,00"},
      {nome: "BANANA", descricao: "", preco:"R$ 3,00"},
      {nome: "ABACAXI", descricao: "", preco:"R$ 3,00"},
      {nome: "CEBOLA", descricao: "", preco:"R$ 2,00"},
      {nome: "BATATA-PALHA", descricao: "", preco:"R$ 3,00"},
      {nome: "CHEDDAR", descricao: "", preco:"R$ 5,00"},
     
    ],
  };

  const [visibleCategories, setVisibleCategories] = useState<{ [key in Categoria]: boolean }>({
    hamburguer: false,
    hamburguerArtesanal: false,
    peitoDeFrango: false,
    lombo: false,
    contraFile: false,
    daModa: false,
    minis: false,
    porções: false,
    outros: false,
    opcionais: false,
  });

  const toggleVisibility = (categoria: Categoria) => {
    setVisibleCategories(prevState => ({
      ...prevState,
      [categoria]: !prevState[categoria],
    }));
  };

  const categoryImages: { [key in Categoria]: string } = {
    hamburguer: "/images/xtudo.jpg",
    hamburguerArtesanal: "/images/artesanal.png",
    peitoDeFrango: "/images/peitoFrango.png",
    lombo: "/images/lombo.png",
    contraFile: "/images/contrafile.png",
    daModa: "/images/daModa.png",
    minis: "/images/miniSanduiche.png",
    porções: "/images/porcoes.png",
    outros: "/images/outros.png",
    opcionais: "/images/opcionais.png",
  };

  return (
    <section id="cardapio" className="py-16 bg-black text-center px-4 md:px-8">
      <h2 className="text-4xl text-white font-bold mb-6" style={textShadowStyle}>Nosso Cardápio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.keys(cardapio).map((categoria, index) => (
          <div key={index} className="my-8">
            <div className="flex flex-col items-center mb-4">
              <img src={categoryImages[categoria as Categoria]} alt={categoria} className="w-full h-auto mb-2 rounded-lg" />
              <button
                className="bg-gray-300 px-4 py-2 rounded-lg font-semibold"
                onClick={() => toggleVisibility(categoria as Categoria)}
              >
                {formatCategoryName(categoria)}
              </button>
            </div>
            {visibleCategories[categoria as Categoria] && (
              <div className="mt-4">
                {cardapio[categoria as Categoria].map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-gray-100 p-6 rounded-lg shadow-md mb-4"
                  >
                    <h4 className="text-xl font-bold">{item.nome}</h4>
                    <p>{item.descricao}</p>
                    <p className="mt-2 text-lg font-semibold text-gray-700">{item.preco}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function formatCategoryName(categoria: string) {
  return categoria
    .split(/(?=[A-Z])/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const textShadowStyle = {
  textShadow: '4px 4px 4px rgba(0, 0, 0, 0.9)',
};
