import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito o sumar cantidad si ya existe
  const addToCart = (item, quantity) => {
    const itemInCart = cart.find((prod) => prod.id === item.id);
    if (itemInCart) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Eliminar un producto específico
  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  // Vaciar por completo el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Calcular el precio total acumulado
  const getTotalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
  };

  // Calcular el total de unidades para la burbuja del Header
  const getTotalQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, clearCart, getTotalPrice, getTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};