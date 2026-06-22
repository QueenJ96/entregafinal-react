import { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./ItemDetail.css";

export const ItemDetail = ({ id, nombre, name, description, precio, price, img, image }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  // 1. EL ESTADO: Controla si el cartelito está prendido o apagado
  const [mostrarCartel, setMostrarCartel] = useState(false);

  const titulo = nombre || name;
  const valor = precio || price;
  const imagen = img || image;

  const handleAdd = () => {
    addToCart({ id, name: titulo, price: valor, image: imagen }, quantity);
    
    // 2. Prende el cartel y lo manda a apagar a los 2.5 segundos
    setMostrarCartel(true);
    setTimeout(() => {
      setMostrarCartel(false);
    }, 2500);
  };

  return (
    <div className="detail-container">
      <div className="detail-image">
        <img src={imagen} alt={titulo} />
      </div>
      <div className="detail-info">
        <h2>{titulo}</h2>
        <p className="detail-description">
          {description || "Un producto hermoso y pensado especialmente para acompañar el día a día de las profesionales de la salud con la máxima ternura."}
        </p>
        <p className="detail-price">${valor}</p>
        
        <div className="detail-quantity">
          <span>CANTIDAD</span>
          <div className="quantity-controls">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
        </div>

        <button className="detail-btn" onClick={handleAdd}>
          Agregar al carrito 🎀
        </button>
      </div>

      {/* 3. EL CARTEL: Solo aparece si "mostrarCartel" es true */}
      {mostrarCartel && (
        <div className="cartelito-toast">
          <div className="cartelito-contenido">
            <span>✨ ¡Sumado al carrito con amor!</span>
            <small>{titulo}</small>
          </div>
        </div>
      )}
    </div>
  );
};