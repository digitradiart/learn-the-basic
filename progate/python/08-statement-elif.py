money = 2
apple_price = 2

if money > apple_price:
    print('Anda dapat membeli apel')
# Ketika kedua variable memiliki nilai yang sama, cetak 'Anda dapat membeli apel tetapi dompet Anda akan menjadi kosong'
elif money == apple_price:
    print('Anda dapat membeli apel tetapi dompet Anda akan menjadi kosong')
else:
    print('Uang Anda tidak mencukupi')


####################################
x = 20
# Jika x berkisar antara 10 dan 30 (inklusif), cetak 'x berkisar antara 10 dan 30'
if x >= 10 and x <= 30 :
    print('x berkisar antara 10 dan 30')

y = 60
# Jika y lebih kecil dari 10 atau lebih besar dari 30, cetak 'y lebih kecil dari 10 atau lebih besar dari 30'
if y < 10 or y  > 30 :
    print('y lebih kecil dari 10 atau lebih besar dari 30')

z = 55
# Jika z tidak sama dengan 77, print 'z bukan 77'
if not z == 77:
    print('z bukan 77')