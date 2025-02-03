import React from "react";
import logo from "../images/logo-m.png";
import { LuShoppingCart } from "react-icons/lu";
import "../styles/Navbar.css";
import { Services } from "./ServicesNavbar";
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';

export function Navbar() {
  const { totalItems } = useCart();

  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="logo fisioterapeuta M" id="logo" />
          </Link>
        </div>
        <div className="filter-products-container">
          <Services />
          <Link to="/Contact">
            <p>Contacto</p>
          </Link>
          <Link to="AboutMe">
            <p>Nosotros</p>
          </Link>
        </div>
        <div className="cart-container">
          <Link to="/cart" className="cart-link">
            <LuShoppingCart className="carrito" />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
        </div>
      </div>
    </>
  );
}