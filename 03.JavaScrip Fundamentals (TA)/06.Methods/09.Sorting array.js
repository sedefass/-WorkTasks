function solve(args) {
    var arr = args[1].split(' ');

    function selectionSort(arr) {
        var minNum,
        index, i, j;

        for (i = 0; i < arr.length; i++) {
            minNum = +arr[i];
            for (j = i + 1; j < arr.length; j++) {
                if (+arr[j] < minNum) {
                    minNum = +arr[j];
                    index = j;
                }
            }
            if (minNum != +arr[i]) {
                arr[index] = +arr[i];
                arr[i] = minNum;
            }
        }

        return arr;
    }

    function printArr(arr){
        var result = "";

        for (var i = 0; i < arr.length - 1; i++){
            result += arr[i] + " ";
        }

        result += arr[arr.length - 1];

        return result;
    }

    console.log(printArr(selectionSort(arr)));
}


var test01 = ['6', '3', '4', '1', '5', '2', '6'];
var test02 = ['10', '36', '10', '1', '34', '28', '38', '31', '27', '30', '20'];

solve(test02);
