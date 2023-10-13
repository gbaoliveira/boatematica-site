'use client'
import React from 'react'
import { Header } from '../../components/index';

const historia = () => {

  return (
<body  className='bg-cover bg-no-repeat' style={{ backgroundImage: `url("/fundo.png")`}}>
     <Header />
     <div className='bg-black py-7 px-3 max-w-md sm:items-center mx-auto rounded-lg my-20'>
            <h1 className='font-bold text-lg mb-4 '>
            QUARTA FASE, POVOADO DAS TAREFAS
              </h1>
                  <p className="text-xs mono">
                  Aqui no povado das Tarefas você terá que criar questões de matemática baseado no que você viu até o momento!</p>
                  <br></br>
                <p className="text-xs mono">1. Uma questão de ENEM</p>
                <p className="text-xs mono">2. Uma questão de números complexos</p>
                <p className="text-xs mono">3. Uma questão de probabilidade</p>

            <img className="rounded-[40px] py-8 px-8 sm:items-center mx-auto" src="/povoado.png"/>
        </div>
        <div className='bg-black text-center w-16 sm:items-center mx-auto rounded-lg my-20'>
        <a href='./mapa'>Voltar</a>
        </div>
    </body>
  )
}

export default historia