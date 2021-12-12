function simpleFunction() {
    console.log('Simple function');
}

simpleFunction();

function showIt(text) {
    console.log('Otrzymany teks to: ' + text);
}

showIt('Jakis tekst');

function sumOfTwo(a, b) {
    var sum = a + b;
    console.log('Suma dodawania to: ' + sum);
}

sumOfTwo(2, 2);

function returnText() {
    return 'Jakis tekst';
}

var text = returnText();
console.log(text);


// przeciążenie

function f(p1) {
    console.log('Jeden para,etr: ' + p1)
}

function f(p1, p2) {
    console.log('Dwa parametry: ' + p1 + ' ' + p2)
}

f(5);
f(1, 2);
