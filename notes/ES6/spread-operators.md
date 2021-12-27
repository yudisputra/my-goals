# Spread Operators

`Memecah (expand/unpack) iterables menjadi single element` by Mozilla

Spread Operators berfungsi memecah iterables menjadi single element. Syntax dari Spread Operators sendiri adalah `... (titik tiga)`

Contoh :
```js
const mhs = ['Sandhika', 'Doddy', 'Erik'];
console.log(...mhs);

// Karena string juga merupakan iterable maka hasil spread operator akan menghasilkan
// Sandhika Doddy Erik
```

Beberapa kasus penggunaan Spread Operators:

## 1. Menggabungkan Dua Array

```js
const mhs = ['Sandhika', 'Doddy', 'Erik'];
const dosen = ['Ade', 'Hendra', 'Wanda'];

const orang = [...mhs, ...dosen];
// Hasilnya adalah dua array tersebut akan tergabung

const usingConcat = mhs.concat(dosen);
// Cara ini juga dapat dilakukan dengan menggunakan fungsi array concat

// Kelebihan dari penggunaan spread operators adalah kita bisa menyisipkan nilai lain ditengah-tengah array yang dibuat.
const fullDataorang = [...mhs, 'Anji', ...dosen];
//Hasilnya Anji akan tertambah ditengah-tengah penggabungan dua nilai tersebut.
```

## 2. Meng-Copy Array

```js
const mhs = ['Sandhika', 'Doddy', 'Erik'];
const mhs1 = mhs;
// Melakukan copy dengan cara diatas sebenarnya tidak benar-benar melakukan copy isinya tetapi hanya melakukan reference. Hal ini membuat jika mhs1 nilainya berubah maka nilai mhs juga akan berubah. Hal ini berhubungan dengan konsep immutable.
//Reference: https://medium.com/coderupa/immutable-data-dalam-javascript-db6c70b7daa0

// Melakukan copy yang benar adalah seperti dibawah ini.
const mhs1 = [...mhs];
```

### [Back To ES6 Index](./README.md)