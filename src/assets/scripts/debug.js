// Console log

console.log('disco');


// Console info

let event = 'discobowling';
let musicObject = {song:'ABBA - Dancing Queen', id:11};
console.info('My first event was', event, '. While dancing on: ', musicObject);


// Trace button

function foo() {
    function bar() {
        console.trace();
    }
    bar();
}

document.getElementById('foo').onclick = function() {
    foo();
};


// Breakpoint button

function bar() {
    let barValue = document.getElementById('barValue').value;
    let barMultiply = document.getElementById('barMultiply').value;

    document.getElementById('barResult').value = barValue * barMultiply;
}

document.getElementById('bar').onclick = function() {
    bar();
};