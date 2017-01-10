function solve(args) {
    String.prototype.bind = function (parameters) {
        var regexContent,
            regexHref,
            regexClass,
            prop;
        output = this;

        console.log(output.valueOf());

        for (prop in parameters) {
            regexContent = new RegExp('(<.*?data-bind-content="' + prop + '".*?>)(.*?)(<\\s*/.*?>)', 'g');
            regexHref = new RegExp('(<.*?data-bind-href="' + prop + '".*?)>', 'g');
            regexClass = new RegExp('(<.*?data-bind-class="(' + prop + ')".*?)>', 'g');

            output = output.replace(regexContent, function (element, openingTag, content, closingTag) {
                return openingTag + parameters[prop] + closingTag;
            });
            console.log(output);

            output = output.replace(regexClass, function (tag, contentBeforeClosing) {
                return contentBeforeClosing + ' class="' + parameters[prop] + '">';
            });
            console.log(output);

            output = output.replace(regexHref, function (tag, contentBeforeClosing) {
                return contentBeforeClosing + ' href="' + parameters[prop] + '">';
            });
            console.log(output);
        }

        return output;
    };

    console.log(args[1].bind(JSON.parse(args[0])));
}

var test01 = [
    '{ "name": "Steven" }',
    '<div data-bind-content="name"></div>'
];

var test02 = [
    '{ "name": "Elena", "link": "http://telerikacademy.com" }',
    '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>'
];

//solve(test01);
solve(test02);


String.prototype.bind = function (output, parameters) {
    var regexContent,
        regexHref,
        regexClass,
        prop;
    output = this;

    for (prop in parameters) {
        regexContent = new RegExp('(<.*?data-bind-content="' + prop + '".*?>)(.*?)(<\\s*/.*?>)', 'g');
        regexHref = new RegExp('(<.*?data-bind-href="' + prop + '".*?)>', 'g');
        regexClass = new RegExp('(<.*?data-bind-class="(' + prop + ')".*?)>', 'g');

        output = output.replace(regexContent, function (element, openingTag, content, closingTag) {
            return openingTag + parameters[prop] + closingTag;
        });

        output = output.replace(regexClass, function (tag, contentBeforeClosing) {
            return contentBeforeClosing + ' class="' + parameters[prop] + '">';
        });

        output = output.replace(regexHref, function (tag, contentBeforeClosing) {
            return contentBeforeClosing + ' href="' + parameters[prop] + '">';
        });
    }

    return output;
};

console.log('<div data-bind-content="name"></div>'.bind('', { name: 'Steven' }));
console.log('<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></div>'.bind('', { name: 'Elena', link: 'http://telerikacademy.com' }));


console.log('<div data-bind-content="name">Steven</div>' === '<div data-bind-content="name">Steven</div>');
console.log('<a data-bind-content="name" data-bind-href="link" data-bind-class="name" class="Elena" href="http://telerikacademy.com">Elena</а>'
    === '<a data-bind-content="name" data-bind-href="link" data-bind-class="name" href="http://telerikacademy.com" class="Elena">Elena</а>');

<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>
<a data-bind-content="name" data-bind-href="link" data-bind-class="name">Elena</а>
<a data-bind-content="name" data-bind-href="link" data-bind-class="name" class="Elena">Elena</а>
<a data-bind-content="name" data-bind-href="link" data-bind-class="name" class="Elena">Elena</а>
<a data-bind-content="name" data-bind-href="link" data-bind-class="name" class="Elena">Elena</а>
<a data-bind-content="name" data-bind-href="link" data-bind-class="name" class="Elena">Elena</а>
<a data-bind-content="name" data-bind-href="link" data-bind-class="name" class="Elena" href="http://telerikacademy.com">Elena</а>
<a data-bind-content="name" data-bind-href="link" data-bind-class="name" class="Elena" href="http://telerikacademy.com">Elena</а>