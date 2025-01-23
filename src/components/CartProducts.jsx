import React from "react";
import "../styles/CartProducts.css";
import icono from "../images/Masajes/masaje-facial.png";

export function CartProduct({
  emoji,
  title,
  duration,
  objetive,
  technique,
  benefits,
  price,
}) {
  return (
    <div className="card-container">
      <div className="emoji-container">
        <img src={icono} alt="" className="emoji" />
      </div>
      <div className="title-container">
        <h3 className="title">Masaje Relajante</h3>
        <p className="title-description">
          Masaje perfecto para quien busca relajarse
        </p>
      </div>
      <div className="description-container">
        <p>
          <strong>OBJETIVO:</strong> ALIVIAR EL ESTRÉS Y LA TENSIÓN MUSCULAR.
        </p>
        <p>
          <strong>TÉCNICA USADA:</strong> MOVIMIENTOS SUAVES Y LARGOS.
        </p>
        <p>
          <strong>
            BENEFICIOS:</strong> 
            <li>REDUCCIÓN DEL ESTRÉS</li>
            <li>MEJORA DEL SUEÑO</li>
            <li>RELAJACIÓN GENERAL</li>
          
        </p>
        <p>
          <strong>DURACIÓN:</strong> 60 MINUTOS
        </p>
        <p>
          <strong>PRECIO:</strong> $50
        </p>
        <button className="addCart-btn">Agregar al carrito</button>
      </div>
    </div>
  );
}

{
  /*         <div className="emoji-container">
                <p className="emoji">{emoji}</p>
            </div>
            <div className="title-container">
                <h3>{title}</h3>
            </div>
            <div className="description-container">
                <p>Objetivo: {objetive}</p>
                <p>Técnica usada: {technique}</p>
                <p>Beneficios: {benefits}</p>
                <p>Duración: {duration}</p>
                <p>Precio: {price}</p>
            </div> */
}
