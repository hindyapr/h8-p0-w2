//Looping

//1. Melakukan Looping Menggunakan While

var input = 2;

console.log('LOOPING PERTAMA');

while (input < 21) {
    console.log(input + ' - I love coding');
    input += 2;
}

console.log('LOOPING KEDUA');
input -= 2;
while (input > 1) {
    console.log(input + ' - I love coding');
    input -= 2;
}

console.log('');
console.log('');
console.log('');

//Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA');
for (var i = 1; i <= 20; i++) console.log(i + ' - I love coding');
console.log('LOOPING KEDUA');
for (var i = 20; i >= 1; i--) console.log(i + ' - I love coding');

console.log('');
console.log('');
console.log('');

//Angka Ganjil dan Genap


for (var i = 1; i <= 100; i++) {
    if (i % 2 === 1) console.log('GANJIL');
    else console.log('GENAP');
}

console.log('');
console.log('');

for (var i = 1; i <= 100; i += 2) {
    if (i % 3 === 0) console.log(i + ' KELIPATAN 3');
}

console.log('');
console.log('');

for (var i = 1; i <= 100; i += 5) {
    if (i % 6 === 0) console.log(i + ' KELIPATAN 6');
}

console.log('');
console.log('');

for (var i = 1; i <= 100; i += 9) {
    if (i % 10 === 0) console.log(i + ' KELIPATAN 10');
}