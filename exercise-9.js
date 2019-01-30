//Mengenal Penggunaan Function

function shoutOut() {
    return 'Halo Function!';
}

console.log(shoutOut()); // Menampilkan "Halo Function!" di console

console.log('');
console.log('');
console.log('');

function calculateMultiply(number1, number2) {
    return number1 * number2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian); // Menampilkan angka 30

console.log('');
console.log('');
console.log('');


function processSentence(nama, umur, alamat, hobi) {
    return 'Nama saya ' + nama + ', umur saya ' + umur + ' tahun, alamat saya di ' + alamat + ', dan saya punya hobby yaitu ' + hobi + '!';
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"