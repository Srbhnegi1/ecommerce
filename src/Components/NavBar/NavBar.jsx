import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { IoLogoDropbox, IoBagSharp } from "react-icons/io5";
import { useContext } from "react";
import { StoreContext } from "../Context/Context";

const NavBar = () => {
  const { products } = useContext(StoreContext);
  return (
    <div className="navLinks">
      <NavLink to="/">
        <IoLogoDropbox />
      </NavLink>
      <NavLink to="/shoppingbag">
        <IoBagSharp />
        <span>{products.length}</span>
      </NavLink>
    </div>
  );
};

export default NavBar;
