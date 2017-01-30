//The global scope is the scope of the web page or the Node.js app
// Objects belong to the global scope if:
//  They are defined outside of a function scope
//  They are defined without var
//  Fixable with 'use strict

//same ass global.defineNumber = 
//or window.defineNumber =
function defineNumber() {
    var number = 42; //defined in the scope of the function
}
defineNumber();
console.log(number);

function defineNumber() {
    number = 42; //defined globally (but not if 'use strict')
}
defineNumber();
console.log(number);

//------------------------------------------------------

var callCounter = (function () {
    let count = 0;

    function increment() {
        count++;
        return count;
    }

    function decrement() {
        count--;
        return count;
    }

    return {
        increment: increment,
        decrement: decrement
    };
} ());

console.log(callCounter.increment());
console.log(callCounter.increment());
callCounter.count = 100; //look what the function return, count is not reachable
console.log(callCounter.decrement());
console.log(callCounter.increment());
console.log(callCounter.decrement());
console.log(callCounter.decrement());
console.log('----------1----------');


var result = 1;
function test() {
    var result = 5; //now it is local variable
}
console.log(result);
test();
console.log(result);

var result = 1;
function test() {
    result = 5; //now it is global variable
}
console.log(result);
test();
console.log(result);

'use strict'; //its put in functions and it is for the scope of function
//dont use global scope if its possible

var db = (function () {
    var objs = [],
        result;
    function add(obj) {
        objs.push(obj);
        return result;
    }
    function list() {
        return objs.slice();
    }
    result = {
        add: add,
        list: list
    };
    return result;
} ());

console.log(db.add('Goshko')
    .add('Penka')
    .list());