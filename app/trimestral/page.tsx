'use client'
import React from 'react'
import { Header } from '../../components/index';

const historia = () => {

  return (
<body  className='bg-cover bg-no-repeat' style={{ backgroundImage: `url("/fundo.png")`}}>
     <Header />
     <div className='bg-black py-7 px-3 max-w-md sm:items-center mx-auto rounded-lg my-20'>
            <h1 className='font-bold text-lg mb-4 '>
            QUINTA FASE, RUÍNAS DA TRIMESTRAL
              </h1>
                  <p className="text-base mono">
                 Aqui teria os assuntos para a trimestral</p>
                <br></br>                 
                <p className="text-base mono">1. Questões para a trimestral</p>
                <p className="text-base mono">2. Resumo de conteúdos</p>
                <p className="text-base mono">3. Lista de exercícios</p>
                <p className="text-base mono">4. Vídeos para estudo</p>

            <img className="rounded-[40px] py-8 px-8 sm:items-center mx-auto" src="/trimestral.png"/>
        </div>
        <div className='bg-black text-center w-16 sm:items-center mx-auto rounded-lg my-20'>
        <a href='./mapa'>Voltar</a>
        </div>
    </body>
  )
}

export default historia