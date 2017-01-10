function solve(args) {
    String.prototype.format = function (options) {
        //options are objects
        var option,
            regex,
            formatted = this;
        for (option in options) {
            regex = new RegExp('#{' + option + '}', 'g');
            formatted = formatted.replace(regex, options[option]);
        }

        return formatted;
    };

    console.log(args[1].format(JSON.parse(args[0])));//fortmat the JSON string into JS Object
}

var test01 = [
    '{ "name": "John" }',
    "Hello, there! Are you #{name}?"
];

var test02 = [
    '{ "name": "John", "age": 13 }', // options as JSON
    'My name is #{name} and I am #{age}-years-old' // template
];

solve(test01);
solve(test02);



//-----Testing formating function-----

String.prototype.format = function (options) {
    var option,
        regex,
        formatted = this;
    for (option in options) {
        regex = new RegExp('#{' + option + '}', 'g');
        formatted = formatted.replace(regex, options[option]);
    }

    console.log(options[option]);
    console.log(typeof options[option]);

    return formatted;
};


console.log('Hello, there! Are you #{name}?'.format({ name: 'John' }));
console.log('My name is #{name} and I am #{age}-years-old'.format({ name: 'John', age: 13 }));



//-----Testing JSON.parse-----

var jsonRes = '{ "students" : [' +
    '{ "firstName":"Michel" , "lastName":"John" ,"age":18},' +
    '{ "firstName":"Richard" , "lastName":"Joe","age":20 },' +
    '{ "firstName":"James" , "lastName":"Henry","age":15 } ]}';

var studentObject = JSON.parse(jsonRes);
console.log(studentObject);