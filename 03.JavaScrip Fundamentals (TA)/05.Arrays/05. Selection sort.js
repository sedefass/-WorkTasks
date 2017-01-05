function solve(args){
    let arr = args;

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

    for(let i = 1; i < arr.length; i++) {
        console.log(arr[i]);
    }
}


var test01 = ['6', '3', '4', '1', '5', '2', '6'];
var test02 = ['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20'];

solve(test02);
