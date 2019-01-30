//Looping

//1. Menyusun Barisan Bintang

var rows = 5;
var tempKotak = '';
var tempSegitiga = '';

for (var i = 0; i < rows; i++) console.log('*');

console.log('');
console.log('');
console.log('');

//2. Menyusun Barisan Bintang Dengan Nested Looping

for (var i = 0; i < rows; i++) {
    tempKotak = '';
    for (var j = 0; j < rows; j++) tempKotak = tempKotak + '*';
    console.log(tempKotak)
}

console.log('');
console.log('');
console.log('');

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

for (var i = 0; i < rows; i++) {
    tempSegitiga = '';
    for (var j = 0; j < i + 1; j++) tempSegitiga = tempSegitiga + '*';
    console.log(tempSegitiga);
}