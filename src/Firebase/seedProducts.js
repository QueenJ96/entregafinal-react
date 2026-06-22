import { db } from "./config";
import { collection, addDoc } from "firebase/firestore";

const products = [
  {
    nombre: "Taller de Preparación Integral",
    description: "Cuatro encuentros hermosos para derribar mitos sobre el parto, aprender técnicas de respiración y armar tu plan de nacimiento en tribu.",
    precio: 25000,
    img: "/img/serviciopim.png",
    categoria: "servicios"
  },
  {
    nombre: "Clases de Lactancia",
    description: "Un espacio de pausa, escucha y aprendizaje para prepararte para la lactancia, resolver dudas y compartir experiencias con otras mamás.",
    precio: 18000,
    img: "/img/serviciolactancia.png",
    categoria: "servicios"
  },
  {
    nombre: "Kit Esencial Postparto",
    description: "Una selección delicada y estética personalizada con todo lo necesario para los primeros días en casa: apósitos específicos, guía de lactancia, infusiones relajantes y más.",
    precio: 45000,
    img: "/img/serviciopostparto.png",
    categoria: "kits"
  },
  {
    nombre: "Consulta Prenatal Personalizada",
    description: "Sesión para despejar todas tus dudas, revisar estudios y diseñar tu plan de parto a medida.",
    precio: 15000,
    img: "/img/serviciocontrol.png",
    categoria: "consultas"
  }
];

export const seedProducts = async () => {
  const productosRef = collection(db, "productos");
  for (const product of products) {
    await addDoc(productosRef, product);
  }
  console.log("¡Catálogo sembrado!");
};