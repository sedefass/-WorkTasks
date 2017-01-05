function solve(args) {
    var biggest = parseFloat(args[0]);

    if (parseFloat(args[1]) > biggest) {
        biggest = args[1];
    }
    if (parseFloat(args[2]) > biggest) {
        biggest = args[2];
    }

    console.log(biggest);
}

// var args = ['2.3', '2.3', '-3'];
