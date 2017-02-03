var Drivers;
(function (Drivers) {
    var BasePerson = (function () {
        function BasePerson(firstName, lastName, age) {
            if (age === void 0) { age = 18; }
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        BasePerson.BodyParts = function () {
            return {
                legs: this.Legs,
                hands: this.Hands
            };
        };
        BasePerson.prototype.greet = function () {
            return 'Hi, I am ' + this.firstName + ' ' + this.lastName;
        };
        return BasePerson;
    }());
    BasePerson.Legs = 2;
    BasePerson.Hands = 2;
    Drivers.BasePerson = BasePerson;
})(Drivers || (Drivers = {}));
