import React from 'react';
import { useParams } from 'react-router-dom';
import serviciosFisioterapia from '../../../data';
import '../../styles/ProductDetails.css'

export function ProductDetails() {
  const { id } = useParams();
  const product = serviciosFisioterapia.find(product => product.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-details">
      <div className="emoji-container">
        <img src={product.image} alt="" className="emoji" />
      </div>
      <h2>{product.title}</h2>
      <div className="details-content">
        <p>{product.description}</p>
        <div className="details-section">
          <h3>Detalles del Servicio</h3>
          <p><strong>Objetivo:</strong> {product.objetive}</p>
          <p><strong>Técnica:</strong> {product.technique}</p>
          <p><strong>Beneficios:</strong> {product.benefits}</p>
          <p><strong>Duración:</strong> {product.duration} minutos</p>
          <p><strong>Precio:</strong> ${product.price}</p>
          <p><strong>Categoría:</strong> {product.category}</p>
        </div>
      </div>
    </div>
  );
}