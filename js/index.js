function prn(msg) {
     document.write(msg);
}

function sequenceFibonacci(userNumber) {
    var fibonacci = [];
        fibonacci[0] = 1;
        fibonacci[1] = 1;
    var n = 2;
    while (n <= userNumber) {
        fibonacci[n] = fibonacci[n-1] + fibonacci[n-2];
        fibonacci.push(fibonacci[n]);
        n++;
    }
    return fibonacci[n];
}


var num = Number(prompt('Input your number: '));
var result = sequenceFibonacci(num);
prn(result());