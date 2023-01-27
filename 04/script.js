var names = ['Gatsby', 'Aldo', 'Giovanni', 'Giacomo'];
var verified;

// getting the input
var input = prompt('Inserisci un nome per identificarti').trim();

// verifying the input is in 'names'
for (var i = 0; i < names.length && !verified; i++) {
    if (input.toLowerCase() === names[i].toLowerCase())
        verified = true;
}

// print the verification
document.querySelector('#app h1').innerHTML = verified ? 'Benvenuto' : 'Non puoi entrare';