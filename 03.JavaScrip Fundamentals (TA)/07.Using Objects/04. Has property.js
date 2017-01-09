var arr = new Array(1, 2, 1, 3, 2, 4); //array is object
var point1 = { X: 0, Y: 3 };

var prop = "length";
console.log("Array has property " + prop + " :" + arr.hasOwnProperty(prop));
console.log('--------------------------------------------');

console.log("Array has property " + prop + " :" + point1.hasOwnProperty(prop));
console.log('--------------------------------------------');

prop = "X";
console.log("Array has property " + prop + " :" + arr.hasOwnProperty(prop));
console.log('--------------------------------------------');

console.log("Array has property " + prop + " :" + point1.hasOwnProperty(prop));
console.log('--------------------------------------------');

//-----------------------------------

Object.prototype.hasOwnPropertyImplementation = function (property) {
    if(property in this){
        return true;
    }

    return false;
}

var prop = "length";
console.log("Array has property " + prop + " :" + arr.hasOwnPropertyImplementation(prop));
console.log('--------------------------------------------');

console.log("Array has property " + prop + " :" + point1.hasOwnPropertyImplementation(prop));
console.log('--------------------------------------------');

prop = "X";
console.log("Array has property " + prop + " :" + arr.hasOwnPropertyImplementation(prop));
console.log('--------------------------------------------');

console.log("Array has property " + prop + " :" + point1.hasOwnPropertyImplementation(prop));
console.log('--------------------------------------------');