console.log('JS Loaded Successfully!');

/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const userInput = prompt('Entra una parrola e scopri se e palindroma!');

console.log(ifWordPalindrome(userInput));  

function ifWordPalindrome(str) {
    const wordLength = str.length;

    // Use for loop to divide the words into 2 half  
    for (let i = 0; i < wordLength / 2; i++) {  
        // Validate the first and last characters are the same  
        if (str[i] !== str[wordLength - 1 - i]) {  
          console.error(`La parola ${userInput} non e palindroma!`)
          return false;
        }  
    }  
    // If they are not the same, then it is not a palindrome
    console.log(`La parola ${userInput} e palindroma!`);
    return true;
}