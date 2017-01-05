function solve(args) {
    var thirdNum = ((args[0] / 100) % 10) | 0;
    if (thirdNum === 7) {
        console.log('true');
    } else {
        console.log('false ' + thirdNum);
    }
}
