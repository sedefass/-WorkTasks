function solve(args) {
    function createLine(x1, y1, x2, y2) {
        var sideLength = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

        return {
            // x1, x2, y1, y2, sideLength
            x1: x1,
            x2: x2,
            y1: y1,
            y2: y2,
            sideLength: sideLength
        };
    }

    var inputArr = args;
    var triangle = [];

    for (var i = 0; i < inputArr.length; i += 4) {
        triangle.push(
            createLine(+inputArr[i], +inputArr[i + 1], +inputArr[i + 2], +inputArr[i + 3]));
    }

    if (triangle.length === 3) {
        console.log(triangle[0].sideLength.toFixed(2));
        console.log(triangle[1].sideLength.toFixed(2));
        console.log(triangle[2].sideLength.toFixed(2));

        if (triangle[0].sideLength !== 0 && triangle[1].sideLength && triangle[2].sideLength &&
            ((triangle[0].sideLength + triangle[1].sideLength) > triangle[2].sideLength) &&
            ((triangle[0].sideLength + triangle[1].sideLength) > triangle[2].sideLength) &&
            ((triangle[0].sideLength + triangle[1].sideLength) > triangle[2].sideLength)) {
            console.log('Triangle can be built');
        } else {
            console.log('Triangle can not be built');
        }
    } else {
        console.log('Triangle can not be built');
        // console.log('Number of sides of this triangle is not equal to 3');
    }
}


var test01 = [
    '5', '6', '7', '8',
    '1', '2', '3', '4',
    '9', '10', '11', '12'
];

var test02 = [
    '7', '7', '2', '2',
    '5', '6', '2', '2',
    '95', '-14.5', '0', '-0.123'
];

solve(test02);