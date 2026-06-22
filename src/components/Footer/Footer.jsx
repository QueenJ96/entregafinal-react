import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p className="footer-title">Nacer con Estilo</p>
        <p className="footer-text">Licenciada en Obstetricia • Preparate con estilo</p>
        
        <div className="footer-links">
          {/* Podés cambiar los links por los tuyos reales después */}
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="mailto:tu_email@ejemplo.com">Contacto</a>
        </div>
        
        <p className="footer-copy">© 2026 Lic. Juli. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};