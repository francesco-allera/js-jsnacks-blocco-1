var array = [];
var num;

for (var i = 0; i < 6; i++) {
  num = parseInt(prompt('Inserisci un numero'));
  if (num % 2 != 0) {
    array.push(num);
  }
}
