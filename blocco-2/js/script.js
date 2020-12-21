
var wordOne;
var wordTwo;

wordOne = prompt('Inserisci la prima parola');

if (wordOne.includes(' ')) {

  alert('Inserisci solo una parola. Riprova');

} else {

  wordTwo = prompt('Inserisci la seconda parola');

  if (wordTwo.includes(' ')) {

    alert('Inserisci solo una parola. Riprova');

  } else {

    if (wordOne.length > wordTwo.length) {

      console.log(wordTwo + ' ' + wordOne);

    } else if (wordOne.length < wordTwo.length) {

      console.log(wordOne + ' ' + wordTwo);

    } else {

      console.log(wordOne + ' ' + wordTwo);

    }
  }
}
