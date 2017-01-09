function solve(args){
    var arr = args[1].split(' ');
    var num = +args[2];

    function countRepeating (arr, num) {
        var count = 0;

        for (var i = 0; i < arr.length; i++){
            if (+arr[i] === num) {
                count++;
            }
        }

        return count;
    }

    console.log(countRepeating(arr, num));
}

var arr = ["8", [28, 6, 21, 6, -7856, 73, 73, -56], 72];
solve(arr);