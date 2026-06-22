import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "../../services/productsService";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '50px', color: 'var(--color-secundario)', fontSize: '20px' }}>
      ✨ Preparando la magia... ✨
    </div>
  );

  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: 'var(--color-secundario)', marginBottom: '30px' }}>
        Nuestros Favoritos
      </h2>
      <ItemList products={products} />
    </section>
  );
};