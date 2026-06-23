import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductFormUI } from "./ProductFormUI";
import { validateProduct } from "../../utils/validateProduct";
import { createProduct } from "../../services/productsService";
import { uploadImage } from "../../services/uploadImage";

export const ProductFormContainer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    categoria: "servicios",
    img: "",
    description: ""
  });
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validación inicial
    if (!imageFile) {
      setError("Por favor, seleccioná una imagen para el producto/servicio.");
      return;
    }

    try {
      setLoading(true);
      
      // 1. Subir imagen a ImgBB
      const imageUrl = await uploadImage(imageFile);
      
      const productToSave = {
        ...formData,
        img: imageUrl
      };

      // 2. Validar que no falten datos
      if (!validateProduct(productToSave)) {
        setError("Por favor, completá todos los campos obligatorios.");
        setLoading(false);
        return;
      }
      
      // 3. Mandar los datos a Firebase
      const idGenerado = await createProduct(productToSave);
      navigate(`/success/${idGenerado}`);
      
    } catch (err) {
      console.error(err);
      setError("Error al subir la imagen o guardar en la base de datos.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div style={{ padding: "3rem", textAlign: "center", color: "var(--color-secundario)" }}>Guardando en la nube... ✨</div>;

  return (
    <ProductFormUI 
      formData={formData} 
      handleChange={handleChange} 
      handleImageChange={handleImageChange} 
      handleSubmit={handleSubmit} 
      error={error} 
    />
  );
};