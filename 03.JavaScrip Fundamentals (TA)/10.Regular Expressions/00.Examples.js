// The name string contains multiple spaces and tabs,
// and may have multiple spaces between first and last names.
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";

var output = ["---------- Original String\n", names + "\n"];

// Prepare two regular expression patterns and array storage.
// Split the string into array elements.

// pattern: possible white space then semicolon then possible white space
var pattern = /\s*;\s*/;

// Break the string into pieces separated by the pattern above and
// store the pieces in an array called nameList
var nameList = names.split(pattern);

// new pattern: one or more characters then spaces then characters.
// Use parentheses to "memorize" portions of the pattern.
// The memorized portions are referred to later.
pattern = /(\w+)\s+(\w+)/;

// New array for holding names being processed.
var bySurnameList = [];

// Display the name array and populate the new array
// with comma-separated names, last first.
//
// The replace method removes anything matching the pattern
// and replaces it with the memorized string—second memorized portion
// followed by comma space followed by first memorized portion.
//
// The variables $1 and $2 refer to the portions
// memorized while matching the pattern.

output.push("---------- After Split by Regular Expression");

var i, len;
for (i = 0, len = nameList.length; i < len; i++){
  output.push(nameList[i]);
  bySurnameList[i] = nameList[i].replace(pattern, "$2, $1");
}

// Display the new array.
output.push("---------- Names Reversed");
for (i = 0, len = bySurnameList.length; i < len; i++){
  output.push(bySurnameList[i]);
}

// Sort by last name, then display the sorted array.
bySurnameList.sort();
output.push("---------- Sorted");
for (i = 0, len = bySurnameList.length; i < len; i++){
  output.push(bySurnameList[i]);
}

output.push("---------- End");

console.log(output.join("\n"));

//------------------------------------------------------------------------------------------------

var academyRegex = /telerik\s(software\s|algo\s|kids\s)?academy/gi;

var text = 'George is studying JavaScript at Telerik Academy ',
    text = 'while Jimmy goes to Telerik Kids Academy.';
// true
var isMatch = text.test(academyRegex);

// will contain array of matches substrings or null
var matches = text.match(academyRegex);

// get matches and matched groups one by one
var currentMatch;
while(currentMatch === academyRegex.exec(text)) {
    console.log(currentMatch);
}

//------------------------------------------------------------------------------------------------

// Replace all whitespaces, tabs and newlines with a single space
var text = 'text    with    lots of       spaces\n' +
           '      and lots of tabulations    ';
console.log(text.replace(/\s\s+/g, ' '));

//------------------------------------------------------------------------------------------------

// Split a JavaScript expression to get it's operands

var expression = '4+5*count-initialCount+1';
var operands = expression.split(/\+|\*|-/);
console.log(operands);