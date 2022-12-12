import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PokeSelect = () => {
  const endpoint = "https://pokeapi.co/api/v2/pokemon";
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [selectedPoke, setSelectedPoke] = useState("");

  const irAPokemon = () => {
    if (selectedPoke === "") {
      return;
    }

    navigate(`/pokemon/${selectedPoke}`);
  };

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results.map((result) => result.name));
      });
  }, []);

  return (
    <>
      <h1>Selecciona un Pokemon</h1>
      <select onChange={(e) => setSelectedPoke(e.target.value)}>
        <option value="">Selecciona tu Pokemon</option>
        {results.map((name) => {
          return (
            <option key={name} value={name}>
              {name}
            </option>
          );
        })}
      </select>
      <button onClick={irAPokemon}>Ver detalle</button>
    </>
  );
};

export default PokeSelect;
