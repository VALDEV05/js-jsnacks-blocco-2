/* Nella stessa repo di ieri!
/*
* Crea un array vuoto e chiedi all’utente un numero
* da inserire nell’array. Continua a chiedere i numeri
* all’utente e a inserirli nell’array fino a quando
* a somma degli elementi è minore di 50.
*/



var arrayNumber = [];
sum = 0;

while (sum < 50) {
    var number = parseInt(prompt("inserisci un numero"));
    arrayNumber.push(number);
    sum += number;
    console.log(sum);
}
console.log(arrayNumber);