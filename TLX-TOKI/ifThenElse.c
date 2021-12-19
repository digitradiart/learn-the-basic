// PERCABANGAN IF THEN ELSE
#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n);
    
    if(n==0) {
        printf("nol");
    } else if (n > 0) {
        printf("positif");
    } else {
        printf("negatif");
    }
    return 0;
}
