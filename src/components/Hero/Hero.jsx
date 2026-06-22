import "./Hero.css";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero">
         
      <h2>Nacer con Estilo</h2>
      <p>Preparandote para cada etapa de tu embarazo</p>
      <Link to="/productos" className="hero-btn">Ver productos</Link>
    </div>
  );
};