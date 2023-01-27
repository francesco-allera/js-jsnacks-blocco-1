var output = document.querySelector('#app ul');
var num = 2, maxPower = 1000;

// printing all the power of 2 of the first 1'000 numbers
for (var i = 0; i <= maxPower; i++) {
    output.innerHTML += '<li>'+ num +'^'+ i +' = '+ Math.pow(num, i) +'</li>';
}