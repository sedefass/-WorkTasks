function solve(args) {
    var result;

    if (args[0] == 0 || args[1] == 0 || args[2] == 0) {
        result = 0;
    } else {
        var minusCount = 0;
        if (args[0] < 0) {
            minusCount += 1;
        }
        if (args[1] < 0) {
            minusCount += 1;
        }
        if (args[2] < 0) {
            minusCount += 1;
        }

        if (minusCount % 2 == 0) {
            result = '+';
        } else {
            result = '-';
        }
    }

    console.log(result);
}

// var args = ['-1', '-0.5', '-5.1'];
