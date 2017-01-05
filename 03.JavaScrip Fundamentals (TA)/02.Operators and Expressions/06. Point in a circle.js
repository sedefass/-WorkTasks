function solve(args) {
    var distance = Math.sqrt(Math.pow(parseFloat(args[0]), 2) + Math.pow(parseFloat(args[1]), 2));
    if (distance <= 2) {
        console.log('yes ' + distance.toFixed(2));
    } else {
        console.log('no ' + distance.toFixed(2));
    }
}