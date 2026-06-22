import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="product-card">
      <div className="product-img-container">
        <img src={img} alt={nombre} />
      </div>
      <div className="product-info">
        <h3>{nombre}</h3>
        <p className="product-price">${precio}</p>
        <Link to={`/product/${id}`} className="product-btn">
          Ver Detalles 🎀
        </Link>
      </div>
    </div>
  );
};