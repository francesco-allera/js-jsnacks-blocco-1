var sum = 0;

var middle = 0;

for (var i = 1; i <= 10; i++) {
  sum += i;
  console.log('La tua somma è ' + sum);
  middle = sum / i;
  console.log('La tua media è ' + middle);
}
