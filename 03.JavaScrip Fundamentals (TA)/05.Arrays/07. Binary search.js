function solve(args){
    let arr = args;

    // //sorting the array
    // for (let i = 1; i < arr.length - 2; i++){
    //     let min = arr[i];
    //     let index = i;
    //     for (let j = i + 1; j < arr.length - 1; j++){
    //         if(arr[j] < min){
    //             min = arr[j];
    //             index = j;
    //         }
    //     }

    //     if(index !== i){
    //         let temp = arr[i];
    //         arr[i] = arr[index];
    //         arr[index] = temp;
    //     }
    // }

    //binary search
    let number = arr[arr.length - 1];
    let leftIndex = 1;
    let rightIndex = arr.length - 2;
    let check  =  false;
    let index = -1;

    while (!check && leftIndex <= rightIndex){
        let temp = ((leftIndex + rightIndex) / 2) | 0;
        console.log(`temp = ${temp} value = ${arr[temp]}`);

        if (arr[temp] === number){
            check =  true;
            index = temp;
        } else if (number < arr[temp]){
            rightIndex = temp + 1;
        } else {
            leftIndex = temp - 1;
        }
    }

    console.log(index - 1);
}

var test = ['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32'];

solve(test);