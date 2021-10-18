// Individuo il bottone da dove far partire la funzione
const btnPali = document.getElementById("btn_palindromo")

// Ricevo dall'utente il valore inserito
const elementoUtente = document.querySelector("[name='words']")

btnPali.addEventListener("click", function () {
    changeWordsDirection(elementoUtente)
})

/* ************************
FUNZIONE IN GRADO DI VERIFICARE SE UNA PAROLA/FRASE È PALINDROMA 
************************ */
function changeWordsDirection() {

    const parolaUtente = elementoUtente.value
    // Creo una validazione che mi ferma il codice 
    // se l'utente ha inserito un numero
    if (!isNaN(parolaUtente)) {
        alert("Parola non valida")
    } else {
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
}



