// TRANSPOSE MATRIX
#include <stdio.h>

int main()
{
    int i, j, n=3, matr[n][n], trans;
    
    for(i=0; i<n; i++) {
        for(j=0; j<n; j++) {
            scanf("%d", &matr[i][j]);
        }
    }
    
    for(i=0; i<n; i++) {
        for(j=0; j<n; j++) {
            printf("%d ", matr[j][i]);
        }
        printf("\n");
    }
    return 0;
}
