/*
Esercizio 1
Dichiara una variabile chiamata number e assegnale il valore 100. Stampa il valore della variabile in console
*/

let number = 100 //number

console.log(number); //number


/*Esercizio 2
Dichiara una costante chiamata PI e assegnale il valore di 3.14. Stampa il valore della costante in console
*/

const PI = 3.14 //number

console.log(PI); //number


/*Esercizio 2/B
Prova ad assegnare alla costante chiamata PI il valore di 3.1416. Sai dire cosa succede?
*/

//PI = 3.1416

//main.js:24 Uncaught TypeError: Assignment to constant variable.


/*
Esercizio 2/C
Dichiara una variabile chiamata radius e assegnale il valore 8.
Moltiplica radius x 2 e x PI e assegna il valore a una variabile di nome circle.
Stampa il valore della variabile circle in console.
*/

let radius = 8 //number

let circle = radius * 2 * PI

console.log(circle); //number


/*
Esercizio 3
Dichiara una variabile chiamata name e
assegnale il valore "Carlo".
Successivamente, modifica il valore della variabile in "Marco".
Stampa il nuovo valore in console.
*/

let name = 'Carlo' //string

//console.log(name);

name = 'Marco' //string

console.log(name); //string