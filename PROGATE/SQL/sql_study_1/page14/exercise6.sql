/*
dibawah "FROM purchases" tambahkan code untuk mengambil maksimum 5 baris
dengan urutan terbesar dari kolom "price"
*/

SELECT *
FROM purchases
WHERE category = "makanan"
AND character_name = "Guru Domba"
ORDER BY price DESC
LIMIT 5;