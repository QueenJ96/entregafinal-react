import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASIR2uO_bfDc0YeIrVkZcboegcNT4jsQc",
  authDomain: "nacer-con-estilo.firebaseapp.com",
  projectId: "nacer-con-estilo",
  storageBucket: "nacer-con-estilo.firebasestorage.app",
  messagingSenderId: "1021210010143",
  appId: "1:1021210010143:web:d1d12e9d3abfd734c12b2a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);