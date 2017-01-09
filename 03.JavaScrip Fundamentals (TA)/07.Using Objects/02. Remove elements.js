function solve(args) {
    Array.prototype.remove = function (valueToRemove) {
        index = this.indexOf(valueToRemove);
        while (index >= 0) {
            this.splice(index, 1);
            index = this.indexOf(valueToRemove);
        }
    };

    var valueToRemove = args[0];
    var arr = args;

    arr.remove(valueToRemove);
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

var test = ['1', '2', '3', '2', '1', '2', '3', '2'];

solve(test);


//how does it works
Array.prototype.remove = function (valueToRemove) {
    index = this.indexOf(valueToRemove);
    while (index >= 0) {
        this.splice(index, 1);
        index = this.indexOf(valueToRemove);
    }
};

var valueToRemove = '1';
var test = ['1', '2', '3', '2', '1', '2', '3', '2'];

test.remove(valueToRemove);
console.log(test);



//Example of Array.prototype.myFunction
Array.prototype.myUpperCase = function () {
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUpperCase();
console.log(fruits);