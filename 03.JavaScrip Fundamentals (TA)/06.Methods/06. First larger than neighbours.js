function solve(args) {
    var arr = args[1].split(' ');

    function firstLargerThanNeighbors(arr) {
        var index = 0;
        ////check for the first and the last elemets of the array if the array is with more then one elements
        // if (arr.length > 1) {
        //     if (+arr[0] > +arr[1]) {
        //         count++;
        //     }
        //     if (+arr[arr.length - 1] > +arr[arr.length - 2]) {
        //         count++;
        //     }
        // } else {
        //     count = 1;
        // }
        
        for (var i = 1; i < arr.length - 1; i++) {
            if(+arr[i - 1] < +arr[i] && +arr[i] > +arr[i + 1]){
                index = i;
                break;
            }
        }
        
        return index;
    }

    console.log(firstLargerThanNeighbors(arr));
}
