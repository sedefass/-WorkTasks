function sum(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('The input is not an array');
    }

    if (arr.length === 0) {
        return null;
    }

    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        if (isNaN(+arr[i])) {
            throw new Error('Some or all of the input array elements can not be cast to number');
        }
        //should it check for boolean values in the array
        //currently they are transformed to 0 or 1
        result += +arr[i];
    }

    return result;
}

console.log(sum([1, 2, 3])); //6
console.log(sum([1])); //1
console.log(sum(['1', '2', '3'])); //6
console.log(sum(['1', '2', false])); //3
console.log(sum([])); //null
console.log(sum()); //Error: The input is not an array
console.log(sum({})); //Error: The input is not an array
console.log(sum([1, 2, undefined])); //Error: Some or all of the input array elements can not be cast to number
console.log(sum([1, 2, 'string'])); //Error: Some or all of the input array elements can not be cast to number