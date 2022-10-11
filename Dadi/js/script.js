/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// DATI
// Numero random utente
const userNumber = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
console.log(userNumber);

// Numero random computer 
const computerNumber = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
console.log(computerNumber);

// ELABORAZIONE
// controlliamo chi ha il punteggio più alto
let winning = "";

if(userNumber > computerNumber){
    winning = "L'Utente ha vinto";
} else if(computerNumber > userNumber){
    winning = "Il Computer ha vinto";
} else {
    winning = "Avete Pareggiato";
}

// OUTPUT
console.log(winning);