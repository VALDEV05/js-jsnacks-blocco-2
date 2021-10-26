//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando foreach
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

let lowerBike = bicycles[0]

bicycles.forEach(bike => {
    if (bike.weight < lowerBike.weight) {
        lowerBike = bike;
    }
})

console.log(`la bici più leggera è ${lowerBike.name} e pesa ${lowerBike.weight}kg`);