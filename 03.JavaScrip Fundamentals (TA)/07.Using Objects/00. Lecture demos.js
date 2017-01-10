//Defining an object
let catName = 'Richie';

let cat = {
    color: 'ginger',
    name: catName,
    age: 3,
    mew: function () {
        console.log('mew');
    }
};

catName = 'Changed';
console.log(catName, cat.name); //demonstrating the reference type of objects
//------------------------------------------------------------------------------------------------------------------------------
function makeCat(name, color, age) {
    function mew() {
        console.log('mew');
    }

    return {
        name, color, age, mew
        ////above is equal to:
        // name: name,
        // color: color,
        // age: age,
        // mew: mew
    };
}

let someCat = makeCat('John', 'transparent', '33');
console.log(someCat);

//Function that defines objects


//Dictionary example
const text = "Ние сме на лекция по програмиране и пием бира Много обичаме бира по време на програмиране".split(' ');

let dictionary = {};

for (let word of text) {
    if (!dictionary[word]) {     //if there is no such word in dictionary dictionary[word] = undefined, which is false-like
        dictionary[word] = 1;
    } else {
        dictionary[word]++;
    }
}

console.log(dictionary);
//------------------------------------------------------------------------------------------------------------------------------