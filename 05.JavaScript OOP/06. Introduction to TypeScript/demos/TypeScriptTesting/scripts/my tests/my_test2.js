var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SomeVehicle = (function () {
    function SomeVehicle() {
    }
    return SomeVehicle;
}());
var SomePerson = (function () {
    function SomePerson(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.id = SomePerson.idNum.toString();
        SomePerson.idNum++;
    }
    SomePerson.prototype.greet = function () {
        return this.firstName + ' ' + this.lastName + ' - ' + this.age + ' years old, ID: ' + this.id;
    };
    return SomePerson;
}());
SomePerson.idNum = 1;
var SomeDriver = (function (_super) {
    __extends(SomeDriver, _super);
    function SomeDriver(firstName, lastName, age) {
        return _super.call(this, firstName, lastName, age) || this;
    }
    return SomeDriver;
}(SomePerson));
var somePerson = new SomePerson('John', 'Page', 18);
var someDriver = new SomeDriver('Dgohn', 'Macc', 21);
console.log(somePerson.greet());
console.log(someDriver.greet());
