var x = 4, sum = 0;
var num;

// ask for a 'x'-digit number
do {
    num = prompt('Inserisci un numero di ' + x + ' cifre');
} while (isNaN(num) || num.length !== x);

// sum of all the digits of 'num'
for (var i = 0; i < num.length; i++) {
    sum += parseInt(num[i]);
}

// printing the output
document.querySelector('#app h1').innerText = 'La somma delle cifre che compongono ' + num + ' è ' + sum;