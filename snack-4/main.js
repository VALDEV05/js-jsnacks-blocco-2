/* Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */
const placeToPrint = document.querySelector('.container')

const bicycles = [{
        name: 'BMC TWOSTROKE',
        weight: 12,
        price: 999
    },
    {
        name: 'ROCKRIDER XC 100',
        weight: 11,
        price: 899
    },
    {
        name: 'Grand Canyon 5.0',
        weight: 10,
        price: 799
    }
]

console.log(bicycles[0].weight);
//Guardo il peso della prima e lo aggiungo come il peso più basso.
const lower = bicycles[0].weight;
const index = 0;
for (let i = 0; i < bicycles.length; i++) {
    if (bicycles[i] < lower) {
        lower = bicycles[i].weight;
        index = i;
    }
}

placeToPrint.innerHTML = `<div class = 'result d-flex align-items-center justify-content-center bg-dark text-light' style= 'height: 100vh'>La bicicletta più leggera ha un peso di ${lower}kg,<br> il suo nome è: ${bicycles[index].name}</div>`