
// ES6 Classes and Class Constructors

class Horse {
    constructor(name, furColor, age) {
        this._name = name;
        this._furColor = furColor;
        this._age = age;
    }
}

const horse = new Horse('Trendafil', 'brown', 2);
console.log(horse); // { _name: 'Trendafil', _furColor: 'brown', age: 2 }

console.log(typeof Horse); // function
console.log(typeof horse); // object

const horse1 = new Horse('Trendafil', 'brown', 2);
var horse2 = new Horse();

//----------------------

function F() {
    console.log(this);
    this.prop = 'hello';
}

const f = new F();
console.log(f); // { prop: 'hello' }

//----------------------------------------------------------------------------------------

// Class methods and Properties

class Cat {
    constructor(name) {
        this._name = name;
    }

    meow() {
        console.log(this._name + ': meow!');
    }
}

var mariya = new Cat('Mariya');
mariya.meow(); // mariya: meow!

//----------------------

class SelfPrintingCat {
    constructor(name) {
        this._name = name;
    }

    printSelf() {
        console.log(this);
    }
}
const fluff = new SelfPrintingCat('Fluff');
fluff.printSelf(); // { _name: 'Fluff' }

//----------------------

class Person {
    constructor(firstname, lastname) {
        this._firstname = firstname;
        this._lastname = lastname;
    }

    get fullname() {
        return this._firstname + ' ' + this._lastname;
    }

    set firstname(value) {
        this._firstname = value;
    }

    set lastname(value) {
        this._lastname = value;
    }
}

const peter = new Person('peter', 'anderson');
console.log(peter.fullname);
peter.lastname = 'petrov';
console.log(peter.fullname);

//----------------------

class Point2D {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    static get ZERO() {
        return new Point2D(0, 0);
    }

    static getDistance(pointA, pointB) {
        const sqrDistance =
            (pointA._x - pointB._x) * (pointA._x - pointB._x) +
            (pointA._y - pointB._y) * (pointA._y - pointB._y);
        return Math.sqrt(sqrDistance);
    }
}

//----------------------

//In EC6

class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    rotate90() {
        let z = this._y;
        this._y = this._x;
        this._x = -z;
    }

    print() {
        console.log(`(${this._x}, ${this._y})`);
    }

    distanceTo(p) {
        const x = this._x - p._x;
        const y = this._y - p._y;
        return Math.sqrt(x * x + y * y);
    }

    static centerPoint() {
        return new Point(0, 0);
    }

    static distance(p1, p2) {
        return p1.distanceTo(p2);
    }
}

let p = new Point(3, -2);
p.print();
p.rotate90();
p.print();

let enemy = new Point(100, 10);
console.log(Point.distance(p, enemy));
console.log(p.distanceTo(enemy));

//In EC5

var Point = (function () {

    var constructor = function (x, y) {
        this._x = x;
        this._y = y;
    };

    constructor.prototype.rotate90 = function () {
        let z = this._y;
        this._y = this._x;
        this._x = -z;
    };

    constructor.prototype.print = function () {
        console.log(`(${this._x}, ${this._y})`);
    };

    constructor.prototype.distanceTo = function (p) {
        const x = this._x - p._x;
        const y = this._y - p._y;
        return Math.sqrt(x * x + y * y);
    };

    constructor.centerPoint = function () {
        return new Point(0, 0);
    };

    constructor.distance = function (p1, p2) {
        return p1.distanceTo(p2);
    };

    Object.defineProperty(constructor.prototype, 'name', {
        get: function () {
            return this._name;
        },
        set: function (x) {
            if (typeof x === 'string' && x.length === 1) {
                this._name = x;
            }
        }
    });

    return constructor;
} ());

var p = new Point(3, -2);
p.print();
p.rotate90();
p.print();

var enemy = new Point(100, 10);
console.log(Point.distance(p, enemy));
console.log(p.distanceTo(enemy));

p.name = 'X';
console.log(p.name);
p.name = 'Pesho';
console.log(p.name);

//----------------------------------------------------------------------------------------

// Class Inheritance

// super is used to refer to the parent class
// super() calls the parent constructor
// needed in order for this to refer to the correct object
// super.method() calls .method() from the parent class

class Mammal {
    constructor(age) {
        this._age = age;
    }
}

class Person extends Mammal {
    constructor(fname, lname, age) {
        super(age);
        this._fname = fname;
        this._lname = lname;
    }
    get fullname() {
        // getter property of fullname
    }
    set fullname(newfullname) {
        // setter property of fullname
    }
    // more class members…
}

//----------------------------------------------------------------------------------------

// Mixins

(function () {
    var PrintNameMixin = {
        printName: function () {
            console.log(this._name);
        }
    };

    class Person {
        constructor(name) {
            this._name = name;
        }
    }

    Object.keys(PrintNameMixin).forEach(function (prop) {
        console.log(`Attaching ${prop}`);
        Person.prototype[prop] = PrintNameMixin[prop];
    });

    let p = new Person('Zebra');
    p.printName();
} ());

//------------------------

(function () {
    let PrintNameMixin = function (Base) {
        return class extends Base {
            printName() {
                console.log(this._name);
            }
        };
    };

    class Mammal {

    }

    class Person extends PrintNameMixin(Mammal) {
        constructor(name) {
            super();
            this._name = name;
        }
    }

    let p = new Person('Zebra');
    p.printName();

} ());

//------------------------

(function () {
    let PrintNameMixin = function (Base) {
        return class extends Base {
            printName() {
                console.log(this._name);
            }
        };
    };

    let NameValidationMixin = function(Base) {
        return class extends Base {
            _ValidateName(name) {
                if(typeof name !== 'string') {
                    throw 'Name must be a string';
                }
                if(name.length === 0) {
                    throw 'Name must not be empty';
                }
            }
        };
    };

    class Person extends PrintNameMixin(NameValidationMixin(Object)) {
        constructor(name) {
            super();
            this._ValidateName(name);
            this._name = name;
        }
    }

    let p = new Person('Zebra');
    p.printName();
    p = new Person('');
    p.printName();

} ());

//------------------------

