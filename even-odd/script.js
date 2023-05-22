console.log('JS Loaded Successfully!');

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const isEvenOrOdd = prompt("Scegli tra Pari o Dispari");

// Check if UserNumber is between 1 and 5
let isInRange = false;
let userNumber;
let guesses = 1;

while (!isInRange) {
    userNumber = parseInt(prompt(guesses, "Scegli un numero da 1 a 5!"));

    if (userNumber >= 1 && userNumber <= 5) {
        isInRange = true;
        console.log("Il tuo numero e:", userNumber);
    } else {
        console.log('Riprova!');
        alert('Hai Sbagliato, il numero deve essere tra 1 e 5');
    }

    guesses++
}

// Random Number for PC => Function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

    // Invoke getRndInteger
    const pcRndNumber = getRndInteger(1, 5);
    console.log("Numero PC", pcRndNumber);


// Sum of the numbers (and Check is the result is Even or Odd)
let sumNumbers = userNumber + pcRndNumber;
console.log(sumEvenOrOdd(sumNumbers));

// If the sum is even or Odd => Function
function sumEvenOrOdd (sumNumbersEvenOrOdd) {
    if (sumNumbersEvenOrOdd % 2 === 0) {
        return `Somma dei numeri e ${sumNumbersEvenOrOdd}: il numero e pari!`;
    } else {
        return `Somma dei numeri e ${sumNumbersEvenOrOdd}: il numero e dispari!`;
    }
}


