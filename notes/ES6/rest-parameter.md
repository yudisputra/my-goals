# Rest Parameter

`Merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array.` by Mozilla

Penggunaan Rest Parameter ini sesuai deskripsinya yaitu menangkap paramter sebuah function yang jumlahnya tidak terbatas. Sama seperti spread operators Rest Parameter dilambangkan dengan `...(titik tiga)`.

Contoh:
```js
function myFunc(a, b){
    return b;
}

function myFuncRest(a, b, ...myArgs){
    return myArgs;
}

console.log(myFunc(1, 2, 3, 4, 5));
// Hasil: 2

console.log(myFuncRest(1, 2, 3, 4, 5));
// Hasil: [3, 4, 5]
```

