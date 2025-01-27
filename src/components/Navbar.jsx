import React, {useState} from "react";
import logo from "../images/logo-m.png";
import { LuShoppingCart } from "react-icons/lu";
import '../styles/Navbar.css'
import { Services } from "./Services";


export function Nabvar() {
  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="logo fisioterapeuta M" id="logo" />
        </div>
        <div className="filter-products-container">
          <Services/>
          <p>Contacto</p>
          <p>Redes sociales</p>
        </div>
        <div className="cart-container">
          <LuShoppingCart className="carrito"/>
          <p>Agendar cita</p>
        </div>
      </div>
    </>
  );
}
