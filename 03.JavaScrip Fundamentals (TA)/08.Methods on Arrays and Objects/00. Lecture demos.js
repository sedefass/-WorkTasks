// -----Array#every-----
// Signature: [].every(callback);
// Callback: callback(item [, index [,arr]])
// Returns: Boolean
// Behavior: returns true if ALL the elements of the array meets the criteria in callback()
// Returns false if ANY of the elements does not meet the criteria in callback()
// Support: everywhere

var array01 = [1, 7, 5, 3, 9, 5]; //all are odds
var array02 = [1, 4, 5, 3, 9, 5]; //not all are odds
var array03 = [2, 4, 8, 6, 2, 4]; //all are even

//function to test it with
function isOdd(n) {
    return n % 2 !== 0;
}

//-----EXAMPLES HOW IT WORKS-----
console.log(array01.every(isOdd));
//same as:
console.log(array01.every(function (n) {
    return n % 2;
}));
//with lambda expression
console.log(array01.every(n => n % 2 !== 0));
//to check how it works with array02 and array03
console.log('----------');
console.log(array02.every(isOdd));
console.log(array03.every(isOdd));
console.log('----------');

//-----IMPLEMENTATION-----
Array.prototype.everyImplementation = function (condition) {
    for (let i of this) {
        if (!condition(this[i])) {
            return false;
        }
    }

    return true;
};
//implementation example
console.log(array01.everyImplementation(isOdd));
console.log(array02.everyImplementation(isOdd));
console.log(array03.everyImplementation(isOdd));

//----------------------------------------------------------------------------------------------

// -----Array#some-----
// Signature: [].some(callback);
// Callback: callback(item [, index [,arr]])
// Returns: Boolean
// Behavior: returns true if ANY of the elements of the array meets the criteria in callback()
// Returns false if NONE of the elements meets the criteria in callback()
// Support: everywhere

var array01 = [1, 7, 5, 3, 9, 5]; //all are odds
var array02 = [2, 4, 8, 6, 5, 4]; //not all are odds
var array03 = [2, 4, 8, 6, 2, 4]; //all are even

//function to test it with
function isOdd(n) {
    return n % 2 !== 0;
}

//-----EXAMPLES HOW IT WORKS-----
console.log(array01.some(isOdd));
//same as:
console.log(array01.some(function (n) {
    return n % 2;
}));
//with lambda expression
console.log(array01.some(n => n % 2 !== 0));
//to check how it works with array02 and array03
console.log('----------');
console.log(array02.some(isOdd));
console.log(array03.some(isOdd));
console.log('----------');

//-----IMPLEMENTATION-----
Array.prototype.someImplementation = function (condition) {
    for (let i = 0; i < this.length; i++) {
        if (condition(this[i])) {
            return true;
        }
    }

    return false;
};
//implementation example
console.log(array01.someImplementation(isOdd));
console.log(array02.someImplementation(isOdd));
console.log(array03.someImplementation(isOdd));

//----------------------------------------------------------------------------------------------

// Array#filter
// Signature: [].filter(callback);
// Callback: callback(item [, index [, arr]])
// Returns: Array
// Behavior: extracts in a new array only the elements that meet the criteria in callback()
// Returns empty array, if no element meets the criteria
// Support: everywhere

var array01 = [1, 7, 5, 3, 9, 5]; //all are odds
var array02 = [2, 4, 8, 6, 5, 4]; //not all are odds
var array03 = [2, 4, 8, 6, 2, 4]; //all are even

//function to test it with
function isOdd(n) {
    return n % 2 !== 0;
}

//-----EXAMPLES HOW IT WORKS-----
console.log(array01.filter(isOdd));
//same as:
console.log(array01.filter(function (n) {
    return n % 2;
}));
//with lambda expression
console.log(array01.filter(n => n % 2 !== 0));
//to check how it works with array02 and array03
console.log('----------');
console.log(array02.filter(isOdd));
console.log(array03.filter(isOdd));
console.log('----------');

