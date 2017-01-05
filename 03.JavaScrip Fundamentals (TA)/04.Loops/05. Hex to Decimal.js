function solve(args) {
    var num = args[0];
    var power = 0;
    var result = 0;

    for (var i = num.length - 1; i >= 0; i -= 1) {
        var temp;

        switch (num[i]) {
            case '1':
                temp = 1; break;
            case '2':
                temp = 2; break;
            case '3':
                temp = 3; break;
            case '4':
                temp = 4; break;
            case '5':
                temp = 5; break;
            case '6':
                temp = 6; break;
            case '7':
                temp = 7; break;
            case '8':
                temp = 8; break;
            case '9':
                temp = 9; break;
            case 'a':
            case 'A':
                temp = 10; break;
            case 'b':
            case 'B':
                temp = 11; break;
            case 'c':
            case 'C':
                temp = 12; break;
            case 'd':
            case 'D':
                temp = 13; break;
            case 'e':
            case 'E':
                temp = 14; break;
            case 'f':
            case 'F':
                temp = 15; break;
            default:
                temp = 0; break;
        }

        result += temp * Math.pow(16, power);
        power += 1;
    }

    console.log(result);
}

// var args = ['FE'];

// var num = args[0];
// var power = 0;
// var result = 0;

// for (var i = num.length - 1; i >= 0; i -= 1) {
//     result += switchFunction(num[i]) * Math.pow(16, power);
//     power += 1;
// }

// console.log(result);

// function switchFunction(hex) {
//     switch (hex) {
//         case '1':
//             return 1;
//         case '2':
//             return 2;
//         case '3':
//             return 3;
//         case '4':
//             return 4;
//         case '5':
//             return 5;
//         case '6':
//             return 6;
//         case '7':
//             return 7;
//         case '8':
//             return 8;
//         case '9':
//             return 9;
//         case 'a':
//         case 'A':
//             return 10;
//         case 'b':
//         case 'B':
//             return 11;
//         case 'c':
//         case 'C':
//             return 12;
//         case 'd':
//         case 'D':
//             return 13;
//         case 'e':
//         case 'E':
//             return 14;
//         case 'f':
//         case 'F':
//             return 15;
//         default:
//             return 0;
//     }
// }
