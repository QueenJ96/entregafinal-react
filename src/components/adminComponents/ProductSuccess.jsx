import { useParams, Link } from "react-router-dom";

export const ProductSuccess = () => {
  const { id } = useParams();

  return (
    <div style={{
      maxWidth: '500px',
      margin: '5rem auto',
      padding: '3.5rem 2rem',
      backgroundColor: 'var(--color-blanco)',
      borderRadius: '24px',
      boxshadow: '0,10px 30px rgba(0, 0, 0, 0.03)',
      border: '1px solid rgba(244, 194, 194, 0.3)',
      textAlign: 'center'
    }}>
      <h1 style={{ color: 'var(--color-secundario)', marginBottom: '1rem', fontSize: '2.5rem' }}>
        ¡Creado con Éxito! 🎉
      </h1>
      <p style={{ color: 'var(--color-texto)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
        Tu nuevo producto ha sido agregado de manera correcta al catálogo con el número de registro: <strong>#{id}</strong>
      </p>
      <Link to="/admin" style={{
        display: 'inline-block',
        backgroundColor: 'var(--color-acento)',
        color: 'var(--color-texto)',
        padding: '12px 35px',
        borderRadius: '25px',
        fontWeight: '700',
        boxshadow: '0 4px 12px rgba(212, 240, 240, 0.5)',
        transition: 'all 0.3s ease'
      }}>
        Volver al Panel 🎀
      </Link>
    </div>
  );
};