//-----IMPLEMENTATION-----
Array.prototype.filterImplementation = function (condition) {
    let filteredArray = [];
    for (let value of this) {
        if (condition(value)) {
            filteredArray.push(value);

        }
    }

    return filteredArray;
};
//implementation example
console.log(array01.filterImplementation(isOdd));
console.log(array02.filterImplementation(isOdd));
console.log(array03.filterImplementation(isOdd));

//----------------------------------------------------------------------------------------------

// Array#map
// Signature: [].map(callback);
// Callback: callback(item [, index [, arr]])
// Returns: Object
// Behavior: returns a new array with the same size. Each element is mapped, based on callback()
// Support: everywhere

var array01 = [1, 2, 3, 4, 5, 6];

//function to test it with
function multiplyBy2(n) {
    return n * 2;
}

//-----EXAMPLES HOW IT WORKS-----
console.log(array01.map(multiplyBy2));
//with lambda expression
console.log(array01.map(v => v * 2));
//multiplied with the index
console.log(array01.map((v, i) => v * i));

//-----IMPLEMENTATION-----
Array.prototype.mapImplementation = function (f) {
    let mappedArray = [];
    for (let i = 0; i < this.length; i++) {
        mappedArray[i] = f(this[i], i, this);
    }

    return mappedArray;
};

console.log(array01);
console.log(array01.mapImplementation(v => v * 2));
console.log(array01.mapImplementation((v, i) => v * i));

//----------------------------------------------------------------------------------------------

// Array#reduce
// Signature: [].reduce(callback, initial);
// Callback: callback(item [, index [, arr]])
// Returns: Object
// Behavior: returns a single object, the result of the callback()
// Support: everywhere

var array01 = [1, 2, 3, 4, 5, 6];

//-----EXAMPLES HOW IT WORKS-----
console.log(array01.reduce((a, b) => a + "," + b, 0));
console.log(array01.reduce((a, b) => a + "," + b, 'array: '));
console.log(array01.reduce((a, b) => a + b, 0));
console.log('----------');
console.log(array01.reduceRight((a, b) => a + "," + b, 0));
console.log(array01.reduceRight((a, b) => a + "," + b, 'array: '));
console.log(array01.reduceRight((a, b) => a + b, 0));
console.log('----------');

//-----IMPLEMENTATION-----
Array.prototype.reduceLeftImplementation = function (combine, initial) {
    let value = initial;
    for (let i = 0; i < this.length; i++) {
        value = combine(value, this[i]);
    }

    return value;
};

Array.prototype.reduceRightImplementation = function (combine, initial) {
    let value = initial;
    for (let i = this.length - 1; i >= 0; i -= 1) {
        value = combine(value, this[i]);
    }

    return value;
};


console.log(array01);
console.log(array01.reduceLeftImplementation((a, b) => a + b, 0));
console.log(array01.reduceLeftImplementation((a, b) => a + "," + b, 'array: '));
console.log('----------');
console.log(array01);
console.log(array01.reduceRightImplementation((a, b) => a + b, 0));
console.log(array01.reduceRightImplementation((a, b) => a + "," + b, 'array: '));

//----------------------------------------------------------------------------------------------

// Array#forEach
// Signature: [].forEach(callback);
// Callback: callback(item [, index [, arr]])
// Returns: undefined
// Behavior: iterates the elements and passes each element as argument to callback
// Much like a for-of loop where the callback is the body of the loop
// Support: everywhere

var array01 = [1, 2, 3, 4, 5, 6];

array01.forEach(x => console.log(x));
//same as:
for (let x of array01) {
    console.log(x);
}
//difference is parameters in the callback function (item [, index [, arr]])
array01.forEach(console.log);

//-----IMPLEMENTATION-----
Array.prototype.forEachImplementation = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
};

array01.forEachImplementation(console.log);

//----------------------------------------------------------------------------------------------

// Array#find
// Signature: [].find(callback);
// Callback: callback(item [, index [, arr]])
// Returns: Object or undefined
// Behavior: returns the leftmost element in the array, that meets the criteria in callback()
// If no such element is found, returns undefined
// Support: Almost nowhere, needs a polyfill

var array01 = [1, 2, 3, 4, 5, 6];

//-----EXAMPLES HOW IT WORKS-----
console.log(array01.find(x => x == 3));
console.log(array01.find(x => x > 1));
console.log(array01.find(x => x == 10));

