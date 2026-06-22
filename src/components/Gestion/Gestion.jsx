import { useState, useEffect } from "react";
import { getProducts } from "../../services/productsService";
import { ProductFormContainer } from "../adminComponents/ProductFormContainer";
import "./Gestion.css";

export const Gestion = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="gestion-container">
      <div className="gestion-header">
        <h1>Panel de Control ✨</h1>
        <p>Espacio de edición y carga de productos para la tienda</p>
      </div>

      <div className="gestion-content">
        {/* Formulario de Carga */}
        <div className="gestion-section form-section">
          <h2>Cargar Nuevo Producto 🎀</h2>
          <ProductFormContainer />
        </div>

        {/* Listado de Control Lateral */}
        <div className="gestion-section list-section">
          <h2>Productos Activos</h2>
          <div className="admin-product-list">
            {products.map((prod) => (
              <div key={prod.id} className="admin-product-row">
                <img src={prod.img} alt={prod.nombre} />
                <div className="admin-product-info">
                  <h3>{prod.nombre}</h3>
                  <p>${prod.precio}</p>
                </div>
                <span className="badge-category">{prod.categoria}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};