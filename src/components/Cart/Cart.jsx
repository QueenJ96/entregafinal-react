import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { createOrder } from "../../services/productsService";
import "./Cart.css";

export default function Cart() {
  const { cart, removeItem, clearCart, getTotalPrice } = useCart();
  
  const [mostrandoForm, setMostrandoForm] = useState(false);
  const [datosComprador, setDatosComprador] = useState({ nombre: "", telefono: "", email: "", repetirEmail: "" });
  const [idOrden, setIdOrden] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [errorForm, setErrorForm] = useState("");

  // OPCION A: El carrito está vacío
  if (cart.length === 0 && !idOrden) {
    return (
      <div className="cart-vacio-aesthetic">
        <h3>Tu carrito está haciendo fiaca 😴</h3>
        <p>Todavía no sumaste ninguna propuesta a tu lista.</p>
        <Link to="/productos" className="hero-btn">Ver servicios ✨</Link>
      </div>
    );
  }

  // OPCION B: Compra exitosa!
  if (idOrden) {
    return (
      <div className="cart-exito-aesthetic">
        <h2>¡Reserva confirmada! 🎉</h2>
        <p>Gracias por confiar en <b>Nacer con Estilo</b>.</p>
        <div className="ticket-compra">
          <span>Tu código de seguimiento es:</span>
          <b>{idOrden}</b>
        </div>
        <p className="ticket-nota">Guardá este código. Nos pondremos en contacto por WhatsApp para coordinar el encuentro.</p>
        <Link to="/" className="hero-btn">Volver al Inicio</Link>
      </div>
    );
  }

  const handleInput = (e) => {
    setDatosComprador({ ...datosComprador, [e.target.name]: e.target.value });
  };

  const despacharOrden = async (e) => {
    e.preventDefault();
    setErrorForm("");

    if (datosComprador.email !== datosComprador.repetirEmail) {
      setErrorForm("Los correos electrónicos no coinciden 🧐");
      return;
    }

    try {
      setCargando(true);
      const nuevaOrden = {
        comprador: {
          nombre: datosComprador.nombre,
          telefono: datosComprador.telefono,
          email: datosComprador.email
        },
        // traductor para enviar a Firebase
        items: cart.map(item => ({
          id: item.id,
          nombre: item.nombre || item.title || item.name || "Sin nombre",
          precio: item.precio || item.price || 0,
          cantidad: item.cantidad || item.quantity || 1
        })),
        total: getTotalPrice(),
        fecha: new Date().toLocaleString()
      };

      const ticketGenerado = await createOrder(nuevaOrden);
      setIdOrden(ticketGenerado);
      clearCart();
    } catch (err) {
      setErrorForm("Hubo un error con la base de datos. Volvé a intentar.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="cart-contenedor">
      <h2>Tu Carrito 🛍️</h2>
      
      <div className="cart-lista">
        {cart.map((producto) => {
          
          const titulo = producto.nombre || producto.title || producto.name;
          const precio = producto.precio || producto.price || 0;
          const cantidad = producto.cantidad || producto.quantity || 1;
          const imagen = producto.img || producto.pictureUrl || producto.image;

          return (
            <div key={producto.id} className="cart-item">
              <img src={imagen} alt={titulo} />
              <div className="cart-item-info">
                <h4>{titulo}</h4>
                <p>Cantidad: {cantidad}</p>
              </div>
              <span>${precio * cantidad}</span>
              <button onClick={() => removeItem(producto.id)} className="cart-borrar">🗑️</button>
            </div>
          );
        })}
      </div>

      <div className="cart-resumen">
        <h3>Total: ${getTotalPrice()}</h3>
        
        {!mostrandoForm ? (
          <div className="cart-botones">
            <button onClick={clearCart} className="btn-vaciar">Vaciar carrito</button>
            <button onClick={() => setMostrandoForm(true)} className="hero-btn">Finalizar compra ✨</button>
          </div>
        ) : (
          <form onSubmit={despacharOrden} className="cart-formulario">
            <h4>Ingresá tus datos para coordinar</h4>
            
            <input type="text" name="nombre" placeholder="Nombre y Apellido" onChange={handleInput} required />
            <input type="tel" name="telefono" placeholder="WhatsApp (Ej: 1123456789)" onChange={handleInput} required />
            <input type="email" name="email" placeholder="Tu e-mail" onChange={handleInput} required />
            <input type="email" name="repetirEmail" placeholder="Repetí tu e-mail" onChange={handleInput} required />

            {errorForm && <p className="error-form">{errorForm}</p>}

            <div className="form-botones">
              <button type="button" onClick={() => setMostrandoForm(false)} className="btn-vaciar">Atrás</button>
              <button type="submit" disabled={cargando} className="hero-btn">
                {cargando ? "Procesando..." : "Confirmar Reserva 💖"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}