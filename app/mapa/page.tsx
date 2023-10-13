import React from 'react'
import { Header } from '../../components/index';

const mapa = () => {
  return (
    <body className='bg-cover bg-no-repeat' style={{ backgroundImage: `url("/pirata.png")`}}>
      <Header />
      <div className='justify-center content flex py-12'>
         <img className=" rounded-[40px] sm:items-center w-3/6 h-3/6" src="/mapa.png"/>
        <div className='flex-col px-16 space-y-16 mt-1.5'>
        <div>
        <button className='bg-black w-48 rounded'>
        <a href='./enem'>Forte do ENEM</a>
        </button>
        </div>
        <div>
        <button className='bg-black w-48 rounded'>
        <a href='./complexos' className='bg-black rounded w-48'>Mina dos Complexos</a>
        </button>
        </div>
         <div>
        <button className='bg-black w-48 rounded'>
        <a href='./probabilidade' className='bg-black rounded w-48'>Vila da Probabilidade</a>
        </button>
         </div>
         <div>
         <button className='bg-black w-48 rounded'>
        <a href='./tarefas' className='bg-black rounded w-48'>Povoado das Tarefas</a>
         </button>
         </div>
         <div>
         <button className='bg-black w-48 rounded'>
          <a href='./trimestral' className='bg-black rounded w-48'>Ruínas da Trimestral</a>
          </button>
         </div>
         <div>
         <button className='bg-black w-48 rounded'>
          <a href='./revisao' className='bg-black rounded w-48'>Vila da Revisão</a>
          </button>
         </div>
         </div>
     </div>   
  </body>
  )
}

export default mapa