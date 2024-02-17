/*
Esercizio 1
Dichiara una variabile chiamata number e assegnale il valore 100. Stampa il valore della variabile in console
*/

let number = 100 //number integer

console.log(number); //number integer


/*Esercizio 2
Dichiara una costante chiamata PI e assegnale il valore di 3.14. Stampa il valore della costante in console
*/

const PI = 3.14 //number float

console.log(PI); //number float


/*Esercizio 2/B
Prova ad assegnare alla costante chiamata PI il valore di 3.1416. Sai dire cosa succede?


//PI = 3.1416


main.js:24 Uncaught TypeError: Assignment to constant variable.
la console da errore perchè essendo una costante non può essere sovrascritto
*/


/*
Esercizio 2/C
Dichiara una variabile chiamata radius e assegnale il valore 8.
Moltiplica radius x 2 e x PI e assegna il valore a una variabile di nome circle.
Stampa il valore della variabile circle in console.
*/

let radius = 8 //number integer

let circle = radius * 2 * PI

console.log(circle); //number float


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


/*
Esercizio 4
Dichiara una variabile chiamata temperature e assegnale il valore 22.5. Successivamente, aumenta il suo valore di 5 e stampa il nuovo valore in console.
*/

let temperature = 22.5 //number float

temperature = 5 //number integer

console.log(temperature); //number integer

/*
Esercizio 5: Numeri
Rispondete in un commento a più righe: Che differenza c'è tra il numero 3.14 e 100 sono diversi? Perchè? Che tipo di dato è uno e che tipo di dato è l'altro?

il primo è un numero decimale e verrà indicato come FLOAT, mentre il secondo è un numero intero indicato come INTEGER
*/


/*
Esercizio 6: console
Per scrivere dentro la nostra console utilizziamo la sua funzione .log() ma se scrivessimo console.info('Il mio messaggio') che differenza c'è? Perche?
Esistono altri metodi da usare con console. ? 



*/

console.info('il mio messaggio')

/*
con .info nella console il messaggio verrà scritto come con .log, ma viene presentato solo nella pagina browser e non vengono registrati al terminale di debug.
la console viene infatti utilizzata dagli sviluppatori come debug per sviluppare il programma e per aiutare la lettura del programma una volta teminato.
ha diverese funzionalità oltre a .log ( quella più utilizzata) e .info, è di fatti possibile inserire messaggi di avviso (.warn), fare conteggi(.count), tracciare file e moduli esterni al programma (.trace), si può misurare il tempo di esecuzione delle funzioni (utile per migliorare il rendimento) (.time), generare gruppi di messaggi (.group), generare tabelle (.table), è possinibile cancellare il codice debug con la funzione .clear
*/