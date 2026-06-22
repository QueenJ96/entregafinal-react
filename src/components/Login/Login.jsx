import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate, Link } from "react-router-dom"
import "./Login.css"

export const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      console.log("Login exitoso");
      setTimeout(() => {
        navigate("/admin", { replace: true });
      }, 500);
    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión");
    }
  }

  return (
    <div className="auth-wrapper">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Bienvenida ✨</h2>
        <p className="auth-subtitle">Ingresá para gestionar tus productos aesthetic</p>
        
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="tumail@ejemplo.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Ingresá tu contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="auth-btn">Iniciar Sesión 🎀</button>
        <p className="auth-link-text">
          ¿No tenés cuenta? <Link to="/registro">Registrate aquí</Link>
        </p>
      </form>
    </div>
  );
}