/* Descrizione:
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
Nome sarà l’unica proprietà da compilare, mentre le altre saranno tutte settate a 0. (modificato)  */

const teamSoccer = [{
            name: 'Roma',
            pointsMade: 0,
            pointSuffered: 0
        },
        {
            name: 'Lazio',
            pointsMade: 0,
            pointSuffered: 0
        },
        {
            name: 'Juventus',
            pointsMade: 0,
            pointSuffered: 0
        }
    ]
    //per aggiungere i punti fatti
for (let index = 0; index < teamSoccer.length; index++) {
    console.log(teamSoccer[index].pointsMade);
    if (teamSoccer[index].pointsMade == 0) {
        num = generateNumberRandom()
        teamSoccer[index].pointsMade = num
        console.log(teamSoccer[index].pointsMade);
    }
}
//per aggiungere i punti subiti
for (let index = 0; index < teamSoccer.length; index++) {
    console.log(teamSoccer[index].pointSuffered);
    if (teamSoccer[index].pointSuffered == 0) {
        num = generateNumberRandom()
        teamSoccer[index].pointSuffered = num
        console.log(teamSoccer[index].pointSuffered);
    }
}


function generateNumberRandom() {
    numRandom = Math.floor((Math.random() * 100) + 1);
    return numRandom

}
console.log(teamSoccer);