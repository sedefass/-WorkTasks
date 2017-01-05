function solve(args) {
    var min = Number.MAX_VALUE;
    var max = -1 * Number.MAX_VALUE;
    var sum = 0;
    var avg = 0;

    for (var i = 0; i < args.length; i += 1) {
        var temp = parseFloat(args[i]);

        if (min > temp) {
            min = temp;
        }

        if (max < temp) {
            max = temp;
        }

        sum += temp;
    }

    avg = sum / args.length;

    console.log("min=" + min.toFixed(2));
    console.log("max=" + max.toFixed(2));
    console.log("sum=" + sum.toFixed(2));
    console.log("avg=" + avg.toFixed(2));
}

// var args = ['2', '-1', '4'];