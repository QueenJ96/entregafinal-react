import { db } from "../Firebase/config";
import { collection, getDocs, doc, getDoc, addDoc } from "firebase/firestore";

// Colección "productos" (Firebase)
const productsRef = collection(db, "productos");

// 1. Traer todo para la grilla del Inicio
export const getProducts = async () => {
  const data = await getDocs(productsRef);
  return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// 2. Traer el detalle de un solo ítem cuando entran a verlo
export const getProductById = async (id) => {
  const docRef = doc(db, "productos", id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

// 3. Guardar un ítem nuevo en la nube 
export const createProduct = async (product) => {
  const docRef = await addDoc(productsRef, {
    ...product,
    precio: Number(product.precio) 
  });
  return docRef.id; // devuelve ID real (Firebase)
};

// 4. Guardar la orden de compra generada por la clienta
export const createOrder = async (orden) => {
  const ordenesRef = collection(db, "ordenes");
  const docRef = await addDoc(ordenesRef, orden);
  return docRef.id; // Devuelve el ticket de compra
};