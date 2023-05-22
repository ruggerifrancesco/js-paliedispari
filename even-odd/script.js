console.log('JS Loaded Successfully!');

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const isEvenOrOdd = prompt("Scegli tra Pari o Dispari");
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5!"));

// ----> Functions

// Random Number
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

    // Invoke getRndInteger
    const userNumberValue = getRndInteger(1, 5);
