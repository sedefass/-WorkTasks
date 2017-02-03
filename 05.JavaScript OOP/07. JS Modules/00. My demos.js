var globalVar = 5;

function outerFunction() {
    var privateVar = globalVar;

    function innerFunction() {
        var innerVar = privateVar;
        return innerVar;
    }

    return innerFunction();
}

var result = outerFunction();
console.log(result);

//-----------------------

var arr = []
for (var prop in console) {
    if (typeof console[prop] === 'function') {
        arr.push(console[prop]);
    }
}
console.log(arr);

//-----------------------

//module pattern

var controls = (function () {
    'use strict';
    var lastCalculatorId = 0,
        calculatorResult = [];

    //hidden members
    var calculatorAdd = function (value) {
        calculatorResult[this._id] += value;
        return this;
    };
    var calculatorMultiply = function (value) {
        calculatorResult[this._id] *= value;
        return this;
    };
    var calculatorClear = function () {
        calculatorResult[this._id] = 0;
        return this;
    };
    var calculatorShowResult = function () {
        return calculatorResult[this._id];
    };

    //visible members
    return {
        Calculator: function () {
            //this.result = 0;
            this._id = ++lastCalculatorId;
            calculatorResult[this._id] = 0;
            //this way functions will be created only once and then the reference
            //to this functions will be used
            this.add = calculatorAdd;
            this.multiply = calculatorMultiply;
            this.clear = calculatorClear;
            this.showResult = calculatorShowResult;
        }
    };
} ());

var calculator = new controls.Calculator()
    .add(5)
    .add(7)
    .multiply(6)
    .add(6)
    .showResult();

//-----------------------

//revealing module pattern

var controls = (function () {
    'use strict';
    var lastCalculatorId = 0,
        calculatorResult = [];

    //hidden members
    var calculatorAdd = function (value) {
        calculatorResult[this._id] += value;
        return this;
    };
    var calculatorMultiply = function (value) {
        calculatorResult[this._id] *= value;
        return this;
    };
    var calculatorClear = function () {
        calculatorResult[this._id] = 0;
        return this;
    };
    var calculatorShowResult = function () {
        return calculatorResult[this._id];
    };

    //visible members

    var Calculator = (function () {
        function Calculator() {
            //this.result = 0;
            this._id = ++lastCalculatorId;
            calculatorResult[this._id] = 0;
            //this way functions will be created only once and then the reference
            //to this functions will be used
            this.add = calculatorAdd;
            this.multiply = calculatorMultiply;
            this.clear = calculatorClear;
            this.showResult = calculatorShowResult;
        }

        return Calculator;
    } ());

    var Form = (function () {
        function Form(){
            this.calculator = new Calculator();
        }
        return Form;
    } ());

    return {
        Calculator: Calculator
    };
} ());