#include <stdio.h>

int main() {
    int N, i, max = 0, banyak, angka;
    scanf("%d", &N);

    for(i=0; i < N; i++) {
        scanf("%d", &angka);
        printf("%ld", angka);
    }

    return 0;
}