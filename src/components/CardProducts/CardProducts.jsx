import React from "react";
import "../../styles/CardProducts.css";
import icono from "../../images/Masajes/masaje-facial.png";
import { useNavigate } from 'react-router-dom';

export function CardProduct({
  id,
  image,
  title,
  description,
  duration,
  objetive,
  technique,
  benefits,
  price,
  category
}) {

  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="card-container">
      <div className="emoji-container">
        <img src={icono} alt="" className="emoji" />
      </div>
      <div className="title-container">
        <h3 className="title">{title}</h3>
        <p className="title-description">
          {description}
        </p>
      </div>
      <div className="description-container">
        <p>
          <strong>OBJETIVO: </strong> {objetive}
        </p>
        <p>
          <strong>TÉCNICA USADA: </strong> {technique}
        </p>
        <p>
          <strong>
            BENEFICIOS: </strong> 
            {benefits}
          
        </p>
        <p>
          <strong>DURACIÓN: </strong> {duration} minutos
        </p>
        <p>
          <strong>PRECIO: </strong> ${price}
        </p>
        <button className="detailsProduct-btn" onClick={handleDetailsClick}>Detalles del producto</button>
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

/* <div className="emoji-container">
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
      </div> */