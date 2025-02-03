import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import '../../styles/Cart.css';

export function Cart() {
  const { cartItems, removeFromCart, clearCart, totalPrice } = useCart();

  return (
    <div className="cart-container">
      <h1>Tu Carrito de Servicios</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>No hay servicios en tu carrito</p>
          <Link to="/CardProductsList" className="continue-shopping">
            Ver Servicios Disponibles
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <p>Precio por sesión: ${item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Subtotal: ${item.price * item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Resumen del Carrito</h2>
            <div className="total-section">
              <p>Total a Pagar:</p>
              <p className="total-price">${totalPrice}</p>
            </div>
            <div className="cart-actions">
              <button onClick={clearCart} className="clear-btn">
                Vaciar Carrito
              </button>
              <button className="checkout-btn">Proceder al Pago</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}