let utente


for(let i = 0; i < 5; i++){

    utente = parseInt(prompt("Inserisci un numero"))


    if(utente % 2 === 0 ){
        console.log("il numero che hai inserito e pari")

    }else if(utente % 2 === 1 ){
        console.log("il numero che hai inserito e dispari")
    }else{
        console.log(utente % 2 === 0)
    }
}