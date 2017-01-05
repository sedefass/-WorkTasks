function solve(args){
    const NUM = +args[0];

    let arr = [];

    for(let i = 0; i < NUM; i += 1) {
        arr.push(i * 5);
        console.log(arr[i]);
    }
}

let test = ['5'];

solve(test);