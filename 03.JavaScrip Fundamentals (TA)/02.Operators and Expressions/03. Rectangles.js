function solve(args) {
    var area = args[0] * args[1];
    // var perimeter = 2*args[0] + 2*args[1];
    var perimeter = 2*(parseFloat(args[0]) +  parseFloat(args[1]))

    console.log(area.toFixed(2) + " " + perimeter.toFixed(2));
}
