var odds = [];
var i = 1, max = 6;
var num, result;

// ask for 'max' times a number
do {
    num = parseInt(prompt('Inserisci il ' + i + '° numero'));

    // if 'num' is a number and odd, 'num' is added to 'odds'
    if (!isNaN(num)) {
        i++;
        if (num % 2 !== 0) odds.push(num);
    }
} while (i <= max);

// print all the odds number entered
if (odds.length > 0)
    result = 'I numeri dispari inseriti sono: ' + odds.join(', ');
else
    result = 'Nessun numero disparo inserito';

document.querySelector('#app h1').innerText = result;