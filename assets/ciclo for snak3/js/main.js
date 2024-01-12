const myArray = ["Fabrizio", "Pippo", "Pluto","Alessandro","Francesco","Alessio","Martina", "Giada"]

const yourArray = ["Federica","Monica","Anna","Filippo"]

const lunghezzaMyArray = myArray.length
const lunghezzaYourArray = yourArray.length

const trovaLunghezza = lunghezzaMyArray - lunghezzaYourArray

for (let i = 0; i < trovaLunghezza ; i++){
    yourArray.push(myArray[lunghezzaYourArray])
}

console.log(yourArray)
console.log(myArray)