var number = prompt('Inserisci un numero di 4 cifre');

var sum = 0;

if (isNaN(parseInt(number))) {
  alert('Non hai inserito un numero')
}
else if (number.length >= 5 || number.length <= 3) {
  alert('Numero o troppo grande o troppo piccolo, riprova')
}
else {
  for (var i = 0; i < 4; i++) {
    sum += parseInt(number[i]);
  }
  console.log(sum);
}
