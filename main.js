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
const lower = bicycles[0].weight;
const index = 0;
for (let i = 0; i < bicycles.length; i++) {
    if (bicycles[i] < lower) {
        lower = bicycles[i].weight;
        index = i;
    }
}

placeToPrint.innerHTML = "Peso minore : " + lower + " della bicicletta : " + bicycles[identificatore].name