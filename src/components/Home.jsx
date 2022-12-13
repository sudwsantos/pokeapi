import React from 'react'
import pikachu from '../img/pikachu.png';

const Home = () => {
  return (
    <>
    <h1>Bienvenido maestro pokemón</h1>
    <div className='mainfoto'>
    <img src={pikachu} alt=''/>
    </div>
    </>
  )
}

export default Home