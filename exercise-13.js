//Logic Challenge - X dan O

function xo(str) {
    // you can only write your code here!
    var counto = 0;
    var countx = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'x') countx++;
        else if (str[i] === 'o') counto++;
    }

    if (str.length === 0) return false;
    else if (counto === countx) return true;
    else return false;

}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true