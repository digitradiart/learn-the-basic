var nomorAngkot = 1;
var jumlahAngkot = 10;
var angkotBeroperasi = 5;
while(nomorAngkot <= angkotBeroperasi) {
    console.log('Angkot nomor ' + nomorAngkot + ' beroperasi dengan baik')
    nomorAngkot++
}
for(nomorAngkot = angkotBeroperasi+1 ; nomorAngkot <= 10; nomorAngkot++) {
    console.log('Angkot nomor ' + nomorAngkot + ' tidak beroperasi')
}