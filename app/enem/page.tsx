'use client'
import React from 'react'
import { Header } from '../../components/index';

const historia = () => {

  return (
<body  className='bg-cover bg-no-repeat' style={{ backgroundImage: `url("/fundo.png")`}}>
     <Header />
     <div className='bg-black py-7 px-3 max-w-md sm:items-center mx-auto rounded-lg my-20'>
            <h1 className='font-bold text-lg mb-4 '>
            Primeira fase, QUIZ ENEM!
              </h1>
                  <p className="text-xs mono">
                  1. O que é uma equação?</p>
                <p className="text-xs mono">(A) Uma igualdade entre duas expressões matemáticas</p>
                <p className="text-xs mono">(B) Uma desigualdade entre duas expressões matemáticas</p>
                <p className="text-xs mono">(C) Uma expressão matemática que contém uma incógnita</p>
                <p className="text-xs mono">(D) Uma expressão matemática que não contém uma incógnita</p>
                <p className="text-xs mono">(E) Uma expressão matemática que contém apenas números</p>
            <br></br>
            <p className="text-xs mono">2. Qual é a solução da equação 2x + 3 = 7?</p>
            <p className="text-xs mono">(A) x = 1</p> 
            <p className="text-xs mono">(B) x = 2</p>   
            <p className="text-xs mono">(C) x = 3</p>
            <p className="text-xs mono">(D) x = 4</p>
            <p className="text-xs mono">(E) x = 5</p>

            <br></br>
            <p className="text-xs mono">3. Qual é a função f(x) = 2x + 3?</p>
            <p className="text-xs mono">(A) Uma função linear</p> 
            <p className="text-xs mono">(B) Uma função quadrática</p>   
            <p className="text-xs mono">(C) Uma função exponencial</p>
            <p className="text-xs mono">(D) Uma função logarítmica</p>
            <p className="text-xs mono">(E) Uma função trigonométrica</p>

            <img className="rounded-[40px] py-8 px-8 sm:items-center mx-auto" src="/enem.png"/>
        </div>
        <div className='bg-black text-center w-16 sm:items-center mx-auto rounded-lg my-20'>
        <a href='./mapa'>Voltar</a>
        </div>
    </body>
  )
}

export default historia