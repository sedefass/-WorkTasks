function deepCopy(obj) {
    var newObj = new Object();//new empty object
    for (var key in obj) {
        newObj[key] = obj[key];
        if ((typeof obj[key]) == "object") {
            newObj[key] = deepCopy(obj[key]);    //recursion if we have to copy object in object call the same function again
        }
    }
    return newObj;
}

function printObj(obj) {
    for (key in obj) {
        console.log(key + ": " + obj[key]);
        if (typeof (obj[key]) == "object") {
            printObj(obj[key]);
        }
    }
    console.log();
}

var arr1 = new Array(1, 2, 10, 3); //array is object
var line1 = { Point1: { X: 0, Y: 3 }, Point2: { X: 5, Y: 0 } };
var arr2 = deepCopy(arr1);

console.log(arr1);
console.log(arr2);
arr1.push(1);
console.log(arr1);
console.log(arr2);
console.log('-----------------------------------------------');

console.log("Original array:");
printObj(arr1); //print original
console.log('-----------------------------------------------');
console.log("Cloned array:");
printObj(arr2); //print clone
console.log('-----------------------------------------------');
arr2[2] = 5; //change element to see whether original will stay the same
console.log("Original array after change of cloned:");
printObj(arr1); //print original
console.log('-----------------------------------------------');
console.log("Cloned array after change:");
printObj(arr2); //print clone
console.log('-----------------------------------------------');
var line2 = deepCopy(line1);
console.log("Original line:");
printObj(line1); //print original
console.log('-----------------------------------------------');
console.log("Cloned line:");
printObj(line2); //print clone
console.log('-----------------------------------------------');
line2.Point1.X = 66;  //change the value of X coord of clone to see whether the clone is deep
console.log("Original line:");
printObj(line1); //print original
console.log('-----------------------------------------------');
console.log("Cloned line after change:");
printObj(line2); //print clone
console.log('-----------------------------------------------');