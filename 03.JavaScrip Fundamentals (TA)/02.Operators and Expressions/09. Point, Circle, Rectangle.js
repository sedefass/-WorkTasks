function solve(args) {
    var str1;
    var str2;

    var distance = Math.sqrt(Math.pow(parseFloat(args[0] - 1), 2) + Math.pow(parseFloat(args[1] - 1), 2));
    if (distance <= 1.5) {
        str1 = 'inside';
    } else {
        str1 = 'outside';
    }

    if ((args[0] >= -1 && args[0] <= 5) && (args[1] >= -1 && args[1] <= 1)) {
        str2 = 'inside';
    } else {
        str2 = 'outside';
    }

    console.log(str1 + " circle " + str2 + " rectangle");
}
