function solve(args){
        String.prototype.removeTag = function () {
        var result = this;

        var startIndex = result.indexOf('<') + '<'.length;
        var endIndex = result.indexOf('>');

        while (startIndex >= 0) {
            var temp = result.substring(startIndex, endIndex);
            var replace = temp.toLowerCase();

            result = result.replace('<' + temp + '>','');

            startIndex = result.indexOf('<', endIndex - '<'.length); //endIndex - '<lowcase>'.length === startIndex - '<lowcase>'.length + temp.length
            if (startIndex !== -1) {
                startIndex += '<'.length;
            }
            endIndex = result.indexOf('>', endIndex - '<'.length);
        }

        return result;
    };

    const input = args;
    for (var i = 0; i < input.length; i++){
        input[i] = input[i].trim().removeTag();
    }

    console.log(input.join(''));
}

var test = [
    '<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
];

solve(test);

