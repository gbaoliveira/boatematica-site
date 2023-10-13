'use client'
import React from 'react'
import { Header } from '../../components/index';

const historia = () => {

  return (
<body  className='bg-cover bg-no-repeat' style={{ backgroundImage: `url("/fundo3.png")`}}>
     <Header />
     <div className='bg-black py-7 px-3 max-w-md sm:items-center mx-auto rounded-lg my-20'>
            <h1 className='font-bold text-2xl mb-4 '>
            A batalha pela matemática
              </h1>
                  <p className="text-sm mono">
                  Após derrotar o pirata Seu Madruga e Macaco Louco, os heróis da matemática recuperaram as joias do cálculo. Porém, os verdadeiros vilões, os Volturi, surgem e roubam todas as joias.
          Os heróis, liderados por Pedro Matemática e Maria Matemática, são estudantes do ensino médio que são apaixonados por matemática. Pedro é um gênio em geometria, enquanto Maria é uma craque em álgebra.
        Os Volturi são uma antiga seita de vampiros que acreditam que a matemática é um poder perigoso. Eles querem controlar as joias do cálculo para que possam dominar o mundo.
        Os heróis precisam viajar por um mapa interativo para recuperar as joias. Ao longo do caminho, eles precisam aprender sobre diferentes tópicos de matemática, como trigonometria, cálculo e probabilidade.
        A batalha final contra os Volturi acontece nas Ruínas da Trimestral. Os heróis usam seu conhecimento de matemática para derrotar os Volturi e salvar o mundo.
        No fim cabe a você como heroi recuperar as joias novamente e salvar o mundo! Essa será sua última jornada então dê tudo de si!
                  </p>
            <img className="rounded-[40px] py-8 px-8 sm:items-center mx-auto" src="/volturi.png"/>
        </div>
    </body>
  )
}

export default historia