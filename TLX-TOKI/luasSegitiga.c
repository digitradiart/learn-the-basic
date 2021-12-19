// LUAS SEGITIGA 
#include <stdio.h>

int main()
{
    int alas, tinggi;
    float luasSegitiga;
    
    scanf("%d %d", &alas, &tinggi);
    luasSegitiga = (alas * tinggi)/2.00;
    printf("%.2f", luasSegitiga);
    return 0;
}
