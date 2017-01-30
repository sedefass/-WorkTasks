
var Animal = (function () {
    var age,
        type,
        name;

    /* Constructor.
    */
    function Animal(_name,_age, _type) {
        age = _age;
        type = _type;
        name = _name;
    }

    Animal.prototype.getAge = function() {
        return age;
    };
    Animal.prototype.setAge = function(_age) {
        age = _age;
    };

    Animal.variable = "dsadsadsdsa";

    Animal.prototype.calculateAge = function(actionType, number) {
        switch(actionType) {
            case '+': return age + number;
            
            case '-': return age - number;
            
            default:
            return window.alert('Not allowed action type');
        }
    };
    return Animal;
} ());


var tiger = new Animal('tiger', 12, 'sand tiger');
console.log(tiger.calculateAge('-', 3));

//----------------------------------------------

var a = {
    emptyFn: function() {
        this.b = {
            c: function() {
                console.log(this.b);
            }
        };
        return this;
    }
};

var that = this;
var a = {
    emptyFn: function() {
        var that = this;
        this.b = {
            c: function() {
                console.log(that.b);
            }
        };
        return this;
    }
};

