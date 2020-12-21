var num = parseInt(prompt('Inserisci un numero'));

if (num > 10) {
  alert('Inserisci solo un numero compreso tra 0 e 10');
} else {
  for (var i = 0; i <= num; i++) {
    console.log(Math.pow(i, 3));
  }
}
