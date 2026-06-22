export const ProductFormUI = ({ formData, handleChange, handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit} className="admin-product-form">
      <div className="form-group-admin">
        <label>Nombre del Servicio / Kit</label>
        <input
          type="text"
          name="nombre"
          placeholder="Ej: Taller de Preparación Integral"
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>

      <div className="form-group-admin">
        <label>Precio ($)</label>
        <input
          type="number"
          name="precio"
          placeholder="Ej: 25000"
          value={formData.precio}
          onChange={handleChange}
        />
      </div>

      <div className="form-group-admin">
        <label>Categoría</label>
        <select name="categoria" value={formData.categoria} onChange={handleChange}>
          <option value="servicios">Servicios Prenatales</option>
          <option value="kits">Kits y Cosas Útiles</option>
          <option value="consultas">Consultas y Asesorías</option>
        </select>
      </div>

      <div className="form-group-admin">
        <label>Ruta de la Imagen</label>
        <input
          type="text"
          name="img"
          placeholder="Ej: /img/taller.jpg"
          value={formData.img}
          onChange={handleChange}
        />
      </div>

      <div className="form-group-admin">
        <label>Descripción completa</label>
        <textarea
          name="description"
          rows="3"
          placeholder="Explicá de qué trata este servicio..."
          value={formData.description}
          onChange={handleChange}
          style={{
            padding: "12px 16px",
            border: "2px solid #EEE",
            borderRadius: "14px",
            backgroundColor: "#FDFBF7",
            fontFamily: "inherit",
            fontSize: "15px",
            outline: "none"
          }}
        />
      </div>

      {error && <p className="admin-error-text">{error}</p>}

      <button type="submit" className="admin-submit-btn">Publicar Artículo ✨</button>
    </form>
  );
};