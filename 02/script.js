var input1, input2, text;

// ask for a correct 1° word
do {
    input1 = prompt('Inserisci la 1° parola');

    if (!input1  || input1.includes(' ') || input1.length < 1)
        alert('Inserire una parola adeguata');
} while (!input1 || input1.includes(' ') || input1.length < 1);

// ask for a correct 2° word
do {
    input2 = prompt('Inserisci la 2° parola');

    if (!input2 || input2.includes(' ') || input2.length < 1)
        alert('Inserire una parola adeguata');
} while (!input2 || input2.includes(' ') || input2.length < 1);

// define which word is longer + print it
if (input1.length > input2.length)
    text = 'La parola più lunga è ' + input1 + ', quella più corta è ' + input2;
else if (input1.length < input2.length)
    text = 'La parola più lunga è ' + input2 + ', quella più corta è ' + input1;
else
    text = input1 + ' e ' + input2 + ' hanno la stessa lunghezza'

document.querySelector('#app h1').innerHTML = text;