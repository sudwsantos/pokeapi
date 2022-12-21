import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InformacionPokemon = () => {
  const endpoint = "https://pokeapi.co/api/v2/pokemon";
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch(`${endpoint}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
    }, [id]);
    console.log(pokemon)

  return (
    <>
      {pokemon.sprites && pokemon.sprites.front_default && (
        <div>
          <img
            className="pokefoto"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>
      )}
      <div>
        <h2>{pokemon.name}</h2>
        <ul>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default InformacionPokemon;
