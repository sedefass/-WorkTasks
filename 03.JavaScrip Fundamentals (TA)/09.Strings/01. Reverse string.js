function solve(args) {
    String.prototype.reverse = function () {
        var length = this.length;
        var output = '';

        for (var i = length - 1; i >= 0; i--) {
            output += this[i];
        }

        return output;
    };

    // function reverse(s) {
    //     var o = [];
    //     for (var i = s.length - 1, j = 0; i >= 0; i-- , j++)
    //         o[j] = s[i];
    //     return o.join('');
    // }

    
    // function reverse(s) {
    //     return s.split('').reverse().join('');
    // }

    const inputText = args[0];
    console.log(inputText.reverse());
}

var test = ['sample'];

solve(test);

//---------------------------------------------------------------
//Some testing in here

//works faster that way
String.prototype.reverse1 = function () {
    var length = this.length;
    var output = '';

    for (var i = length - 1; i >= 0; i--) {
        output += this[i];
    }

    return output;
};

//works slower that way
String.prototype.reverse2 = function () {
    var length = this.length;
    var output = [];

    for (var i = length - 1; i >= 0; i--) {
        output.push(this[i]);
    }

    return output.join("");
};

var str = '';
for (var i = 0; i < 10000000; i++) {
    str += 'x';
}

//test 1
var start = new Date();
str.reverse1();
var end = new Date();
console.log(end - start);
//test 2
var start = new Date();
str.reverse2();
var end = new Date();
console.log(end - start);