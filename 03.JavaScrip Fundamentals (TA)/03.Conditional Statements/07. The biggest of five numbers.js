function solve(args) {
    var biggest;

    if (parseFloat(args[0]) >= parseFloat(args[1]) && parseFloat(args[0]) >= parseFloat(args[2]) && parseFloat(args[0]) >= parseFloat(args[3]) && parseFloat(args[0]) >= parseFloat(args[4])) {
        biggest = args[0];
    } else if (parseFloat(args[1]) >= parseFloat(args[2]) && parseFloat(args[1]) >= parseFloat(args[3]) && parseFloat(args[1]) >= parseFloat(args[4])) {
        biggest = args[1];
    } else if (parseFloat(args[2]) >= parseFloat(args[3]) && parseFloat(args[2]) >= parseFloat(args[4])) {
        biggest = args[2];
    } else if (parseFloat(args[3]) >= parseFloat(args[4])) {
        biggest = args[3];
    } else {
        biggest = args[4];
    }

    console.log(biggest);
}

// var args = ['-2', '-22', '1', '0', '0'];