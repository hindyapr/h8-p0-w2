// Menggunakan Switch-Case

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

if (bulan === 1 || bulan === 3 || bulan === 5 || bulan === 7 || bulan === 8 || bulan === 10 || bulan === 12) {
    if (tanggal > 31 || tanggal < 1) {
        console.log('Masukan tanggal salah');
        valid = false;
    }
} else if (bulan === 2) {
    if (tahun % 4 === 0 && tahun % 100 !== 0) {
        if (tanggal > 29 || tanggal < 1) {
            console.log('Masukan tanggal salah');
            valid = false;
        } else if (tahun % 400 === 0) {
            if (tanggal > 29 || tanggal < 1) {
                console.log('Masukan tanggal salah');
                valid = false;
            } else {
                if (tanggal > 28 || tanggal < 1) {
                    console.log('Masukan tanggal salah');
                    valid = false;
                }
            }
        }
    }
} else if (bulan === 4 || bulan === 6 || bulan === 9 || bulan === 11) {
    if (tanggal > 30 || tanggal < 1) {
        console.log('Masukan tanggal salah');
        valid = false;
    }
} else {
    console.log('Masukan bulan salah');
    valid = false;
}


if (tahun > 2200 || tahun < 1900) {
    console.log('Masukan tahun salah');
    valid = false;
}
if (valid) console.log(tanggal + ' ' + namaBulan + ' ' + tahun);