function solve(args) {
    var first;
    var second;
    var third;

    if ((parseFloat(args[0]) >= parseFloat(args[1])) && (parseFloat(args[0]) >= parseFloat(args[2]))) {
        first = args[0];
        if (parseFloat(args[1]) >= parseFloat(args[2])) {
            second = args[1];
            third = args[2];
        } else {
            second = args[2];
            third = args[1];
        }
    } else if (parseFloat(args[1]) >= parseFloat(args[2])) {
        first = args[1];
        if (parseFloat(args[0]) >= parseFloat(args[2])) {
            second = args[0];
            third = args[2];
        } else {
            second = args[2];
            third = args[0];
        }
    } else {
        first = args[2];
        if (parseFloat(args[0]) >= parseFloat(args[1])) {
            second = args[0];
            third = args[1];
        } else {
            second = args[1];
            third = args[0];
        }
    }

    console.log(first + " " + second + " " + third);
}

// var args = ['-1.1', '-0.5', '-0.1'];
