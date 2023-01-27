var output = document.querySelector('#app ul');
var input;

// ask for a positive number
do {
    input = parseInt(prompt('Scegli un numero'));

    if (isNaN(input) || input < 0)
        alert('Il numero deve essere almeno uguale a zero');
} while (isNaN(input) || input < 0);

// print all the third power of 'input'
for (var i = 0; i <= input; i++) {
    output.innerHTML += '<li>' + i +'^3 = ' + Math.pow(i,3) + '</li>';
}