// PERCABANGAN IF THEN ELSE
#include <stdio.h>
/*
mau ngitung banyak digit dari angka inputan
misal 1 punya satu digit, maka disebut satuan
22 punya dua digit, disebut puluhan
234 punya tiga digit, disebut ratusan
3456 punya empat digit, disebut ribuan
45678 punya lima digit, disebut puluhribuan

misal angka = 3456 
iterasi 1
    3456-6 = 3450
    3450/10 = 345
iterasi 2
    345-5 = 340
    340/10 = 34
iterasi 3
    34-4 = 30
    30/10 = 3
iterasi 4
    3-3=0
    0/10 = 0
selesai, cetak iterasi
*/

int main()
{
    int angka, digit=0;
    scanf("%d", &angka);
    
    int i = angka;
    
    if(angka>=0 && angka<=9) {
        printf("satuan");
    } else if(angka>=10 && angka<=99) {
        printf("puluhan");
    } else if(angka>=100 && angka<=999) {
        printf("ratusan");
    } else if(angka>=1000 && angka<=9999) {
        printf("ribuan");
    } else if(angka>=10000 && angka<=99999) {
        printf("puluhribuan");
    }
    
   
    return 0;
}
