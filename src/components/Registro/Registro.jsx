import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import '../Login/Login.css'; // Usamos el mismo CSS para mantener la coherencia

export const Registro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signup(email, password);
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        const quiereLoguearse = window.confirm(
          'Este correo ya está registrado. ¿Desea iniciar sesión?'
        );
        if (quiereLoguearse) {
          navigate('/login');
        } else {
          navigate('/');
        }
      } else {
        setError('Ocurrió un error al registrar. Verifique los datos e intente nuevamente.');
      }
    }
  };

  return (
    <div className="auth-wrapper">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Crear una nueva cuenta</h2>
        <p className="auth-subtitle">Sumate a la comunidad</p>
        
        <div className="form-group">
          <label>Correo Electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="tumail@ejemplo.com"
          />
        </div>
        
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Mínimo 6 caracteres"
          />
        </div>
        
        {error && <p className="error-text">{error}</p>}
        
        <button type="submit" className="auth-btn">Registrarse ✨</button>
        <p className="auth-link-text">
          ¿Ya tenés una cuenta? <Link to="/login">Iniciá sesión aquí</Link>
        </p>
      </form>
    </div>
  );
};