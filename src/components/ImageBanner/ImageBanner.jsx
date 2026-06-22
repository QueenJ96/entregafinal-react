import { Link } from "react-router-dom";
import "./ImageBanner.css";

export const ImageBanner = () => {
  return (
    <section className="banner-container">
      <Link to="/productos" className="banner-item">
        <img src="/img/mini-banner1.png" alt="Servicios Prenatales" />
        <span className="banner-overlay">Servicios Prenatales</span>
      </Link>
      
      <Link to="/productos" className="banner-item">
        <img src="/img/mini-banner2.png" alt="Kits de Bienvenida" />
        <span className="banner-overlay">Kits de Bienvenida</span>
      </Link>
    </section>
  );
};