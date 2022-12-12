import { NavLink } from "react-router-dom";

const Navbar = () => {
  const setActive = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <div className="nbar">
      <NavLink to="/" className={setActive}>
        Home
      </NavLink>
      <NavLink to="/pokemon" className={setActive}>
        Pokemones
      </NavLink>
    </div>
  );
};

export default Navbar;
