import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/productsService";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Usamos nuestra función mock temporal en vez de Firebase por ahora
    getProductById(id)
      .then((data) => {
        if (data) {
          setItemDetail(data);
        } else {
          console.error("Producto no encontrado");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{textAlign: 'center', padding: '3rem', color: 'var(--color-secundario)', fontWeight: 'bold'}}>Preparando detalles aesthetic... ✨</p>;
  if (!itemDetail) return <p style={{textAlign: 'center', padding: '3rem'}}>Uy, producto no encontrado :(</p>;

  return (
    <section style={{ padding: '2rem 1rem' }}>
      <h1 style={{ textAlign: 'center', color: 'var(--color-secundario)', marginBottom: '2rem' }}>
        Detalles del producto
      </h1>
      <div className="detail-wrapper">
        <ItemDetail {...itemDetail} />
      </div>
    </section>
  );
};