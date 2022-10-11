/*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

// DATI
const userEmail = document.querySelector("input");
const buttonControl = document.getElementById("btn-control");
const resultBox = document.querySelector(".result");
const emailList = ["pinco@gmail.com", "gianni@gmail.com", "pallino@gmail.com", "paolo@gmail.com", "alberto@gmail.com"];

// ELABORAZIONE
buttonControl.addEventListener("click", function(){
    // Leggiamo il valore dell'utente
    const userEmailValue = userEmail.value;
    console.log(userEmailValue);

    // Creo una variabile booleana per dire se è presente o no
    let isPresent = "L'email non è presente nella lista";

    // Scorriamo la lista Email
    for (let i = 0; i < emailList.length; i++) {
        // Prendiamo il valore all'indice i della lista
        const thisEmail = emailList[i];
        console.log(thisEmail);

        // confrontiamolo con l'input dell'utente
        if(thisEmail === userEmailValue){
            isPresent = "L'email è presente nella lista";
        }
    }

    // Aggiungiamo il risultato alla pagina
    resultBox.innerHTML = `<h1>${isPresent}</h1>`;
});