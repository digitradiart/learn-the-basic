// 01 Alert
alert('hello world!');

// 02 Prompt
prompt('masukkan nama Anda: ') 

// 03 Confirm
confirm('Kamu yakin? ') //OK atau Cancel

// contoh
alert('Selamat datang.')

var lagi = true;
while(lagi === true) {
    var nama = prompt('Masukkan nama: ')
    alert('Halo ' + nama)

    lagi = confirm('Coba lagi? ')
}

alert('Terima kasih')