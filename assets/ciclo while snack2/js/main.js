

let i = 0

while (true) {
    const numeroN = Math.floor(Math.random() * (1, 100 + 1) + 1)
   
    const utente = parseInt(prompt("Inserisci un numero da indovinare"))

    if (numeroN === utente) {
        console.log("il numero che hai inserito e Uguale!")
    } else if (numeroN < utente) {
        console.log("il numero che hai inserito è troppo alto")
    } else {
    
        console.log("il numero è troppo basso ")
    }
    i++

} 

