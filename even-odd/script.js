console.log('JS Loaded Successfully!');

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// const isEvenOrOdd = prompt("Scegli tra Pari o Dispari");

// Check if UserNumber is between 1 and 5\
let isInRange = false;

while (!isInRange) {
    const userNumber = parseInt(prompt("Scegli un numero da 1 a 5!"));

    if (userNumber >= 1 && userNumber <= 5 || isNaN(userNumber)) {
        isInRange = true;
    } else {
        alert('Hai Sbgaliato, il numero deve essere tra 1 e 5');
    }

    console.log(userNumber);
}


// Random Number for PC => Function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

    // Invoke getRndInteger
    const pcRndNumber = getRndInteger(1, 5);
