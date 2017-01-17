function solve(args){
    const text = args[0];
    console.log(text.replace(/\s/g, '\&nbsp;'));
}

var test = ['some stupid text'];

solve(test);