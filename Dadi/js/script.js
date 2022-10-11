/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// DATI
const btnPlay = document.getElementById("btn-play");
const userDice = document.getElementById("user-dice");
const computerDice = document.getElementById("computer-dice");
const resultBox = document.querySelector(".result");

// ELABORAZIONE
btnPlay.addEventListener("click", function(){
    // Genero Numero random utente
    const userNumber = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
    console.log(userNumber);

    // Genero Numero random computer 
    const computerNumber = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
    console.log(computerNumber);

    let winning = "";
    let winStyle = "";

    // controlliamo chi ha il punteggio più alto
    if(userNumber > computerNumber){
        winning = "L'Utente ha vinto";
        winStyle = "win";
    } else if(computerNumber > userNumber){
        winning = "Il Computer ha vinto";
        winStyle = "lose";

    } else {
        winning = "Avete Pareggiato";
        winStyle = "draw";
    }

    // OUTPUT
    console.log(winning);
    userDice.innerHTML = `<h1>${userNumber}</h1>`;
    computerDice.innerHTML = `<h1>${computerNumber}</h1>`;

    resultBox.innerHTML = `<h1 class="${winStyle}">${winning}</h1>`;
});