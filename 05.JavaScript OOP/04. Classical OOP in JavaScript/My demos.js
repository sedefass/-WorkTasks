function Person(name) {
    this.name = name;
    this.sayName = function () {
        console.log(this.name);
    };
}

var p1 = new Person('Petar');
var p2 = new Person('John');
console.log(p1.name);
p1.name = 'Stefan';
console.log(p1.name);
p1.sayName();
p2.sayName();

//------------------------------------------------------------

//The prototype of every object is the empty object
var parent = {
    x: 5
};
var child = {
    x: 6
};

console.log(parent.__proto__);
console.log(child.__proto__);
console.log(child.__proto__.__proto__);//the prototype of {} (Object) is null

//changing the prototype
child.__proto__ = parent;

console.log(parent.__proto__);
console.log(child.__proto__);

console.log(child.x);

console.log({}.__proto__); //{}
console.log({}.__proto__.__proto__); //null

//------------------------------------------------------------
//------------------------------------------------------------

function Rect(x, y, width, height) {
    var width = width; //this field is private
    var height = height; //this field is private
    this.x = x;
    this.y = y;

    this.calcArea = function () {
        return width * height;
    };
    this.vector = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
}

//this сочи към създадения обект
//ако е без new this сочи към window
function solve() {
    console.log(this);
}

solve();
var solver = new solve();//now it is empty object
//-----------------------------------
var rect1 = new Rect(5, 15, 67, 76);
console.log(rect1.x);
console.log(rect1.calcArea());
console.log(rect1.vector().toFixed(2));
var rect2 = new Rect(0, 0, 67, 76);
console.log(rect2.x);

//can not be inherited this way!!!
function Rect(x, y, width, height) {
    var result = {
        x: x,
        y: y
    };
    return result;
}

var rect1 = new Rect(5, 15, 67, 76);
console.log(rect1.x);
var rect2 = new Rect(0, 0, 67, 76);
console.log(rect2.x);
//--------------------

//------------------------------------------------------------

function Rect(x, y, width, height) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;

    this.calcArea = function () {
        return width * height;
    };
    this.vector = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
}

Rect.prototype.calcArea = function () {
    return this.width * this.height;
};

Rect.prototype.vector = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

var realRect = new Rect(5, 15, 67, 76);
var badRect = Rect(5, 15, 67, 76);

console.log(realRect.calcArea());
console.log(badRect.calcArea()); //prototype of badRect is not Rect
//---------------------
//ckecks if the function is not used as constructor:
//arguments.callee - the function we are in it
function Person(name, age) {
    if (!(this instanceof arguments.callee)) {
        return new Person(name, age);
    }
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function () {
    return (this.name + ': ' + this.age);
};

var person1 = new Person('John', 18);
var person2 = Person('John', 18);

console.log(person1.introduce());
console.log(person2.introduce());

//------------------------------------------------------------

//we put out function constructors into modules so they are not in the global scope
var Shape = (function () {
    //this filed is unaccessible from the upper scope (in this case the global scope)
    var shapeColors = {
        Red: 'Red',
        Blue: 'Blue',
        Green: 'Green'
    };

    function Shape(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    Shape.prototype = {
        calcArea: function () {
            return this.width * this.height;
        },
        calcPerimeter: function () {
            return 2 * (this.width + this.height);
        }
    };

    return Shape;
} ());

var shape1 = new Shape(0, 0, 50, 50);
console.log(shape1.calcArea());
console.log(shape1.shapeColors[0]);//this property is hidden

//------------------------------------------------------------

function Rect(x, y, width, height) {
    this._x = x;
    this._y = y;

    //this must be after the initialization of the needed parameters, otherwise they are undefined
    if (!validatePosition.call(this)) {
        throw new Error('Invalid Rect position');
    }

    this.width = width;
    this.height = height;

    function validatePosition() {
        console.log(this._x);
        if (this._x === this._y) {
            return false;
        }
        return true;
    }
}

var rect1 = new Rect(5, 5, 50, 50);

//------------------------------------------------------------

var car = (function () {
    var engine = {
        start: function () {
            console.log('Engine started');
        }
    };

    function startCar() {
        engine.start();
    }

    return {
        start: startCar
    };
} ());

car.start(); //works
console.log(car); //object that has one property: function start: startCar()
console.log(car.engine); //undefined

//------------------------------------------------------------
var arr = [];

for (var i = 0; i < 10; i++) {
    arr[i] = function() {
        console.log(i);
    };
}

console.log(arr);

for (var i = 10; i < 20; i++) {
    var currentFunc = arr[i-10];
    currentFunc();
}