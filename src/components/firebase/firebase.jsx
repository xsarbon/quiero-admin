/* Importamos las funciones de firebase */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


/* Declaramos las configuraciones de firebase */
const firebaseConfig = {

};


// Inicializa Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);