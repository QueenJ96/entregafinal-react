import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Header.css";

export const Header = () => {
  const { getTotalQuantity } = useCart();

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="header-logo-link">
          <div className="header-brand">
            {/* El logo se ubica a la izquierda del texto */}
            <img src="/img/logo.png" alt="Logo Nacer con Estilo" className="header-logo" />
            <div className="brand-text">
              <span className="brand-title">Nacer con Estilo</span>
              <span className="brand-subtitle">Preparandote para tu bebé</span>
            </div>
          </div>
        </Link>

        <nav className="header-nav">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/productos" className="nav-link">Productos</Link>
          <Link to="/carrito" className="nav-link-cart">
            🛒 <span className="cart-badge">{getTotalQuantity()}</span>
          </Link>
          <Link to="/login" className="nav-link-login">Ingresar</Link>
        </nav>
      </div>
    </header>
  );
};