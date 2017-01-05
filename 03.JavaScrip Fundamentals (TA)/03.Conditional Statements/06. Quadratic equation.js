function solve(args) {
    var a = parseFloat(args[0]);
    var b = parseFloat(args[1]);
    var c = parseFloat(args[2]);

    var x1;
    var x2;

    var discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant === 0) {
        x1 = x2 = -b / (2 * a);
        console.log("x1=x2=" + x1.toFixed(2));
    } else if (discriminant < 0) {
        console.log("no real roots");
    } else {
        x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
        console.log("x1=" + x1.toFixed(2) + "; x2=" + x2.toFixed(2));
    }
}

// var args = ['-1', '3', '0'];
