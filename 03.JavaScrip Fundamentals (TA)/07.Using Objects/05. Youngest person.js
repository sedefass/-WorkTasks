function solve(args) {

    function inputToPersonArray(inputArr) {
        var outputArr = [];
        var inputArrLength = inputArr.length;

        function createPerson(firstName, secondName, age) {
            return {
                // firstname, secondName, age
                firstName: firstName,
                secondName: secondName,
                age: age
            };
        }

        for (var i = 0; i < inputArrLength; i += 3) {
            outputArr.push(createPerson(inputArr[i], inputArr[i + 1], +inputArr[i + 2]));
        }

        return outputArr;
    }

    function printYoungest(inputArr) {
        var indexOfYoungerPerson = 0;
        var minAge = inputArr[0].age;
        var inputArrLength = inputArr.length;

        for (var i = 1; i < inputArrLength; i++) {
            if (inputArr[i].age <= minAge) {
                indexOfYoungerPerson = i;
            }
        }

        console.log(inputArr[indexOfYoungerPerson].firstName + " " + inputArr[indexOfYoungerPerson].secondName);
    }

    var arrOfPeople = inputToPersonArray(args);
    //console.log(arrOfPeople);
    printYoungest(arrOfPeople);
}

var args = [
    'Penka', 'Hristova', '61',
    'System', 'Failiure', '88',
    'Bat', 'Man', '16',
    'Malko', 'Kote', '72'
];

solve(args);

//----------------------------------------------------------------------------------

function createPerson(firstName, secondName, age) {
    return {
        // firstname, secondName, age
        firstName: firstName,
        secondName: secondName,
        age: age
    };
}

function inputToPersonArray(inputArr) {
    var outputArr = [];
    var inputArrLength = inputArr.length;
    for (var i = 0; i < inputArrLength; i += 3) {
        outputArr.push(createPerson(inputArr[i], inputArr[i + 1], +inputArr[i + 2]));
    }

    return outputArr;
}

var people = [
    'Penka', 'Hristova', '61',
    'System', 'Failiure', '88',
    'Bat', 'Man', '16',
    'Malko', 'Kote', '72'
]

var output = inputToPersonArray(people);

//prints the created array of people
console.log(output);
//sorts the array of people by age in increasing order
output.sort((a, b) => a.age - b.age)
//prints the sorted array of people
console.log(output);
//prints the youngest person name ()
console.log(output[0].firstName + " " + output[0].secondName);