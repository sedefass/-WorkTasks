function solve(args) {
    const ARR = args;

    let counter = 1;
    let maxCounter = 1;

    for (let i = 2; i < ARR.length; i++) {
        if (+ARR[i] === +ARR[i - 1]) {
            counter++;
        } else {
            if (counter > maxCounter){
                maxCounter = counter;
            }
            counter = 1;
        }
    }
    //check for the last element
    if (counter > maxCounter) {
        maxCounter = counter;
    }

    console.log(maxCounter);
}

var test = ['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1'];

solve(test);