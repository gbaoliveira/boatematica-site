'use client'
import React from 'react'
import { Header } from '../../components/index';

const historia = () => {

  return (
<body  className='bg-cover bg-no-repeat' style={{ backgroundImage: `url("/fundo.png")`}}>
     <Header />
     <div className='bg-black py-7 px-3 max-w-md sm:items-center mx-auto rounded-lg my-20'>
            <h1 className='font-bold text-lg mb-4 '>
            SEGUNDA FASE, MINA DOS COMPLEXOS
              </h1>
                  <p className="text-xs mono">
                  1. Dado o número complexo z = 3 + 4i, qual é o módulo de z?</p>
                <p className="text-xs mono">(A) 5</p>
                <p className="text-xs mono">(B) 7</p>
                <p className="text-xs mono">(C) 9</p>
                <p className="text-xs mono">(D) 11</p>
            <br></br>
            <p className="text-xs mono">2. Dado o número complexo z = a + bi, qual é o conjugado de z?</p>
            <p className="text-xs mono">(A) a - bi</p> 
            <p className="text-xs mono">(B) -a + bi</p>   
            <p className="text-xs mono">(C) -a - bi</p>
            <p className="text-xs mono">(D) a + (-bi)</p>

            <br></br>
            <p className="text-xs mono">3. Resolva a equação complexa z^2 + 2z + 1 = 0.</p>
            <p className="text-xs mono">(A) z = 1</p> 
            <p className="text-xs mono">(B) z = -1</p>   
            <p className="text-xs mono">(C) z = -1 + i</p>
            <p className="text-xs mono">(D) z = -1 - i</p>

            <img className="rounded-[40px] py-8 px-8 sm:items-center mx-auto" src="/enem.png"/>
        </div>
        <div className='bg-black text-center w-16 sm:items-center mx-auto rounded-lg my-20'>
        <a href='./mapa'>Voltar</a>
        </div>
    </body>
  )
}

export default historia