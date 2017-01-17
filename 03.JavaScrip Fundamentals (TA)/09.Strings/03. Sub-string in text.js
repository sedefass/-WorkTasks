function solve(args) {
    function countOccurrences(str, pattern) {
        str = str.toLowerCase();
        pattern = pattern.toLowerCase();
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

    return countOccurrences(text, pattern).length;
}

var test = [
    'IN',
    'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
];

solve(test);


function solve(args) {
    var word = args[0].toLowerCase(),
        text = args[1].toLowerCase(),
        i,
        count = 0,
        index = text.indexOf(word);

    while (index >= 0) {
        count += 1;
        index = text.indexOf(word, index + 1);
    }

    return count;
}
