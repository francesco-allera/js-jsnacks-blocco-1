var output = document.querySelector('#app');
var max = 10, sum = 0, average = 0;

// calculate sum and average of the first 'i' numbers, then print the results
for (var i = 1; i <= max; i++) {
    sum += i;
    average = sum / i;

    output.innerHTML += '<div class="math">La somma dei primi ' + i + ' numeri è ' + sum + '<br>La media è invece ' + average + '</div>';
}