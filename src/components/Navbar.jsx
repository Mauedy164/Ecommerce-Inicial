import React, { useState } from "react";
import logo from "../images/logo-m.png";
import { LuShoppingCart } from "react-icons/lu";
import "../styles/Navbar.css";
import { Services } from "./ServicesNavbar";
import { Link } from "react-router-dom";
import { HomePage } from "./Pages/Home";

export function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="logo fisioterapeuta M" id="logo" />
          </Link>
        </div>
        <div className="filter-products-container">
          <Link to='/CardProductsList'><Services /></Link>

          <Link to="/Contact">
            <p>Contacto</p>
          </Link>
          <Link to="AboutMe">
            <p>Nosotros</p>
          </Link>
        </div>
        <div className="cart-container">
          <LuShoppingCart className="carrito" />
          <p>Agendar cita</p>
        </div>
      </div>
    </>
  );
}
