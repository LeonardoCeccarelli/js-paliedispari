// Individuo il bottone per far paritre la funzione
const btnGame = document.getElementById("btn_odd_even")

btnGame.addEventListener("click", function () {
    evenOdd()
})

// Creo la funzione pari o dispari
function evenOdd() {

    // Creo le variabili pari e dispari
    const pari = "pari"
    const dispari = "dispari"

    // Chiedo all'utente di scegliere fra pari e dispari
    const valoreUtente = prompt("Scegli fra 'pari o 'dispari'")

    // Verifico se l'utente ha inserito vero o falso
    if (valoreUtente.toLowerCase() === pari || valoreUtente.toLowerCase() === dispari) {

        // Chiedo di inserire un numero da 1 a 5
        const numeroUtente = prompt("Inserisci un numero intero da 1 a 5")

        // Verifico che il numero inserito sia valido
        if (isNaN(numeroUtente)) {
            alert("Numero inserito non valido")
        } else if (numeroUtente < 1 || numeroUtente > 5) {
            alert("Il numero inserito non rientra fra 1 e 5")
        } else {
            // Assegno pari o dispari al computer in base alla scelta iniziale
            // dell'utente
            let valoreComputer = ""

            if (valoreUtente === pari) {
                valoreComputer = dispari
            } else {
                valoreComputer = pari
            }

            // Faccio apparire casualmente al computer un numero da 1 a 5
            const numeroComputer = generateRandomNum()

            // Sommo il numero dell'utente a quello del computer
            const sommaNumero = parseInt(numeroUtente) + parseInt(numeroComputer)

            alert(`Il computer ha scelto ${numeroComputer} ed ha ${valoreComputer}`)

            // Creo variabile che mi permette di verificare se la somma 
            // è pari o dispari
            let check = ""

            if (sommaNumero % 2 === 0) {
                check = pari
            } else {
                check = dispari
            }

            // In base al risultato assegno alla variabile vincitore il nome
            // Giocatore o Computer
            let vincitore = ""

            if (check === valoreUtente) {
                vincitore = "Giocatore"
            } else {
                vincitore = "Computer"
            }

            alert(`Somma totale : ${sommaNumero}   ----${vincitore} hai vinto!----`)

        }

    } else {
        alert("Valore inserito non valido")
    }

}

function generateRandomNum() {
    const randomNum = Math.ceil(Math.random() * 5)
    return randomNum
}