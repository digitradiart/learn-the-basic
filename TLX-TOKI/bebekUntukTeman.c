#include <stdio.h>

int main()
{
    int bebek, teman, hasil, sisa;
    
    scanf("%d %d", &bebek, &teman);
    
    sisa = bebek % teman;
    hasil = (bebek - sisa)/teman;
    printf("masing-masing %d", hasil);
    printf("\nbersisa %d", sisa);
    return 0;
}