//-----IMPLEMENTATION-----
Array.prototype.findImplementation = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
};

console.log(array01.findImplementation(x => x == 3));
console.log(array01.findImplementation(x => x > 1));
console.log(array01.findImplementation(x => x == 10));

//----------------------------------------------------------------------------------------------

// Array#findIndex
// Signature: [].findIndex(callback);
// Callback: callback(item [, index [, arr]])
// Returns: Number or -1
// Behavior: returns the index of the leftmost element in the array, that meets the criteria in callback
// If no such element is found, returns -1
// Support: Almost nowhere, needs a polyfill

var array01 = [1, 2, 3, 4, 5, 6];

//-----EXAMPLES HOW IT WORKS-----
console.log(array01.findIndex(x => x == 3));
console.log(array01.findIndex(x => x > 1));
console.log(array01.findIndex(x => x == 10));
console.log('----------');
console.log(array01.lastIndexOf(x => x == 3));
console.log(array01.lastIndexOf(x => x > 1));
console.log(array01.lastIndexOf(x => x == 10));

//-----IMPLEMENTATION-----
Array.prototype.findIndexImplementation = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return i;
        }
    }

    return -1;
};

Array.prototype.lastIndexOfImplementation = function (callback) {
    for (let i = this.length - 1; i >= 0; i--) {
        if (callback(this[i], i, this)) {
            return i;
        }
    }

    return -1;
};

console.log(array01.findIndexImplementation(x => x == 3));
console.log(array01.findIndexImplementation(x => x > 1));
console.log(array01.findIndexImplementation(x => x == 10));
console.log('----------');
console.log(array01.lastIndexOfImplementation(x => x == 3));
console.log(array01.lastIndexOfImplementation(x => x > 1));
console.log(array01.lastIndexOfImplementation(x => x == 10));

//----------------------------------------------------------------------------------------------

// Array#sort
// Signature: [].sort(callback);
// Callback: callback(obj1, obj2)
// Returns: Array
// Behavior: sorts the items from the array, based on the callback()
// Support: everywhere

var array01 = [6, 5, 1, 2, 4, 3];

//-----EXAMPLES HOW IT WORKS-----
console.log(array01.sort((a, b) => a - b));
console.log(array01.sort((a, b) => b - a));

//-----IMPLEMENTATION-----
Array.prototype.sortImplementation = function(compare) {
    if(compare == undefined) {
        compare = function(a,b) {
            return a.toString() < b.toString();
        }
    }

    //Sort algorithm
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length ; j++) {
            if(compare(this[i], this[j]) > 0){
                let temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }

    return this;
}

console.log(array01.sortImplementation((a, b) => a - b));
console.log(array01.sortImplementation((a, b) => b - a));

//----------------------------------------------------------------------------------------------

// Array#fill
// Signature: [].fill(callback);
// Callback: callback(value [, from [, to]])
// Returns: Array
// Behavior: fills an array with the given value
// Support: Almost nowhere, needs a polyfill

//-----EXAMPLES HOW IT WORKS-----
var array01 = [6, 5, 1, 2, 4, 3];
console.log(array01.fill(0,2,5));
var array01 = [6, 5, 1, 2, 4, 3];
console.log(array01.fill(0));
var array01 = [6, 5, 1, 2, 4, 3];
console.log(array01.fill(0, 3));
var array01 = [6, 5, 1, 2, 4, 3];
console.log(array01.fill(0, undefined, 3));

//-----IMPLEMENTATION-----
Array.prototype.fillImplementation = function(value, start = 0, end = this.length) {
    for (let i = start; i < end; i++){
        this[i] = value;
    }

    return this;
}

var array01 = [6, 5, 1, 2, 4, 3];
console.log(array01.fillImplementation(0,2,5));
var array01 = [6, 5, 1, 2, 4, 3];
console.log(array01.fillImplementation(0));
var array01 = [6, 5, 1, 2, 4, 3];
console.log(array01.fillImplementation(0, 3));
var array01 = [6, 5, 1, 2, 4, 3];
console.log(array01.fillImplementation(0, undefined, 3));