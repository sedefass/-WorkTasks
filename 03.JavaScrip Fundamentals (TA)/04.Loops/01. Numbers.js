function solve(args) {
    var num = parseInt(args[0]);
    var result = '';

    for (var i = 1; i < num; i += 1) {
        result += (i + ' ');
    }
    result += num;

    console.log(result);
}

// var args = ['5'];