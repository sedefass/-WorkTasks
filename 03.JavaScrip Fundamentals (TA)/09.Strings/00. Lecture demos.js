var str = '';
for (var i = 0; i < 10000000; i++) {
    str += 'x';
}

//works faster than
var start = new Date();
var strLength = str.length;
for (var i = 0; i < strLength; i++) {
}
var end = new Date();
console.log(end - start);
//this one
var start = new Date();
for (var i = 0; i < str.length; i++) {
}
var end = new Date();
console.log(end - start);

//----------------------------------------------------------

//for in is not that fast as regular for

//----------------------------------------------------------

//rotation of a string
var str = '0123456789'
//rotation right
for (var i = 0, j = 0; i < 15; i++) {
    console.log(j + ' ' + str[j]);
    j++;
    j %= str.length;
}
//rotation left
for (var i = 0, j = str.length - 1; i < 15; i++) {
    console.log(j + ' ' + str[j]);
    j += str.length - 1;
    j %= str.length;
}

//----------------------------------------------------------
//charAt(index) - Gets a single-character string at location index
var str = 'ASDFGHJKL';
console.log(str[3]);
console.log(str.charAt(3));
console.log('----------------');
console.log(str[3.2]);
console.log(str.charAt(3.2));
console.log('----------------');
console.log(str[3.9]);
console.log(str.charAt(3.9));
console.log('----------------');
console.log(str[-1]);
console.log(str.charAt(-1));
console.log('----------------');

//----------------------------------------------------------

//string.concat(string2) - Returns a new string – the concatenation of the two strings
//str.concat works faster than '+', but browsers interpret '+' on their own and there '+' works faster

// String concatenation is one of the most used operations with strings
//      Yet it is hard to optimize it
//      Each browser makes optimizations of its own
//      Old browsers concatenate very slow with +
//      If you support older browsers, use array.join("") for concatenation
// Works like string builder
//      Slower in modern browsers
//      [].push(srt1, str2, str3, …).join('');

//----------------------------------------------------------

//str.replace - it returns new str, that is different that the initial str
//str.indexOf - doesn't work with regex
//str.lastIndexOf - doesn't work with regex

var str = 'My name is Pesho. Pesho is better. Pesho'
//replaces only the first one
console.log(str.replace('Pesho', 'Gosho'));
//same as
console.log(str.replace(/Pesho/, 'Gosho'));
//replaces all
console.log(str.replace(/Pesho/g, 'Gosho'));

//----------------------------------------------------------

//string.search(regex) - Searches for a substring based on regular expression

//----------------------------------------------------------

// string.indexOf(substring [,position]) 
//     Returns the left-most occurrence of substring in a string, that is after position
//     Position is optional and has default value of 0
//     If string doesn't contain substring, returns -1
// string.lastIndexOf(substring [,position])
//     Returns the right-most occurrence of substring in a string, that is before position
//     Position is optional, default value is string.length
//     If string doesn't contain substring, returns -1

//how many times str contains a word - return all the indexes, not the count

//left to right search
var text = 'Hello, asdf. ,.47654 H h H HHHello';
var pattern = 'H';
var position = 0;

var output = [];

while (true) {
    let match = text.indexOf(pattern, position);

    if (match === -1) {
        break;
    }

    output.push(match);
    position = match + 1;
}

console.log(output);

//right to left search
var text = 'Hello, asdf. ,.47654 H h H HHHello';
var pattern = 'H';
var position = text.length - 1;

var output = [];

while (position > 0) {
    var match = text.lastIndexOf(pattern, position);

    if (match === -1) {
        break;
    }

    output.push(match);
    position = match - 1;
    //console.log('position: ' + position);
}

console.log(output);

//----------------------------------------------------------

// string.split(separator)
//     Splits the string by separator and returns an array of strings, containing the separated parts
//     Separator can be a regular expression

//split by multiple spaces between words
var str = 'Hello     here  are  some words';
console.log(str.split(' ').filter(x => x !== ''));

//----------------------------------------------------------

// string.trim()
//     Removes whitespace from the beginning and end of the string
// str.trimLeft(), str.trimRight()
//     Remove whitespace from the left/right side of the string

//----------------------------------------------------------

// string.substr(start, length)
//     Returns a substring, starting from start and counting length characters
//     length is optional - returns till end if not set
// string.substring(start, end)
//     Returns a substring, starting from start and ending at end
// string.valueOf()
//     Returns the primitive value of the object string

//----------------------------------------------------------

//Escaping example for html document
// <body>
//     <input id="input">
//     <div></div>
//     <script>
//         var el = document.getElementById('input');
//         var div = document.getElementById('div');
//         el.onkeyup = function(e) {
//             if(e.which ===13){
//                 div.innerHTML = el.value
//                     .replace(/&/g, '&amp') //it must be on the first place because it is escaping symbol in html
//                     .replace(/</g, '&lt')
//                     .replace(/>/g, '&gt')
//                     .replace(/"/g, '&quot')
//                     .replace(/'/g, '&#39');
//             }
//         };
//     </script>
// </body>

//----------------------------------------------------------

//Implementation of user trimChars for both ends
String.prototype.trimChars = function (c) {
    let i = 0;
    while (i < this.length && this[i] === c) {
        i++;
    }

    let j = this.length - 1;
    while (j >= 0 && this[j] === c) {
        j--;
    }

    return this.substring(i, j + 1);
};

var str = 'www.neshto.com-www';
console.log(str.trimChars('w'));

//----------------------------------------------------------

//Implementation of padRight and padLeft

String.prototype.padRight = function (count, char = ' ') {
    //char = char || ' ';
    if (char.length > 1) {
        return this.valueOf();
    }

    var str = this.valueOf();
    while (str.length < count) {
        str += char;
    }

    return str;
};

String.prototype.padLeft = function (count, char = ' ') {
    //char = char || ' ';
    if (char.length > 1) {
        return this.valueOf();
    }

    var str = this.valueOf();
    while (str.length < count) {
        str = char + str;
    }

    return str;
};

var str = '111';
console.log(str.padRight(10, '00'));
console.log(str.padRight(1, '00'));
console.log(str.padLeft(10, '00'));
console.log(str.padLeft(1, '00'));