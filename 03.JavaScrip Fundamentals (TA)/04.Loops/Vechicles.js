function solve(args) {
    const S = +args[0];

    let result = [];

    for (let cars = 0; cars * 4 <= S; cars += 1)
        for (let trucks = 0; trucks * 10 + cars * 4 <= S; trucks += 1)
            for (let trikes = 0; trikes * 3 + trucks * 10 + cars * 4 <= S; trikes += 1)
                if (cars * 4 + trucks * 10 + trikes * 3 === S) {
                    result.push(`cars: ${cars}, trucks: ${trucks}, trikes: ${trikes}`);
                }
                
    console.log(result);
}

const test1 = ['7'],
    test2 = ['10'],
    test3 = ['40'];

solve(test1);
solve(test2);
solve(test3);
