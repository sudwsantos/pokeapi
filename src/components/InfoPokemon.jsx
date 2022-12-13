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

  return (
    <>
      <ul>
        <li>{pokemon.name}</li>
      </ul>
      {pokemon.sprites && pokemon.sprites.front_default && (
        <div>
          <img
            className="pokefoto"
            src={pokemon.sprites.front_default}
            alt="foto pokemon"
          />
        </div>
      )}
    </>
  );
};

export default InformacionPokemon;
