let utente


for(let i = 0; i < 5; i++){

    utente = parseInt(prompt("Inserisci un numero"))


    if(utente % 2 === 0 ){
        console.log("il numero che hai inserito e pari")

    }else{
    
        console.log("Il numero che hai inserito è dispari. Il successivo è: " + (utente + 1))
    }
}