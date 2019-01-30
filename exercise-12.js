//Logic Challenge - Konversi Menit

function konversiMenit(menit) {
    // you can only write your code here!
    var jam = Math.floor(menit / 60);
    var stringMenit = '';

    if (menit % 60 < 10) stringMenit = '0' + (menit % 60);
    else stringMenit = '' + (menit % 60)

    return jam + ':' + stringMenit;

}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00