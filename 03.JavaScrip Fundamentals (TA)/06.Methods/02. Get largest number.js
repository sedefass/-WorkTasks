function solve(args) {
    var max = -1 * Number.MAX_VALUE;
    var arr = args[0].split(' ');

    for (var i = 0; i < arr.length; i++) {
        if (+arr[i] > max) {
            max = +arr[i];
        }
    }

    console.log(max);
}

function getMax() {
    let max = -1 * Number.MAX_VALUE;

    for (let i of arguments) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}

console.log(getMax(1, 2, 3, 5, 2, 7));
