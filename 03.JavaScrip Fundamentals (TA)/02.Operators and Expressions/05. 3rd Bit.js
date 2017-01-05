function solve(args) {
    var mask = 1;
    mask <<= 3;
    console.log((args[0] & mask) >> 3);
}
