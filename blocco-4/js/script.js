var listNames = ['Aldo', 'Giovanni', 'Giacomo', 'Al', 'John', 'Jack', 'Gatsby'];

var nameUser = prompt('Inserisci il tuo nome');

var nameUserUpLow = nameUser.charAt(0).toUpperCase() + nameUser.slice(1).toLowerCase();

var checker = false;

for (var i = 0; i < listNames.length; i++) {
  if (listNames[i] === nameUserUpLow) {
    checker = true;
  }
}

if (!checker) {
  alert('Mi spiace, non sei nella lista degli invitati!');
} else {
  alert('Complimenti, sei nella lista degli invitati! Goditi la festa!');
}


/* Versione Ottavio senza for
var listNames = ['Aldo', 'Giovanni', 'Giacomo', 'Al', 'John', 'Jack', 'Gatsby'];
var nameUser = prompt('Inserisci il tuo nome');
if (listNames.indexOf(nameUser) === -1) {
  alert('Non puoi entrare!');
} else {
  alert('Benvenuto!');
}
*/
