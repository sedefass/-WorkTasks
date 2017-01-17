function solve(args) {
    function checkBrackets(str) {
        var length = str.length;
        var stack = [];

        for (var i = 0; i < length; i++) {
            if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
                stack.push(str[i]);
            } else if (str[i] === ')') {
                if (stack.pop() !== '(') {
                    return false;
                }
            } else if (str[i] === ']') {
                if (stack.pop() !== '[') {
                    return false;
                }
            } else if (str[i] === '}') {
                if (stack.pop() !== '{') {
                    return false;
                }
            }
        }
        if (stack.length !== 0){
            return false;
        }

        return true;
    }

    const input = args[0];
    if (checkBrackets(input)) {
        console.log('Correct');
    } else {
        console.log('Incorrect');
    }
}

var test01 = [ '((a+b)/5-d)' ];
var test02 = [ ')(a+b))' ];

solve(test01);
solve(test02);