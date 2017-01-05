function solve(args) {
    var num = parseInt(args[0]);

    for (var i = 1; i <= num; i += 1) {
        var tempString = '';

        for (var j = i; j < num + i - 1; j += 1) {
            tempString += j + ' ';
        }
        tempString += num + i - 1;

        console.log(tempString);
    }
}

// var args = ['3'];