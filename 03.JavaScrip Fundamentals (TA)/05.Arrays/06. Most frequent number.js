function solve(args){
    let arr = args;

    //sorting the array
    for (let i = 1; i < arr.length - 1; i++){
        let min = arr[i];
        let index = i;
        for (let j = i + 1; j < arr.length; j++){
            if(arr[j] < min){
                min = arr[j];
                index = j;
            }
        }

        if(index !== i){
            let temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }

    let counter = 1;
    let maxCounter = 1;
    let number;

    //finds the most frequent number
    for (let i = 2; i < arr.length; i++) {
        if (+arr[i] === +arr[i - 1]) {
            counter++;
        } else {
            if (counter > maxCounter){
                maxCounter = counter;
                number = +arr[i - 1];
            }
            counter = 1;
        }
    }
    //check for the last element
    if (counter > maxCounter) {
        maxCounter = counter;
        number = +arr[arr.length - 1];
    }

    console.log(`${number} (${maxCounter} times)`);
}


var test = ['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3'];

solve(test);
