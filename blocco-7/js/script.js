var listNumbers = document.getElementById('list');

var li;

for (var i = 1; i <= 1000; i++) {

  listNumbers.innerHTML += '<li>' + Math.pow(2, i) + '</li>'

}


// for (var i = 0; i <= 1000; i++) {
//   console.log(Math.pow(2, i));
// }
