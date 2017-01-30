// In JavaScript inheritance is achieved by setting the prototype 
// of the derived type to an instance of the super type

function Person(fname, lname) { }
function Student(fname, lname, grade) { }
Student.prototype = new Person();
//Now all instances of type Student are also of 
//type Person and have Person functionality
var student = new Student("Kiro", "Troikata", 7);
console.log(student);



(function () {
    var Shape = (function () {

        function Shape(x, y) {
            this._x = x;
            this._y = y;
        }

        Shape.prototype.move = function (to) {
            this._x = to.x || this._x;
            this._y = to.y || this._y;
        };

        return Shape;
    } ());

    var Rect = (function () {

        function Rect(x, y, width, height) {
            //calls the constructor of shape (the super class)
            //with the instance of this
            Shape.call(this, x, y);
            //initializing the new fields of Rect
            this._width = width;
            this._height = height;
        }

        //this way it is a instance of Shape and inherits all his methods
        Rect.prototype = new Shape();

        Rect.prototype.calcArea = function () {
            return this._width * this._height;
        };


        return Rect;
    } ());



    var rect01 = new Rect(5, 5, 50, 50);
    console.log(rect01);

    var to = {
        x: 10,
        y: 10
    };

    rect01.move(to);
    console.log(rect01);
    console.log(rect01.calcArea());
} ());

//---------------------------------------------------------------

//Objects in JS can have only a single prototype
//Their prototype also has a prototype, etc...
//This is called the prototype chain

//When a property is called on an object:
//1. This object is searched for the property
//2. If the object does not contain such property, its prototype is checked for the property etc.
//3. If a null prototype is reached, the result is undefined

//JavaScript has no direct way of calling its parent methods
//Function constructors actually does not who or what is their parent
//Calling parent methods is done using call and apply

var Shape = (function () {
    function Shape(x, y) {
        //initialize the shape
    }
    Shape.prototype = {
        serialize: function () {
            //serialize the shape      //return the serialized
        }
    };
    return Shape;
} ());

var Rect = (function () {
    function Rect(x, y,
        width, height) {
        //call the parent constructor
        Shape.call(this, x, y);
        //init the Rect
    }
    Rect.prototype = new Shape();
    Rect.prototype.serialize = function () {
        //call the parent method
        Shape.prototype
            .serialize
            .call(this);
        //add Rect specific serialization     
        //return the serialized;
    };
    return Rect;
} ());

//--------------------------------------------------------------

(function () {
    var Shape = (function () {

        function Shape(x, y) {
            this._x = x;
            this._y = y;
        }

        Shape.prototype.move = function (to) {
            this._x = to.x || this._x;
            this._y = to.y || this._y;
        };

        return Shape;
    } ());

    var Rect = (function () {

        function Rect(x, y, width, height) {
            //calls the constructor of shape (the super class)
            //with the instance of this
            Shape.call(this, x, y);
            this._width = width;
            this._height = height;
        }

        //this way it is a instance of Shape and inherits all his methods
        Rect.prototype = new Shape();

        Rect.prototype.calcArea = function () {
            return this._width * this._height;
        };

        return Rect;
    } ());



    var rect = new Rect(5, 5, 50, 50);
    console.log(rect);

    var to = {
        x: 10,
        y: 10
    };

    rect.move(to);
    console.log(rect);
    console.log(rect.calcArea());

    console.log(rect instanceof Rect); //true
    console.log(rect instanceof Shape); //true
} ());

//---------------------------------------------------------------

var Animal = (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }

    Animal.prototype.toString = function () {
        return this.name + ' ' + this.age;
    };

    Animal.prototype.eat = function () {
        return 'Eats...';
    };

    return Animal;
} ());

var Cat = (function (parent) { //parent is a parameter
    function Cat(name, age, sleep) {
        //this = {} - that's how we can imagine this is
        parent.call(this, name, age); //here this = {}
        this.sleep = sleep;
    }

    Cat.prototype = new Animal();
    //or Cat.prototype = parent.prototype;

    Cat.prototype.toString = function () {
        var baseResult = parent.prototype.toString.call(this);
        return baseResult + ' ' + this.sleep;
    };

    return Cat;
} (Animal)); //the iife is called with parameter = Animal

var someCat = new Cat('Johny', 5, true);
console.log(someCat);

//---------------------------------------------------------------

//that is not a good way to do the inheritance
var animal = {
    toString: function () {
        return 'animal';
    },
    saySomething: function () {
        return 'blah'
    }
};

var dog = {
    name: 'pesho',
    saySomething: function () {
        return 'bau';
    }
};

dog.__proto__ = animal;

console.log(dog.toString()); //animal
console.log(dog.saySomething()); //bau
console.log(animal.saySomething()); //blah
//----------------------------------------
//this works in all browsers, the above one works only in chrome and firefox
var animal = {
    toString: function () {
        return 'animal';
    },
    saySomething: function () {
        return 'blah'
    }
};

var dog = Object.create(animal);

//if Object.create() doesnt work:
function createObject(objToCreate) {
    function Constructor() { };
    Constructor.prototype = objToCreate.prototype;
    return new Constructor();
}

dog.name = 'Pesho';
dog.saySomething = function () {
    return 'bau';
};

console.log(dog.toString()); //animal
console.log(dog.saySomething()); //bau
console.log(animal.saySomething()); //blah
//----------------------------------------
var animal = {
    toString: function () {
        return 'animal';
    },
    saySomething: function () {
        return 'blah'
    }
};

var dog = Object.defineProperties(animal, {
    name: {
        value: 'Pesho',
    },
    age: {
        value: 5,
    },
    saySomething: {
        value: function () {
            return 'bau';
        }
    }
});

console.log(dog.toString()); //animal
console.log(dog.saySomething()); //bau
console.log(animal.saySomething()); //bau it is overwritten

//---------------------------------------------------------------

class AnimalES6 {
    constructor(name) {
        this.name = name;
        this._age = 0;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            console.log("We do not support undead animals");
        }

        this._age = value;
    }

    doSomething() {
        console.log("I'm a " + this.name);
    }
}

var lionES6 = new AnimalES6("Lion");
lionES6.doSomething();
lionES6.age = 5;

var legsCountSymbol = Symbol();
class InsectES6 extends AnimalES6 {
    constructor(name) {
        super(name);
        this[legsCountSymbol] = 0;
    }

    get legsCount() {
        return this[legsCountSymbol];
    }

    set legsCount(value) {
        if (value < 0) {
            console.log("We do not support nether or interstellar insects");
        }

        this[legsCountSymbol] = value;
    }

    doSomething() {
        super.doSomething();
        console.log("And I have " + this[legsCountSymbol] + " legs!");
    }
}

var spiderES6 = new InsectES6("Spider");
spiderES6.legsCount = 8;
spiderES6.doSomething();