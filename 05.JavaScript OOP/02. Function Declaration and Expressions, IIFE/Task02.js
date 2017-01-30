//this function can be optimized (right now it finds all prime numbers between 0 and end
//and after that extracts prime numbers in the wanted range)
function findPrimeNumbers(start, end) {
    //checking the arguments
    if (isNaN(+start) || isNaN(+end)) {
        if (start === undefined || end === undefined) {
            throw new Error('One or more of the parameters are undefined');
        } else {
            throw new Error('Input can not be cast to a number');
        }
    }

    //return all prime numbers in range [0,max]
    function getPrimes(max) {
        var sieve = [], i, j, primes = [];
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                // i has not been marked -- it is prime
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primes;
    }

    //so start and end to be int values
    start |= 0;
    end |= 0;
    var result = [],
        primes = getPrimes(end),
        i,
        index,
        length;

    for (i = 0, length = primes.length; i < length; i++) {
        if (start <= primes[i]) {
            index = i;
            break;
        }
    }

    for (i = index, length = primes.length; i < length; i++) {
        result.push(primes[i]);
    }

    return result;
}

console.log(findPrimeNumbers(5, 10)); //returns [5, 7]
console.log(findPrimeNumbers(10, 5)); //returns []
console.log(findPrimeNumbers('5', 10)); //returns [5, 7]
console.log(findPrimeNumbers('5.1', 10.9)); //returns [5, 7]
console.log(findPrimeNumbers(-10, 10)); //returns [2, 3, 5, 7]
console.log(findPrimeNumbers(-10, -10)); //returns []
console.log(findPrimeNumbers(undefined, 10)); //Error: One or more of the parameters are undefined
console.log(findPrimeNumbers('string', 10)); //Error: Input can not be cast to a number
console.log(findPrimeNumbers(false, 10)); //returns [2, 3, 5, 7]

