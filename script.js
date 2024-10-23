// Importa le funzioni necessarie dal SDK di Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

// Configurazione Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCfDtNb2YyRv6z5yTaTH21jJ-edo6R4l4s",
    authDomain: "chatgpt-46147.firebaseapp.com",
    databaseURL: "https://chatgpt-46147-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chatgpt-46147",
    storageBucket: "chatgpt-46147.appspot.com",
    messagingSenderId: "368825252659",
    appId: "1:368825252659:web:5b6c912b2ed9abb16f5c46"
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Riferimento al nodo del database dove verrà salvato il numero
const numberRef = ref(database, 'number');

// Elementi del DOM
const numberDisplay = document.getElementById('numberDisplay');
const incrementBtn = document.getElementById('incrementBtn');
const rstBtn = document.getElementById('rstBtn');

// Carica il numero salvato
onValue(numberRef, (snapshot) => {
    const savedNumber = snapshot.val();
    numberDisplay.textContent = savedNumber !== null ? savedNumber : 0; // Mostra 0 se non ci sono valori
});

// Incrementa il numero e lo salva
incrementBtn.addEventListener('click', () => {
    let currentNumber = parseInt(numberDisplay.textContent) || 0; // Assicurati che non sia NaN
    currentNumber++;
    numberDisplay.textContent = currentNumber;

    // Salva il numero nel database Firebase
    set(numberRef, currentNumber);
});
restBtn.addEventListener('click', () => {
    numberDisplay.textContent = 0;

    // Salva il numero nel database Firebase
    set(numberRef, currentNumber);
});
