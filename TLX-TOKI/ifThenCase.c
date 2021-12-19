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
    while(i > 0){
        i=(i-(i/10))/10;
        digit++;
    }
    // printf("banyak digit = %d", digit);
    
    if(digit==1) {
        printf("satuan");
    } else if(digit==2) {
        printf("puluhan");
    } else if(digit==3) {
        printf("ratusan");
    } else if(digit==4) {
        printf("puluhribuan");
    }
    
    return 0;
}
