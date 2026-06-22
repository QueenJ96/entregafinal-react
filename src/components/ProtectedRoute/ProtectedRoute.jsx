import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, rolesPermitidos }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div style={{textAlign: 'center', padding: '4rem', color: 'var(--color-secundario)'}}>Verificando credenciales... ✨</div>;
  }

  // Si no hay usuario, o si se exigen roles y el usuario no tiene el rol permitido, lo saca
  if (!user || (rolesPermitidos && !rolesPermitidos.includes(user.rol))) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;