// Menggunakan Sitch-Case

var tanggal = 21;
var bulan = 1;
var tahun = 1945;
var namaBulan = '';
var valid = true;





switch (bulan) {
    case 1:
        namaBulan = 'Januari';
        break;
    case 2:
        namaBulan = 'Februari';
        break;
    case 3:
        namaBulan = 'Maret';
        break;
    case 4:
        namaBulan = 'April';
        break;
    case 5:
        namaBulan = 'Mei';
        break;
    case 6:
        namaBulan = 'Juni';
        break;
    case 7:
        namaBulan = 'Juli';
        break;
    case 8:
        namaBulan = 'Agustus';
        break;
    case 9:
        namaBulan = 'September';
        break;
    case 10:
        namaBulan = 'Oktober';
        break;
    case 11:
        namaBulan = 'November';
        break;
    case 12:
        namaBulan = 'Desember';
        break;
    default:
        break;
}

if (tanggal > 31 || tanggal < 1) {
    console.log('Masukan tanggal salah');
    valid = false;
}
if (bulan === '') {
    console.log('Masukan bulan salah');
    valid = false;
}
if (tahun > 2200 || tahun < 1900) {
    console.log('Masukan tahun salah');
    valid = false;
}
if (valid) console.log(tanggal + ' ' + namaBulan + ' ' + tahun);