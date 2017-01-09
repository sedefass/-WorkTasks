var people = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'John', lastname: 'Doe', age: 42 },
    { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
    { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
    { firstname: 'Gosho', lastname: 'Gosho', age: 22 },
    { firstname: 'NoAge', lastname: 'Man', age: undefined },
    { firstname: 'NoAge', lastname: 'Gal' }
];

Array.prototype.groupedByAge = function () {
    let outputArr = [];
    for (let i = 0; i < this.length; i++) {
        let currentAge = this[i].age;
        if(outputArr[currentAge]) {
            outputArr[currentAge].push(this[i]);
        } else {
            outputArr[currentAge] = [];
            outputArr[currentAge].push(this[i]);
        }
    }

    return outputArr;
};

var result = people.groupedByAge();
console.log(result);