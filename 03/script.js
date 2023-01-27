var numbersToInsert = 5;
var sumFor = sumWhile = counterWhile = 0;
var inputFor, inputWhile;

// asking 5 valid number with for loop
for (var i = 0; i < numbersToInsert; i++) {
    inputFor = parseInt(prompt('Inserisci il ' + (i + 1) + '° numero for'));

    if (!isNaN(inputFor))
        sumFor += inputFor;
    else
        i--;
}

// asking 5 valid number with while loop
while (counterWhile < numbersToInsert) {
    inputWhile = parseInt(prompt('Inserisci il ' + (counterWhile + 1) + '° numero while'));

    if (!isNaN(inputWhile)) {
        sumWhile += inputWhile;
        counterWhile++;
    }
}

// printing the sums of every loop
document.querySelector('#app h1').innerHTML = 'La somma dei numeri inseriti con il for è ' + sumFor + '<br>La somma dei numeri inseriti con il while è ' + sumWhile;