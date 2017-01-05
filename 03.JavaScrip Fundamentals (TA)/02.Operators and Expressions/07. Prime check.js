function solve(args) {
    var isPrime;
    var num = parseInt(args[0]);
    if (num < 1) {
        isPrime = false;
    } else {
        isPrime = true;
    }

    for (let i = 2; i < Math.sqrt(num); i += 1) {
        if ((num % i) === 0) {
            isPrime = false;
            break;
        }
    }

    console.log(isPrime);
}

