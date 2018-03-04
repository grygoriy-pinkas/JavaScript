// Imagine Math didn't exist. Create a MyMath object that also provides
// additional methods:
// ° MyMath.rand(min, max, inclusive)—generates a random number
// between min and max, inclusive if inclusive is true (default)
// ° MyMath.min(array)—returns the smallest number in a given array
// ° MyMath.max(array)—returns the largest number in a given array

var MyMath = {
    rand: function(min, max, inclusive) {
        console.log(arguments[2]);
        if (arguments[2] == undefined) {
            inclusive = true;
        } else {
            inclusive = arguments[2]
        }

        var date = new Date().getTime() + '';
        var size = (max + '').length;
        var num = +date.substring(date.length - 3) + min;
        var res;
        if (num >= min && num <= max) {
            res = num;
        } else if (num < min) {
            res = num + min;
        } else if (num > max) {
            res = num % max;
        }
        if (!inclusive && res == min || res == max) {
            res = (max - min) / 2;
        }
        return res;
    },
    min: function(array) {
        var min = array[0];
        array.forEach(function(item, i) {
            if (item < min) {
                min = item;
            }
        });
        return min;
    },
    max: function(array) {
        var max = array[0];
        array.forEach(function(item, i) {
            if (item > max) {
                max = item;
            }
        });
        return max;
    }
}
var arr = [35, 54, 567, 235, 1, 46]
    //console.log(MyMath.rand(50, 100));
    // console.log(MyMath.min([50, 100, 35, 64, 5, 574]));
    // console.log(MyMath.max([50, 100, 35, 64, 5, 574]));