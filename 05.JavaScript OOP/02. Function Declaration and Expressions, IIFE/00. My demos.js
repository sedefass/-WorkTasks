//That works, because declared this way function f goes to the top of the scope
f(6);
function f(x) {
    console.log(x);
}
f(7);
console.log('-----------1-------------');


//That doesn't work, because it is same as var f at the top, and after f1(6) we assign function to f
//it tells us Uncaught TypeError: f1 is not a function(…)
f1(6);
var f1 = function (x) {
    console.log(x);
};
f1(7);
console.log('-----------2-------------');

//defining function with function constructor
var f2 = new Function('x', 'y', 'console.log(x+y);');
var f3 = new Function('x', 'y', 'var z = 2;' + 'console.log((x+y)*z);');
f2(1, 2);
f3(1, 2);
console.log('-----------3-------------');

//it works with numbers
var max = Math.max(1, 2, 3);
console.log(max);
//but doesn't work with arrays
var numbers = [1, 2, 3, 4];
console.log(Math.max.apply(Math, numbers)); //now it works
console.log(Math.max(numbers)); //doesn't work

function f4(x, y, z) {
    console.log(x + y + z);
}
f4(1, 2, 3);
var numbers = [2, 3, 4];
f4.apply(null, numbers);
console.log('-----------4-------------');

//takes the method of person and used it to person2
var person = {
    name: 'Pesho',
    age: 17,
    introduce: function () {
        console.log(this.name + ' ' + this.age);
    }
};
person.introduce();
var person2 = {
    name: 'John',
    age: 31
};
person.introduce.call(person2);
console.log('-----------5-------------');

function x() {
    function y() {
        console.log('Y');
    }
    return y;
}
console.log(x() === x()); //return false because y is created every time when x is invoked

x()();//it works because the x returns a function

function x1() {
    return 1;
}
console.log(x1() === x1()); //returns true
console.log('-----------6-------------');

//IIFE with the ( and ) at the beginning and the end of the expression
(function () {
    console.log('x');
} ());
//if we are linking many JS files to a HTML document, they are merged into one single
//so if we have var x in every one of them, that may be a problem
//so thats the point of IIFE - to declare a scope

//valid IIFEs
var iife = function () { console.log("invoked!"); } ();
(function () { console.log("invoked!"); } ());
(function () { console.log("invoked!"); })();
!function () { console.log("invoked!"); } ();
true && function () { console.log("invoked!"); } ();
1 + function () { console.log("invoked!"); } ();

// A module is the result that is returned from an IIFE
// Allows hidden data
// Evades the polluting of the global scope
var getNextId = function(){
    var lastId = 1;
    return function(){
        return lastId++;
    };
} ();
console.log(typeof getNextId);
console.log(getNextId());
console.log(getNextId());
console.log(getNextId());
console.log('-----------7-------------');

var generator = function(){
    var lastId = 1;
    return {
        getNextId: function(){
            return lastId++;
        }
    };
}();
console.log(typeof generator);
console.log(generator.getNextId());
console.log(generator.getNextId());
console.log(generator.getNextId());
console.log('-----------8-------------');
