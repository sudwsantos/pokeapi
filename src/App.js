import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokeSelect from "./components/Poke_Api";
import InformacionPokemon from "./components/InfoPokemon";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<PokeSelect />} />
          <Route path="/pokemon/:id" element={<InformacionPokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
