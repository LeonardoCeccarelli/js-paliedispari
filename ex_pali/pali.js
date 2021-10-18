// Chiedo all'utente di inserire una parola
const parolaUtente = prompt("Inserisci una parola")

// Creo una validazione che mi ferma il codice 
// se l'utente ha inserito un numero
if (!isNaN(parolaUtente)) {
    alert("Parola non valida")
} else {
    // Dopo aver creato la funzione l'aggiungo inserendo come argomento
    // la variabile ricatava dall'inserimento della parola da 
    // parte dell'utente
    changeWordsDirection(parolaUtente)
}

function changeWordsDirection() {
    // Inverto la parola inserita dall'utente utilizzando le funzioni 
    // split, reverse e join
    const parolaReverse = parolaUtente.split("").reverse().join("")

    // Creo la condizione che mi permette di mandare un messaggio
    // all'utente che conferma se la parola è palindroma oppure no
    if (parolaUtente.toLowerCase().replace(/\s+/g, '') === parolaReverse.toLowerCase().replace(/\s+/g, '')) {
        alert(`La parola inserita è palindroma poichè "${parolaUtente}" se scritta al contrario non cambia (${parolaReverse}).`)
    } else {
        alert(`La parola inserita (${parolaUtente}) non è palindroma.`)
    }
}



