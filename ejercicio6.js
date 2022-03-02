/* 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola. */

for (let listNumber = 0; listNumber <= 9; listNumber++) {
    console.log(listNumber);
}

/* 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0. */

console.log('Segundo bucle:');

for (let listNumber2 = 0; listNumber2 <= 9; listNumber2++) {
    if ((listNumber2%2) === 0) {
        console.log(listNumber2);
    }
}

/* 1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle empieza en 0 y termina en 10. 
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
y cambia el mensaje en la última vuelta a 'Dormido!'. */

for (let countSheep = 0; countSheep < 10; countSheep++) {
    if (countSheep<9) {
        console.log('Intentando dormir')
    }
    else console.log('Dormido!');
}