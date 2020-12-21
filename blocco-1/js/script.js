var one = prompt('Inserisci il primo numero');

if (isNaN(one)) {

  alert('Inserisci solo dei numeri')

} else {

  var two = prompt('Inserisci il secondo numero');

  if (isNaN(two)) {

    alert('Inserisci solo dei numeri')

  } else {

    numOne = parseInt(one);

    numTwo = parseInt(two);

    if (numOne > numTwo) {
      console.log(numOne);
    } else if (numOne < numTwo) {
      console.log(numTwo);
    } else {
      console.log('I due numeri sono uguali');
    }
  }
}
