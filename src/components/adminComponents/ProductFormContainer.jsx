import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductFormUI } from "./ProductFormUI";
import { validateProduct } from "../../utils/validateProduct";
import { createProduct } from "../../services/productsService";

export const ProductFormContainer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    categoria: "servicios",
    img: "",
    description: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateProduct(formData)) {
      setError("Por favor, completá todos los campos obligatorios.");
      return;
    }

    try {
      setLoading(true);
      // Manda los datos a Firebase
      const idGenerado = await createProduct(formData);
      navigate(`/success/${idGenerado}`);
    } catch (err) {
      console.error(err);
      setError("Error al guardar en la base de datos.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div style={{ padding: "3rem", textAlign: "center", color: "var(--color-secundario)" }}>Guardando en la nube... ✨</div>;

  return (
    <ProductFormUI 
      formData={formData} 
      handleChange={handleChange} 
      handleSubmit={handleSubmit} 
      error={error} 
    />
  );
};