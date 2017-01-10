function solve(args) {
    function countOccurrences(str, pattern) {
        var position = 0;
        var output = [];

        while (true) {
            let match = text.indexOf(pattern, position);

            if (match === -1) {
                break;
            }

            output.push(match);
            position = match + 1;
        }

        return output;
    }

    var pattern = args[0],
        text = args[1];

    console.log(countOccurrences(text, pattern).length);
}

var test = [
    'in',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
];

solve(test);
