'use client'
import React from 'react'
import { Header } from '../../components/index';

const historia = () => {

  return (
<body  className='bg-cover bg-no-repeat' style={{ backgroundImage: `url("/fundo.png")`}}>
     <Header />
     <div className='bg-black py-7 px-3 max-w-md sm:items-center mx-auto rounded-lg my-20'>
     <h1 className='font-bold text-lg mb-4 '>
            TERCEIRA FASE, VILA DA PROBABILIDADE
              </h1>
                  <p className="text-xs mono">
                  1. Uma moeda é lançada duas vezes. Qual é a probabilidade de sair cara nas duas vezes?</p>
                <p className="text-xs mono">(A) 1/4</p>
                <p className="text-xs mono">(B) 1/2</p>
                <p className="text-xs mono">(C) 3/4</p>
                <p className="text-xs mono">(D) 1</p>
            <br></br>
            <p className="text-xs mono">2. Um dado é lançado. Qual é a probabilidade de sair um número par?</p>
            <p className="text-xs mono">(A) 1/3</p> 
            <p className="text-xs mono">(B) 1/2</p>   
            <p className="text-xs mono">(C) 2/3</p>
            <p className="text-xs mono">(D) 3/4</p>

            <br></br>
            <p className="text-xs mono">3. Uma urna contém 10 bolas, sendo 5 brancas e 5 pretas. Uma bola é retirada ao acaso. Qual é a probabilidade de sair uma bola branca?</p>
            <p className="text-xs mono">(A) 1/2</p> 
            <p className="text-xs mono">(B) 2/3</p>   
            <p className="text-xs mono">(C) 3/4</p>
            <p className="text-xs mono">(D) 5/10</p>
            <img className="rounded-[40px] py-8 px-8 sm:items-center mx-auto" src="/vila.png"/>
        </div>
        <div className='bg-black text-center w-16 sm:items-center mx-auto rounded-lg my-20'>
        <a href='./mapa'>Voltar</a>
        </div>
    </body>
  )
}

export default historia