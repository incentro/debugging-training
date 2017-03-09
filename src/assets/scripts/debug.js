// Console log
document.getElementById('log').onclick = function() {
    consoleLog();
};

function consoleLog() {
    console.log('Een normale melding in de console');
}


// Console log array
document.getElementById('logArray').onclick = function() {
    logArray();
};

function logArray() {
    let musicArray = ['ABBA', 'REM', 'Foo Fighters', 'Editors'];
    console.log(musicArray);
}


// Console log object
document.getElementById('logObject').onclick = function() {
    logObject();
};

function logObject() {
    let firstMusicObject = {song:'ABBA - Dancing Queen', id:11};
    console.log(musicObject)
}

// Console log error
document.getElementById('error').onclick = function() {
    consoleLogError();
};

function consoleLogError() {
    console.error('O no! This is an error!');
}

// Console log info
document.getElementById('info').onclick = function() {
    consoleLogInfo();
};

function consoleLogInfo() {
    console.info('This is an info message. Nothing to see here!');
}




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