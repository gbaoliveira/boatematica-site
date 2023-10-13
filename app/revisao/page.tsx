'use client'
import React from 'react'
import { Header } from '../../components/index';

const historia = () => {

  return (
<body  className='bg-cover bg-no-repeat' style={{ backgroundImage: `url("/fundo.png")`}}>
     <Header />
     <div className='bg-black py-7 px-3 max-w-md sm:items-center mx-auto rounded-lg my-20'>
            <h1 className='font-bold text-lg mb-4 '>
              ÚLTIMA FASE, REVISÃO!!!
              </h1>
                  <p className="text-base mono">
                 Aqui teriamos o resumo completo de tudo visto anteriormente!</p>
                 <br></br>
                <p className="text-base mono">Um resumo sobre o conteúdo do enem</p>
                <p className="text-base mono">Um resumo sobre o conteúdo de probabilidade</p>
                <p className="text-base mono">Um resumo sobre o conteúdo de complexos</p>
                <p className="text-base mono">Um resumo sobre o conteúdo da trimestral</p>
                <br></br>
                <p className="text-lg mono">E PARABÉNS! AO COMPLETAR TUDO VOCÊ FINALMENTE DERROTOU OS VOLTURI E RECUPEROU AS JÓIAS DO INFINITO! USANDO SEU CONHECIMENTO EM MATEMÁTICA</p>

            <img className="rounded-[40px] py-8 px-8 sm:items-center mx-auto" src="/joias.png"/>
        </div>
        <div className='bg-black text-center w-16 sm:items-center mx-auto rounded-lg my-20'>
        <a href='./mapa'>Voltar</a>
        </div>
    </body>
  )
}

export default historia