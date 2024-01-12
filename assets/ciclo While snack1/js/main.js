

const arrayVuoto = []

let utente;

let somma = 0
let i = 0

while (somma < 50 && i <= 10) {

    utente = parseInt(prompt("Inserisci un numero"))

    if (!isNaN(utente) && somma + utente <= 50) {

        arrayVuoto.push(utente)
        somma += utente

    } else if (!isNaN(utente)) {
        console.log("il numero supera la cifra 50")
    } else {
        console.log("Input non valido. Inserisci un numero valido.");

        i++
    }
}


console.log("Numeri nell'array:", arrayVuoto)
console.log("il totale dei numeri nell'array è:", somma)
