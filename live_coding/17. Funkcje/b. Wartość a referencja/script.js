var numericVal = 5;
numericVal = 4;

function rewrite(param) {
    console.log('Wartość wewnątrz funkcji: ' + param);
    param = 10;
    console.log('Wartość wewnątrz funkcji: ' + param);
}

rewrite(numericVal);
console.log(numericVal);


var numericArray = [1, 2, 3];

function rewrite2(arr) {
    console.log(arr);
    arr[1] = 1000;
    console.log(arr);
}

rewrite2(numericArray);
console.log(numericArray);