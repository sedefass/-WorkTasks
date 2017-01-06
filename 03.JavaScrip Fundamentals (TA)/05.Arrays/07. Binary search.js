function solve(args){
    let arr = args;

    let searchNumber = +arr[arr.length - 1];
    let leftIndex = 1;
    let rightIndex = arr.length - 2;
    let index = 0;
    let check = false;

    while (!check && leftIndex <= rightIndex){
        let currentIndex = ((leftIndex + rightIndex) / 2) | 0;
        let currentElement = +arr[currentIndex];
        // console.log(`currentIndex = ${currentIndex} value = ${arr[currentIndex]}`);

        if (currentElement === searchNumber){
            index = currentIndex;
            check = true;
        } else if (searchNumber < currentElement){
            rightIndex = currentIndex - 1;
        } else {
            leftIndex = currentIndex + 1;
        }
    }

    console.log(index - 1);
}

var test = ['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32'];

solve(test);