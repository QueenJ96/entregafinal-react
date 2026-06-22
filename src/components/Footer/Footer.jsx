import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p className="footer-title">Nacer con Estilo</p>
        <p className="footer-text">Licenciada en Obstetricia • Te ayudo a prepararte</p>
        
        <div className="footer-links">
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="mailto:tu_email@ejemplo.com">Contacto</a>
        </div>
        
        <p className="footer-copy">© 2026 Lic. Julia Martinez. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};