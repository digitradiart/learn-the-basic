// var angka = prompt('Masukkan angka: ');
var angka = 1;
if(angka == 1) {
    console.log('Anda memasukkan angka 1');
} else if(angka == 2) {
    console.log('Anda memasukkan angka 2');
} else if(angka == 3) {
    console.log('Anda memasukkan angka 3');
} else {
    console.log('Angka yang Anda masukkan salah.')
}

console.log()
console.log('---SWITCH---')
//var angka = prompt('masukkan angka: ')
var angka = 5;
switch(angka) {
    case 1:
        console.log('Anda memasukkan angka 1');
        break;
    case 2:
        console.log('Anda memasukkan angka 2');
        break;
    case 3:
        console.log('Anda memasukkan angka 3');
        break;
    case 4:
        console.log('Anda memasukkan angka 4');
        break;
    case 5:
        console.log('Anda memasukkan angka 5');
        break;
    case 6:
        console.log('Anda memasukkan angka 6');
        break;
    default:
        console.log('Anda memasukkan angka yang salah')
}

console.log()
console.log('---KASUS LAINNYA MENGGUNAKAN SWITCH---')
var item = prompt('Masukkan makanan atau minuman: \n(contoh: nasi, daging, susu, hamburger, softdrink dll)');
// var item = 'hamburger';
switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        console.log('makanan/minuman sehat.')
        break;
    case 'hamburger':
    case 'softdrink':
        console.log('makanan/minuman TIDAK sehat.')
        break;
    default:
        console.log('Anda memasukkan nama makanan/minuman yang salah')
}