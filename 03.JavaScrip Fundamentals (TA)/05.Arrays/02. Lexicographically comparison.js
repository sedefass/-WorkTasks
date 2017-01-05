function solve(args){
    const STR1 = args[0];
    const STR2 = args[1];

    if (STR1 > STR2){
        console.log(">");
    } else if (STR1 < STR2) {
        console.log("<");
    } else {
        console.log("=");
    }
}

var test01 = ['hello', 'halo'];
var test02 = ['food', 'food'];

solve(test01);
solve(test02);

console.log("hello" > "halo");
console.log("a" < "b");
console.log("ab" > "aab");