var listNum = [];

var n1 = prompt('Inserisci il primo numero');
var n2 = prompt('Inserisci il secondo numero');
var n3 = prompt('Inserisci il terzo numero');
var n4 = prompt('Inserisci il quarto numero');
var n5 = prompt('Inserisci il quinto numero');

listNum.push(parseInt(n1), parseInt(n2), parseInt(n3), parseInt(n4), parseInt(n5));

var sum = 0;

for (i = 0; i < listNum.length; i++) {
  sum += listNum[i];
}

console.log(sum);

/* Versione Ottavio FOR
var sum = 0;
for(i = 0; i < 5; i++) {
  var num = prompt('Inserisci un numero');
  sum += parseInt(num);
  // sum += parseInt(prompt('Inserisci un numero'));
  //in un'unica riga c'è tutto
}
console.log(sum);
*/


/* Versione Ottavio WHILE 1
var somma = 0;
var x = 0;
do {
  var n = prompt('Inserisci un numero');
  somma += parseInt(n);
  x++;
} while (x < 5);
console.log('La tua somma è ' + somma);
*/


/* Versione Ottavio WHILE 2
var x = 0;
while(x < 5) {
  var n = prompt('Inserisci un numero');
  somma += parseInt(n);
  x++;
}
console.log('La tua somma è ' + somma);
*/
