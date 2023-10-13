import React from 'react'
import { Header } from '../../components/index';

const Home = () => {
  return (
<body  className='bg-cover bg-no-repeat' style={{ backgroundImage: `url("/fundo.png")`}}>
    <Header />
        <div className='bg-black max-w-md sm:items-center mx-auto rounded-lg my-20'>
            <div className='home'>
                <div className='max-w-sm mx-auto sm:items-center pt-10'>
                     <h1 className='font-bold text-xl mb-4 '>
                      BOATEMÁTICA TEMPORADA 3
                     </h1>
                      <p className="text-lg mono">
                     Olá aventureiro. Chegamos na fase final da nossa história e vamos juntos fechar com chave de ouro essa fase super divertida e emocionante das nossas vidas.
                     Estão prontos? Então, vamos nessa!
                     </p>
                 <img className="rounded-[40px] py-8 px-8 sm:items-center mx-auto" src="/madruga.png"/>
                 </div>
        </div>
    </div> 
</body>
  )
}

export default Home