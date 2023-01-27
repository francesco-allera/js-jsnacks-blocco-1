var input1, input2, result;

// insert 1° number with prompt until is a correct number
do {
    input1 = parseInt(prompt('Inserisci il 1° numero'));

    if (isNaN(input1))
        alert('Non è stato inserito un numero');
} while (isNaN(input1));

// insert 2° number with prompt until is a correct number
do {
    input2 = parseInt(prompt('Inserisci il 2° numero'));

    if (isNaN(input2))
        alert('Non è stato inserito un numero');
} while (isNaN(input2));

// deciding the result + printing it
if (input1 > input2)
    result = 'Il numero più grande è: '+ input1;
else if (input1 < input2)
    result = 'Il numero più grande è: '+ input2;
else
    result = 'I due numeri sono uguali';

document.querySelector('#app h1').innerText = result;