import React from 'react'
import { useState, useEffect } from 'react'

const Card = () => {
  const endponit = "https://pokeapi.co/api/v2/pokemon";

  const [detalles, setDetalles] = useState('');

  useEffect(() => {
    fetch(endponit)
    .then((res) => res.json())
    .then((data) => {
      setDetalles(data.url);
      console.log(data.url)
    })
  }, []);

  return (
    <div>
    {detalles.url}
    </div>
  )
}

export default Card